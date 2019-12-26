import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  messageFromBroadCast: string;
  constructor(private service: UserService) {
    this.service.broadCast.subscribe(broadCast => this.messageFromBroadCast = broadCast);
   }

  ngOnInit() {
  }

}
