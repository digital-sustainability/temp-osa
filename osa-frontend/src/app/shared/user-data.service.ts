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
    return this.http.get(`${environment.apiUrl}/questionnaire/${id}`);
  }

  addDataToUser(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/questionnaire/${id}`, data);
  }

  /*
  ? generic get user code
    const id = this.userService.getUserIdFromURL();
    console.log(id);
    this.userService.getUserById(id).subscribe((user) => {
      console.log(user);
    });
  */
}
