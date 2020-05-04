import { Component, OnInit } from '@angular/core';
import { SignUpModel } from '../model/SignupModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpModel: SignUpModel = {
    name: 'Test1',
    email: 'test1@email.com',
    mobile: 1234567890,
    address: 'Test Address',
    city: 'Test City',
    state: 'Test State',
    country: 'Test Country',
    pincode: 123456
  };

  constructor() { }

  ngOnInit() {
  }

  save(signModel: NgForm){
    console.log('Save signupModel::' + JSON.stringify(signModel.value));
  }

}
