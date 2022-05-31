import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-expectations',
  templateUrl: './expectations.component.html',
  styleUrls: ['./expectations.component.scss'],
})
export class ExpectationsComponent implements OnInit {
  constructor(private userService: UserDataService) {}

  ngOnInit(): void {
    const id = this.userService.getUserIdFromURL();
    console.log(id);
    this.userService.getUserById(id).subscribe((user) => {
      console.log(user);
    });
  }
}
