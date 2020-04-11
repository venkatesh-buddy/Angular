import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { User } from '../user';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  items: any[] =  [
    {description: 'Item1'},
    { description: 'Item2'},
    {description: 'Item3'},
    {description: 'Item4'},
    {description: 'Item5'}];

  constructor(private httpClient: HttpClient) {
    console.log('User service constructor');
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit() {
    console.log('User service on init');
    // this.getItems();
  }

  getUser(): Observable<User[]> {    
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getItems(): Observable<any[]> {
    console.log('Hello observer::' + this.items.length);
    const ob = Observable.create(observer => {
      console.log('Hello observer::' + this.items);
      observer.next(this.items);
      observer.complete();
    });

    return ob;
  }
}
