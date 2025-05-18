import mongoose from "mongoose";
const addnoticeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  // orgname: { type: String, required: false }
});
const addnotice = mongoose.model("addnotice", addnoticeSchema);
export default addnotice;
