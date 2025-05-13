import express from 'express'
import { allContacts, adminLogin, allUserFeedback, allOwnerFeedback, allUsers, allOwners, allBookings } from '../controller/admin_controller.js'
const adminRoute=express.Router()

adminRoute.post("/adminLogin", adminLogin)

adminRoute.get("/allContacts",allContacts)

adminRoute.get("/allUserFeedback", allUserFeedback)

adminRoute.get("/allOwnerFeedback", allOwnerFeedback)

adminRoute.get("/allUsers", allUsers)

adminRoute.get("/allOwners", allOwners)

adminRoute.get("/allBookings", allBookings)

export default adminRoute
