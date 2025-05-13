import owner from "../models/owner.model.js";
import ownerqueue from "../models/ownerqueue.model.js";
import multer from "multer";
import path from "path";
import addnotice from "../models/addnote.model.js";
import ownerFeedback from "../models/owner.feedback.model.js";
import bookqueue from "../models/user.bookqueue.model.js";

// Owner feedback submission
export const submitOwnerFeedback = async (req, res) => {
  try {
    const { feedback, ownerEmail } = req.body;
    if (!feedback || typeof feedback !== "string" || feedback.trim() === "") {
      return res.status(400).json({ message: "Feedback is required and must be a non-empty string" });
    }
    if (!ownerEmail || typeof ownerEmail !== "string" || ownerEmail.trim() === "") {
      return res.status(400).json({ message: "Owner email is required and must be a non-empty string" });
    }
    const newFeedback = new ownerFeedback({ feedback: feedback.trim(), ownerEmail: ownerEmail.trim() });
    await newFeedback.save();
    res.status(200).json({ message: "Owner feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting owner feedback:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({ storage: storage });

// Add owner registration data
export const addowner = async (req, res) => {
  try {
    const ownerData = req.body;
    const { email, password, orgname, ownername, phone, address, orgtype, description } = ownerData;
    const file = req.file ? req.file.filename : null;

    const existingOwner = await owner.findOne({ email: email });
    if (existingOwner) {
      return res.status(400).json({ message: "this email is already used" });
    }

    const ownerDb = new owner({ email, password, orgname, ownername, phone, address, orgtype, description, file });
    await ownerDb.save();
    res.status(201).send("Owner registered successfully");
    console.log("Owner registered");
  } catch (error) {
    console.error("Error registering owner:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Owner login function
export const ownerLogin = async (req, res) => {
  const userdata = req.body;
  const { userID, userPassword } = userdata;

  try {
    const userobject = await owner.findOne({ email: userID });
    if (userobject != null) {
      if (userobject.password === userPassword) {
        console.log("password is : ", userobject.password);
        return res.json({ message: "Hello " + userobject.email, status: "Success", token: userobject.email });
      } else {
        return res.json({ message: "Invalid Password" });
      }
    } else {
      return res.json({ message: "Email does not exist" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
  
};

// CreateQueue function to handle queue creation
export const CreateQueue = async (req, res) => {
  try {
    const queueData = req.body;
    const { email, queueName, noOfToken, startTime, endTime } = queueData;
    const queueDb = new ownerqueue({ email, queueName, noOfToken, startTime, endTime });
    await queueDb.save();
    res.status(200).send("queue created");
    console.log("queue created");
  } catch (error) {
    console.error("Error creating queue:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get owner queues
export const getOwnerQueue = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: "Owner email is required." });
    }
    const queues = await ownerqueue.find({ email });
    res.status(200).json(queues);
  } catch (error) {
    console.error("Error fetching owner's queues:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get owner profile
export const getProfile = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const ownerObject = await owner.findOne({ email: email });
    if (!ownerObject) {
      return res.status(404).json({ message: "Owner not found" });
    }
    res.status(200).json({ data: ownerObject });
  } catch (error) {
    console.error("Error fetching owner profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update owner profile
export const updateOwnerProfile = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const updateData = {
      ownername: req.body.ownername,
      orgname: req.body.orgname,
      orgtype: req.body.orgtype,
      description: req.body.description,
      phone: req.body.phone,
      address: req.body.address,
    };

    if (req.file) {
      updateData.file = req.file.filename;
    }

    const updatedOwner = await owner.findOneAndUpdate(
      { email: email },
      updateData,
      { new: true }
    );

    if (!updatedOwner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", data: updatedOwner });
  } catch (error) {
    console.error("Error updating owner profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Controller function to save addnotice text
export const saveAddNoticeText = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }
    const newNotice = new addnotice({ text });
    await newNotice.save();
    res.status(201).json({ message: "Notice text saved successfully", data: newNotice });
  } catch (error) {
    console.error("Error saving notice text:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Controller function to get all addnotice texts
export const getAllAddNotices = async (req, res) => {
  try {
    const notices = await addnotice.find({});
    res.status(200).json({ data: notices });
  } catch (error) {
    console.error("Error fetching notices:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get users in queue by queueID
export const getUsersInQueue = async (req, res) => {
  try {
    const { queueID } = req.query;
    if (!queueID) {
      return res.status(400).json({ message: "queueID is required" });
    }
    const users = await bookqueue.find({ queueID }).sort({ positionInQueue: 1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users in queue:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateOwnerQueue = async (req, res) => {
  try {
    const { queueID, queueName, noOfToken, startTime, endTime, date } = req.body;
    if (!queueID) {
      return res.status(400).json({ message: "queueID is required" });
    }

    const updateData = {};
    if (queueName !== undefined) updateData.queueName = queueName;
    if (noOfToken !== undefined) updateData.noOfToken = noOfToken;
    if (startTime !== undefined) updateData.startTime = startTime;
    if (endTime !== undefined) updateData.endTime = endTime;
    if (date !== undefined) updateData.date = date;

    const updatedQueue = await ownerqueue.findByIdAndUpdate(queueID, updateData, { new: true });

    if (!updatedQueue) {
      return res.status(404).json({ message: "Queue not found" });
    }

    res.status(200).json({ message: "Queue updated successfully", data: updatedQueue });
  } catch (error) {
    console.error("Error updating owner queue:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update wait times for users in queue
export const updateWaitTimes = async (req, res) => {
  try {
    const { queueID, updatedQueue } = req.body;
    if (!queueID || !Array.isArray(updatedQueue)) {
      return res.status(400).json({ message: "queueID and updatedQueue array are required" });
    }

    // Update each user's estimatedWaitTime in the queue
    const updatePromises = updatedQueue.map(user =>
      bookqueue.findByIdAndUpdate(user._id, { estimatedWaitTime: user.estimatedWaitTime })
    );

    await Promise.all(updatePromises);

    res.status(200).json({ message: "Wait times updated successfully" });
  } catch (error) {
    console.error("Error updating wait times:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Finish the first user in the queue
export const finishFirstUser = async (req, res) => {
  try {
    const { queueID } = req.body;
    if (!queueID) {
      return res.status(400).json({ message: "queueID is required" });
    }

    // Find the first user in the queue (positionInQueue = 1)
    const firstUser = await bookqueue.findOne({ queueID, positionInQueue: 1 });
    if (!firstUser) {
      return res.status(404).json({ message: "No user found at the front of the queue" });
    }

    // Remove or mark the first user as finished (here we remove)
    await bookqueue.findByIdAndDelete(firstUser._id);

    // Update positions and estimated wait times of remaining users
    const remainingUsers = await bookqueue.find({ queueID }).sort({ positionInQueue: 1 });

    for (let i = 0; i < remainingUsers.length; i++) {
      remainingUsers[i].positionInQueue = i + 1;
      // Optionally update estimatedWaitTime here if needed
      await remainingUsers[i].save();
    }

    res.status(200).json({ message: "First user finished and queue updated" });
  } catch (error) {
    console.error("Error finishing first user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
