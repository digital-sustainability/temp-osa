import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      interested_in_studies: [false],
      interested_in_test: [false],
      interested_in_studies_at_bfh: [false],
      interested_in_studies_elsewhere: [false],
    });
  }

  updateModel() {
    const id = this.userService.getUserIdFromURL();
    if (id == '') {
      this.router.navigateByUrl('/current-occupation');
    } else {
      this.userService.addDataToUser(id, this.form.value).subscribe((res) => {
        // console.log(res);
      });
      this.router.navigateByUrl(`/current-occupation?id=${id}`);
    }
  }
}
