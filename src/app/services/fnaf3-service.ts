import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Fnaf3Service {
  constructor(private http: HttpClient) {}

  getAnimatronicsFnaf3(){
    return this.http.get('assets/fnaf3.json')
  }
}
