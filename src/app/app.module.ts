import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {LibraryComponent} from './library/library.component';
import {AboutComponent} from './about/about.component';
import {LibraryService} from './library/libraryService';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        LibraryComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'library', component: LibraryComponent},
            {path: 'about', component: AboutComponent}
        ])
    ],
    providers: [LibraryService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
