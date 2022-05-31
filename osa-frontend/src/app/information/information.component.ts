import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  public id = '-1';

  constructor(private router: Router, private userService: UserDataService) {}

  ngOnInit(): void {
    this.id = this.userService.getUserIdFromURL();
  }

  advanceSite() {
    console.log(this.id);
    if (this.id == '-1') {
      this.router.navigateByUrl('/profile');
    } else {
      this.router.navigateByUrl(`/profile?id=${this.id}`);
    }
  }

  isIdAvailable(): boolean {
    if (this.id == '-1' || this.id == '' || this.id.length < 4) {
      return false;
    }
    return true;
  }
}
