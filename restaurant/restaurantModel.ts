import mongoose, { Schema } from "mongoose";
import { CitySchema } from "../city/cityModel";

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  phone: String,
  bmNumber: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cityID: CitySchema,
  street: String,
  notes: String,
  minTime: Number,
  maxTime: Number,
  addressID: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
});

const RestaurantModal = mongoose.model("Restaurant", RestaurantSchema);

export default RestaurantModal;
