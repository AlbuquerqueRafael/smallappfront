import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(
     private http: Http,
     private router: Router
  ) { }

  public login(username, password){

    var data = { username: username, password: password};

    return this.http.post('https://smallappapi.herokuapp.com/api/user/login',data);
  }

  public isAuthenticated(){
    if(window.sessionStorage.getItem('user') === null){
      return false;
    }else{
      return true;
    }
  }

  public authUser(data){
    window.sessionStorage.setItem('user', JSON.stringify(data._body));
    this.router.navigate(['/home']);
  }

  public getLoggedUser(){
    let a = JSON.parse(window.sessionStorage.getItem('user'))
    let jsonObject = JSON.parse(a)
    return jsonObject;
  }

  public logout() {
    	window.sessionStorage.clear();
    	this.router.navigate(['/']);
  }
}
