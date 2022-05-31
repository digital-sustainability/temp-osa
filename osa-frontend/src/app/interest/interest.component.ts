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

  isValid = true;

  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {
    this.id = this.userService.getUserIdFromURL();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        interest_general: [false],
        interest_bfh: [false],
        interest_other_schoool: [false],
        interest_curiosity: [false],
      },
      { validators: requireCheckboxesToBeCheckedValidator() }
    );
    this.userService.getUserById(this.id).subscribe((user) => {
      if (this.userService.hasInterestData(user)) {
        this.form.patchValue({
          interest_general: user.interest_general,
          interest_bfh: user.interest_bfh,
          interest_other_schoool: user.interest_other_schoool,
          interest_curiosity: user.interest_curiosity,
        });
      }
    });
  }

  updateModel() {
    if (this.form.valid) {
      this.isValid = true;
      if (this.id == '-1') {
        this.router.navigateByUrl('/current-occupation');
      } else {
        // save user data
        this.router.navigateByUrl(`/current-occupation?id=${this.id}`);
      }
    } else {
      this.isValid = false;
    }
  }
}
