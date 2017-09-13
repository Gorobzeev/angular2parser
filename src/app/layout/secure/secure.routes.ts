import { HomeComponent } from './../../secure/home';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';
import {LibraryComponent} from '../../secure/library/library.component';

export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
];
