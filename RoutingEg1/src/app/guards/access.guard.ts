import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate  {
  constructor(private authService: AuthService) {
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
