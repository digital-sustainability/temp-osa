import {Injectable} from '@angular/core';
import {jsPDF, jsPDFOptions} from "jspdf";
import {startWith} from "rxjs";

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
      'gymnasium',
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
    let currentY = 60
    summary.setFontSize(11)
    summary.text(`Name: ${this.user.vorname} ${this.user.name}`, 20, currentY)
    summary.text(`Alter: ${this.user.age}`, 100, currentY)
    const prettyGender = this.getGender()
    currentY += 5
    summary.text(`Geschlecht: ${prettyGender}`, 20, currentY)
    summary.text(`Kanton: ${this.user.canton}`, 100, currentY)
    currentY += 5
    summary.text(`Wohnort: ${this.user.city}`, 20, currentY)
    currentY = this.addDegrees(summary, currentY);
    currentY += 5
    currentY = this.addInterests(summary, currentY);
  }

  private addDegrees(summary: jsPDF, currentY: number) {
    this.user.schoolDegrees.forEach((degree: string, index: number) => {
      if (index === 0) {
        summary.text(`Abschlüsse: ${degree}`, 100, currentY)
      } else {
        summary.text(`${degree}`, 122, currentY)
      }
      currentY += 5
    })
    return currentY;
  }

  private addInterests(summary: jsPDF, currentY: number) {
    this.user.interests.forEach((interest: string, index: number) => {
      const formattedInterest = this.formatInterest(interest)
      if (index === 0) {
        summary.text(`Interessen am Studium: ${formattedInterest}`, 100, currentY)
      } else {
        summary.text(`${formattedInterest}`, 122, currentY)
      }
      currentY += 5
    })
    return currentY;
  }

  getGender(): string {
    switch (this.user.gender) {
      case 'm':
        return 'Männlich'
      case 'f':
        return 'Weiblich'
      case 'd':
        return 'Divers'
      default:
        throw new Error('invalid gender')
    }
  }

  private formatInterest(interest: string) {
    switch (interest) {
      case 'other_school':
        return 'Interessiert am Studiengang einer anderen Schule'
      case 'general':
        return 'Generell interessiert am Studium'
      default: {
        throw new Error('invalid interest')
      }
    }
  }
}
