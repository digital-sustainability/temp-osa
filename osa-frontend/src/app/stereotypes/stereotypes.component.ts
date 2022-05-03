import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    const controls: {[key:string]: any} = {}
    this.claims.forEach((claim, index) => {
      controls['claim' + index] = [null, Validators.required]
    })
    this.form = this.formBuilder.group(controls)
  }

  isLastTab: boolean = false

  next(element: any) {
    this.selectionCorrect = undefined
    element.selectedIndex += 1;
    if (this.isLastTab) {
      this.router.navigateByUrl('/time-management')
    }
  }

  prev(element: any) {
    this.selectionCorrect = undefined
    element.selectedIndex -= 1;
  }

  check(claim: any, index: number) {
    this.selectionCorrect = +this.form.value['claim'+index] === claim.correctAnswer
  }

  setLastTab(event: any) {
    this.isLastTab = event === this.grp._tabs.length - 1
  }
}
