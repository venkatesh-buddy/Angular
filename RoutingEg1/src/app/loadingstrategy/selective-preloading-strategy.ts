import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: import("@angular/router").Route, fn: () => Observable<any>): Observable<any> {
    console.log('Preloading strategy1::::');
    if (route.data != null && route.data['preload']){
      console.log('Preloading strategy::::' + route.data['preload']);
      return fn();
    }
    return of(null);
  }
  
}
