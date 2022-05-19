import { Component, OnInit } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';

const TEXTS = {
  requirements:
    'Ein Studium stellt gewissen Anforderungen\nan die Studierenden. Nachfolgende Darstellung gibt\neinen Überblick über Aspekte, die für ein erfolgreiches\nStudium erforderlich sind. Indem Sie mit der Maus\nüber die einzelnen Begriffe fahren,\nerfahren Sie mehr dazu.',
  interests:
    'Als Studierende der Sozialen Arbeiten bringen\nSie ein Interesse an sozialen, gesellschaftlichen\nund politischen Fragestellungen mit. Mit Hilfe der\nTagespresse informieren Sie sich laufend über das\nWeltgeschehen. Ihre fachspezifischen Interessen\nzu Themen der Sozialen Arbeit entwickeln und\nvertiefen Sie stetig weiter und schaffen damit einen\nGrundstein, um erfolgreich, lustvoll und persönlich\nbereichernd zu studieren. Dank Ihres breiten\nfachlichen Interesses fällt es Ihnen leicht, sich im\nStudium mit unterschiedlichen Inhalten vertieft\nauseinanderzusetzen und schließlich ein Thema für\nIhre Studien- und Bachelorarbeit zu finden.',
  motivation:
    'Sich selbst motivieren zu können, sich zu überwinden\nund auch bei allfälligen „Durststrecken“ durchzuhalten,\nsind wertvolle Fähigkeiten für ein erfolgreiches Studium.\nZu wissen, weshalb Sie studieren, ein Ziel zu haben\nund dieses zu verfolgen kann dabei sehr hilfreich sein.\nMit Ihrer positiven Haltung gegenüber \nHerausforderungen gelingt es Ihnen, auch weniger \nbeliebte Inhalte zu bearbeiten. Nicht für jedes Thema\nwerden Sie das gleiche Interesse entwickeln. Zu einem \nStudium gehört es auch, Lehrveranstaltungen zu \nabsolvieren, auf die Sie keine Lust haben. ',
  initiative:
    'Der Erfolg im Studium hängt stark mit dem\neigenen Engagement zusammen. Sie sind bereit,\nimmer wieder selbst die Initiative zu ergreifen. Sie\nbeteiligen sich aktiv am Unterricht und nehmen sich\nim Selbststudium eigeninitiativ, eigenverantwortlich\nund selbstorganisiert der Vor- und Nachbereitung\nder Veranstaltungen sowie der Vertiefung von\nThemen an.',
  selfOrganisation:
    'Sich selbst organisieren zu können,\nden Überblick zu behalten, ist von zentraler\nBedeutung im Studium. Hierzu gehört beispielsweise\ndie Organisation des eigenen Stundenplans, die\nEinschreibung in Lehrveranstaltungen, das\nKoordinieren verschiedener Termine und\nGruppenarbeiten, das fristgerechte Einreichen von\nKompetenznachweisen, sowie die selbstständige\nInformationsbeschaffung. Sie tragen zu Ihrem\nStudienerfolg bei, indem Sie Ihren eigenen\nLernprozess fortlaufend planen, sich ausreichend\nZeit für Lernphasen einzuplanen, aber\nauch Zeit für Unvorhersehbares und Zeit für die\neigene Erholung reservieren.',
  reflection:
    'Bildungsprozesse bedürfen kritischer\nAuseinandersetzung und Selbstreflexion. Sie bringen\ndie Bereitschaft mit, Fragen zu stellen, Informationen\nkritisch zu hinterfragen, über sich und andere\nnachzudenken und das eigene sowie das Handeln\nDritter zu analysieren. Sie sind bereit, an sich zu\narbeiten und sich stetig weiterzuentwickeln.',
};

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css'],
})
export class RequirementsComponent implements OnInit {
  constructor() {}
  TEXT_GREY = '4b647d';
  GREY = '#697d91';
  GREEN = '#8caf82';
  BLUE = '#87b9c8';
  PURPLE = '#a087aa';
  TEAL = '#b99164';
  RED = '#e1917d';
  ORANGE = '#fcbe3e';
  WHITE = 'white';
  SIZE = 140;
  X = 150;
  Y = 300;
  X_DIFF = 220;
  Y_DIFF = 100;
  FONT = 'UnitRoundedWebPro-Light, sans-serif';
  draw: any;

  ngOnInit(): void {
    this.drawSVG();
  }
  selected = '';

  drawSVG() {
    this.draw = SVG().addTo('.svg').size(1200, 600);
    const GRADIENT = this.draw.gradient('linear', (add: any) => {
      add.stop(0, this.GREEN);
      add.stop(0.25, this.BLUE);
      add.stop(0.5, this.PURPLE);
      add.stop(0.75, this.ORANGE);
      add.stop(1, this.RED);
    });
    var polygon = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .fill(this.GREY)
      .size(200)
      .id('requirements')
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(600, 150)
      .stroke({ width: 8, color: GRADIENT });

    var text = this.draw
      .text('Anforderungen an \nSie als Studierende')
      .font({ family: this.FONT, weight: 'bold' })
      .attr({ fill: this.TEXT_GREY })
      .center(600, 150);

    document.getElementById('requirements')?.addEventListener('click', () => {
      this.selected = 'requirements';
      var info = this.draw
        .path(
          'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
        )
        .id('requirementsInfo')
        .fill('white')
        .attr({
          filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
        })
        .center(600, 150)
        .stroke({ width: 8, color: GRADIENT })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 3, 0)
        .center(600, 300);
      var infoText = this.draw
        .text(TEXTS.requirements)
        .id('requirementsText')
        .font({ family: this.FONT, size: '15px' })
        .attr({ fill: this.TEXT_GREY, opacity: 0 })
        .center(600, 150)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.TEXT_GREY,
          opacity: 100,
        })
        .center(600, 300);
      var infoTitle = this.draw
        .text('ANFORDERUNGEN')
        .id('requirementsTitle')
        .font({ family: this.FONT, size: '17px', 'font-weight': 'bold' })
        .attr({ fill: this.GREY, opacity: 0 })
        .center(600, 150)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREY,
          opacity: 100,
        })
        .center(600, 150);
      setTimeout(() => {
        this.addClickEvent();
      }, 1000);
    });

    ///MOTIVATION
    var motivationShape = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .size(this.SIZE)
      .fill(this.GREEN)
      .id('motivation')
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X, this.Y)
      .stroke({ width: 1, color: this.GREY });
    var motivation = this.draw
      .text('Motivation')
      .font({ family: this.FONT })
      .attr({ fill: this.TEXT_GREY })
      .center(this.X, this.Y);

    document.getElementById('motivation')?.addEventListener('click', () => {
      this.selected = 'motivation';
      var info = this.draw
        .path(
          'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
        )
        .size(this.SIZE)
        .id('motivationInfo')
        .fill('white')
        .attr({
          filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
        })
        .center(this.X, this.Y)
        .stroke({ width: 8, color: this.GREEN })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 3, 0)
        .center(600, 300);
      var infoText = this.draw
        .text(TEXTS.motivation)
        .id('motivationText')
        .font({ family: this.FONT, size: '15px' })
        .attr({ fill: this.TEXT_GREY, opacity: 0 })
        .center(this.X, this.Y)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.TEXT_GREY,
          opacity: 100,
        })
        .center(600, 300);
      var infoTitle = this.draw
        .text('MOTIVATION')
        .id('motivationTitle')
        .font({ family: this.FONT, size: '17px', 'font-weight': 'bold' })
        .attr({ fill: this.GREEN, opacity: 0 })
        .center(this.X, this.Y)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREEN,
          opacity: 100,
        })
        .center(600, 150);
      setTimeout(() => {
        this.addClickEvent();
      }, 1000);
    });

    //INITIATIVE
    var initiativeShape = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .size(this.SIZE)
      .fill(this.BLUE)
      .id('initiative')
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF)
      .stroke({ width: 1, color: this.GREY });
    var initiative = this.draw
      .text('Eigen-\ninitiative')
      .font({ family: this.FONT })
      .attr({ fill: this.TEXT_GREY })
      .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF);

    document.getElementById('initiative')?.addEventListener('click', () => {
      this.selected = 'initiative';
      var info = this.draw
        .path(
          'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
        )
        .size(this.SIZE)
        .id('initiativeInfo')
        .fill('white')
        .attr({
          filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
        })
        .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF)
        .stroke({ width: 8, color: this.BLUE })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 3, 0)
        .center(600, 300);
      var infoText = this.draw
        .text(TEXTS.initiative)
        .id('initiativeText')
        .font({ family: this.FONT, size: '15px' })
        .attr({ fill: this.TEXT_GREY, opacity: 0 })
        .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.TEXT_GREY,
          opacity: 100,
        })
        .center(600, 300);
      var infoTitle = this.draw
        .text('EIGENNITIATIVE')
        .id('initiativeTitle')
        .font({ family: this.FONT, size: '17px', 'font-weight': 'bold' })
        .attr({ fill: this.BLUE, opacity: 0 })
        .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.BLUE,
          opacity: 100,
        })
        .center(600, 150);
      setTimeout(() => {
        this.addClickEvent();
      }, 1000);
    });

    ////INTEREST
    var interestShape = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .size(this.SIZE)
      .fill(this.PURPLE)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .id('interest')
      .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF)
      .stroke({ width: 1, color: this.GREY });
    var interest = this.draw
      .text('Interesse')
      .font({ family: this.FONT })
      .attr({ fill: this.TEXT_GREY })
      .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF);

    document.getElementById('interest')?.addEventListener('click', () => {
      this.selected = 'interest';
      var info = this.draw
        .path(
          'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
        )
        .size(this.SIZE)
        .id('interestInfo')
        .fill('white')
        .attr({
          filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
        })
        .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF)
        .stroke({ width: 8, color: this.PURPLE })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 3, 0)
        .center(600, 300);
      var infoText = this.draw
        .text(TEXTS.interests)
        .id('interestText')
        .font({ family: this.FONT, size: '15px' })
        .attr({ fill: this.TEXT_GREY, opacity: 0 })
        .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.TEXT_GREY,
          opacity: 100,
        })
        .center(600, 300);
      var infoTitle = this.draw
        .text('INTERESSE')
        .id('interestTitle')
        .font({ family: this.FONT, size: '17px', 'font-weight': 'bold' })
        .attr({ fill: this.PURPLE, opacity: 0 })
        .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.PURPLE,
          opacity: 100,
        })
        .center(600, 150);
      setTimeout(() => {
        this.addClickEvent();
      }, 1000);
    });

    ///REFLEXION
    var reflectionShape = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .size(this.SIZE)
      .id('reflexion')
      .fill(this.ORANGE)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
      .stroke({ width: 1, color: this.GREY });
    var reflection = this.draw
      .text('Reflexion')
      .font({ family: this.FONT })
      .attr({ fill: this.TEXT_GREY })
      .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF);

    document.getElementById('reflexion')?.addEventListener('click', () => {
      this.selected = 'reflection';
      var info = this.draw
        .path(
          'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
        )
        .size(this.SIZE)
        .id('reflectionInfo')
        .fill('white')
        .attr({
          filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
        })
        .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
        .stroke({ width: 8, color: this.ORANGE })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 3, 0)
        .center(600, 300);
      var infoText = this.draw
        .text(TEXTS.reflection)
        .id('reflectionText')
        .font({ family: this.FONT, size: '15px' })
        .attr({ fill: this.TEXT_GREY, opacity: 0 })
        .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.TEXT_GREY,
          opacity: 100,
        })
        .center(600, 300);
      var infoTitle = this.draw
        .text('REFLEXION')
        .id('reflectionTitle')
        .font({ family: this.FONT, size: '17px', 'font-weight': 'bold' })
        .attr({ fill: this.ORANGE, opacity: 0 })
        .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.ORANGE,
          opacity: 100,
        })
        .center(600, 150);
      setTimeout(() => {
        this.addClickEvent();
      }, 1000);
    });

    //// SELBSTORGANISATION
    var selfOrganisationShape = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .size(this.SIZE)
      .id('selbstOrganisation')
      .fill(this.RED)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
        linecap: 'round',
      })
      .center(this.X + 4 * this.X_DIFF, this.Y)
      .stroke({ width: 1, color: this.GREY });

    var selfOrganisation = this.draw
      .text('Selbst-\norganisation')
      .font({ family: this.FONT })
      .attr({ fill: this.TEXT_GREY })
      .center(this.X + 4 * this.X_DIFF, this.Y);

    document
      .getElementById('selbstOrganisation')
      ?.addEventListener('click', () => {
        this.selected = 'selfOrganisation';
        var selfOrganisationInfo = this.draw
          .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
          .size(this.SIZE)
          .id('selfOrganisationInfo')
          .fill('white')
          .attr({
            filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
          })
          .center(this.X + 4 * this.X_DIFF, this.Y)
          .stroke({ width: 8, color: this.RED })
          .animate(1500, 500, 'now')
          .size(this.SIZE * 3, 0)
          .center(600, 300);
        var selfOrganisationInfoText = this.draw
          .text(TEXTS.selfOrganisation)
          .id('selfOrganisationText')
          .font({ family: this.FONT, size: '15px' })
          .attr({ fill: this.TEXT_GREY, opacity: 0 })
          .center(this.X + 4 * this.X_DIFF, this.Y)
          .animate(1500, 500, 'now')
          .attr({
            fill: this.TEXT_GREY,
            opacity: 100,
          })
          .center(600, 300);
        var infoTitle = this.draw
          .text('SELBSTORGANISATION')
          .id('selfOrganisationTitle')
          .font({ family: this.FONT, size: '17px', 'font-weight': 'bold' })
          .attr({ fill: this.RED, opacity: 0 })
          .center(this.X + 4 * this.X_DIFF, this.Y)
          .animate(1500, 500, 'now')
          .attr({
            fill: this.RED,
            opacity: 100,
          })
          .center(600, 150);
        setTimeout(() => {
          this.addClickEvent();
        }, 1000);
      });
    this.draw
      .polyline('0,0 0,400')
      .fill('black')
      .stroke({ width: 3 })
      .center(this.X + 4 * this.X_DIFF, this.Y);
  }

  addClickEvent() {
    document.getElementById('svg')?.addEventListener('click', () => {
      this.onClick();
    });
  }
  onClick() {
    document.getElementById(this.selected + 'Info')?.remove();
    document.getElementById(this.selected + 'Text')?.remove();
    document.getElementById(this.selected + 'Title')?.remove();
    console.log(document.getElementById('svg'));
    this.removeClick();
  }
  removeClick() {
    document.getElementById('svg')?.removeEventListener('click', () => {
      this.onClick();
    });
  }
}
