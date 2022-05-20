import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-time-management-feedback',
  templateUrl: './time-management-feedback.component.html',
  styleUrls: ['./time-management-feedback.component.css'],
})
export class TimeManagementFeedbackComponent implements OnInit {
  constructor(private router: Router, private userService: UserDataService) {}

  ngOnInit(): void {}

  advanceSite() {
    const id = this.userService.getUserIdFromURL();
    if (id == -1) {
      this.router.navigateByUrl('/insights');
    } else {
      this.router.navigateByUrl(`/insights?id=${id}`);
    }
  }
}
