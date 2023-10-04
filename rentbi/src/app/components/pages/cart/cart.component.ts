import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
  buttonColor="black";
  buttonType="BUY";
  isCustomSize=250;
  buttonHeight= 50; 
  isTop = window === window.top;

  paymentRequest ={
     apiVersion:2,
     apiVersionMinor:0,
     allowedPaymentMethod: [
      { type:"CARD",
      parameters:{
        allowedPaymentMethod:["PAN_ONLY","CRYPTOGRAM_3DS"],
        alloedCardNetworks: ["VISA","MASTERCARD"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantID: "eggatewayMerchantID",
        }
      }
     }
     ],
     merchantInfo:{
       merchantID:"1234556778",
       merchantName:"DHRUV",
     },
     transactionInfo:{
       totalPriceStatus:"FINAL",
       totalPriceLabel:"TOTAL",
       totalPrice:"2000.00",
       currencyCode:"USD",
       countryCode:"US",

     }

  };
  onLoadPaymentData(event:any){
    console.log("LOAD PAYMENT",event.detail)
  }



  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:Cartitem){
    this.cartService.removeFromCart(cartItem.Bike.id);
  }

  changeQuantity(cartItem:Cartitem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    // this.cartService.changeQuantity(cartItem.Bike.id, quantity);
  }

}