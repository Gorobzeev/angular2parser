import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {LibraryComponent} from './library/library.component';
import {LibraryService} from './library/libraryService';
import {HttpModule} from '@angular/http';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AuthGuard} from './guards/index';
import {AuthenticationService} from './_services/authentication.service';
import {InfoComponent} from './info/info.component';
import {FacebookModule} from 'ngx-facebook';
import {Angular2SocialLoginModule} from 'angular2-social-login';
import {LoginModule} from './login/login.module';

const providers = {
    'google': {
        'clientId': '766815925902-2vt11hsft626suogg9rpln70rd031p8v.apps.googleusercontent.com'
    }
};

@NgModule({
    declarations: [
        AppComponent,
        LibraryComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        FacebookModule.forRoot(),
        Angular2SocialLoginModule,
        LoginModule
    ],
    providers: [LibraryService,
        AuthGuard,
        AuthenticationService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
    }
}
Angular2SocialLoginModule.loadProvidersScripts(providers);
