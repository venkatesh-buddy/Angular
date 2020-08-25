import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { LoanService } from './service/loan.service';
import { LoanModel } from './loan.model';
import { loanData } from './loandetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  private loan : LoanModel[];

  constructor(private loanService: LoanService){

  }
  ngOnInit() {
   this.loanService.getLoanDetails().subscribe((res: LoanModel[]) => {
     this.loan = res;
     console.log('Loan response::' + JSON.stringify(this.loan));
   });
  }
  //public gridData: any[] = products;
  //public gridData: any[] = loanData;
}
