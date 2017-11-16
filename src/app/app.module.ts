import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppStoreModule } from './Store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
