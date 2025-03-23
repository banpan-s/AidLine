import mongoose from "mongoose";
const ownerSchema=new mongoose.Schema({
email:{type:String,required:true},            //  update 234567
password:({type:String,required:true}),
orgname:({type:String,required:true}),
ownername:({type:String,required:true}),
phone:({type:String,required:true}),
address:({type:String,required:true}),
orgtype:({type:String,required:true}),
description :({type:String,required:true}),
file:({type:String,required:true}),
date:{type:String,default:()=>new Date().toISOString().split('T')[0]}

})
const owner=mongoose.model("owner",ownerSchema)
export default owner


//  1. Model (M)
// Model ka kaam database se interact karna hota hai.
// Yeh data ko store, retrieve, update aur delete karne ke liye use hota hai.
// Example: Agar hum MongoDB use kar rahe hain, toh hum Mongoose ka use karke schema banayenge.