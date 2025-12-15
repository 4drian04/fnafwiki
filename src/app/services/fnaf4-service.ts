import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Fnaf4Service {
  constructor(private http: HttpClient) {}

  getAnimatronicsFnaf4(){
    return this.http.get('assets/fnaf4.json')
  }
}
