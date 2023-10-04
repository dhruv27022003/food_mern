import { Cartitem } from "./CartItem";

export class Order{
  id!:number;
  items!: Cartitem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  createdAt!: string;
  status!: string;
}
