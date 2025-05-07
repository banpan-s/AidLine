import mongoose from "mongoose";

const OwnerFeedbackSchema = new mongoose.Schema({
  ownerEmail: { type: String, required: true },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const OwnerFeedback = mongoose.model("OwnerFeedback", OwnerFeedbackSchema);

export default OwnerFeedback;
