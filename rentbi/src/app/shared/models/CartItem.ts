import { Food } from "./Bike";

export class CartItem{
  constructor(public food:Food){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}
