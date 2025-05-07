import express from "express";
import addUser, { getProfile, editProfile, getQueue, userLogin, bookQueue, getUserBookings, addBookqueue, submitFeedback } from "../controller/user_controller.js";
import multer from "multer"; //
import { image_upload } from "../middleware/doc_uplode_middleware.js";

const userRoute = express.Router();
const upload = multer({ dest: "public/uploads/" }); //
userRoute.post("/addUser", image_upload, addUser);
userRoute.post("/userLogin", userLogin);
userRoute.post('/editprofile', editProfile);
// userRoute.post('/allbookqueue', addBookqueue)
userRoute.get('/getQueue', getQueue);        //add this
userRoute.get('/userProfile', getProfile);       //send userprofile detail to frontend
userRoute.get('/bookQueue', bookQueue);       //send detail to frontendf
userRoute.get("/getMyBookings", getUserBookings);

userRoute.post('/addBookqueue', addBookqueue);
userRoute.post('/submitFeedback', submitFeedback);

export default userRoute;
