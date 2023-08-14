import mongoose, { Schema } from "mongoose";
import { CitySchema } from "../city/cityModel";

export const AddressSchema = new Schema({
  city: CitySchema,
  street: String,
  home: Number,
  entrance: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const AddressModal = mongoose.model("Address", AddressSchema);

export default AddressModal;
