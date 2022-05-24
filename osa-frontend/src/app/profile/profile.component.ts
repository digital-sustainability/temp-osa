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
    });
  }

  updateModel() {
    //todo
    const id = this.userService.getUserIdFromURL();
    if (id == -1) {
      this.router.navigateByUrl('/interest');
    } else {
      // save user data
      this.router.navigateByUrl(`/interest?id=${id}`);
    }
  }
}
