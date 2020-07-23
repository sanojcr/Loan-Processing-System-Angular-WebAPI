import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-editloan',
  templateUrl: './editloan.component.html',
  styleUrls: ['./editloan.component.css']
})
export class EditloanComponent implements OnInit {


  loanDummy;

  constructor(public activatedRoute: ActivatedRoute, public loanService: LoanService, private route: Router) { }

  ngOnInit(): void {
    //retrieves loan details based on the loan id
    this.activatedRoute.params.subscribe(data => {
      // console.log(data.loanId);
      this.loanService.getLoanById(data.loanId).subscribe(
        resp => {
          // console.log(resp);
          this.loanDummy = resp;
        }
      )
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {

    })
  }

  // method of updating the loan details 
  loanUpdate(form: NgForm) {
    form.value.LoanId = this.loanDummy.LoanId;
    // console.log(form.value);
    this.loanService.updateLoan(form.value);
    this.route.navigate(['/viewloanadmin']);
    this.ngOnInit();
    alert("Loan details updated successfully");
  }
}
