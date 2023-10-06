import {model, Schema, Types} from 'mongoose';
import  OrderStatus  from '../constants/order_status.js';


const BikeSchemaa = new Schema(
    {  
      id: { type: String, required: false },  
      name: { type: String, required: false },
      price: { type: Number, required: false },
      tags: { type: [String] },
      favorite: { type: Boolean, default: false },
      stars: { type: Number, required: false },
      imageUrl: { type: String, required: false },
      origins: { type: [String], required: false},
      cookTime: { type: String, required: false },
      mileage: { type: Number, required: false },
    },
    {
      toJSON: {
        virtuals: false,
      },
      toObject: {
        virtuals: false,
      },
      timestamps: false,
    }
  );



const OrderItemSchema = new Schema({
  Bikes: { type: BikeSchemaa, required: false },
  price: { type: Number, required: false },
  quantity: { type: Number, required: false },
});



const orderSchema = new Schema({
  name: { type: String, required: false },
  address: { type: String, required: false },
  paymentId: { type: String },
  totalPrice: { type: Number, required: false },
  items: { type: [OrderItemSchema], required: false },
  status: { type: String, default: OrderStatus.NEW },
  user: { type: Schema.Types.ObjectId, required: false },
}, {
  timestamps: false,
  toJSON: {
    virtuals: false,
  },
  toObject: {
    virtuals: false,
  },
});

const OrderModel = model('Orders',orderSchema);

  export default OrderModel;