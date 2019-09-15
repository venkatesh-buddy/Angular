import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraContainerComponent } from './extra-container/extra-container.component';


const routes: Routes = [{path : 'weather', pathMatch : 'full', component: ExtraContainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
