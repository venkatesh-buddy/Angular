import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInOutAnimation } from 'src/app/animation';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  animations: [slideInOutAnimation]
})
export class Page2Component implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
   console.log('parameters::' + this.activeRoute.snapshot.paramMap.get('id'));
  }
 activate(link: string): void {
    console.log('Activated link::' + link); // to-do class make it active respectively
    this.router.navigate([link], { relativeTo: this.activeRoute});
  }

}
