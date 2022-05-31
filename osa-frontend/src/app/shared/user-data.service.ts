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
    let id = '-1';
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

  getUserById(id: string): Observable<any> {
    let user_id;
    id == '' ? (user_id = '-1') : (user_id = id);
    return this.http.get(`${environment.apiUrl}/questionnaire/${user_id}`);
  }

  addDataToUser(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/questionnaire/${id}`, data);
  }

  getNextPage(id: string) {
    this.getUserById(id).subscribe((user) => {
      /*
      cascading from last to first page
      - /profile -> /interest
      - /interest -> /current-occupation
      - /current-occupation -> /personality-trait-scales
      - /self-efficacy-scale -> /resilience
      - /resilience -> /empathy
      - /empathy -> /stereotypes
      - /stereotypes -> /time-management 
      - /time-management -> /time-management-planner
      - /time-management-planner -> /time-management-feedback
       */
    });
  }

  hasProfileData(user: any): boolean {
    if (
      user.age &&
      user.gender &&
      user.canton &&
      user.city &&
      (user.gymnasium ||
        user.bms ||
        user.fms ||
        user.sonstiger_abschluss ||
        user.kein_abschluss)
    ) {
      return true;
    }
    return false;
  }

  hasInterestData(user: any): boolean | void {}
  hasCurrOppData(user: any): boolean | void {}
  hasSelfEffScaleData(user: any): boolean | void {}
  hasResilienceData(user: any): boolean | void {}
  hasEmpathyData(user: any): boolean | void {}
  hasStereotypesData(user: any): boolean | void {}
  hasTimeManagementData(user: any): boolean | void {}
  hasTimeManagementPlannerData(user: any): boolean | void {}

  /*
  ? generic get user code
    const id = this.userService.getUserIdFromURL();
    console.log(id);
    this.userService.getUserById(id).subscribe((user) => {
      console.log(user);
    });
  */
}
