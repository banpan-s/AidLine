import express from 'express'
import commonRoute from './router/common_router.js'
import dbConnect from './database/dbConnection.js'
import userRoute from './router/user_router.js' 
import ownerRouter from './router/ownerReg_router.js'
import adminRoute from './router/admin_router.js'
import cors from 'cors'
const serverApp=express()
const PORT_NUMBER=3000
//database connection code here


dbConnect()

serverApp.use(express.json())  //middle ware
serverApp.use(cors())
serverApp.use(express.static("public"))  // to tell the serverthat all docs will be upoded in this folder and sub folder

serverApp.use("/",commonRoute)
serverApp.use("/owner",ownerRouter)
serverApp.use("/user",userRoute)
serverApp.use("/admin",adminRoute)

serverApp.listen(PORT_NUMBER,()=>{
    console.log(`server is listening on http://localhost:${PORT_NUMBER}`)
})