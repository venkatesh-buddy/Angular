import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesEg1';
  onlyodd = true;
  value = '20';

  oddNumbers = [1, 3, 5, 7];
  evenNumbers = [2, 4, 6, 8, 10];
  buttonLabel = "Displaying odd numbers";
  
  toggle(onlyodd: any){
    console.log('onlyodd::' + onlyodd);
    if (onlyodd === true){
      this.buttonLabel = "Displaying even numbers";
      this.onlyodd =false;
    }else{
      this.buttonLabel = "Displaying odd numbers";
      this.onlyodd = true;
    } 

  }

  
}
