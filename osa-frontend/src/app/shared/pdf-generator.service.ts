import {Injectable} from '@angular/core';
import {jsPDF} from "jspdf";

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  user = {
    name: 'Patrick',
    surname: 'Brunner'
  }

  summary = new jsPDF('p', 'mm', 'a4')

  constructor() {
  }

  generateConfirmation() {
    const confirmation = new jsPDF('p', 'mm', 'a4')
    confirmation.setFont('Helvetica')
    const text1 = `Bestätigung Absolvierung Self-Assessment für die Anmeldung zum Bachelor-Studium in Sozialer Arbeit an der Berner Fachhochschule`
    const lines = confirmation.setFontSize(12).splitTextToSize(text1, 100);
    confirmation.text(lines, 20, 10 + 11 / 100)

    confirmation.text(`${this.user.name} ${this.user.surname} hat das Self-Assessment als Element der Zulassung zum Bachelor-Studium in Sozialer Arbeit an der Berner Fachhochschule am ${new Date()} vollständig durchlaufen.`, 20, 20)
    confirmation.text(`Bitte laden Sie diese Bestätigung zusammen mit den anderen Dokumenten bei Ihrer Anmeldung zum Studium hoch. Vielen Dank.`, 20, 30)
    confirmation.save('confirmation.pdf')
  }
}
