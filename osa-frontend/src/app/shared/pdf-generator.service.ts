import {Injectable} from '@angular/core';
import {jsPDF, jsPDFOptions} from "jspdf";

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  options: jsPDFOptions = {
    unit: 'mm',
    orientation:'p',
    format: 'a4'
  }

  user: any = {
    vorname: undefined,
    name: undefined,
    age: 22,
    gender: 'm',
    canton: 'Bern',
    city: 'Bern',
    schoolDegrees: [
      'gymnasium'
    ],
    interests: [
      'general',
      'other_school'
    ],
    currentOccupation: [
      'berufstaetig'
    ],
    selfEfficacyValue: 84,
    empathyValue: 55,
    stereotypeAnswers: [1, 2, 1, 2, 3, 1, 2, 3, 1, 3, 2, 2],
    pensum: 'vollzeit',
    timeManagement: {
      studies: 7,
      work: 6,
      leisure: 2,
      necessities: 9,
      commute: 0
    },


  }


  constructor() {
  }

  generateConfirmation(vorname: string, name: string) {
    this.user.vorname = vorname
    this.user.name = name
    const lineLength = 170
    const xIndent = 20
    const fontSize = 11;
    const confirmation = new jsPDF('p', 'mm', 'a4')
    confirmation.setFont('Helvetica', 'bold')
    const confirmationText = `Bestätigung Absolvierung Self-Assessment für die Anmeldung zum Bachelor-Studium in Sozialer Arbeit an der Berner Fachhochschule`
    const confirmationTextLines = confirmation.setFontSize(fontSize).splitTextToSize(confirmationText, lineLength);
    this.addLogo(confirmation)
    confirmation.text(confirmationTextLines, 20, 50 + fontSize / lineLength)
    confirmation.line(xIndent, 58, 190, 58)
    const today = new Date()
    confirmation.setFont('Helvetica', 'normal')
    const nameAndDateText = `${vorname} ${name} hat das Self-Assessment als Element der Zulassung zum Bachelor-Studium in Sozialer Arbeit an der Berner Fachhochschule am ${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()} vollständig durchlaufen.`
    const nameAndDateTextLines = confirmation.setFontSize(fontSize).splitTextToSize(nameAndDateText, lineLength);
    confirmation.text(nameAndDateTextLines, xIndent, 70 + fontSize / lineLength)
    const uploadRequestText = `Bitte laden Sie diese Bestätigung zusammen mit den anderen Dokumenten bei Ihrer Anmeldung zum Studium hoch. Vielen Dank.`
    const uploadRequestTextLines = confirmation.setFontSize(fontSize).splitTextToSize(uploadRequestText, lineLength);
    confirmation.text(uploadRequestTextLines, xIndent, 85 + fontSize / lineLength)
    confirmation.save(`bestaetigung_${vorname}_${name}.pdf`)
    confirmation.output('dataurlnewwindow');
  }

  generateSummary(vorname: string, name: string) {
    this.user.vorname = vorname
    this.user.name = name
    let summary = new jsPDF(this.options)
    summary.setFont('Helvetica')
    this.addLogo(summary)
    this.addSummaryHeading(summary)
    this.addSummaryContent(summary)
    summary.save(`zusammenfassung_${this.user.vorname}_${this.user.name}.pdf`)
    summary.output('dataurlnewwindow');
  }

  private addLogo(ref: jsPDF) {
    const logo = new Image()
    logo.src = 'assets/logo.png'
    ref.addImage(logo, 20, 15, 32, 20)
  }

  private addSummaryHeading(summary: jsPDF) {
    const headingFontSize = 18
    const lineWidth = 170
    const xindent = 20
    summary.setFontSize(headingFontSize)
    const headingtext = 'Zusammenfassung Eignungstest für den Studiengang Soziale Arbeit'
    const headingLines = summary.setFontSize(headingFontSize).splitTextToSize(headingtext, lineWidth);
    summary.text(headingLines, xindent, 45)
    summary.line(xindent, 55, lineWidth, 55)
  }

  private addSummaryContent(summary: jsPDF) {
    this.addPersonalDetails(summary)
  }

  private addPersonalDetails(summary: jsPDF) {
    summary.setFontSize(11)
    summary.text(`Name: ${this.user.vorname} ${this.user.name}`, 20, 60)
    summary.text(`Alter: ${this.user.age}`, 100, 60)
  }
}
