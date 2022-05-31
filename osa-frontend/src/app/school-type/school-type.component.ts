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
      high_school_gymnasium: [false],
      vocational_school_bms: [false],
      technical_school_fms: [false],
      other: [false],
      none: [false],
    });
  }

  updateModel() {
    const id = this.userService.getUserIdFromURL();
    if (id == '') {
      this.router.navigateByUrl('/personality-trait-scales');
    } else {
      this.userService.addDataToUser(id, this.form.value).subscribe((res) => {
        // console.log(res);
      });
      this.router.navigateByUrl(`/personality-trait-scales?id=${id}`);
    }
  }
}
