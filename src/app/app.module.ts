import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AutoPartRequestComponent } from './pages/auto-part-request/auto-part-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    AutoPartRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
