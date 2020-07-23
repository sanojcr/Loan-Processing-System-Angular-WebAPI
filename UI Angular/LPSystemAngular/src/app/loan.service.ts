import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private urlLoan = "https://localhost:44365/api/LoanTables"

  constructor(public http: HttpClient) { }

  // service of retrieving all loans
  getAllLoans(): Observable<any> {
    return this.http.get(this.urlLoan);
  }

  // service of retrieving loan by using loan id
  getLoanById(loanId): Observable<any> {
    return this.http.get(this.urlLoan + '/' + loanId);
  }
  // service of regestering a loan
  registerLoan(loanData) {
    this.http.post(this.urlLoan, loanData).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("loan details added successfully");
    }
    )
  }
  // service of deleting a loan
  deleteLoan(loanId) {
    this.http.delete(this.urlLoan + '/' + loanId).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("loan details deleted successfully");
    })
  }
  // service of updating a loan
  updateLoan(loan) {
    this.http.put(this.urlLoan + '/' + loan.LoanId, loan).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("loan details updated successfully");
    })
  }
}
