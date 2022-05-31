import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { requireCheckboxesToBeCheckedValidator } from '../shared/requireCheckboxesToBeChecked';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-current-occupation',
  templateUrl: './current-occupation.component.html',
  styleUrls: ['./current-occupation.component.scss'],
})
export class CurrentOccupationComponent implements OnInit {
  form: any;

  isValid = true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
      checkbox4: [false],
      checkbox5: [false],
    }, { validators: requireCheckboxesToBeCheckedValidator() }
    );
  }

  updateModel() {
    if (this.form.valid) {
      this.isValid = true
      const id = this.userService.getUserIdFromURL();
      if (id == '') {
        this.router.navigateByUrl('/personality-trait-scales');
      } else {
        // save user data
        this.router.navigateByUrl(`/personality-trait-scales?id=${id}`);
      }
    }
    else {
      this.isValid = false
    }
    //todo
  }
}
