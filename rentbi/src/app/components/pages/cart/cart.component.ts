import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from '../../../shared/models/CartItem';
import { Order } from 'src/app/shared/models/Order';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
  order:Order = new Order();
  constructor(private cartService: CartService ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:Cartitem){
    this.cartService.removeFromCart(cartItem.Bike.id);
  }

  createOrder() {
    this.order.items = this.cart.items;
    this.order.totalPrice = this.cart.totalPrice;
    console.log("order is ", this.order);
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