import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newloan',
  templateUrl: './newloan.component.html',
  styleUrls: ['./newloan.component.css']
})
export class NewloanComponent implements OnInit {

  constructor(private fb: FormBuilder, public loanService: LoanService, public router: Router) { }

  loanDetails;

  ngOnInit() {
    //reactive form validation
    this.loanDetails = this.fb.group({
      loantype: ['', [Validators.required, Validators.minLength(5)]],
      loanamt: ['', [Validators.required, Validators.min(100000), Validators.max(2500000), Validators.pattern("[^a-z ]\ *([.0-9])*")]],
      loanroi: ['', [Validators.required, Validators.min(1), Validators.max(20), Validators.pattern("[^a-z ]\ *([.0-9])*")]],
      loanperiod: ['', [Validators.required, Validators.min(1), Validators.max(10), Validators.pattern("[^a-z ]\ *([.0-9])*")]],
    })
  }

  // method of registering new loan details
  loanReg() {
    // console.log(this.loanDetails.value);
    this.loanService.registerLoan(this.loanDetails.value);
    alert("Loan details added successfully")
    this.router.navigate(['/viewloanadmin']);
  }

}
