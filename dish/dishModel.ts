import mongoose, { Schema } from "mongoose";

const DishSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  notes: String,
  resID: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const DishModal = mongoose.model("Dish", DishSchema);

export default DishModal;
