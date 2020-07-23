import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit {

  loans;
  // value = false;
  constructor(public loanService: LoanService, public userService: UserService) { }

  ngOnInit() {
    //retrieves list of loans
    this.loanService.getAllLoans().subscribe(resp => {
      // console.log(resp);
      this.loans = resp;
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("loan details retrieved successfully");
    }
    )
  }
}
