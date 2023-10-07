import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {
  cart!: Cart;
  order:Order = new Order();
  constructor(private cartService: CartService ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }
  @Input()
  resetLinkRoute = "/";


  createOrder() {
    this.order.items = this.cart.items;
    this.order.totalPrice = this.cart.totalPrice;
    this.cartService.getNewOrderForCurrentUser(this.order).subscribe({
      next: (order) => {
        this.order = order;
      },
      error: (error) => {
        console.error("Error creating order:", error);
      },
    });
  }
}
