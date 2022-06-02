import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrls: ['./time-management.component.scss'],
})
export class TimeManagementComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pensum: [null, Validators.required],
    });
  }

  updateModel() {
    this.userService.setVollzeit(this.form.value == 'vollzeit' ? true : false);
    const id = this.userService.getUserIdFromURL(); 
    if (id == '') {
      this.router.navigateByUrl('/time-management-planner');
    } else {
      this.userService.addDataToUser(id, this.form.value).subscribe((res) => {
      });
      this.router.navigateByUrl(`/time-management-planner?id=${id}`);
    }
  }
}
