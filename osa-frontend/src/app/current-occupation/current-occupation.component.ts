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
        occupation_school: [false],
        occupation_university: [false],
        occupation_apprenticeship: [false],
        occupation_working: [false],
        occupation_other: [false],
      },
      { validators: requireCheckboxesToBeCheckedValidator() }
    );
    this.userService.getUserById(this.id).subscribe((user) => {
      if (this.userService.hasCurrOppData(user)) {
        this.form.patchValue({
          occupation_school: user.occupation_school,
          occupation_university: user.occupation_university,
          occupation_apprenticeship: user.occupation_apprenticeship,
          occupation_working: user.occupation_working,
          occupation_other: user.occupation_other,
        });
      }
    });
  }

  updateModel() {
    if (this.form.valid) {
      this.isValid = true;
      if (this.id == '-1') {
        this.router.navigateByUrl('/personality-trait-scales');
      } else {
        // save user data
        this.router.navigateByUrl(`/personality-trait-scales?id=${this.id}`);
      }
    } else {
      this.isValid = false;
    }
  }
}
