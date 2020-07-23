import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrls: ['./checkstatus.component.css']
})
export class CheckstatusComponent implements OnInit {

  applicationsAll;
  applications; //list of application respect to the user

  constructor(public applService: ApplicationService) { }
  ngOnInit(): void {
    //retrieves list of loan application based on the customer id
    this.applService.getAllApp().
      subscribe(resp => {
        // console.log(resp);
        this.applicationsAll = resp;
        let userId = JSON.parse(localStorage.getItem('user')).UserId;
        // console.log(userId)
        this.applications = this.applicationsAll.filter(resp => {
          return resp.UserId == userId;
        })
        // console.log('getting user application', this.applications);
        // console.log('getting user application', this.app)
      }, err => {
        console.log(err);
        alert('Http Error: ' + err.message);
      }, () => {

      })
  }
}
