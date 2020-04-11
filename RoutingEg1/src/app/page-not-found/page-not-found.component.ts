import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id'); // To-do not getting the value need to check
    console.log('ngOnInit parameters::' + id);
  }

}
