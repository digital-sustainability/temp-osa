import { Component, OnInit } from '@angular/core';
import {PdfGeneratorService} from "../shared/pdf-generator.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private pdfGeneratorService: PdfGeneratorService) { }

  ngOnInit(): void {
  }

  generatePDF() {
    this.pdfGeneratorService.generateConfirmation()
  }
}
