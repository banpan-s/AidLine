import contact from "../models/contact.model.js";
import Admin from "../models/admin.model.js";
import UserFeedback from "../models/user.feedback.model.js";
import OwnerFeedback from "../models/owner.feedback.model.js";
import User from "../models/user.model.js";
import Owner from "../models/owner.model.js";
import UserBooking from "../models/user.bookqueue.model.js";

//--------------contact listin code----------------
export const allContacts = async (request, response) => {
  try {
    //select * from contact it will return all the rows
    const contactDocs = await contact.find(); //return all object

    response.json({ contactQuery: contactDocs });
    console.log(contactDocs);
  } catch (err) {
    console.log(err.message);
  }
};

// Admin login function
export const adminLogin = async (req, res) => {
  try {
    const { adminemail, adminpass } = req.body;
    if (!adminemail || !adminpass) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const adminUser = await Admin.findOne({ email: adminemail });
    if (!adminUser) {
      return res.json({ status: "Fail", message: "Email does not exist" });
    }
    if (adminUser.password !== adminpass) {
      return res.json({ status: "Fail", message: "Invalid Password" });
    }
    res.json({ status: "Success", message: "Login successful", token: adminUser.email });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch all user feedback
export const allUserFeedback = async (req, res) => {
  try {
    const feedbacks = await UserFeedback.find();
    res.json({ userFeedbacks: feedbacks });
  } catch (error) {
    console.error("Error fetching user feedback:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch all owner feedback
export const allOwnerFeedback = async (req, res) => {
  try {
    const feedbacks = await OwnerFeedback.find();
    res.json({ ownerFeedbacks: feedbacks });
  } catch (error) {
    console.error("Error fetching owner feedback:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch all users
export const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch all owners
export const allOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json({ owners: owners });
  } catch (error) {
    console.error("Error fetching owners:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch all bookings
export const allBookings = async (req, res) => {
  try {
    const bookings = await UserBooking.find();
    res.json({ bookings: bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


