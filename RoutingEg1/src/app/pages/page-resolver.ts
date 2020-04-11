import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { User } from '../user';
import { OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
    providedIn: 'root'
})
export class PageResolver implements Resolve<User[]> {
    constructor(private userService: UserService) {
        console.log('Page Resolver');

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     User[] | Observable<User[]> | Promise<User[]> {
       return  this.userService.getUser();
    }
}
