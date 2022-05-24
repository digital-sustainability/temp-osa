import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      save_data: ['no'],
    });
  }

  updateModel() {
    // console.log(this.form.value.save_data);
    if (this.form.value.save_data == 'yes') {
      console.log('saving user data');

      // create new user object in backend
      this.userService.createUser();

      // display id to user

      // * this.router.navigateByUrl('/information?id=' + id);
    }
    this.router.navigateByUrl('/information');
  }
}
