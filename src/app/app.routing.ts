import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LibraryComponent } from './library/library.component';
import { AuthGuard } from './guards/index';
import {InfoComponent} from './info/info.component';
import {SimpleLayoutComponent} from './layout/simple-layout.component';
import {FullLayoutComponent} from 'app/layout/full-layout.component';
import {PUBLIC_ROUTES} from './public/public.routes';
import {SECURE_ROUTES} from './secure/secure.routes';

const appRoutes: Routes = [
    // { path: 'login', children: [
    // { path: '', component: LoginComponent }
    //     ]},
    // { path: 'library', component: LibraryComponent },
    // { path: '', component: LibraryComponent},
    // { path: 'info', component: InfoComponent, canActivate: [AuthGuard] },


  { path: '', redirectTo: '/library', pathMatch: 'full', },
  { path: '', component: SimpleLayoutComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: FullLayoutComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];

export const routing = RouterModule.forRoot(appRoutes);
