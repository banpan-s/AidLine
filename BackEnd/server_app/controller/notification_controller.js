import Notification from "../models/notification.model.js";
import { sendEmail } from "../utilities/emailService.js";

// Create a new notification
export const createNotification = async (req, res) => {
  try {
    const { userEmail, message, type, sendEmailNotification } = req.body;
    if (!message || !type) {
      return res.status(400).json({ message: "message and type are required" });
    }

    const notification = new Notification({
      userEmail: userEmail || null,
      message,
      type,
    });

    await notification.save();

    if (sendEmailNotification && userEmail) {
      try {
        await sendEmail(userEmail, "Notification from AidLine", message, `<p>${message}</p>`);
      } catch (emailError) {
        console.error("Error sending notification email:", emailError);
      }
    }

    res.status(201).json({ message: "Notification created", notification });
  } catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get notifications for a user or admin
export const getNotifications = async (req, res) => {
  try {
    const { userEmail, type } = req.query;
    if (!type) {
      return res.status(400).json({ message: "type query parameter is required" });
    }

    const filter = { type };
    if (userEmail) {
      filter.userEmail = userEmail;
    }

    const notifications = await Notification.find(filter).sort({ createdAt: -1 });

    res.json({ notifications });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
