import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  resID: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  total: Number,
  items: Number,
  status: { type: String, default: "New" },
});

const OrderModal = mongoose.model("Order", OrderSchema);

export default OrderModal;
