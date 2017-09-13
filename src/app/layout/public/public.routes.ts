
import {Routes} from '@angular/router';
import {LoginComponent} from '../../public/login/login.component';
import {HomeComponent} from '../../public/home/home.component';
import {AboutComponent} from '../../public/about/about.component';


export const PUBLIC_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'login', component: LoginComponent }
];
