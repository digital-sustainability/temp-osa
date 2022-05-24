import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  constructor(private router: Router, private userService: UserDataService) {}

  ngOnInit(): void {}

  advanceSite() {
    const id = this.userService.getUserIdFromURL();
    if (id == -1) {
      this.router.navigateByUrl('/expectations');
    } else {
      this.router.navigateByUrl(`/expectations?id=${id}`);
    }
  }

  scroll(dir: string, amount: number) {
    amount += 2
    let elementToScroll = document.getElementById('videos')
    if (elementToScroll)
    elementToScroll.scrollBy({
      top: 0,
      left: dir === 'left'?-amount:amount,
      behavior: 'smooth'
    });
  }
}
