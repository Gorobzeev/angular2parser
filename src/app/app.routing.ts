import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LibraryComponent } from './library/library.component';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LibraryComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);