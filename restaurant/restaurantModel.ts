import mongoose, { Schema } from "mongoose";

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  phone: String,
  bmNumber: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  street: String,
});

const RestaurantModal = mongoose.model("Subscribe", RestaurantSchema);

export default RestaurantModal;
