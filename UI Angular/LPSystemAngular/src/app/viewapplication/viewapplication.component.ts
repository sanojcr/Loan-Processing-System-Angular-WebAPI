import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ApplicationService } from '../application.service';


@Component({
  selector: 'app-viewapplication',
  templateUrl: './viewapplication.component.html',
  styleUrls: ['./viewapplication.component.css']
})
export class ViewapplicationComponent implements OnInit {

  applicationsAll;
  applications; //list of applications
  constructor(public applService: ApplicationService, public router: Router) { }

  ngOnInit() {
    //retrieves list of loan applications based on the requested status
    this.applService.getAllApp().subscribe(resp => {
      // console.log(resp);
      this.applicationsAll = resp;
      this.applications = this.applicationsAll.filter(resp => {
        return resp.AppStatus.toLowerCase().includes('requested')
      })
      // console.log(this.app);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {

    })
  }

  // method of approving the loan application
  appApprove(application) {
    let cnf = confirm("Press Ok to approve the loan application");
    if (cnf == true) {

      let applForm = {
        AppId: application.AppId,
        UserId: application.UserId,
        UserMob: application.UserMob,
        UserAdhaar: application.UserAdhaar,
        LoanId: application.LoanId,
        LoanAmt: application.LoanAmt,
        AppStatus: 'Approved',
      }
      // console.log(applForm);
      this.applService.putApp(applForm.AppId, applForm);
      this.ngOnInit();
      this.router.navigate(['checkapplication']);
    }
    else { }
  }

  // method of rejecting the loan application
  appReject(application) {
    let cnf = confirm("Press Ok to reject the application");
    if (cnf == true) {
      let applForm = {
        AppId: application.AppId,
        UserId: application.UserId,
        UserMob: application.UserMob,
        UserAdhaar: application.UserAdhaar,
        LoanId: application.LoanId,
        LoanAmt: application.LoanAmt,
        AppStatus: 'Rejected',
      }
      // console.log(applForm);
      this.applService.putApp(applForm.AppId, applForm);
      this.ngOnInit();
      this.router.navigateByUrl('checkapplication');
    }
    else { }
  }
}
