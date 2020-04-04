import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../model/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private httpClient: HttpClient) { }

  getCovidSummary(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('https://api.covid19api.com/summary');

  }
}
