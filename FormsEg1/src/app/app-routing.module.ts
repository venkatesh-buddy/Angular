import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactusComponent } from './reactiveform/contactus/contactus.component';


const routes: Routes = [
  {path: 'user', component: UserSettingComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'contact', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
