import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {LibraryComponent} from './library/library.component';
import {LibraryService} from './library/libraryService';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LibraryComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'library', component: LibraryComponent},
            {path: 'login', component: LoginComponent},
        ])
    ],
    providers: [LibraryService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
