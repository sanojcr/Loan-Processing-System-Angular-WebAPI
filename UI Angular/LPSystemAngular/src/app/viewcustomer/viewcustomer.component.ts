import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  usersAll;
  customers; //list of customers

  constructor(public clientService: UserService) { }

  ngOnInit(): void {
    //retrieves list of customers details 
    this.clientService.getAllClient().
      subscribe(resp => {
        // console.log(resp);
        this.usersAll = resp;
        this.customers = this.usersAll.filter(resp => {
          return resp.UserRole.toLowerCase().includes('customer')
        })
        // console.log('getting all customers', this.customers)
      }, err => {
        console.log(err);
        alert('Http Error: ' + err.message);
      }, () => {

      })
  }

}
