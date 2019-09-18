import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { RouteModule } from './route.module'

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouteModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
