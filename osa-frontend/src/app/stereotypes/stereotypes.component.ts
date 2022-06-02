import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-stereotypes',
  templateUrl: './stereotypes.component.html',
  styleUrls: ['./stereotypes.component.scss'],
})
export class StereotypesComponent implements OnInit {
  form: any;

  @ViewChild('grp') grp: any;

  claims: any[] = [
    {
      competences: 'Orientierungskompetenz in den Handlungsfeldern',
      claim:
        'Als Sozialarbeiter*in werde ich hauptsächlich mit Menschen, welche von Armut betroffen sind, arbeiten können. ',
      correctAnswer: 2,
      correctAnswerChecked: false,
      elaboration:
        'Die Soziale Arbeit setzt sich beispielsweise in der wirtschaftlichen Sozialhilfe, der Arbeitsintegration ' +
        'oder durch aufsuchende Angebote mit Armut und armutsbetroffenen Menschen auseinander. <b><i>Daneben bewegt sich ' +
        'Soziale Arbeit aber beispielsweise auch in den Arbeitsfeldern Kindes- und Erwachsenenschutz, Gesundheitsförderung, ' +
        'und Präventions- oder Migrationsarbeit.</i></b>',
    },
    {
      competences: 'Analyse- und Lösungskompetenz ',
      claim:
        'Als Fachperson der Sozialen Arbeit analysiere ich individuelle und gesellschaftliche Probleme und suche nach Lösungen.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Fachpersonen der Sozialen Arbeit nutzen ihr Wissen und ihre Fähigkeiten dazu, komplexe Probleme zu analysieren und zu lösen.</i></b>',
    },
    {
      competences: 'Kompetenz des methodischen Handelns',
      claim:
        'Als Fachperson der Sozialen Arbeit arbeite ich mit unterschiedlichen Methoden und Techniken, welche auf die jeweiligen Arbeitsfelder angepasst sind.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Soziale Arbeit verfügt über eine Vielzahl an methodischen Zugängen und Techniken, wie beispielsweise der Gesprächsführung, der Strukturierung von Begleitprozessen usw., welche sie in den unterschiedlichen Arbeitsfeldern einsetzt.</i></b> Im Bachelorstudium (BFH) lernen die Studierenden unterschiedliche Methoden und Techniken kennen und situationsadäquat anzuwenden. ',
    },
    {
      competences: 'Sozialrechtliche und sozialadministrative Kompetenz ',
      claim:
        'Als Fachperson der Sozialen Arbeit erledige ich auch administrative Tätigkeiten.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Unterschiedliche administrative Prozesse sind Teil der Sozialen Arbeit, indem beispielsweise Anträge formuliert, Einschätzungen oder Fallverläufe festgehalten werden.</i></b> Durch die Auseinandersetzung mit den administrativen Gegebenheiten m Rahmen des Studiums (BFH) werden diese verstanden, Ermessenspielräume können aufgezeigt und später in der Praxis genutzt werden.',
    },
    {
      competences: 'Interdisziplinäre Kompetenz',
      claim:
        'Als Fachperson der Sozialen Arbeit arbeite ich mit anderen Berufsgruppen zusammen.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Soziale Arbeit setzt sich mit komplexen Herausforderungen von Individuen, Gruppen und der Gesellschaft auseinander. Um diesen Herausforderungen bestmöglich zu begegnen, arbeiten Fachpersonen der Sozialen Arbeit in unterschiedlichen Arbeitsfeldern eng mit anderen Berufsgruppen zusammen.</i></b>',
    },
    {
      competences: 'Professionskompetenz',
      claim: 'Soziale Arbeit ist, wenn ich allen helfen kann.',
      correctAnswer: 3,
      correctAnswerChecked: false,
      elaboration:
        'Soziale Arbeit setzt sich zum Ziel, soziale Notlagen von Menschen zu verhindern, zu beseitigen oder zu lindern, indem Menschen beraten, begleitet, betreut sowie unterstützt und gefördert werden.<b><i> Dabei steht aber nicht das Helfen im Zentrum, sondern ein gemeinsames Erarbeiten und Umsetzen von Handlungsstrategien oder Handlungsoptionen.</i></b>',
    },
    {
      competences: 'Professionsethische Kompetenz',
      claim:
        'Soziale Arbeit ist, auch Menschen am Rande der Gesellschaft zu integrieren.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Soziale Arbeit ist geprägt von unterschiedlichen Aufträgen, welche sich unter anderem auch mit der Integration von Menschen in die Gesellschaft befassen.</i></b> Neben diesem integrierenden Auftrag arbeitet Soziale Arbeit beispielsweise auch präventiv oder bietet Unterstützung in Krisensituationen oder Notlagen. \n' +
        '\n' +
        '<b><i>Soziale Arbeit setzt sich weiter zum Ziel, einen gesellschaftlichen Beitrag an Menschen oder Gruppen zu leisten, welche vorübergehend oder dauerhaft in der Verwirklichung ihres Lebens eingeschränkt oder deren Zugänge zu gesellschaftlichen Ressourcen ungenügend sind.</i></b> ',
    },
    {
      competences: 'Kommunikations- und Kooperationskompetenz ',
      claim:
        'Soziale Arbeit ist, einfach «darüber sprechen». \n' +
        '\n' +
        'Als Fachperson der Sozialen Arbeit muss ich mich in andere Menschen hineinversetzen können.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        'Eine professionelle Gesprächsführung in der Sozialen Arbeit bietet eine wichtige Möglichkeit, um Situationen von Menschen zu erfassen und beispielsweise Veränderungsprozesse anzustossen. <b><i>Gespräche werden dabei jedoch nicht einfach so geführt, sondern orientieren sich an unterschiedlichen Gesprächstechniken und Arbeitsprinzipien, welche gelernt und angewendet werden.</i></b> «Darüber sprechen» wird also als Prozess des «Sich-Bewusst-Werdens» verstanden. \n' +
        '\n' +
        '<b><i>Das Erkennen von Perspektiven, Vorstellungen und Gefühlen von Klient*innen sind, beispielsweise gerade in Beratungssituationen, wichtige Voraussetzungen, um deren Situation möglichst breit zu erfassen.</i></b> Dabei stellt das «Sich-Hineinversetzen» eine Möglichkeit dar, die Sichtweise der Klientel zu erfahren. Soziale Arbeit verfügt neben dieser einen Möglichkeit über weitere Handlungstheorien, Methoden und Techniken, welche einen Zugang zu den Perspektiven, Vorstellungen und Gefühlen der Klient*innen ermöglichen.',
    },
    {
      competences: 'Projektkompetenz',
      claim:
        'Als Fachperson der Sozialen Arbeit arbeite ich auch an Projekten. ',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        'Die Arbeit in und mit Projekten in der Sozialen Arbeit findet in den unterschiedlichen Arbeitsfeldern statt. <b><i>Projekte werden dabei entweder von den Fachpersonen der Sozialer Arbeit initiiert und durchgeführt, gemeinsam mit den Klient*innen erarbeitet und umgesetzt oder gänzlich durch die Klient*innen gesteuert.</i></b>',
    },
    {
      competences: 'Forschungskompetenz',
      claim:
        'Als Fachperson der Sozialen Arbeit, setze ich mich mit Forschung auseinandersetzen.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Soziale Arbeit setzt sich mit den Grundlagen von Forschung auseinander, wendet unterschiedliche Forschungsmethoden an und beschäftigt sich mit verschiedenen Forschungszugängen.\n' +
        '\n' +
        'Soziale Arbeit integriert darüber hinaus Wissen, beispielsweise aus (empirischen) Studien, in die Arbeit mit ihren Klient*innen.</i></b>',
    },
    {
      competences: 'Selbstreflexionskompetenz',
      claim:
        'Als Fachperson der Sozialen Arbeit setze ich meine Persönlichkeit als Arbeitsinstrument ein.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        'In der Sozialen Arbeit setzen Sie sich als Person als Arbeitsinstrument ein. Die Reflexion der eigenen Persönlichkeit bildet daher einen wichtigen Bestandteil des professionellen Handelns in der Sozialen Arbeit. <b><i>Über die Reflexion beispielsweise ihrer eigenen Werte oder des eigenen Handelns wird die eigene professionelle Rolle analysiert, entwickelt oder weiterentwickelt.</i></b>',
    },
    {
      competences: 'Innovationskompetenz',
      claim:
        'Soziale Arbeit ist das Erkennen von Bedürfnissen sowie das Entwickeln von neuen Lösungsansätzen dazu.',
      correctAnswer: 1,
      correctAnswerChecked: false,
      elaboration:
        '<b><i>Soziale Arbeit ist bestrebt, Bedürfnisse oder Potenziale beispielsweise In einem Spannungsfeld von Individuum und Gesellschaft zu erkennen und mit innovativen Lösungsansätzen darauf zu reagieren, indem sie beispielsweise neue Dienstleistungen entwickelt oder auf aktuelle politische Diskurse reagiert und sich positioniert.</i></b>',
    },
  ];
  selectionCorrect?: boolean;

  answers = [{ correct: false, wrong: false }, { correct: false, wrong: false }, { correct: false, wrong: false }]

  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {
    this.id = this.userService.getUserIdFromURL();
  }

  ngOnInit(): void {
    const controls: { [key: string]: any } = {};
    this.claims.forEach((claim, index) => {
      controls['claim' + index] = [null, Validators.required];
    });
    this.form = this.formBuilder.group(controls);
  }

  isLastTab: boolean = false;

  next(element: any) {
    this.resetAnswers()
    this.selectionCorrect = undefined;
    element.selectedIndex += 1;
    if (this.isLastTab) {
      this.advanceSite();
    }
  }

  prev(element: any) {
    this.resetAnswers()
    this.selectionCorrect = undefined;
    element.selectedIndex -= 1;
  }

  check(claim: any, index: number) {
    this.resetAnswers()
    this.selectionCorrect =
      +this.form.value['claim' + index] === claim.correctAnswer;
    if (this.form.value['claim' + index] == claim.correctAnswer) {
      this.answers[this.form.value['claim' + index] - 1].correct = true
    } else {
      this.answers[this.form.value['claim' + index] - 1].wrong = true
    }
  }

  resetAnswers() {
    for (const el of this.answers) {
      el.correct = false
      el.wrong = false
    }
  }

  setLastTab(event: any) {
    this.isLastTab = event === this.grp._tabs.length - 1;
  }

  advanceSite() {
    if (this.id == '-1') {
      this.router.navigateByUrl('/time-management');
    } else {
      console.log(this.form.value);
      this.userService
        .addDataToUser(this.id, this.form.value)
        .subscribe((res) => {
          // console.log(res);
        });
      this.router.navigateByUrl(`/time-management?id=${this.id}`);
    }
  }
}
