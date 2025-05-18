import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  userName: { type: String, required: false },
  userEmail: { type: String, required: false },
  feedback: { type: String, required: true },
  isOwner: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
