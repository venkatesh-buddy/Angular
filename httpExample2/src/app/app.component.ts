import { Component } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpExample2';
  private user: User[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getUser().subscribe((res: any[]) => {
      this.user = res;
      console.log('User::' + this.user[0].address.street);
    });
  }

}
