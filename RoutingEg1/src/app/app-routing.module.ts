import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading} from '@angular/router';
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
import { SelectivePreloadingStrategy } from './loadingstrategy/selective-preloading-strategy';


const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'home', component: ContentComponent},
  { path: 'notify', component: NotifyComponent, outlet: 'popup'},
  { path: 'pageSubmenu', component: Page1Component,
    resolve : {
      res : PageResolver
    }
    ,
    //data: {preload: true, delay: false}, // for custom preloading strategy not working
    //enable/disable the  loadChildren and see after clicking pageSubmenu *.js will be loaded 
    // in network for building use ng serve -o --prod
   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
    //,  { enableTracing: true }
      , { preloadingStrategy: NoPreloading } //SelectivePreloadingStrategy, PreloadAllModules, NoPreloading
     )],
  exports: [RouterModule],
  providers: [PageResolver]
})
export class AppRoutingModule { //, outlet: 'popup' 
}
