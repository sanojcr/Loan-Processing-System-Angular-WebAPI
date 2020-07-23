import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(public userService: UserService, private route: Router) { }

  user; // user details

  ngOnInit() {
    //retrieves user (admin/client/customer/) details from local storage
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      // console.log(this.user);
    }
  }

  // method of updating the user (admin/client/customer/) details 
  update(form: NgForm) {
    form.value.userid = this.user.UserId;
    form.value.userrole = this.user.UserRole;
    // console.log(form.value);
    this.userService.updateUser(form.value);
    // this.route.navigate(['/myprofile']);
    this.route.navigate(['/login']);
    this.ngOnInit();
    alert("User details updated successfully\r");
    this.userService.logout();
  }
}
