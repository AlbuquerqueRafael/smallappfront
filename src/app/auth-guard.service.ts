import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { UserService} from './user/user.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (state.url === "/" && this.userService.isAuthenticated()) {
       this.router.navigate(['/home']);
            return false;
    }else if(state.url !== "/"  && !this.userService.isAuthenticated()){
      this.router.navigate(['/']);
    }

    return true;
  }
}
