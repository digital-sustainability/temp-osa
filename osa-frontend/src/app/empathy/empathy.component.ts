import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-empathy',
  templateUrl: './empathy.component.html',
  styleUrls: ['./empathy.component.scss'],
})
export class EmpathyComponent implements OnInit {
  form: any;
  score = 0;
  showResult = false;
  @ViewChild('info') info: any;
  @ViewChild('scoreInfo') scoreInfo: any;

  id: string;

  questionnaire: { [key: string]: string } = {
    empathy_1: 'Ich kann die Gefühle anderer leicht nachempfinden.',
    empathy_2:
      'Bevor ich andere kritisiere, bemühe ich mich um Verständnis für ihre Sicht der Dinge.',
    empathy_3:
      'Wenn Leute ausgenutzt werden, habe ich das Bedürfnis, sie zu schützen.',
    empathy_4:
      'Bei Meinungsverschiedenheiten versetzte ich mich in die Lage des Gegenübers.',
    empathy_5: 'Ich bin einfühlsam.',
    empathy_6:
      'Ich versuche, meine Mitmenschen besser zu verstehen, indem ich die Dinge aus ihrem Blickwinkel betrachte.',
    empathy_7: 'Es geht mir nahe, wenn andere ein Missgeschick erleiden.',
    empathy_8:
      'Auch wenn ich mir meiner Sache sicher bin, bedenke ich die Argumente der anderen.',
    empathy_9: 'Ich bin mitfühlend gegenüber Menschen, die Probleme haben.',
    empathy_10:
      'Bei Auseinandersetzungen bemühe ich mich, die Ansichten aller Beteiligten zu verstehen.',
    empathy_11: 'Die Sorgen und Nöte anderer machen mir zu schaffen.',
    empathy_12:
      'Bevor ich mich über jemanden aufrege, versuche ich, das Problem mit seinen Augen zu sehen.',
    empathy_13: 'Ich erlebe mich als weichherzigen Menschen.',
    empathy_14:
      'Ich finde es leicht, Dinge vom Standpunkt anderer aus zu sehen.',
    empathy_15: 'Es tut mir weh, wenn andere ungerecht behandelt werden.',
    empathy_16: 'Ich kann die Überlegungen anderer gut nachvollziehen.',
    empathy_17: 'Ich denke mich in andere hinein.',
    empathy_18:
      'Ich mache mir Sorgen um Menschen, denen es schlechter geht als mir.',
  };
  keys = Object.keys(this.questionnaire);

  headers = ['nie', 'neutral', 'immer'];

  naming = { highest: 'immer', lowest: 'nie' };

  firstScore = 0;

  secondScore = 0;

  overallScore = 0;

  firstKeys = [1, 3, 5, 7, 9, 11, 13, 15, 18];

  secondKeys = [2, 4, 6, 8, 10, 12, 14, 16, 17];

  assignValues(event: any) {
    this.form = event.form;
    const firstSet = this.firstKeys.map(index => this.keys[index])
    const secondSet = this.secondKeys.map(index => this.keys[index])
    for (const key in event.form.value) {
      console.log(key, 'key');
      this.overallScore += this.form.value[key];
      if (firstSet.includes(key)) this.firstScore += this.form.value[key];
      if (secondSet.includes(key))
        this.secondScore += this.form.value[key];
    }
    debugger
    this.score = event.score;
    this.showResult = true;
  }

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
    this.userService.getUserById(this.id).subscribe((user) => {
      if (this.userService.hasEmpathyData(user)) {
        this.form.patchValue({
          empathy_1: user.empathy_1,
          empathy_2: user.empathy_2,
          empathy_3: user.empathy_3,
          empathy_4: user.empathy_4,
          empathy_5: user.empathy_5,
          empathy_6: user.empathy_6,
          empathy_7: user.empathy_7,
          empathy_8: user.empathy_8,
          empathy_9: user.empathy_9,
          empathy_10: user.empathy_10,
          empathy_11: user.empathy_11,
          empathy_12: user.empathy_12,
          empathy_13: user.empathy_13,
          empathy_14: user.empathy_14,
          empathy_15: user.empathy_15,
          empathy_16: user.empathy_16,
          empathy_17: user.empathy_17,
          empathy_18: user.empathy_18,
        });
      }
    });
  }

  updateModel() {
    let total = 0;
    console.log(this.form.value['q1'], 'test');
    console.log(this.form.value['q2'], 'test');
    Object.keys(this.form.value).forEach((key) => {
      console.log(this.form[key]);
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
    if (this.id == '-1') {
      this.router.navigateByUrl('/stereotypes');
    } else {
      this.userService
        .addDataToUser(this.id, this.form.value)
        .subscribe((res) => {
          // console.log(res);
        });
      this.userService
        .addDataToUser(this.id, { empathy_value: this.score })
        .subscribe((res) => {
          // console.log(res);
        });
      this.router.navigateByUrl(`/stereotypes?id=${this.id}`);
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
