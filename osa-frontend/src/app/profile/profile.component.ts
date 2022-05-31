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
        age: [],
        gender: [],
        canton: [],
        city: [],
        gymnasium: [false],
        bms: [false],
        fms: [false],
        sonstiger_abschluss: [false],
        kein_abschluss: [false],
      },
      { validators: requireCheckboxesToBeCheckedValidator() }
    );
    this.userService.getUserById(this.id).subscribe((user) => {
      if (this.userService.hasProfileData(user)) {
        this.form.patchValue({
          age: user.age,
          gender: user.gender,
          canton: user.canton,
          city: user.city,
          gymnasium: user.gymnasium,
          bms: user.bms,
          fms: user.fms,
          sonstiger_abschluss: user.sonstiger_abschluss,
          kein_abschluss: user.kein_abschluss,
        });
      }
    });
  }

  updateModel() {
    if (this.form.valid) {
      this.isValid = true;
      if (this.id == '') {
        this.router.navigateByUrl('/interest');
      } else {
        console.log(this.form.value);
        this.userService
          .addDataToUser(this.id, this.form.value)
          .subscribe((res) => {});
        this.router.navigateByUrl(`/interest?id=${this.id}`);
      }
    } else {
      this.isValid = false;
    }
  }
}
