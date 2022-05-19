import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-self-efficacy-scale',
  templateUrl: './self-efficacy-scale.component.html',
  styleUrls: ['./self-efficacy-scale.component.css'],
})
export class SelfEfficacyScaleComponent implements OnInit {
  form: any;
  score = 0;
  showResult = false;
  @ViewChild('info') info: any;

  questionnaire: { [key: string]: string } = {
    q1: 'Wenn sich Widerstände auftun, finde ich Mittel und Wege, mich durchzusetzen.',
    q2: 'Die lösung schwieriger Probleme gelingt mir immer, wenn ich mich darum bemühe.',
    q3: 'Es bereitet mir keine Schwierigkeiten, meine Absichten und Ziele zu verwirklichen.',
    q4: 'In unerwarteten Situationen weiss ich immer, wie ich mich verhalten soll.',
    q5: 'Auch bei überraschenden Ereignissen glaube ich, dass ich gut mit ihnen zurechtkommen kann.',
    q6: 'Schwierigkeiten sehe ich gelassen entgegen, weil ich meinen Fähigkeiten immer vertrauen kann.',
    q7: 'Was auch immer passiert, ich werde schon klarkommen.',
    q8: 'Für jedes Problem kann ich eine Lösung finden.',
    q9: 'Wenn eine neue Sache auf mich zukommt, weiss ich, wie ich damit umgehen kann.',
    q10: 'Wenn ein Problem auftaucht kann ich es aus eigener Kraft meistern.',
  };
  keys = Object.keys(this.questionnaire);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

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
      this.router.navigateByUrl('/resilience');
    } else {
      this.router.navigateByUrl(`/resilience?id=${id}`);
    }
  }
}
