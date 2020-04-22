import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  logged: string;
  constructor(private auth: AuthService) { this.logged = this.auth.getLoggedIn();
  }

  ngOnInit() {
  }

}
