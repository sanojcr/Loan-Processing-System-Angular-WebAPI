import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = "https://localhost:44365/api/UserTables"

  constructor(public http: HttpClient, public router: Router) { }

  // service of regestering a user (client)
  registerUser(userData) {
    this.http.post(this.urlUser, userData).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("user added successfully");
    }
    )
  }
  // service of checking a user credentials (admin/clients/customer)
  checkLogin(userData): Observable<any> {
    return this.http.post("https://localhost:44365/api/LoginAuth", userData);
  }

  checkUserExist(userData): Observable<any> {
    return this.http.post("https://localhost:44365/api/IfUserExist", userData);
  }


  // service of regestering a user (customer)
  registerUserApp(userData): Observable<any> {
    return this.http.post(this.urlUser, userData);
  }

  // service of retrieving all user (admin/clients/customer)
  getAllClient(): Observable<any> {
    return this.http.get(this.urlUser);
  }
  // service of retrieving all user (admin/clients/customer)
  getAllUser(): Observable<any> {
    return this.http.get(this.urlUser);
  }
  // service of updating a user details (admin/clients/customer)
  updateUser(user) {
    this.http.put(this.urlUser + '/' + user.userid, user).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("user updated successfully");
    })
  }
  // service of deleting a user (admin/clients/customer)
  deleteUser(userId) {
    this.http.delete(this.urlUser + '/' + userId).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("user deleted successfully");
    })
  }

  //service to identify that the admin is logged in
  isAdminLogin() {
    let userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      if (userData.UserRole === 'Admin') {
        return true;
      }
      else {
        return false;
      }
    }
  }
  //service to identify that the customer is logged in
  isCustomerLogin() {
    let userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      if (userData.UserRole === 'Customer') {
        return true;
      }
      else {
        return false;
      }
    }
  }
  //service to identify that the client is logged in
  isClientLogin() {
    let userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      if (userData.UserRole === 'Client') {
        return true;
      }
      else {
        return false;
      }
    }
  }
  //service to logout from the system
  logout() {
    localStorage.clear();
    alert("Logged out successfully");
    this.router.navigate(['/home']);
  }
}
