import express from "express";
import addUser from "../controller/user_controller.js";
import { userLogin } from "../controller/user_controller.js";
import multer from "multer"; //
import { getProfile,editProfile } from "../controller/user_controller.js";

import { image_upload } from "../middleware/doc_uplode_middleware.js";



const userRoute = express.Router();
const upload = multer({ dest: "public/uploads/" }); //
userRoute.post("/addUser", image_upload, addUser);
userRoute.post("/userLogin", userLogin);
userRoute.get('/userProfile',getProfile)        //add this
userRoute.put('/editProfile',editProfile)        //add this


export default userRoute;