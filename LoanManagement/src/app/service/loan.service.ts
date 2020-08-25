import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanModel } from '../loan.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private loan: LoanModel[];

  constructor(private httpClient: HttpClient) { }


  getLoanDetails(): Observable<LoanModel[]> {
   // return this.httpClient.get<LoanModel[]>('http://localhost:8080/loanDetails');
    return this.httpClient.get<LoanModel[]>('http://192.168.99.100:8082/loanDetails');
    //.pipe(
    //  catchError(this.handleError));
  }

  /* handleError(error: HttpErrorResponse) {
    console.log('lalalalalalalala' + error);
    return any[];
  } */
}
