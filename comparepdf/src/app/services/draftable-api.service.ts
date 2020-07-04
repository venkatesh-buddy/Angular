import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftableApiService {

  constructor(private httpClient: HttpClient) { }
    // tslint:disable-next-line:max-line-length
   


  // tslint:disable-next-line:no-unused-expression
  getPdfCompare(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/comparepdf/viewer', { responseType: 'text' });
  }


}
