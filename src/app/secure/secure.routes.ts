import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
export const SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];
