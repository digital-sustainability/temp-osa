import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  @Input() questions!: {[key: string]: string};

  @Input() values!: {[key: string]: string};

  @Input() naming!: {highest: string, lowest: string};

  @Input() numberOfOptions!: number

  sevenOptions = false

  numbers:any

  constructor(private formBuilder: FormBuilder) {
   }

  keys:any

  form: any;

  optionSeven = true
  optionFive = false
  optionFour = false

  ngOnInit(): void {
    this.assignOption(this.numberOfOptions)
    console.log(this.optionFive, "optionfive");
    this.numbers = Array(this.numberOfOptions).fill(0).map((x,i)=>i);
    this.keys = Object.keys(this.questions);
    const controls: {[key: string]: any} = { }
    this.keys.forEach((key: string) => {
      controls[key] = [null, Validators.required]
    })
    this.form = this.formBuilder.group(controls)
  }

  checked(index: any, number: number){
    number += 1
    if(number.toString() == this.values[`q${index+1}`]){
      return true
    }
    return false
  }

  assignOption(num: number){
    if(num == 7) this.optionSeven = true
    if(num == 4) this.optionFour = true
    if(num == 5) this.optionFive = true
  }

}
