import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

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
    });
  }

  updateModel() {
    const id = this.userService.getUserIdFromURL();
    if (id == '') {
      this.router.navigateByUrl('/interest');
    } else {
      this.userService.updateProfile(
        this.form.value.age,
        this.form.value.gender,
        this.form.value.canton,
        this.form.value.city,
        this.form.value.gymnasium,
        this.form.value.bms,
        this.form.value.fms,
        this.form.value.kein_abschluss,
        this.form.value.sonstiger_abschluss
      );
      this.router.navigateByUrl(`/interest?id=${id}`);
    }
  }
}
