import express from 'express'
import { allContacts } from '../controller/admin_controller.js'
const adminRoute=express.Router()
// adminRoute.post ("/adminLogin",adminLogin)

adminRoute.get("/allContacts",allContacts)

export default adminRoute