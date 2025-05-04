import addnotice from "../models/add.notice.model.js";

// Add a new notice
export const addNotice = async (req, res) => {
  try {
    const { ownerName, userEmail, text } = req.body;
    if (!ownerName || !userEmail || !text) {
      return res.status(400).json({ error: "ownerName, userEmail, and text are required" });
    }
    const newNotice = new addnotice({ ownerName, userEmail, text });
    await newNotice.save();
    res.status(201).json({ message: "Notice added successfully" });
  } catch (error) {
    console.error("Error adding notice:", error);
    res.status(500).json({ error: "Server error" });
  }
};
