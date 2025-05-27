import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userEmail: { type: String, required: false }, // null for admin notifications
  message: { type: String, required: true },
  type: { type: String, enum: ['user', 'admin'], required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
