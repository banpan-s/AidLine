import express from 'express'
import addowner from '../controller/owner_controler.js'
const ownerRouter=express.Router()
ownerRouter.post('/addowner',addowner)
export default ownerRouter
