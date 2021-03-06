import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../../user';
import { slideInOutAnimation } from 'src/app/animation';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations: [slideInOutAnimation]
})
export class Page1Component implements OnInit {
  user: User[];
  logged: string;

  constructor(private route: Router, private activateRoute: ActivatedRoute, private userService: UserService,
              private auth: AuthService) {
   /*  this.userService.getItems().subscribe((item: any[]) => {
      this.it = item;

    }); */
    this.logged = this.auth.getLoggedIn();
    this.user = this.activateRoute.snapshot.data['res'];
    console.log('user:::' + this.user);

   }

  ngOnInit() {
  }
  routePage(id: number) {
    if (id === 3) {
      this.route.navigate(['pages/route/' + id + '/page']);
    } else {
      this.route.navigate(['/**']);
    }
  }

}


