import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: string;
  constructor() { }

  getLoggedIn() {
    return this.isLoggedIn;
  }
}
