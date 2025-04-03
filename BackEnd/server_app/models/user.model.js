import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true }, //  update 234567
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String},
  city: { type: String, required: true },
  pic: { type: String,},
  date: { type: String, default: () => new Date().toISOString().split("T")[0] },
});
const user = mongoose.model("user", userSchema);
export default user;
