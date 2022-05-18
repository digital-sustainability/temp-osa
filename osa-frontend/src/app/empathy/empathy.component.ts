import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-empathy',
  templateUrl: './empathy.component.html',
  styleUrls: ['./empathy.component.scss']
})
export class EmpathyComponent implements OnInit {
  form: any;
  score = 0
  showResult = false;
  @ViewChild('info') info: any;
  @ViewChild('scoreInfo') scoreInfo: any;



  questionnaire: {[key:string]:string} = {
    q1:  'Ich kann die Gefühle anderer leich nachempfinden.',
    q2:  'Bevor ich andere kritisiere, bemühe ich mich um Verständnis für ihre Sicht der Dinge.',
    q3:  'Wenn Leute ausgenutzt werden, habe ich das Bedürfnis, sie zu schützen.',
    q4:  'Bei Meinungsverschiedenheiten versetzte ich mich in die Lage des Gegenübers.',
    q5:  'Ich bin einfühlsam.',
    q6:  'Ich versuche, meine Mitmenschen besser zu verstehen, indem ich die Dinge aus ihrem Blickwinkel betrachte.',
    q7:  'Es geht mir nahe, wenn andere ein Missgeschick erleiden.',
    q8: 'Auch wenn ich mir meiner Sache sicher bin, bedenke ich die Argumente der anderen.',
    q9:  'Ich bin mitfühlend gegenüber Menschen, die Probleme haben.',
    q10: 'Bei Auseinandersetzungen bemühe ich mich, die Ansichten aller Beteiligten zu verstehen.',
    q11: 'Die Sorgen und Nöte anderer machen mir zu schaffen.',
    q12: 'Bevor ich mich über jemanden aufrege, versuche ich, das Problem mit seinen Augen zu sehen.',
    q13: 'Ich erlebe mich als weichherzigen Menschen.',
    q14: 'Ich finde es leicht, Dinge vom Standpunkt anderer aus zu sehen.',
    q15: 'Es tut mir weh, wenn andere ungerecht behandelt werden.',
    q16: 'Ich kann die Überlegungen andere gut nachvollziehen.',
    q17: 'Ich denke mich in andere hinein.',
    q18: 'Ich mache mir Sorgen um Menschen, denen es schlechter geht als mir.'
  }
  keys = Object.keys(this.questionnaire);

  headers = ['nie', 'neutral', 'immer']

  naming = {highest: 'immer', lowest: 'nie'}

  assignValues(event: any)
{
  this.form = event.form
  this.score = event.score
  this.showResult = true
}

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    const controls: {[key: string]: any} = { }
    this.keys.forEach((key: string) => {
      controls[key] = [null, Validators.required]
    })
    this.form = this.formBuilder.group(controls)
  }

  updateModel() {
    let total = 0
    Object.keys(this.form.value).forEach(key => {
      total += +this.form.value[key]
    })
    this.score = total
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
