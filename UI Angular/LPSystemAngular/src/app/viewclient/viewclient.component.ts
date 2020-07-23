import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.css']
})
export class ViewclientComponent implements OnInit {
  usersAll;
  clients; //list of clients
  constructor(public clientService: UserService, private route: Router) { }

  ngOnInit(): void {
    //retrieves list of clients details 
    this.clientService.getAllClient().
      subscribe(resp => {
        // console.log(resp);
        this.usersAll = resp;
        this.clients = this.usersAll.filter(resp => {
          return resp.UserRole.toLowerCase().includes('client')
        })
        // console.log('getting all clients', this.clients)
      }, err => {
        console.log(err);
        alert('Http Error: ' + err.message);
      }, () => {

      })
  }

  // method of deleting the client
  deleteClient(client) {
    let cnf = confirm("Press Ok to delete the client details");
    if (cnf == true) {
      this.clientService.deleteUser(client.UserId);
      setTimeout(() => {
        this.ngOnInit();
      }, 500);
      // this.route.navigate(['viewclient']);
    }
    else { }
  }

}
