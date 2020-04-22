import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: string;
  constructor(private auth: AuthService) {
    this.logged = this.auth.getLoggedIn();
   }

  ngOnInit() {
  }

}
