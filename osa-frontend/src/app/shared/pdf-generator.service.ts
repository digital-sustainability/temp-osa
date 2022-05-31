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

  //todo sync with model
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
    const yIncrease = 6
    currentY += yIncrease
    summary.setFontSize(11)
    summary.text(`Name: ${this.user.vorname} ${this.user.name}`, 20, currentY)
    currentY += yIncrease
    summary.text(`Alter: ${this.user.age}`, 20, currentY)
    const prettyGender = PdfGeneratorService.formatGender(this.user.gender)
    currentY += yIncrease
    summary.text(`Geschlecht: ${prettyGender}`, 20, currentY)
    currentY += yIncrease
    summary.text(`Kanton: ${this.user.canton}`, 20, currentY)
    currentY += yIncrease
    summary.text(`Wohnort: ${this.user.city}`, 20, currentY)
    currentY += yIncrease
    currentY = this.addInterests(summary, currentY, yIncrease)
    currentY = this.addCurrentOccupations(summary, currentY, yIncrease)
    currentY = this.addDegrees(summary, currentY, yIncrease)
    summary.text(`Selbstwirksamkeits Wert: ${this.user.selfEfficacyValue}`, 20, currentY)
    currentY += yIncrease
    summary.text(`Empathie Wert: ${this.user.empathyValue}`, 20, currentY)
    currentY += yIncrease
    summary.text(`Pensum: ${this.user.pensum}`, 20, currentY)
    currentY += yIncrease
    currentY = this.addStereotypes(summary, currentY, yIncrease)
  }


  private addDegrees(summary: jsPDF, currentY: number, yIncrease: number) {
    this.user.schoolDegrees.forEach((degree: string, index: number) => {
      if (index === 0) {
        summary.text(`Abschlüsse:`, 20, currentY)
        currentY += yIncrease
        summary.text(`- ${degree}`, 27, currentY)

      } else {
        summary.text(`- ${degree}`, 27, currentY)
      }
      currentY += yIncrease
    })
    return currentY;
  }

  private addInterests(summary: jsPDF, currentY: number, yIncrease: number) {
    this.user.interests.forEach((interest: string, index: number) => {
      const formattedInterest = PdfGeneratorService.formatInterest(interest)
      if (index === 0) {
        summary.text(`Interessen am Studium:`, 20, currentY)
        currentY += yIncrease
        summary.text(`- ${formattedInterest}`, 27, currentY)
      } else {
        summary.text(`- ${formattedInterest}`, 27, currentY)
      }
      currentY += yIncrease
    })
    return currentY;
  }

  private addCurrentOccupations(summary: jsPDF, currentY: number, yIncrease: number) {
    this.user.currentOccupation.forEach((occupation: string, index: number) => {
      const formattedInterest = PdfGeneratorService.formatOccupation(occupation)
      if (index === 0) {
        summary.text(`Momentane Tätigkeiten:`, 20, currentY)
        currentY += yIncrease
        summary.text(`- ${formattedInterest}`, 27, currentY)
      } else {
        summary.text(`- ${formattedInterest}`, 27, currentY)
      }
      currentY += yIncrease
    })
    return currentY;
  }

  private addStereotypes(summary: jsPDF, currentY: number, yIncrease: number) {
    const claims: any[] = [
      'Als Sozialarbeiter*in werde ich hauptsächlich mit Menschen, welche von Armut betroffen sind, arbeiten können:',
      'Als Fachperson der Sozialen Arbeit analysiere ich individuelle und gesellschaftliche Probleme und suche nach Lösungen:',
      'Als Fachperson der Sozialen Arbeit arbeite ich mit unterschiedlichen Methoden und Techniken, welche auf die jeweiligen Arbeitsfelder angepasst sind:',
      'Als Fachperson der Sozialen Arbeit erledige ich auch administrative Tätigkeiten:',
      'Als Fachperson der Sozialen Arbeit arbeite ich mit anderen Berufsgruppen zusammen:',
      'Soziale Arbeit ist, wenn ich allen helfen kann:',
      'Soziale Arbeit ist, auch Menschen am Rande der Gesellschaft zu integrieren:',
      'Soziale Arbeit ist, einfach «darüber sprechen». Als Fachperson der Sozialen Arbeit muss ich mich in andere Menschen hineinversetzen können:',
      'Als Fachperson der Sozialen Arbeit arbeite ich auch an Projekten:',
      'Als Fachperson der Sozialen Arbeit, setze ich mich mit Forschung auseinandersetzen:',
      'Als Fachperson der Sozialen Arbeit setze ich meine Persönlichkeit als Arbeitsinstrument ein:',
      'Soziale Arbeit ist das Erkennen von Bedürfnissen sowie das Entwickeln von neuen Lösungsansätzen dazu:',
    ];
    this.user.stereotypeAnswers.forEach((answer: number, index: number) => {
      const lines = summary.setFontSize(11).splitTextToSize(claims[index], 140)
      if (index === 0) {
        summary.text(`Stereotypen Überblick:`, 20, currentY)
        currentY += yIncrease
        summary.text(lines, 27, currentY)
        summary.text(PdfGeneratorService.formatAnswer(answer), 166, currentY)
      } else {
        summary.text(lines, 27, currentY)
        summary.text(PdfGeneratorService.formatAnswer(answer), 166, currentY)
      }
      currentY += yIncrease * lines.length
    })
    return currentY;
  }

  private static formatGender(gender: string): string {
    //todo sync with model
    switch (gender) {
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

  private static formatInterest(interest: string) {
    //todo sync with model
    switch (interest) {
      case 'other_school':
        return 'Interessiert an einer anderen Schule'
      case 'general':
        return 'Generell interessiert am Studium'
      default: {
        throw new Error('invalid interest')
      }
    }
  }

  private static formatOccupation(occupation: string) {
    //todo sync with model
    switch (occupation) {
      case 'berufstaetig':
        return 'Berufstätig'
      default:
        throw new Error('invalid occupation')
    }
  }

  private static formatAnswer(answer: number) {
    switch (answer){
      case 1:
        return 'Trifft zu'
      case 2:
        return 'Trifft teilweise zu'
      case 3:
        return 'Trifft nicht zu'
      default:
        throw new Error('invalid answer')
    }
  }
}
