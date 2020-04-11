import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../../user';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  user: User[];

  constructor(private route: Router, private activateRoute: ActivatedRoute, private userService: UserService) {
   /*  this.userService.getItems().subscribe((item: any[]) => {
      this.it = item;

    }); */
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


