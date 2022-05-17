import { Component, OnInit } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';

const TEXTS = {
  requirements:
    'Ein Studium stellt gewissen Anforderungen an die Studierenden.\nNachfolgende Darstellung gibt einen Überblick über Aspekte, die für\nein erfolgreiches Studium erforderlich sind.\nIndem Sie mit der Maus über die einzelnen Begriffe fahren,\nerfahren Sie mehr dazu.',
  interests:
    'Als Studierende der Sozialen Arbeiten bringen Sie ein Interesse\nan sozialen, gesellschaftlichen und politischen Fragestellungen\nmit. Mit Hilfe der Tagespresse informieren Sie sich laufend über\ndas Weltgeschehen.\nIhre fachspezifischen Interessen zu Themen der Sozialen Arbeit\nentwickeln und vertiefen Sie stetig weiter und schaffen damit\neinen Grundstein, um erfolgreich, lustvoll und persönlich\nbereichernd zu studieren. Dank Ihres breiten fachlichen\nInteresses fällt es Ihnen leicht, sich im Studium mit\nunterschiedlichen Inhalten vertieft auseinanderzusetzen und\nschließlich ein Thema für Ihre Studien- und Bachelorarbeit zu\nfinden.',
  motivation:
    'Sich selbst motivieren zu können, sich zu überwinden und auch\nbei allfälligen „Durststrecken“ durchzuhalten, sind wertvolle\nFähigkeiten für ein erfolgreiches Studium. Zu wissen, weshalb\nSie studieren, ein Ziel zu haben und dieses zu verfolgen kann\ndabei sehr hilfreich sein. Mit Ihrer positiven Haltung gegenüber\nHerausforderungen gelingt es Ihnen, auch weniger beliebte\nInhalte zu bearbeiten. Nicht für jedes Thema werden Sie\ndas gleiche Interesse entwickeln. Zu einem Studium gehört es auch,\nLehrveranstaltungen zu absolvieren, auf die Sie keine Lust\nhaben. ',
  initiative:
    'Der Erfolg im Studium hängt stark mit dem eigenen Engagement\nzusammen. Sie sind bereit, immer wieder selbst die Initiative zu\nergreifen. Sie beteiligen sich aktiv am Unterricht und nehmen\nsich im Selbststudium eigeninitiativ, eigenverantwortlich und\nselbstorganisiert der Vor- und Nachbereitung der Veranstaltungen\nsowie der Vertiefung von Themen an.',
  selfOrganisation:
    'Sich selbst organisieren zu können, den Überblick zu behalten,\nist von zentraler Bedeutung im Studium. Hierzu gehört\nbeispielsweise die Organisation des eigenen Stundenplans, die\n Einschreibung in Lehrveranstaltungen, das Koordinieren\nverschiedener Termine und Gruppenarbeiten, das fristgerechte\nEinreichen von Kompetenznachweisen, sowie die selbstständige\nInformationsbeschaffung. Sie tragen zu Ihrem Studienerfolg bei,\nindem Sie Ihren eigenen Lernprozess fortlaufend planen, sich\nausreichend Zeit für Lernphasen einzuplanen, aber auch Zeit für\nUnvorhersehbares und Zeit für die eigene Erholung reservieren.',
  reflection:
    'Bildungsprozesse bedürfen kritischer Auseinandersetzung und\nSelbstreflexion. Sie bringen die Bereitschaft mit, Fragen zu\nstellen, Informationen kritisch zu hinterfragen, über sich\nund andere nachzudenken und das eigene sowie das Handeln Dritter\nzu analysieren. Sie sind bereit, an sich zu arbeiten und sich stetig\nweiterzuentwickeln.',
};

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css'],
})
export class RequirementsComponent implements OnInit {
  constructor() {}
  GREY = '#697d91';
  GREEN = '#8caf82';
  BLUE = '#87b9c8';
  PURPLE = '#a087aa';
  TEAL = '#b99164';
  RED = '#e1917d';
  ORANGE = '#fcbe3e';

  SIZE = 140;
  X = 150;
  Y = 300;
  X_DIFF = 220;
  Y_DIFF = 150;
  FONT = 'UnitRoundedWebPro-Light, sans-serif';
  draw: any;

  ngOnInit(): void {
    this.drawSVG();
  }
  selected = '';

  drawSVG() {
    this.draw = SVG().addTo('.svg').size(1200, 800);
    var polygon = this.draw
      .path(
        'M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444z'
      )
      .fill(this.ORANGE)
      .size(250)
      .id('requirements')
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(600, 150)
      .stroke({ width: 1, color: this.GREY });

    var text = this.draw
      .text('Anforderungen an \nSie als Studierende')
      .font({ family: this.FONT })
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
        .stroke({ width: 1, color: this.GREY })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 4, 0)
        .center(600, 400);
      var infoText = this.draw
        .text(TEXTS.requirements)
        .id('requirementsText')
        .font({ family: this.FONT, size: '17px' })
        .attr({ fill: this.GREY, opacity: 0 })
        .center(this.X, this.Y)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREY,
          opacity: 100,
        })
        .center(600, 400);
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
        .stroke({ width: 1, color: this.GREY })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 4, 0)
        .center(600, 400);
      var infoText = this.draw
        .text(TEXTS.motivation)
        .id('motivationText')
        .font({ family: this.FONT, size: '17px' })
        .attr({ fill: this.GREY, opacity: 0 })
        .center(this.X, this.Y)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREY,
          opacity: 100,
        })
        .center(600, 400);
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
        .stroke({ width: 1, color: this.GREY })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 4, 0)
        .center(600, 400);
      var infoText = this.draw
        .text(TEXTS.initiative)
        .id('initiativeText')
        .font({ family: this.FONT, size: '17px' })
        .attr({ fill: this.GREY, opacity: 0 })
        .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREY,
          opacity: 100,
        })
        .center(600, 400);
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
        .stroke({ width: 1, color: this.GREY })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 4, 0)
        .center(600, 400);
      var infoText = this.draw
        .text(TEXTS.interests)
        .id('interestText')
        .font({ family: this.FONT, size: '17px' })
        .attr({ fill: this.GREY, opacity: 0 })
        .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREY,
          opacity: 100,
        })
        .center(600, 400);
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
      .fill(this.TEAL)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
      .stroke({ width: 1, color: this.GREY });
    var reflection = this.draw
      .text('Reflexion')
      .font({ family: this.FONT })
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
        .stroke({ width: 1, color: this.GREY })
        .animate(1500, 500, 'now')
        .size(this.SIZE * 4, 0)
        .center(600, 400);
      var infoText = this.draw
        .text(TEXTS.reflection)
        .id('reflectionText')
        .font({ family: this.FONT, size: '17px' })
        .attr({ fill: this.GREY, opacity: 0 })
        .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
        .animate(1500, 500, 'now')
        .attr({
          fill: this.GREY,
          opacity: 100,
        })
        .center(600, 400);
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
          .stroke({ width: 1, color: this.GREY })
          .animate(1500, 500, 'now')
          .size(this.SIZE * 4, 0)
          .center(600, 400);
        var selfOrganisationInfoText = this.draw
          .text(TEXTS.selfOrganisation)
          .id('selfOrganisationText')
          .font({ family: this.FONT, size: '17px' })
          .attr({ fill: this.GREY, opacity: 0 })
          .center(this.X + 4 * this.X_DIFF, this.Y)
          .animate(1500, 500, 'now')
          .attr({
            fill: this.GREY,
            opacity: 100,
          })
          .center(600, 400);
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
    console.log(document.getElementById('svg'));
    this.removeClick();
  }
  removeClick() {
    document.getElementById('svg')?.removeEventListener('click', () => {
      this.onClick();
    });
  }
}
