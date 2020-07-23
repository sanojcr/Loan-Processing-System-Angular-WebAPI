import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private urlApp = "https://localhost:44365/api/ApplTables"
  constructor(public http: HttpClient) { }

  // service of retrieving all loan applications
  getAllApp(): Observable<any> {
    return this.http.get(this.urlApp);
  }
  // service of regestering a loan application
  registerApp(appData) {
    this.http.post(this.urlApp, appData).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("application added successfully");
    }
    )
  }
  // service of updating a loan application
  putApp(appId, app) {
    this.http.put(this.urlApp + '/' + appId, app).subscribe(data => {
      // console.log(data);
    }, err => {
      console.log(err);
      alert('Http Error: ' + err.message);
    }, () => {
      console.log("application updated successfully");
    })
  }
}
