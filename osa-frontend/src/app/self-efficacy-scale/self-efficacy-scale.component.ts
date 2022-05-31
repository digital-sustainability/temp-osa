import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-self-efficacy-scale',
  templateUrl: './self-efficacy-scale.component.html',
  styleUrls: ['./self-efficacy-scale.component.scss'],
})
export class SelfEfficacyScaleComponent implements OnInit {
  form: any;
  score = 0;
  showResult = false;
  @ViewChild('info') info: any;
  @ViewChild('scoreInfo') scoreInfo: any;

  questionnaire: { [key: string]: string } = {
    self_eff_scale_1:
      'Wenn sich Widerstände auftun, finde ich Mittel und Wege, mich durchzusetzen.',
    self_eff_scale_2:
      'Die lösung schwieriger Probleme gelingt mir immer, wenn ich mich darum bemühe.',
    self_eff_scale_3:
      'Es bereitet mir keine Schwierigkeiten, meine Absichten und Ziele zu verwirklichen.',
    self_eff_scale_4:
      'In unerwarteten Situationen weiss ich immer, wie ich mich verhalten soll.',
    self_eff_scale_5:
      'Auch bei überraschenden Ereignissen glaube ich, dass ich gut mit ihnen zurechtkommen kann.',
    self_eff_scale_6:
      'Schwierigkeiten sehe ich gelassen entgegen, weil ich meinen Fähigkeiten immer vertrauen kann.',
    self_eff_scale_7: 'Was auch immer passiert, ich werde schon klarkommen.',
    self_eff_scale_8: 'Für jedes Problem kann ich eine Lösung finden.',
    self_eff_scale_9:
      'Wenn eine neue Sache auf mich zukommt, weiss ich, wie ich damit umgehen kann.',
    self_eff_scale_10:
      'Wenn ein Problem auftaucht kann ich es aus eigener Kraft meistern.',
  };

  keys = Object.keys(this.questionnaire);

  headers = [
    'stimmt\n nicht',
    'stimmt\n kaum',
    'stimmt\n eher',
    'stimmt\n genau',
  ];

  naming = { highest: 'stimmt\ngenau', lowest: 'stimmt\nnicht' };

  id: string;

  constructor(
    private userService: UserDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.userService.getUserIdFromURL();
  }

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

  assignValues(event: any) {
    this.form = event.form;
    this.score = event.score;
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
    if (this.id == '-1') {
      this.router.navigateByUrl('/resilience');
    } else {
      console.log(this.form.value);
      this.userService
        .addDataToUser(this.id, this.form.value)
        .subscribe((res) => {
          // console.log(res);
        });
      this.userService
        .addDataToUser(this.id, { self_efficacy_value: this.score })
        .subscribe((res) => {
          // console.log(res);
        });
      this.router.navigateByUrl(`/resilience?id=${this.id}`);
    }
  }

  toggleScoreInfo() {
    this.scoreInfo.nativeElement.classList.toggle('active');
    if (this.scoreInfo.nativeElement.style.maxHeight) {
      this.scoreInfo.nativeElement.style.maxHeight = null;
    } else {
      this.scoreInfo.nativeElement.style.maxHeight =
        this.scoreInfo.nativeElement.scrollHeight + 'px';
    }
  }
}
