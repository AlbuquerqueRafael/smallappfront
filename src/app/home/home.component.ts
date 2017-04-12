import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent  {
  constructor(private router: Router,
              private userService: UserService) { }

  username = this.userService.getLoggedUser()

  public logout() {
      this.userService.logout();
  }

}
