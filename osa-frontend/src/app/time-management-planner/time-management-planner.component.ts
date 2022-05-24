import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-time-management-planner',
  templateUrl: './time-management-planner.component.html',
  styleUrls: ['./time-management-planner.component.scss'],
})
export class TimeManagementPlannerComponent implements OnInit {
  form: any;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  model: any = {
    pensum: 'vollzeit',
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [
      'Studium: Kontakt- und Selbststudium',
      'Nebenjob, Haushalt, Kinderbetreuung',
      'Zeit für sich selbst (Hobby & Freizeit)',
      'Schlafen, Essen, Körperpflege',
      'Anreise (Pendeln)',
    ],
    datasets: [],
  };

  formTotal = new BehaviorSubject(0);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      studies: [
        { value: this.model.pensum === 'vollzeit' ? 7 : 4, disabled: true },
      ],
      work: [0, Validators.required],
      leisure: [0, Validators.required],
      necessities: [0, Validators.required],
      commute: [0, Validators.required],
    });
    this.form.controls.work.valueChanges
      .pipe(debounceTime(200))
      .subscribe((val: any) => {
        this.recalculateTotal();
      });
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].valueChanges
        .pipe(debounceTime(200))
        .subscribe(() => {
          this.recalculateTotal();
          this.pieChartData.datasets[0] = {
            data: [
              this.form.controls.studies.value,
              this.form.controls.work.value,
              this.form.controls.leisure.value,
              this.form.controls.necessities.value,
              this.form.controls.commute.value,
            ],
          };
          if (this.chart) {
            this.chart.update();
          }
        });
    });
    this.pieChartData.datasets.push({
      data: [
        this.form.controls.studies.value,
        this.form.controls.work.value,
        this.form.controls.leisure.value,
        this.form.controls.necessities.value,
        this.form.controls.commute.value,
      ],
    });
  }

  private recalculateTotal() {
    let total: number = 0;
    Object.keys(this.form.controls).forEach((key) => {
      total += this.form.controls[key].value;
    });
    this.formTotal.next(total);
  }

  updateModel() {
    const id = this.userService.getUserIdFromURL();
    if (id == '') {
      this.router.navigateByUrl('/time-management-feedback');
    } else {
      // save user data
      this.router.navigateByUrl(`/time-management-feedback?id=${id}`);
    }
  }
}
