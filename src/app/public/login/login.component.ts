import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

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

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }


    ngOnInit() {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/user']);
        }
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        console.log('LoginComponent, login(), username - ' + this.model.username, 'password - ' + this.model.password);
        localStorage.setItem('currentUser', JSON.stringify({email: 'test@mail.com', token: 'token'}));
        this.router.navigate(['/user']);
        this.loading = false;
    }

    register() {
        console.log('Registration()');
    }
}
