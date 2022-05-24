import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-school-type',
  templateUrl: './school-type.component.html',
  styleUrls: ['./school-type.component.scss'],
})
export class SchoolTypeComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
      checkbox4: [false],
      checkbox5: [false],
    });
  }

  updateModel() {
    //todo
    const id = this.userService.getUserIdFromURL();
    if (id == '') {
      this.router.navigateByUrl('/personality-trait-scales');
    } else {
      // save user data
      this.router.navigateByUrl(`/personality-trait-scales?id=${id}`);
    }
  }
}
