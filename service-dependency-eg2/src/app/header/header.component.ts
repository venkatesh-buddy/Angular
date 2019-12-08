import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers :[LoggingService] // It will create new instance, 
  //if you remove logging service constructor won't invoked
})
export class HeaderComponent implements OnInit {

 constructor(private loggingService: LoggingService) {
    this.loggingService.logMessage("Header Component");
   }

  ngOnInit() {
  }

}
