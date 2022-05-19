import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-empathy',
  templateUrl: './empathy.component.html',
  styleUrls: ['./empathy.component.css'],
})
export class EmpathyComponent implements OnInit {
  form: any;
  score = 0;
  showResult = false;
  @ViewChild('info') info: any;

  questionnaire: { [key: string]: string } = {
    q1: 'Frage N',
    q2: 'Frage N',
    q3: 'Frage N',
    q4: 'Frage N',
    q5: 'Frage N',
    q6: 'Frage N',
    q7: 'Frage N',
    q8: 'Frage N',
    q9: 'Frage N',
    q10: 'Frage N',
    q11: 'Frage N',
    q12: 'Frage N',
    q13: 'Frage N',
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
      this.router.navigateByUrl('/stereotypes');
    } else {
      this.router.navigateByUrl(`/stereotypes?id=${id}`);
    }
  }
}
