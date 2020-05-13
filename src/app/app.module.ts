import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Site modules imports
import { SiteOneModule } from './site-one/site-one.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
