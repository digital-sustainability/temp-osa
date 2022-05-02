import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stereotypes',
  templateUrl: './stereotypes.component.html',
  styleUrls: ['./stereotypes.component.css']
})
export class StereotypesComponent implements OnInit {

  form: any

  @ViewChild('grp') grp: any

  claims: any[] = [
    {
      claim: 'Als Sozialarbeiter*in werde ich hauptsächlich mit Menschen, welche von Armut betroffen sind, arbeiten können. ',
      correctAnswer: 1,
      correctAnswerChecked: false
    },
    {
      claim: 'Claim 2',
      correctAnswer: 2,
      correctAnswerChecked: false
    },
    {
      claim: 'Claim 3',
      correctAnswer: 2,
      correctAnswerChecked: false
    },
  ];
  selectionCorrect?: boolean;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    const controls: {[key:string]: any} = {}
    this.claims.forEach((claim, index) => {
      controls['claim' + index] = [null, Validators.required]
    })
    console.log(controls)
    this.form = this.formBuilder.group(controls)
  }

  next(element: any) {
    this.selectionCorrect = undefined
    element.selectedIndex += 1;
  }

  prev(element: any) {
    this.selectionCorrect = undefined
    element.selectedIndex -= 1;
  }

  check(claim: any, index: number) {
    this.selectionCorrect = +this.form.value['claim'+index] === claim.correctAnswer
  }
}
