import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  user;
  constructor() { }


  ngOnInit() {
    //retrieves user (admin/client/customer/) details from local storage
    this.user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.user);
  }

}
