import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Page2Component } from './page2/page2/page2.component';
import { Page3Component } from './page3/page3/page3.component';
import { TabContentComponent } from './page2/child/tab-content/tab-content.component';

const routes: Routes = [{path: 'home', component: ContentComponent},
  { path: 'pages/route/:id/page', component: Page3Component }, // just to check route.navigate
  { path: 'pages/:id/page', component: Page2Component,
    children: [{ path: 'home', component: TabContentComponent, pathMatch: 'full'},
      { path: 'profile', component: TabContentComponent, pathMatch: 'full'},
      { path: 'contact', component: TabContentComponent, pathMatch: 'full'}
              ] },
   { path: 'home', component: ContentComponent }
  , { path: 'pages/*', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
