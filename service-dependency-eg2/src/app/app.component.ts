import { Component } from '@angular/core';
import {LoggingService} from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-dependency-eg1';
  constructor(private loggingService: LoggingService) {
    this.loggingService.logMessage("AppComponent Html");
  }
}
