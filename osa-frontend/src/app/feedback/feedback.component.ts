import { Component, OnInit } from '@angular/core';
import {PdfGeneratorService} from "../shared/pdf-generator.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  confirmation: any = null
  form: any;

  constructor(
    private pdfGeneratorService: PdfGeneratorService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      vorname: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  generateConfirmationPDF() {
    if (this.form.value.name !== '' && this.form.value.vorname !== '') {
      this.pdfGeneratorService.generateConfirmation(this.form.value.vorname, this.form.value.name)
    } else {
      this.snackbar.open('Bitte geben Sie Namen und Vornamen an', undefined, { duration: 2500})
    }
  }

  generateSummaryPDF() {
    this.pdfGeneratorService.generateSummary(this.form.value.vorname, this.form.value.name)
  }
}
