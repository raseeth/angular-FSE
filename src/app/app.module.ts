import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { RouteModule } from './route.module';
import { TaskModule } from "./task-manager/task.module";

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouteModule, TaskModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
