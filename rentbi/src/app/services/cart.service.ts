import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from '../shared/models/CartItem';
import { Bike } from '../shared/models/Bike';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/models/Order';
import { ORDER_NEW_FOR_CURRENT_USER_URL } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor( ) { }

  addToCart(Bike: Bike): void {
    let cartItem = this.cart.items
      .find(item => item.Bike.id === Bike?.id);
    if (cartItem)
      return;

    this.cart.items.push(new Cartitem(Bike));
    this.setCartToLocalStorage();
  }

  removeFromCart(BikeId: string| undefined): void {
    this.cart.items = this.cart.items
      .filter(item => item.Bike.id != BikeId);
    this.setCartToLocalStorage();
  }

  // changeQuantity(BikeId: string, quantity: number) {
  //   let cartItem = this.cart.items
  //     .find(item => item.Bike.id === BikeId);
  //   if (!cartItem) return;

  //   cartItem.quantity = quantity;
  //   cartItem.price = quantity * cartItem.Bike.price;
  //   this.setCartToLocalStorage();
  // }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }



  // getNewOrderForCurrentUser():Observable<Order>{
  //   console.log("running")
  //   return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  
  // }
}