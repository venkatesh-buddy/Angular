import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  logged: string;
  constructor(private route: ActivatedRoute, private auth: AuthService) {
    console.log('Content Component::' + this.auth.getLoggedIn());
    this.logged = this.auth.getLoggedIn();
   }

  ngOnInit() {
    console.log('content Component init::' + this.route.snapshot.queryParamMap.get('from'));
  }

}
