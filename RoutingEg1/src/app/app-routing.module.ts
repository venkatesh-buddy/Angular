import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './sidebar/menus/menus.component';
import { Page1Component } from './pages/page1/page1/page1.component';
import { PageResolver } from './pages/page-resolver';


const routes: Routes = [{ path: '', component: HomeComponent},
  { path: 'pageSubmenu', component: Page1Component,
    resolve : {
      res : PageResolver
    }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes
    //,  { enableTracing: true }
     )],
  exports: [RouterModule],
  providers: [PageResolver]
})
export class AppRoutingModule { }
