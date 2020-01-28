import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get(this.baseUrl + '/users');
  }
}
