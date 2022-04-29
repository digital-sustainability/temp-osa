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
import {slideInAnimation} from "./animation";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  { path: 'home', component: HomeComponent, data: { animation: 'home'}},
  { path: 'disclaimer', component: DisclaimerComponent, data: { animation: 'disclaimer'}},
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile'} },
  { path: 'personality-trait-scales', component: PersonalityTraitScalesComponent, data: { animation: 'personality'}  },
  { path: 'stereotypes', component: StereotypesComponent, data: { animation: 'stereotypes'}  },
  { path: 'time-management', component: TimeManagementComponent, data: { animation: 'timemanagement'}  },
  { path: 'insights', component: InsightsComponent, data: { animation: 'insights'}  },
  { path: 'feedback', component: FeedbackComponent, data: { animation: 'feedback'}  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
