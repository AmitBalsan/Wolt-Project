import mongoose, { Schema } from "mongoose";

const OrderItemSchema = new Schema({
  orderID: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  resID: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  price: Number,
});

const OrderItemModal = mongoose.model("OrderItem", OrderItemSchema);

export default OrderItemModal;
