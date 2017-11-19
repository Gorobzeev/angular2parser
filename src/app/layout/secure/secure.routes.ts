import {Routes} from '@angular/router';
import {UserComponent} from '../../secure/user/user.component';
import {StoreComponent} from '../../secure/store/store.component';

export const SECURE_ROUTES: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'store', component: StoreComponent },
];
