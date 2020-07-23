import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-checkapplication',
  templateUrl: './checkapplication.component.html',
  styleUrls: ['./checkapplication.component.css']
})
export class CheckapplicationComponent implements OnInit {

  applications; //list of applications
  listOfLoans;

  constructor(public applService: ApplicationService, public loanService: LoanService) { }

  ngOnInit() {
    //retrieves list of loan applications
    this.applService.getAllApp().subscribe(resp => {
      // console.log(resp);
      this.applications = resp;
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {

    })
    //retrieves list of loans
    this.loanService.getAllLoans().subscribe(data => {
      this.listOfLoans = data;
      // console.log(this.listOfLoans);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {

    })
  }
}
