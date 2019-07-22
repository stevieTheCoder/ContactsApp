import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoModule } from './demo/demo.module';
import { ContactmanagerModule } from './contactmanager/contactmanager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoModule,
    ContactmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
