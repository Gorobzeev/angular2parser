import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {FacebookService, InitParams, LoginOptions, LoginResponse} from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService, private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '1861755667486747',
      xfbml: true,
      version: 'v2.8'
    };
    fb.init(initParams);
  }


  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    console.log('LoginComponent, login(), username - ' + this.model.username, 'password - ' + this.model.password);
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

  loginWithFacebook(): void {
    // const loginOptions: LoginOptions = {
    //   enable_profile_selector: true,
    //   return_scopes: true,
    //   scope: 'email,public_profile'
    // };
    console.log('loginWithFacebook()');
    this.fb.login()
      // .then((response: LoginResponse) => console.log(response))
      // .catch((error: any) => console.error(error));
      .then((response) => {
        const promise = this.fb.api('/me?fields=id,name,first_name,gender,email');
        promise.then((res) => {
          alert(JSON.stringify(res));
          console.log(res);
          console.log('username - ' + res.name);
          console.log('email - ' + res.email);
        });
        console.log(response);
        // console.log(promise);
      });
  }

}
