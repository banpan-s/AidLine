import express from 'express'
import { addFeedback } from "../controller/user_controller.js";


const userRoute=express.Router()
userRoute.post('/addFeedback',addFeedback)
userRoute.post('/userRegistration',addFeedback)

export default userRoute
