import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { routing }   from './app.routes';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }