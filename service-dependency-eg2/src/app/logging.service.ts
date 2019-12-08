import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  value : number =1;
  constructor() 
  {
    console.log("Loggingservice initialized");
    ++this.value;
   }
  logMessage(message: any) {

    console.log("welcome logging service:::"+message+this.value);
  }
}
