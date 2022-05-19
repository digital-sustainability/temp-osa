import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private env_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserIdFromURL(): number {
    let id = -1;
    let url = window.location;
    let params = new URLSearchParams(url.search);
    if (!(params.get('id') === null)) {
      id = +params.get('id')!;
    }
    return id;
  }

  // Todo: create new user ()
  createUser(): void {
    this.http
      .post<any>(`${this.env_url}/questionnaire`, {})
      .subscribe((res) => {
        console.log(res);
      });
  }

  // Todo: get existing user by id ()

  // Todo: patch user object in backend

  // * ProfileComponent: patch profile
  /*
    age: number
    gender: string
    canton: string
    city: string
    */

  // * InterestComponent: patch interest
  /*
    checkbox1: boolean,
    checkbox2: boolean,
    checkbox3: boolean,
    checkbox4: boolean
  */

  // * CurrentOccupationComponent: patch current occupation
  /*
    checkbox1: boolean,
    checkbox2: boolean,
    checkbox3: boolean,
    checkbox4: boolean,
    checkbox5: boolean
  */

  // * SchoolTypeComponent: patch current occupation
  /*
    checkbox1: boolean,
    checkbox2: boolean,
    checkbox3: boolean,
    checkbox4: boolean,
    checkbox5: boolean
  */

  // * SelfEfficacyScaleComponent: patch self-efficacy
  /*
  q1:  number,
  q2:  number,
  q3:  number,
  q4:  number,
  q5:  number,
  q6:  number,
  q7:  number,
  q8:  number,
  q9:  number,
  q10: number,
  q11: number,
  q12: number,
  q13: number,
  */

  // * ResilienceComponent: patch resilience
  /*
  q1:  number,
  q2:  number,
  q3:  number,
  q4:  number,
  q5:  number,
  q6:  number,
  q7:  number,
  q8:  number,
  q9:  number,
  q10: number,
  q11: number,
  q12: number,
  q13: number,
  */

  // * EmpathyComponent: patch empathy
  /*
  q1:  number,
  q2:  number,
  q3:  number,
  q4:  number,
  q5:  number,
  q6:  number,
  q7:  number,
  q8:  number,
  q9:  number,
  q10: number,
  q11: number,
  q12: number,
  q13: number,
  */
}
