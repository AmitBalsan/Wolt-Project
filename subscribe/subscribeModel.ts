import mongoose, { Schema } from "mongoose";

const SubscribeSchema = new Schema({
  email: String,
  date: { type: Date, default: Date.now },
});

const SubscribeModal = mongoose.model("Subscribe", SubscribeSchema);

export default SubscribeModal;
