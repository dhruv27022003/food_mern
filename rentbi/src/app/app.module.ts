import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BikepageComponent } from './components/pages/bikepage/bikepage.component';
import { HeaderComponent } from './components/partial/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
