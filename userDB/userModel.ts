import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  password: String,
  userType: Number,
  date: { type: Date, default: Date.now },
});

const UserModal = mongoose.model("User", UserSchema);

export default UserModal;
