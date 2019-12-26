import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  messageFromBroadCast: string;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.broadCast.subscribe(broadCast => this.messageFromBroadCast = broadCast);
  }
  BroadCastNewMessage(newMessage: HTMLInputElement){
    this.service.PublishBroadcastMessage(newMessage.value);
    newMessage.value = '';
  }

}
