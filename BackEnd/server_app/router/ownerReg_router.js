import express from 'express'
import addowner from '../controller/owner_controler.js'
import { ownerLogin } from '../controller/owner_controler.js'
const ownerRouter=express.Router()
ownerRouter.post('/addowner',addowner)
ownerRouter.post('/ownerlogin',ownerLogin)
export default ownerRouter
