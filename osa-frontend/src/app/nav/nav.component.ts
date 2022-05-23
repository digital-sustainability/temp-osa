import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  clicked = false

  constructor() { }

  ngOnInit(): void {
  }

  assignClass(){
    this.clicked = !this.clicked
    console.log(this.clicked, "clicked");
  }

}
