import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewloanadmin',
  templateUrl: './viewloanadmin.component.html',
  styleUrls: ['./viewloanadmin.component.css']
})
export class ViewloanadminComponent implements OnInit {

  loans;
  constructor(public loanService: LoanService, userService: UserService) { }

  ngOnInit() {
    //retrieves list of loans
    this.loanService.getAllLoans().subscribe(resp => {
      // console.log(resp);
      this.loans = resp;
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
    })
  }

  // method of deleting the loan details
  deleteLoan(loan) {
    let cnf = confirm("Press Ok to delete the loan details");
    if (cnf == true) {
      this.loanService.deleteLoan(loan.LoanId);
      setTimeout(() => {
        this.ngOnInit();
      }, 500);

    }
    else { }
  }

}
