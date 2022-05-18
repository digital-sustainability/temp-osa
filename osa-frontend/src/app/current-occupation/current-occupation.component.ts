import { Component, OnInit } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-occupation',
  templateUrl: './current-occupation.component.html',
  styleUrls: ['./current-occupation.component.scss']
})
export class CurrentOccupationComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
      checkbox4: [false],
      checkbox5: [false],
    })
  }

  updateModel() {
    //todo
    this.router.navigateByUrl('/school-type')
  }

}
