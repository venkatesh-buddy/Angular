import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MenusComponent } from './sidebar/menus/menus.component';
import { Page1Component } from './pages/page1/page1/page1.component';
import { PageResolver } from './pages/page-resolver';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header/header.component';
import { NotifyComponent } from './notification/notify/notify.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  
  { path: 'home', component: ContentComponent},
  { path: 'notify', component: NotifyComponent, outlet: 'popup'},
  { path: 'pageSubmenu', component: Page1Component,
    resolve : {
      res : PageResolver
    }}
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
    //,  { enableTracing: true }
     )],
  exports: [RouterModule],
  providers: [PageResolver]
})
export class AppRoutingModule { //, outlet: 'popup' 
}
