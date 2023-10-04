import { Bike } from "./Bike";

export class Cartitem{
  constructor(public Bike:Bike ){ }
  quantity:number = 1 ;
  price: number = this.Bike.price ? this.Bike.price : 0 ;
}
