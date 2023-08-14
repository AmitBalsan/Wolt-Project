import mongoose, { Schema } from "mongoose";

export const AddressSchema = new Schema({
  cityName: String,
  cityID: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
  street: String,
  home: Number,
  entrance: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const AddressModal = mongoose.model("Address", AddressSchema);

export default AddressModal;
