import mongoose, { Schema } from "mongoose";

const CitySchema = new Schema({
  cityName: String,
  cityID: Number,
});

const CityModal = mongoose.model("City", CitySchema);

export default CitySchema;
