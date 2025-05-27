
import express from 'express'
import { allContacts, adminLogin, allUserFeedback, allOwnerFeedback, allUsers, allOwners, allBookings, deleteUser, deleteOwner, replyContact } from '../controller/admin_controller.js'
const adminRoute=express.Router()

adminRoute.post("/adminLogin", adminLogin)

adminRoute.get("/allContacts",allContacts)

adminRoute.post("/replyContact", replyContact)

adminRoute.get("/allUserFeedback", allUserFeedback)

adminRoute.get("/allOwnerFeedback", allOwnerFeedback)

adminRoute.get("/allUsers", allUsers)

adminRoute.get("/allOwners", allOwners)

adminRoute.get("/allBookings", allBookings)


// Delete user by ID
adminRoute.delete("/user/:id", deleteUser)

// Delete owner by ID
adminRoute.delete("/owner/:id", deleteOwner)

export default adminRoute
