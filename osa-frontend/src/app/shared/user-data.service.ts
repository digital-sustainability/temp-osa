import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUserIdFromURL(): string {
    let id = '';
    let url = window.location;
    let params = new URLSearchParams(url.search);
    if (!(params.get('id') === null)) {
      id = params.get('id')!;
    }
    return id.toString();
  }

  postEmptyUser(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/questionnaire`, {});
  }

  // Todo: get existing user by id ()
  getUserById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/questionnaire/${id}`);
  }


  async updateProfile (_age: number, _gender: string, _canton: string, _city: string, _gymnasium: boolean, _bms: boolean, _fms: boolean, _sonstige: boolean, _keine: boolean){
    let id = await this.getUserIdFromURL();
    this.http.put(`${environment.apiUrl}/questionnaire/${id}`, {age: _age, gender: _gender, canton: _canton, city: _city, gymnasium: _gymnasium, bms: _bms, fms:_fms, sonstiger_abschluss: _sonstige, kein_abschluss: _keine}).subscribe((res) => {
      console.log(res);
    });
;
  }

  // * InterestComponent: put interest
  /*
    checkbox1: boolean,
    checkbox2: boolean,
    checkbox3: boolean,
    checkbox4: boolean
  */

  // * CurrentOccupationComponent: put current occupation
  /*
    checkbox1: boolean,
    checkbox2: boolean,
    checkbox3: boolean,
    checkbox4: boolean,
    checkbox5: boolean
  */

  // * SchoolTypeComponent: put current occupation
  /*
    checkbox1: boolean,
    checkbox2: boolean,
    checkbox3: boolean,
    checkbox4: boolean,
    checkbox5: boolean
  */

  // * SelfEfficacyScaleComponent: put self-efficacy
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

  // * ResilienceComponent: put resilience
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

  // * EmpathyComponent: put empathy
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
