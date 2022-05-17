import { Component, OnInit } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';

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

  SIZE = 140;
  X = 150;
  Y = 300;
  X_DIFF = 220;
  Y_DIFF = 150;
  FONT = 'UnitRoundedWebPro-Light, sans-serif';

  ngOnInit(): void {
    this.drawSVG();
  }

  drawSVG() {
    var draw = SVG().addTo('.svg').size(1200, 800);
    var polygon = draw
      .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
      .fill(this.GREY)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(600, 150)
      .stroke({ width: 1 });
    var text = draw
      .text('Anforderungen an \nSie als Studierende')
      .font({ family: this.FONT })
      .center(600, 150);
    var motivationShape = draw
      .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
      .size(this.SIZE)
      .fill(this.GREEN)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X, this.Y)
      .stroke({ width: 1 });
    var motivation = draw
      .text('Motivation')
      .font({ family: this.FONT })
      .center(this.X, this.Y);
    var initiativeShape = draw
      .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
      .size(this.SIZE)
      .fill(this.BLUE)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF)
      .stroke({ width: 1 });
    var initiative = draw
      .text('Eigen-\ninitiative')
      .font({ family: this.FONT })
      .center(this.X + this.X_DIFF, this.Y + this.Y_DIFF);
    var interestShape = draw
      .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
      .size(this.SIZE)
      .fill(this.PURPLE)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF)
      .stroke({ width: 1 });
    var interest = draw
      .text('Interesse')
      .font({ family: this.FONT })
      .center(this.X + 2 * this.X_DIFF, this.Y + 2 * this.Y_DIFF);
    var reflectionShape = draw
      .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
      .size(this.SIZE)
      .fill(this.TEAL)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF)
      .stroke({ width: 1 });
    var reflection = draw
      .text('Reflexion')
      .font({ family: this.FONT })
      .center(this.X + 3 * this.X_DIFF, this.Y + this.Y_DIFF);
    var selfOrganisationShape = draw
      .polygon('150,75 258,137.5 258,262.5 150,325 42,262.6 42,137.5')
      .size(this.SIZE)
      .fill(this.RED)
      .attr({
        filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4))',
      })
      .center(this.X + 4 * this.X_DIFF, this.Y)
      .stroke({ width: 1 });
    var selfOrganisation = draw
      .text('Selbst-\norganisation')
      .font({ family: this.FONT })
      .center(this.X + 4 * this.X_DIFF, this.Y);
  }
}
