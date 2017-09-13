import {Routes} from '@angular/router';
import {AuthGuard} from './../../../common/auth.guard';
import {LibraryComponent} from '../../secure/library/library.component';
import {InfoComponent} from '../../secure/info/info.component';

export const SECURE_ROUTES: Routes = [
    { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
    { path: 'info', component: InfoComponent, canActivate: [AuthGuard] },
];
