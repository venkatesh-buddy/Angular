import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Page2Component } from './page2/page2/page2.component';
import { Page3Component } from './page3/page3/page3.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
  { path: 'pages/route/:id/page', component: Page3Component }, // just to check route.navigate
  { path: 'pages/:id/page', component: Page2Component },
   { path: 'home', component: HomeComponent }
  , { path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
