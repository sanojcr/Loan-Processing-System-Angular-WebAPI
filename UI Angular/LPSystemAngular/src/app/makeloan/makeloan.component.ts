import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { ApplicationService } from '../application.service';


@Component({
  selector: 'app-makeloan',
  templateUrl: './makeloan.component.html',
  styleUrls: ['./makeloan.component.css']
})
export class MakeloanComponent implements OnInit {

  constructor(public applService: ApplicationService, public loanService: LoanService, private fb: FormBuilder, public userService: UserService, public router: Router) { }


  loanApp;
  listOfLoans;
  loanAmount;
  loanValid;

  ngOnInit() {
    //reactive form validation
    this.loanApp = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[A-Z][a-z]+([\ A-Za-z]+)*")]],
      usermob: ['', [Validators.required, Validators.pattern("^([\+0]91)?\-?[7-9]{1}[0-9]{9}$")]],
      useremail: ['', [Validators.required, Validators.email]],
      useradhaar: ['', [Validators.required, Validators.pattern("^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$")]],
      userpass: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), Validators.minLength(8)]],
      usergender: ['', [Validators.required,]],
      loantype: ['', [Validators.required,]],
      loanamt: ['', [Validators.required, Validators.max(2500000), Validators.pattern("[0-9]*")]],
    })
    //retrieves list of all loan application
    this.loanService.getAllLoans().subscribe(data => {
      this.listOfLoans = data;
      // console.log(this.listOfLoans);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {

    })
  }

  // method of registering the customer and applying for a loan
  register() {
    // console.log(this.loanApp.value);

    let userExist = {
      useremail: this.loanApp.value.useremail,
      userpass: "",
    }
    this.userService.checkUserExist(userExist).subscribe(resp => {
      if (resp == null) {
        let userform = {
          username: this.loanApp.value.username,
          useremail: this.loanApp.value.useremail,
          usergender: this.loanApp.value.usergender,
          userpass: this.loanApp.value.userpass,
          userrole: 'Customer',
        }

        let user;
        this.userService.registerUserApp(userform).subscribe(resp => {
          user = resp;
          let applForm = {
            userid: user.UserId,
            usermob: this.loanApp.value.usermob,
            useradhaar: this.loanApp.value.useradhaar,
            loanid: this.loanApp.value.loantype,
            loanamt: this.loanApp.value.loanamt,
            appstatus: 'Requested',
          }
          // console.log(applForm);
          this.applService.registerApp(applForm);
        }, err => {
          console.log(err);
        }, () => {
          console.log("customer with loan details added successfully");
        })

        alert("Loan application for loan id " + this.loanApp.value.loantype + " applied successfully\r\nYou can login by using '" + this.loanApp.value.useremail + "' user id")
        this.router.navigate(['/login']);
      }
      else {
        alert("Email id is already exists, try with different one")
      }
    })
  }

  // method of retreiving loan amount based on loan id
  takeAmount(value: Number) {
    this.listOfLoans.forEach(element => {
      if (element.LoanId == value) {
        // console.log(this.loanAmount);
        localStorage.setItem('amount', element.LoanAmt);
      }
    });
    this.loanAmount = Number(localStorage.getItem('amount'));
    this.loanValid = Number(localStorage.getItem('amount'));
    localStorage.removeItem('amount');

  }
}
