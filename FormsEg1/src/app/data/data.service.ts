import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { Observable, of } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserData(userModel: UserModel): Observable<UserModel> {
    /**https://putsreq.com**/
    /***
     * In Response builder paste the below
     * var res = JSON.parse(request.body);
      res.test='T1';
      response.body= res;
     */

     /**
      * For error in response builder paste the below
      * response.status=400;
        response.body ={errorMessage: 'Unable to reach the server'};
      */
    return this.http.post<UserModel>('https://putsreq.com/scCD81kBNQNdkUmBEza5', userModel);
//    return of(userModel);
  }
}
