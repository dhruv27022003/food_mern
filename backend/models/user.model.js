import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: false, unique:false},
    password: { type: String, required: false},
    address: { type: String, required: false },
    isAdmin: { type: Boolean, required:false },
  },
  {
    timestamps: false,
    toJSON: {
      virtuals: false,
    },
    toObject: {
      virtuals: false,
    },
  }
);

const UserModel = model('user', UserSchema);

export default UserModel; // Export as default
