import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { TabContentComponent } from './page2/child/tab-content/tab-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [TabContentComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BrowserAnimationsModule
  ],
  providers : [UserService]
})
export class PagesModule {
 }
