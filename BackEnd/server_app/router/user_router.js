import express from "express";
import addUser from "../controller/user_controller.js";
import { userLogin } from "../controller/user_controller.js";
import multer from "multer"; //
const userRoute = express.Router();
const upload = multer({ dest: "public/uploads/" }); //
userRoute.post("/addUser", upload.single("pic"), addUser);
userRoute.post("/userLogin", userLogin);
export default userRoute;