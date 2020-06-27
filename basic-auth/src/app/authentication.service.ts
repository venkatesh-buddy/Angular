import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(loginModel : LoginModel): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': 'Basic ' +btoa(loginModel.userName+":"+loginModel.password)}
      )}
    //return this.httpClient.post<any>('http://localhost:8080/login', null, httpOptions);
    return this.httpClient.post<any>('http://192:168:99:100:8080/login', null, httpOptions);

  }
}
