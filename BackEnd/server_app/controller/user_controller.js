// import { request, response } from "express";
import ownerqueue from "../models/ownerqueue.model.js";
import bookqueue from "../models/user.bookqueue.model.js";
import User from "../models/user.model.js";

// Controller to user book a queue
export const bookQueue = async (req, res) => {
  const { queueID, userEmail } = req.query;

  try {
    // 🔹 [NEW] Get queue info to fetch queueName
    const queueInfo = await ownerqueue.findById(queueID); // 🔸 updated
    if (!queueInfo) {
      return res.status(404).json({ message: "Queue not found" }); // 🔸 updated
    }

    const existingBookings = await bookqueue.find({ queueID });
    const tokenNumber = existingBookings.length + 1;

    // Get current date and time
    const now = new Date();
    const checkInDate = now.toISOString().split("T")[0];
    const checkInTime = now.toTimeString().split(" ")[0];

    // 🔹 [UPDATED] Include queueName while creating booking
    const newBooking = new bookqueue({
      queueID,
      userEmail,
      tokenNo: tokenNumber,
      positionInQueue: tokenNumber,
      estimatedWaitTime: "10 mins",
      status: "pending",
      checkInTime,
      checkInDate,
      queueName: queueInfo.queueName, // 🔸 added this line
    });

    await newBooking.save();

    // 🔹 [Optional] Include queueName in response
    res.status(201).json({
      message: "Booking successful",
      tokenNumber,
      checkInTime,
      checkInDate,
      queueName: queueInfo.queueName, // 🔸 added this line
    });
  } catch (error) {
    console.error("Booking error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//view booking detail
export const getUserBookings = async (req, res) => {
  console.log("hello");

  const { userEmail } = req.query;

  try {
    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    const bookings = await bookqueue.find({ userEmail });

    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addBookqueue = async (request, response) => {
  try {
    const addBookqueue = request.body;
    const { userName, userId, contact } = addBookqueue;
    const bookqueueDb = new bookqueue({ userName, userId, contact });
    await bookqueueDb.save();
    response.send("hello");
    console.log("sucessfull");
  } catch (error) {
    console.error("Error saving bookqueue:", error);
    response.status(500).json({ message: "Server error", error: error.message });
  }
};

//user edit profile
export const editProfile = async (request, response) => {
  const userObject = request.body;
  const { phone, city, address } = userObject;
  const { email } = request.query;
  console.log(`email is ${email}`);
  console.log(`phone is ${phone}`);
  console.log(`city is ${city}`);
  console.log(`address is ${address}`);

  try {
    const filterCondition = { email: email };
    const modifiedData = {
      $set: { phone: phone, city: city, address: address },
    };
    console.log({ phone: phone, city: city, address: address });
    const updateStatus = await User.updateOne(filterCondition, modifiedData);
    console.log(`updated status is ${updateStatus}`);
    response.json({ updateStatus: updateStatus });
  } catch (err) {
    console.log(err.message);
    response.status(500).json({ message: "Server error", error: err.message });
  }
};

//user register
async function addUser(request, response) {
  const userData = request.body;
  const { email, password, name, phone, address, gender, city } = userData;
  const pic = request.file.filename;
  console.log(pic);
  console.log(request);
  const userDb = new User({
    email,
    password,
    name,
    phone,
    address,
    gender,
    city,
    pic,
  });
  try {
    await userDb.save();
    response.send("User registered successfully!");
    console.log("User added");
  } catch (error) {
    console.error("Error registering user:", error.message);
    response.status(500).send("Error registering user");
  }
}
export default addUser;

export const userLogin = async (request, response) => {
  const userData = request.body;
  const { userID, userPassword } = userData;

  try {
    const userObject = await User.findOne({ email: userID });

    if (userObject != null) {
      if (userObject.password === userPassword) {
        return response.json({
          message: "Hello " + userObject.email,
          status: "Success",
          token: userObject.email,
        });
      } else {
        return response.json({ message: "Invalid Password" });
      }
    } else {
      return response.json({ message: "Email does not exist" });
    }
  } catch (err) {
    console.error("User login error:", err);
    response.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getProfile = async (req, res) => {
  const { email } = req.query;

  try {
    const userObject = await User.findOne({ email: email });
    res.status(200).json({ userObject });
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get owner queue
export const getQueue = async (req, res) => {
  try {
    const queueData = await ownerqueue.find();
    console.log(queueData);
    res.status(201).json({ queueData });
  } catch (error) {
    console.log(error);
  }
};

import Feedback from "../models/user.feedback.model.js";

// User feedback submission
export const submitFeedback = async (req, res) => {
  try {
    const { feedback, userEmail } = req.body;
    if (!feedback) {
      return res.status(400).json({ message: "Feedback is required" });
    }
    const newFeedback = new Feedback({ feedback, userEmail });
    await newFeedback.save();
    res.status(200).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
