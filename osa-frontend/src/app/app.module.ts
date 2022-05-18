import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Route, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalityTraitScalesComponent } from './personality-trait-scales/personality-trait-scales.component';
import { StereotypesComponent } from './stereotypes/stereotypes.component';
import { TimeManagementComponent } from './time-management/time-management.component';
import { InsightsComponent } from './insights/insights.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InformationComponent } from './information/information.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { InterestComponent } from './interest/interest.component';
import { MatRadioModule} from "@angular/material/radio";
import { CurrentOccupationComponent } from './current-occupation/current-occupation.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SchoolTypeComponent } from './school-type/school-type.component';
import { SelfEfficacyScaleComponent } from './self-efficacy-scale/self-efficacy-scale.component';
import { ResilienceComponent } from './resilience/resilience.component';
import {MatIconModule} from "@angular/material/icon";
import { EmpathyComponent } from './empathy/empathy.component';
import {MatTabsModule} from "@angular/material/tabs";
import { TimeManagementPlannerComponent } from './time-management-planner/time-management-planner.component';
import { TimeManagementFeedbackComponent } from './time-management-feedback/time-management-feedback.component';
import { ExpectationsComponent } from './expectations/expectations.component';
import { NgChartsModule } from 'ng2-charts';
import { ResultTableComponent } from './result-table/result-table.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ImageComponent } from './image/image.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent, data: { animation: 'home'}},
  { path: 'card', component: CardComponent},
  { path: 'disclaimer', component: DisclaimerComponent, data: { animation: 'disclaimer'}},
  { path: 'information', component: InformationComponent, data: { animation: 'information'}},
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile'} },
  { path: 'interest', component: InterestComponent, data: { animation: 'interest'} },
  { path: 'current-occupation', component: CurrentOccupationComponent, data: { animation: 'currentoccupation'} },
  { path: 'school-type', component: SchoolTypeComponent, data: { animation: 'schooltype'} },
  { path: 'personality-trait-scales', component: PersonalityTraitScalesComponent, data: { animation: 'personality'}  },
  { path: 'self-efficacy-scale', component: SelfEfficacyScaleComponent, data: { animation: 'selfefficacyscale'}  },
  { path: 'resilience', component: ResilienceComponent, data: { animation: 'resilience'}  },
  { path: 'empathy', component: EmpathyComponent, data: { animation: 'empathy'}  },
  { path: 'stereotypes', component: StereotypesComponent, data: { animation: 'stereotypes'}  },
  { path: 'time-management', component: TimeManagementComponent, data: { animation: 'timemanagement'}  },
  { path: 'time-management-planner', component: TimeManagementPlannerComponent, data: { animation: 'timemanagementplanner'}  },
  { path: 'time-management-feedback', component: TimeManagementFeedbackComponent, data: { animation: 'timemanagementfeedback'}  },
  { path: 'insights', component: InsightsComponent, data: { animation: 'insights'}  },
  { path: 'expectations', component: ExpectationsComponent, data: { animation: 'expectations'}  },
  { path: 'feedback', component: FeedbackComponent, data: { animation: 'feedback'}  },
  { path: '**', redirectTo: 'home', pathMatch: 'full', data: { animation: 'any'}},
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: 'any'} },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PersonalityTraitScalesComponent,
    StereotypesComponent,
    TimeManagementComponent,
    InsightsComponent,
    FeedbackComponent,
    DisclaimerComponent,
    InformationComponent,
    InterestComponent,
    CurrentOccupationComponent,
    SchoolTypeComponent,
    SelfEfficacyScaleComponent,
    ResilienceComponent,
    EmpathyComponent,
    TimeManagementPlannerComponent,
    TimeManagementFeedbackComponent,
    ExpectationsComponent,
    ResultTableComponent,
    QuestionnaireComponent,
    ImageComponent,
    NavComponent,
    CardComponent,
  ],
  imports: [
    MatRadioModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
