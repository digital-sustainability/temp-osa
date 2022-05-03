import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { assert } from 'console';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  getUserId(): number {
    let id = -1;
    let url = window.location;
    let params = new URLSearchParams(url.search);
    if (!(params.get('id') === null)) {
      id = +params.get('id')!;
    }
    return id;
  }
}
