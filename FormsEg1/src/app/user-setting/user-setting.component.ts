import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  userModel: UserModel = {
    name: 'Venkatesh',
    emailOffers: true,
    interfacestyle: 'mediumInterface',
    subscriptionType: 'Life Time',
    notes: 'Testing Template driven form',    
  };
   
  postErrorMsg = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onsubmit(form: NgForm) {
     console.log('form::' + form.valid);
     this.dataService.postUserData(this.userModel).subscribe(
       u => console.log('data::', u),
       error =>  this.onHttpError(error)     //console.log('error::', error)
      );
  }

  onHttpError(errorResponse:any){
    this.postErrorMsg = errorResponse.error.errorMessage;
    console.log('this.postErrorMsg::' + this.postErrorMsg)
  }

}
