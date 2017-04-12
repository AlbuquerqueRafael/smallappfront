import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService ]
})
export class UserComponent{
  constructor(private router: Router,
              private userService: UserService) { }

  message = undefined;
  username: any;
  password: any;
  
  public login(username, password) {

    this.userService.login(username, password).subscribe(data => {
              password = null;

              this.userService.authUser(data);

          }, error => {
              this.message = error._body;
              console.log(error._body);
          });

  }

}
