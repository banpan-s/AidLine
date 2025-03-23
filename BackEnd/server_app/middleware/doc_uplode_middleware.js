import express from "express";
import addUser from "../controller/user_controller.js";
import { userLogin } from "../controller/user_controller.js";
import multer from "multer";
import path from "path";

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");  // Ensure directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Unique file name
  },
});

const upload = multer({ storage });

const userRoute = express.Router();
userRoute.post("/addUser", upload.single("pic"), addUser);
userRoute.post("/userLogin", userLogin);

export default userRoute;
