import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animation';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [slideInOutAnimation]
})
export class LandingComponent implements OnInit {
  logged: string;

  constructor(private auth: AuthService) {
    console.log('LandingComponent::' + auth.getLoggedIn());
    this.logged = auth.getLoggedIn();
  }

  ngOnInit() {
  }

}
