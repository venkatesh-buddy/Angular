import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('Home Component');
   }

  ngOnInit() {
    console.log('Home Component init::' + this.route.snapshot.queryParamMap.get('from'));
  }

}
