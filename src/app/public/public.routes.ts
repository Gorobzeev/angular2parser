import {Routes} from '@angular/router';
import {LibraryComponent} from '../library/library.component';
export const PUBLIC_ROUTES: Routes = [
  { path: '', component: LibraryComponent },
  { path: 'library', component: LibraryComponent }
];
