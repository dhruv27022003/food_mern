import { Schema, model } from 'mongoose';

const BikeSchema = new Schema(
  {  
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: false},
    cookTime: { type: String, required: false },
    mileage: { type: Number, required: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const BikeModel = model('Bike', BikeSchema);

export default BikeModel; // Export as default
