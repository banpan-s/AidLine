import mongoose from "mongoose";
const ownerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  queueName: { type: String, required: true },
  noOfToken: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  date: { type: String, default: () => new Date().toISOString().split("T")[0] },
});
const ownerqueue = mongoose.model("ownerqueue", ownerSchema);
export default ownerqueue;
