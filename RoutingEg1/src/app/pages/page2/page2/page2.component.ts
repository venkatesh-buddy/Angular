import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInOutAnimation } from 'src/app/animation';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  animations: [slideInOutAnimation]
})
export class Page2Component implements OnInit {
  logged: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private auth: AuthService) {
    this.logged = this.auth.getLoggedIn();
  }

  ngOnInit() {
   console.log('parameters::' + this.activeRoute.snapshot.paramMap.get('id'));
  }
 activate(link: string): void {
    console.log('Activated link::' + link); // to-do class make it active respectively
    this.router.navigate([link], { relativeTo: this.activeRoute});
  }

}
