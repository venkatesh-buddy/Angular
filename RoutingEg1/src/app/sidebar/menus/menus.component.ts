import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: []
})
export class MenusComponent implements OnInit {
  logged: string;
  constructor(private auth: AuthService) {
    console.log('MenusComponent::' + this.auth.getLoggedIn());
    this.logged = this.auth.getLoggedIn();
  }

  ngOnInit() {
  }

}
