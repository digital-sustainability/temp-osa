import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-self-efficacy-scale',
  templateUrl: './self-efficacy-scale.component.html',
  styleUrls: ['./self-efficacy-scale.component.scss']
})
export class SelfEfficacyScaleComponent implements OnInit {
  form: any;
  score = 0
  showResult = false;
  @ViewChild('info') info: any;
  @ViewChild('scoreInfo') scoreInfo: any;

  questionnaire: {[key:string]:string} = {
    q1:  'Wenn sich Widerstände auftun, finde ich Mittel und Wege, mich durchzusetzen.',
    q2:  'Die lösung schwieriger Probleme gelingt mir immer, wenn ich mich darum bemühe.',
    q3:  'Es bereitet mir keine Schwierigkeiten, meine Absichten und Ziele zu verwirklichen.',
    q4:  'In unerwarteten Situationen weiss ich immer, wie ich mich verhalten soll.',
    q5:  'Auch bei überraschenden Ereignissen glaube ich, dass ich gut mit ihnen zurechtkommen kann.',
    q6:  'Schwierigkeiten sehe ich gelassen entgegen, weil ich meinen Fähigkeiten immer vertrauen kann.',
    q7:  'Was auch immer passiert, ich werde schon klarkommen.',
    q8:  'Für jedes Problem kann ich eine Lösung finden.',
    q9:  'Wenn eine neue Sache auf mich zukommt, weiss ich, wie ich damit umgehen kann.',
    q10: 'Wenn ein Problem auftaucht kann ich es aus eigener Kraft meistern.',
  }

  keys = Object.keys(this.questionnaire);

  headers = ['stimmt\n nicht', 'stimmt\n kaum', 'stimmt\n eher', 'stimmt\n genau']

  naming = {highest: 'stimmt\ngenau', lowest: 'stimmt\nnicht'}



  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    const controls: {[key: string]: any} = { }
    this.keys.forEach((key: string) => {
      controls[key] = [null, Validators.required]
    })
    this.form = this.formBuilder.group(controls)
  }


  assignValues(event: any)
{
  this.form = event.form
  this.score = event.score
  this.showResult = true
}
  toggleCollapsible() {
    this.info.nativeElement.classList.toggle("active");
    if (this.info.nativeElement.style.maxHeight){
     this.info.nativeElement.style.maxHeight = null;
    } else {
     this.info.nativeElement.style.maxHeight = this.info.nativeElement.scrollHeight + "px";
    }
  }

  toggleScoreInfo(){
    this.scoreInfo.nativeElement.classList.toggle("active");
    if (this.scoreInfo.nativeElement.style.maxHeight){
     this.scoreInfo.nativeElement.style.maxHeight = null;
    } else {
     this.scoreInfo.nativeElement.style.maxHeight = this.scoreInfo.nativeElement.scrollHeight + "px";
    }
  }
}
