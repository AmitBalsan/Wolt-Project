import mongoose, { Schema } from "mongoose";

const CartSchema = new Schema({
  resID: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dishID: { type: mongoose.Schema.Types.ObjectId, ref: "Dish" },
  date: { type: Date, default: Date.now },
  dishName: String,
  price: Number,
});

const CartModal = mongoose.model("Cart", CartSchema);

export default CartModal;
