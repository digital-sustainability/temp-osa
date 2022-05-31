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
      gymnasium: [false],
      bms: [false],
      fms: [false],
      sonstiger_abschluss: [false],
      kein_abschluss: [false],
    }, { validators: requireCheckboxesToBeCheckedValidator() });
  }

  updateModel() {
    if (this.form.valid) {
      this.isValid = true
      const id = this.userService.getUserIdFromURL();
      if (id == '') {
        this.router.navigateByUrl('/interest');
      } else {
        this.userService.addDataToUser(id, this.form.value).subscribe((res) => {
        });
        this.router.navigateByUrl(`/interest?id=${id}`);
      }
    } else {
      this.isValid = false
    }
  }
}
