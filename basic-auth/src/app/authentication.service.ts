import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(loginModel : LoginModel): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': 'Basic ' +btoa(loginModel.userName + ":" + loginModel.password)}
      )}
  //  return this.httpClient.post<any>('http://localhost:8082/login', null, httpOptions).pipe(
    //  catchError(this.handleError)
    
    return this.httpClient.post<any>('http://192.168.99.100:8080/login', null, httpOptions).pipe(
      catchError(this.handleError));

  }
  handleError(error: HttpErrorResponse) {
    console.log("lalalalalalalala"+ error);
    return 'error';
  }
}
