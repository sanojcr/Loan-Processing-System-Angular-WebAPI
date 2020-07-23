import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { format } from 'url';
import { AuthenService } from '../authen.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userAuthe: AuthenService, private fb: FormBuilder, public userService: UserService, public router: Router) { }

  user;

  ngOnInit() {
    //reactive form validation
    this.user = this.fb.group({
      useremail: ['', [Validators.required, Validators.email]],
      userpass: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    })
  }

  // method of validating the user credentials and redirecting to user (admin/client/customer) home page 
  login() {
    this.userService.checkUserExist(this.user.value).subscribe(resp => {
      if (resp != null) {

        this.userService.checkLogin(this.user.value).subscribe(data => {
          // console.log(data);
          if (data != null) {
            // console.log("Correct login correct");
            localStorage.setItem('user', JSON.stringify(data));
            this.userAuthe.tokenGen(this.user.value).subscribe(auth => {
              // console.log(auth);
              localStorage.setItem('userToken', auth.access_token);
            }, err => {
              console.log('Error occured during the token creation');
            })
            alert("Logged in successfully");
            this.router.navigateByUrl('/home');
          }
          else {
            // console.log("Incorrect login deatails");
            alert("Wrong password, Try again");
            this.user.reset();
          }
        }, err => {
          console.log(err);
          alert('Http Error: ' + err.message);
        }, () => {

        }
        )
      }
      else {
        alert("Couldn't find your account, register first");
        this.user.reset();
      }
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {

    })
  }
}
