import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { requireCheckboxesToBeCheckedValidator } from '../shared/requireCheckboxesToBeChecked';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
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
    }, { validators: requireCheckboxesToBeCheckedValidator() });
  }

  updateModel() {
    if (this.form.valid) {

      this.isValid = true
      //todo
      const id = this.userService.getUserIdFromURL();
      if (id == '') {
        this.router.navigateByUrl('/current-occupation');
      } else {
        // save user data
        this.router.navigateByUrl(`/current-occupation?id=${id}`);
      }
      switch (id) {
        case "1": let test = 2
      }
    } else {
      this.isValid = false
    }
  }
}
