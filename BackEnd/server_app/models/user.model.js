import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true }, //  update 234567
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  city: { type: String, required: true },
  file: { type: String, required: false },
  date: { type: String, default: () => new Date().toISOString().split("T")[0] },
});
const user = mongoose.model("user", userSchema);
export default user;
