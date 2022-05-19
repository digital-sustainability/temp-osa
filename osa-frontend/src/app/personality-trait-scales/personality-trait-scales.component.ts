import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-personality-trait-scales',
  templateUrl: './personality-trait-scales.component.html',
  styleUrls: ['./personality-trait-scales.component.css'],
})
export class PersonalityTraitScalesComponent implements OnInit {
  constructor(private router: Router, private userService: UserDataService) {}

  ngOnInit(): void {}

  advanceSite() {
    const id = this.userService.getUserIdFromURL();
    if (id == -1) {
      this.router.navigateByUrl('/self-efficacy-scale');
    } else {
      this.router.navigateByUrl(`/self-efficacy-scale?id=${id}`);
    }
  }
}
