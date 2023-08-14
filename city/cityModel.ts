import mongoose, { Schema } from "mongoose";

export const CitySchema = new Schema({
  cityName: String,
  cityID: Number,
});

const CityModal = mongoose.model("CityList", CitySchema);

export default CityModal;
