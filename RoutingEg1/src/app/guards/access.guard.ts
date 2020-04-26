import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate, CanLoad  {
  constructor(private authService: AuthService) {
  }
  
  /***
   * CanLoad. CanLoad is a route guard to decide 
   * if a module can be loaded configured with loadChildren property.
   *  loadChildren property is a reference to lazy loaded child routes. ... 
   * When Angular try to access a module protected by CanLoad either by
   *  preloading or lazy loading, then canLoad method of our
   *  service will run
   */
  //Currently its not enabled due to page and subpage are categarized properly
  // instead of canActivate in routing module call canLoad
  canLoad(route: Route): boolean {
    console.log('canLoad::');
   return false;
  }
  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log('Access Guard:::' + state.url);
    return this.checkAccess();
  }
  checkAccess() {
    console.log('this.authService.getLoggedIn()::' + this.authService.getLoggedIn());
    if (this.authService.getLoggedIn() !== undefined) {
      return true;
    }
    return false;
  }
  
}
