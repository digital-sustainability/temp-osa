import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-self-efficacy-scale',
  templateUrl: './self-efficacy-scale.component.html',
  styleUrls: ['./self-efficacy-scale.component.css']
})
export class SelfEfficacyScaleComponent implements OnInit {
  form: any;
  score = 0
  showResult = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      group1: [null, Validators.required],
      group2: [null, Validators.required],
      group3: [null, Validators.required],
      group4: [null, Validators.required],
      group5: [null, Validators.required],
      group6: [null, Validators.required],
      group7: [null, Validators.required],
      group8: [null, Validators.required],
      group9: [null, Validators.required],
      group10: [null, Validators.required],
      group11: [null, Validators.required],
      group12: [null, Validators.required],
      group13: [null, Validators.required]
    })
  }

  updateModel() {
    console.log(this.form.value)
    let total = 0
    Object.keys(this.form.value).forEach(key => {
      total += +this.form.value[key]
    })
    this.score = total
    this.showResult = true
  }

}
