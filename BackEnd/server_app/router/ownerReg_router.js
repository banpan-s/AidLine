import express from 'express'

import {addowner, ownerLogin,CreateQueue,getProfile } from '../controller/owner_controler.js'

const ownerRouter=express.Router()
ownerRouter.post('/addowner',addowner)
ownerRouter.post('/ownerlogin',ownerLogin)
ownerRouter.get('/getProfile',getProfile)        //add this
ownerRouter.post('/createq',CreateQueue)
export default ownerRouter
