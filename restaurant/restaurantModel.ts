import mongoose, { Schema } from "mongoose";

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  phone: String,
  bmNumber: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cityID: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
  street: String,
  notes: String,
  minTime: Number,
  maxTime: Number,
  addressID: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
});

const RestaurantModal = mongoose.model("Restaurant", RestaurantSchema);

export default RestaurantModal;
