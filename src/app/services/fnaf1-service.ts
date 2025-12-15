import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Fnaf1Service {
  constructor(private http: HttpClient) {}

  getAnimatronicsFnaf1(){
    return this.http.get('assets/fnaf1.json')
  }
}
