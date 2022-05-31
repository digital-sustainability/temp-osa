import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent implements OnInit {
  continue_form: FormGroup;
  save_data_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {
    this.continue_form = this.formBuilder.group({
      id: [''],
    });
    this.save_data_form = this.formBuilder.group({
      save_data: ['no'],
    });
  }

  ngOnInit(): void {}

  updateModel() {
    // console.log(this.form.value.save_data);
    if (this.save_data_form.value.save_data == 'yes') {
      console.log('saving user data');

      // create new (empty) user object in backend
      this.userService.postEmptyUser().subscribe((res) => {
        let id = res.userId;
        this.router.navigateByUrl(`/information?id=${id}`);
      });
    } else {
      this.router.navigateByUrl('/information');
    }
  }

  getUserData(): void {
    // try getting user from id
    const id = this.continue_form.value.id;
    let user_local: any;
    // console.log(id);
    this.userService.getUserById(id).subscribe((user) => {
      console.log(user);
      user_local = user;
    });

    setTimeout(() => {
      if (user_local) {
        //console.log(user_local);
        const link = this.userService.getNextPage(id);
        console.log(link);
        // this.router.navigateByUrl(link);
      }
    }, 250);

    // if user could not be identified show error message
  }
}
