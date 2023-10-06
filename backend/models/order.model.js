import {model, Schema, Types} from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { Bike, BikeSchema } from './bike.model';

export interface LatLng{
    lat: string;
    lng: string;
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: false},
        lng: {type: String, required: false},
    }
);

export interface OrderItem{
    Bike: Bike;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        Bike:{type: BikeSchema, required: false},
        price:{ type: Number, required:false},
        quantity: {type: Number, required: false}
    }
);

export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    address: string;
    addressLatLng:LatLng
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
  }

  const orderSchema = new Schema<Order>({
      name: {type: String, required: false},
      address: {type: String, required: false},
      addressLatLng: {type: LatLngSchema, required: false},
      paymentId: {type: String},
      totalPrice: {type: Number, required: false},
      items: {type: [OrderItemSchema], required: false},
      status: {type: String, default: OrderStatus.NEW},
      user: {type: Schema.Types.ObjectId, required: false}
  },{
      timestamps: false,
      toJSON:{
          virtuals: false
      },
      toObject:{
          virtuals: false
      }
  });

  export const OrderModel = model('order', orderSchema);