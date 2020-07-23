import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private fb: FormBuilder, public userService: UserService, public router: Router) { }

  newClient;

  ngOnInit() {
    //reactive form validation
    this.newClient = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[A-Z][a-z]+([\ A-Za-z]+)*")]],
      useremail: ['', [Validators.required, Validators.email]],
      userpass: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), Validators.minLength(8)]],
      usergender: ['', [Validators.required,]],
    })
  }

  // method of registering a client into the system
  register() {
    // console.log(this.newClient.value);
    let userExist = {
      useremail: this.newClient.value.useremail,
      userpass: "",
    }
    this.userService.checkUserExist(userExist).subscribe(resp => {
      if (resp == null) {
        let clientform = {
          username: this.newClient.value.username,
          useremail: this.newClient.value.useremail,
          usergender: this.newClient.value.usergender,
          userpass: this.newClient.value.userpass,
          userrole: 'Client',
        }
        this.userService.registerUser(clientform);
        alert("Client details added successfully")
        this.router.navigateByUrl('viewclient');
      }
      else {
        alert("Email id is already exists, try with different one")
      }
    }
    )
  }

}
