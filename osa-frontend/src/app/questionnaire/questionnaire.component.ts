import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  @Input() questions!: { [key: string]: string };

  @Input() values!: { [key: string]: string };

  @Input() naming!: { highest: string, lowest: string };

  @Input() numberOfOptions!: number

  @Input() headers!: string[]

  optionSeven = false
  optionFive = false
  optionFour = false

  selectedRadio: any

  form: any

  @Output() outputEvent = new EventEmitter<any>();

  @Output() scoreEvent = new EventEmitter<number>()

  sevenOptions = false

  score = 0

  showResult = false;

  numbers: any

  keys: any


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.assignOption(this.numberOfOptions)
    this.numbers = Array(this.numberOfOptions).fill(0).map((x, i) => i);
    this.keys = Object.keys(this.questions);
    const controls: { [key: string]: any } = {}
    this.keys.forEach((key: string) => {
      controls[key] = [null, Validators.required]
    })
    this.form = this.formBuilder.group(controls)
    let test = this.form.get('q1')
    debugger
  }

  updateModel() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      let total = 0
      Object.keys(this.form.value).forEach(key => {
        total += +this.form.value[key]
      })
      const output = { form: this.form, score: total }
      this.outputEvent.emit(output)
    }

  }

  assignOption(num: number) {
    if (num == 7) this.optionSeven = true
    if (num == 4) this.optionFour = true
    if (num == 5) this.optionFive = true
  }


}
