import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  active = false

  ngOnInit(): void {
  }

  opened = false;

  toggleSideBar() {

    this.opened = !this.opened;
    console.log(this.opened);
  }

}
