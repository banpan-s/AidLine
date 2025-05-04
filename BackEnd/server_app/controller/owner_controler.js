import owner from "../models/owner.model.js";
import ownerqueue from "../models/ownerqueue.model.js";
import multer from "multer";
import path from "path";

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
    const { email, password, orgname, ownername, phone, address, orgtype, description, file } = ownerData;
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

import bookqueue from "../models/user.bookqueue.model.js";

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
