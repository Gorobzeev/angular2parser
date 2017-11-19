import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Layout
import {SecureComponent} from './layout/secure';
import {PublicComponent} from './layout/public';

// Secure Component
// import {HomeComponent} from './public/home';

// Public Component
import {LoginComponent} from './public/login/login.component';
import {AppComponent} from './app.component';

// Common
import {AuthGuard} from './../common/auth.guard';
import {LibraryComponent} from './secure/library/library.component';
import {LibraryService} from './secure/library/libraryService';
import {AuthenticationService} from './_services/authentication.service';
import {FacebookModule} from 'ngx-facebook';
import {Angular2SocialLoginModule} from 'angular2-social-login';
import { InfoComponent } from './secure/info/info.component';
import { MenuComponent } from './shared/menu/menu.component';
import {RegisterComponent} from 'app/public/register/register.component';

const providers = {
  'google': {
    'clientId': '766815925902-2vt11hsft626suogg9rpln70rd031p8v.apps.googleusercontent.com'
  }
};

@NgModule({
  declarations: [
    LoginComponent,
    LibraryComponent,
    AppComponent,
    SecureComponent,
    PublicComponent,
    InfoComponent,
    MenuComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    Angular2SocialLoginModule
  ],
  providers: [AuthenticationService,
    AuthGuard,
    LibraryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
Angular2SocialLoginModule.loadProvidersScripts(providers);
