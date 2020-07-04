import { Component, OnInit } from '@angular/core';
import { DraftableApiService } from './services/draftable-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comparepdf';
  content: string;

  constructor(private sanitizer: DomSanitizer, private draftableApiService: DraftableApiService) {
        
  }
  ngOnInit() {
    this.draftableApiService.getPdfCompare().subscribe((res: any) => {
      console.log("res::" + res);
      this.content = res;
    });
  }


}
