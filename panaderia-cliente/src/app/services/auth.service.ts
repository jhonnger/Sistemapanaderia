import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AppSettings } from '../endPoint.config';

@Injectable()
export class AuthService {

  jwtHelper;
    url = AppSettings.API_ENDPOINT + 'api/login';
    constructor(private http: HttpClient) {

      this.jwtHelper  = new JwtHelperService();
    }

    login(user: string, password: string) {

        return this.http.post( this.url, { email: user, password})
          .pipe(map( res => {
            console.log(res)
            return res;
          }
          ));
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        if (token != null) {
            return !this.jwtHelper.isTokenExpired(token);
        }
        return false;
    }
}
