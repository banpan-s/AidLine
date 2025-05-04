import addnotice from "../models/add.notice.model.js";

// Get all notices
export const getAllNotices = async (req, res) => {
  try {
    const notices = await addnotice.find().sort({ createdAt: -1 });
    res.status(200).json(notices);
  } catch (error) {
    console.error("Error fetching notices:", error);
    res.status(500).json({ error: "Server error" });
  }
};
