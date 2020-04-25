import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Page2Component } from 'src/app/pages/page2/page2/page2.component';

@Injectable({
  providedIn: 'root'
})
export class PagedeactivateGuard implements CanDeactivate<Page2Component>  {
  canDeactivate(component: Page2Component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('currentState::' + currentState.url);
    console.log('nextState::' + nextState.url);
    return this.checkConfirmation(currentState.url, nextState.url);
  }

  checkConfirmation(currentState: string, nextState: string) {
    if (currentState !== nextState) {
      if (confirm('Are you sure want to leave the page?')) {
        return true;
      }
      return false;
    }
    return true;
  }
  
}
