import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-resilience',
  templateUrl: './resilience.component.html',
  styleUrls: ['./resilience.component.scss']
})
export class ResilienceComponent implements OnInit {
  form: any;
  score = 0;
  showResult = false;
  @ViewChild('info') info: any;
  @ViewChild('scoreInfo') scoreInfo: any;

  naming = {highest: 'ich stimme\nvöllig zu', lowest: 'ich stimme\nnicht zu'}

  questionnaire: { [key: string]: string } = {
    q1: 'Wenn ich Pläne habe, verfolge ich sie auch.',
    q2: 'Normalerweise schaffe ich alles irgendwie.',
    q3: 'Ich lasse mich nicht so schnell aus der Bahn werfen.',
    q4: 'Ich mag mich.',
    q5: 'Ich kann mehrere Dinge gleichzeitig bewältigen.',
    q6: 'Ich bin entschlossen.',
    q7: 'Ich nehme Dinge wie sie kommen.',
    q8: 'Ich behalte an vielen Dingen Interesse.',
    q9: 'Normalerweise kann ich die Situation aus mehreren Perspektiven betrachten.',
    q10: 'Ich kann mich auch überwinden, Dinge zu tun die ich eigentlich nicht machen will.',
    q11: 'Wenn ich in einer schwierigen Situation bin finde ich gewöhnlich einen Weg heraus.',
    q12: 'In mir steckt genügend Energie, um alles zu machen was ich machen muss.',
    q13: 'Ich kann es akzeptieren, wenn mich nicht alle Leute mögen.',
  };
  keys = Object.keys(this.questionnaire);

  headers = ['Ich stimme\n nicht zu', 'neutral', 'Ich stimme\n völlig zu']

  constructor(private userService: UserDataService, private formBuilder: FormBuilder, private router: Router) { }



  ngOnInit(): void {
    const controls: { [key: string]: any } = {};
    this.keys.forEach((key: string) => {
      controls[key] = [null, Validators.required];
    });
    this.form = this.formBuilder.group(controls);
  }

  updateModel() {
    let total = 0;
    Object.keys(this.form.value).forEach((key) => {
      total += +this.form.value[key];
    });
    this.score = total;
    this.showResult = true;
  }

  assignValues(event: any)
  {
    this.form = event.form
    this.score = event.score
    this.showResult = true
  }

  toggleCollapsible() {
    this.info.nativeElement.classList.toggle('active');
    if (this.info.nativeElement.style.maxHeight) {
      this.info.nativeElement.style.maxHeight = null;
    } else {
      this.info.nativeElement.style.maxHeight =
        this.info.nativeElement.scrollHeight + 'px';
    }
  }

  advanceSite() {
    const id = this.userService.getUserIdFromURL();
    if (id == -1) {
      this.router.navigateByUrl('/empathy');
    } else {
      this.router.navigateByUrl(`/empathy?id=${id}`);
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
