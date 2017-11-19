
import {Routes} from '@angular/router';
import {LoginComponent} from '../../public/login/login.component';
import {RegisterComponent} from '../../public/register/register.component';


export const PUBLIC_ROUTES: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent }
];
