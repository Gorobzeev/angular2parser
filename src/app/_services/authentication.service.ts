import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import {ContentType} from '@angular/http/src/enums';


@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const payload = JSON.stringify({email: username, password: password});
    console.log('AuthenticationService, login() username - ' + username, 'password - ' + password);
    return this.http.post('http://localhost:9091/user/login?deviceId=rhsrthhh6yrhytrhyt', payload, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json().data.Authorization;
        console.log('token - ' + token);
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({email: username, token: token}));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
