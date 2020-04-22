import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../animation';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [slideInOutAnimation]
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  logged: string;
  constructor(private route: Router, private auth: AuthService) {
   }

  ngOnInit() {
  }

  authenticate(username: string, pwd: string) {
    console.log('Login component:::' + username + '::' + pwd);
    // tslint:disable-next-line:no-unused-expression
    this.auth.isLoggedIn = 'true';
    this.logged = this.auth.getLoggedIn();
   this.route.navigate(['/landing']);
   //this.route.navigateByUrl('/landing');
   // this.route.navigate([{ outlets: { primary: ['/landing'], land: ['main']} }]);
    //[routerLink]="[{ outlets: { primary: ['products'],sidebar: ['products'] } }]
    //this.route.navigate(['']);
    //this.router.navigate([{ outlets: { main: null } }]);
  //  this.route.navigate([{ outlets: { main: ['landing'] } }]);

    console.log('navigate::'+this.logged);
  }

}
