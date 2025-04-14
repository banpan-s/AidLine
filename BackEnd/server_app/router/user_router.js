import express from "express";
import addUser from "../controller/user_controller.js";
import multer from "multer"; //
import { getProfile,editProfile,getQueue,userLogin } from "../controller/user_controller.js";
import { addBookqueue } from "../controller/user_controller.js";

import { image_upload } from "../middleware/doc_uplode_middleware.js";



const userRoute = express.Router();
const upload = multer({ dest: "public/uploads/" }); //
userRoute.post("/addUser", image_upload, addUser);
userRoute.post("/userLogin", userLogin);
userRoute.post('/editprofile',editProfile)      
userRoute.post('/allbookqueue',addBookqueue)
userRoute.get('/getQueue',getQueue)        //add this
userRoute.get('/userProfile',getProfile)       //send detail to frontend
userRoute.get('/bookQueue',)       //send detail to frontendf




export default userRoute;