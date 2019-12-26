import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private broadCastMessage = new BehaviorSubject<string>('First BroadCast Message from service');
  broadCast = this.broadCastMessage.asObservable();
  constructor() { }
  PublishBroadcastMessage(message: string) {
    this.broadCastMessage.next(message);
  }
}
