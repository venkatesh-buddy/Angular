import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginModel:LoginModel = {
     userName :'',
     password : ''
   }
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
 
  }

  save(formData: NgForm){
    console.log('any::'+this.loginModel.userName);
    this.authenticationService.login(this.loginModel).subscribe((res: any)=>{
      console.log('res::'+res.message);
      if(res.message==='success'){
        alert('Succesfully logged in');
      }else{
        alert('Please enter the correct username and password');
      }

    });

  }

}
