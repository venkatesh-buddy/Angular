import { Component } from '@angular/core';
import { slideInOutAnimation } from './animation';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOutAnimation]
})
export class AppComponent {
  title = 'RoutingEg1';
  logged: string;

  constructor(private auth: AuthService) {
    this.logged = auth.getLoggedIn();
    console.log('Appcomponent::' + this.logged );
  }
}
