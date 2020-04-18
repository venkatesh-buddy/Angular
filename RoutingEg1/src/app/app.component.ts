import { Component } from '@angular/core';
import { slideInOutAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOutAnimation]
})
export class AppComponent {
  title = 'RoutingEg1';
}
