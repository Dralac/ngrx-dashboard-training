import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppStoreModule } from './Store';

// features
import { BlogModule } from './Blog';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    BlogModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
