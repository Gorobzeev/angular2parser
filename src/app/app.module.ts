import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {LibraryComponent} from './library/library.component';
import {LibraryService} from './library/libraryService';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { AuthGuard } from './guards/index';
import {AuthenticationService} from './_services/authentication.service';

@NgModule({
    declarations: [
        AppComponent,
        LibraryComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    providers: [LibraryService,
        AuthGuard,
        AuthenticationService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
