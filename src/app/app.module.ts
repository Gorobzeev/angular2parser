import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {SecureComponent} from './layout/secure';
import {PublicComponent} from './layout/public';
import {LoginComponent} from './public/login/login.component';
import {AppComponent} from './app.component';
import {AuthGuard} from '../common/auth.guard';
import {AuthenticationService} from './_services/authentication.service';
import {MenuComponent} from './shared/menu/menu.component';
import {RegisterComponent} from 'app/public/register/register.component';
import {StoreComponent} from './secure/store/store.component';
import {UserComponent} from './secure/user/user.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    SecureComponent,
    PublicComponent,
    MenuComponent,
    RegisterComponent,
    StoreComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
