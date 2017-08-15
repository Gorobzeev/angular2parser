import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {LibraryComponent} from './library/library.component';
import {AuthGuard} from './guards/index';
import {InfoComponent} from './info/info.component';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    //
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },

    {path: 'library', component: LibraryComponent},
    {path: '', component: LibraryComponent},
    {path: 'info', component: InfoComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
