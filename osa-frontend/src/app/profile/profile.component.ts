import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { requireCheckboxesToBeCheckedValidator } from '../shared/requireCheckboxesToBeChecked';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: any;

  isValid = true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      age: [],
      gender: [],
      canton: [],
      city: [],
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
      checkbox4: [false],
      checkbox5: [false],
    }, { validators: requireCheckboxesToBeCheckedValidator(1) }
    );
  }



  updateModel() {
    if (this.form.valid) {
      this.isValid = true
      const id = this.userService.getUserIdFromURL();
      if (id == '') {
        this.router.navigateByUrl('/interest');
      } else {
        this.userService.updateProfile(this.form.value.age, this.form.value.gender, this.form.value.canton, this.form.value.city);
        this.router.navigateByUrl(`/interest?id=${id}`);
      }
    } else {
      this.isValid = false
    }
  }
}
