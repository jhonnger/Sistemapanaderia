import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable()
export class AuthGuardService implements CanActivate {


  jwtHelper;

  constructor(public auth: AuthService,
              public router: Router) {
    this.jwtHelper = new JwtHelperService();
  }


  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token == null) {
      this.router.navigate(['login']);
      return false;
    }
    const tokenPayload = this.jwtHelper.decodeToken(token);

    if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
    }
    return true;
  }
}
