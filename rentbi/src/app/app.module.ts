import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BikepageComponent } from './components/pages/bikepage/bikepage.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { TagsComponent } from './components/partial/tags/tags.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { NotfoundComponent } from './components/partial/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ThanksComponent } from './components/partial/thanks/thanks.component';
import { FormsModule } from '@angular/forms';
import { OrderPlacedComponent } from './components/partial/order-placed/order-placed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikepageComponent,
    HeaderComponent,
    TagsComponent,
    CartComponent,
    NotfoundComponent,
    ThanksComponent,
    OrderPlacedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
