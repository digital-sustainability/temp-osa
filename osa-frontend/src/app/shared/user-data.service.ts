import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
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

  getNextPage(id: string): string | void {
    let user_local: any;
    let link: string = `/information?id=${id}`; // default fallback link if no data was inserted
    this.getUserById(id).subscribe((user) => {
      /*
      cascading from last to first page
      * /profile -> /interest
      * /interest -> /current-occupation
      * /current-occupation -> /personality-trait-scales
      * /self-efficacy-scale -> /resilience
      * /resilience -> /empathy
      * /empathy -> /stereotypes
      - /stereotypes -> /time-management 
      - /time-management -> /time-management-planner
      - /time-management-planner -> /time-management-feedback

      if (this.hasTimeManagementPlannerData(user)) {
        return `/time-management-feedback?id=${id}`;
      }
      if (this.hasTimeManagementData(user)) {
        return `/time-management-planner?id=${id}`;
      }
      if (this.hasStereotypesData(user)) {
        return `/time-management?id=${id}`;
      }
        */
      if (this.hasEmpathyData(user)) {
        link = `/stereotypes?id=${id}`;
      }
      if (this.hasResilienceData(user)) {
        link = `/empathy?id=${id}`;
      }
      if (this.hasSelfEffScaleData(user)) {
        link = `/resilience?id=${id}`;
      }
      if (this.hasCurrOppData(user)) {
        link = `/personality-trait-scales?id=${id}`;
      }
      if (this.hasInterestData(user)) {
        link = `/current-occupation?id=${id}`;
      }
      if (this.hasProfileData(user)) {
        link = `/interest?id=${id}`;
      }
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

  hasInterestData(user: any): boolean {
    if (
      user.interest_general ||
      user.interest_bfh ||
      user.interest_other_schoool ||
      user.interest_curiosity
    ) {
      return true;
    }
    return false;
  }

  hasCurrOppData(user: any): boolean {
    if (
      user.occupation_school ||
      user.occupation_university ||
      user.occupation_apprenticeship ||
      user.occupation_working ||
      user.occupation_other
    ) {
      return true;
    }
    return false;
  }

  hasSelfEffScaleData(user: any): boolean {
    if (
      user.self_eff_scale_1 &&
      user.self_eff_scale_2 &&
      user.self_eff_scale_3 &&
      user.self_eff_scale_4 &&
      user.self_eff_scale_5 &&
      user.self_eff_scale_6 &&
      user.self_eff_scale_7 &&
      user.self_eff_scale_8 &&
      user.self_eff_scale_9 &&
      user.self_eff_scale_10 &&
      user.self_efficacy_value
    ) {
      return true;
    }
    return false;
  }

  hasResilienceData(user: any): boolean {
    if (
      user.resilience_1 &&
      user.resilience_2 &&
      user.resilience_3 &&
      user.resilience_4 &&
      user.resilience_5 &&
      user.resilience_6 &&
      user.resilience_7 &&
      user.resilience_8 &&
      user.resilience_9 &&
      user.resilience_10 &&
      user.resilience_11 &&
      user.resilience_12 &&
      user.resilience_13 &&
      user.resilience_value
    ) {
      return true;
    }
    return false;
  }

  hasEmpathyData(user: any): boolean {
    if (
      user.empathy_1 &&
      user.empathy_2 &&
      user.empathy_3 &&
      user.empathy_4 &&
      user.empathy_5 &&
      user.empathy_6 &&
      user.empathy_7 &&
      user.empathy_8 &&
      user.empathy_9 &&
      user.empathy_10 &&
      user.empathy_11 &&
      user.empathy_12 &&
      user.empathy_13 &&
      user.empathy_14 &&
      user.empathy_15 &&
      user.empathy_16 &&
      user.empathy_17 &&
      user.empathy_18 &&
      user.empathy_value
    ) {
      return true;
    }
    return false;
  }
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
