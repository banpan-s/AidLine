import mongoose from "mongoose";
const addnoticeSchema = new mongoose.Schema({

  text: { type: String, required: true },

});
const addnotice = mongoose.model("addnotice", addnoticeSchema);
export default addnotice;
