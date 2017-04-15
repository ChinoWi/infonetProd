import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {Component} from "@angular/core";

import {AppComponent} from './app/app.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);