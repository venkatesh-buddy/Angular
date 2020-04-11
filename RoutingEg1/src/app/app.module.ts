import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Page1Component } from './pages/page1/page1/page1.component';
import { Page2Component } from './pages/page2/page2/page2.component';
import { Page3Component } from './pages/page3/page3/page3.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MenusComponent } from './sidebar/menus/menus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    PortfolioComponent,
    ContactComponent,
    MenusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
