import express from 'express'

import {addowner, ownerLogin,CreateQueue,getProfile,getOwnerQueue} from '../controller/owner_controler.js'

const ownerRouter=express.Router()
ownerRouter.post('/addowner',addowner)
ownerRouter.post('/ownerlogin',ownerLogin)
ownerRouter.get('/getProfile',getProfile)        //add this
ownerRouter.post('/createq',CreateQueue)
ownerRouter.get('/getAllQueues',getOwnerQueue)


// ownerRouter.put('/updateWaitTimes',updateWaitTimes )
// ownerRouter.put('/finishFirstUser',finishFirstUser )


export default ownerRouter
