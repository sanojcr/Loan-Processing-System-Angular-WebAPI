import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService) { }

  // userName = 'Loading';

  ngOnInit() {
    // if (localStorage.getItem('user')) {
    //   this.userName = JSON.parse(localStorage.getItem('user')).UserName;
    //   console.log(this.userName);
    // }
  }

}
