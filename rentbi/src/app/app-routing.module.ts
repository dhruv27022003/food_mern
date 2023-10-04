import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BikepageComponent } from './components/pages/bikepage/bikepage.component';
import { CartComponent } from './components/pages/cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore/:id', component: BikepageComponent},
  { path: 'tag/:tag', component: HomeComponent},
  { path: 'cart-page', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
