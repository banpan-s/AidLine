import mongoose from "mongoose";
const ownerSchema=new mongoose.Schema({
email:{type:String,required:true},            //  update 234567
password:({type:String,required:true}),
orgname:({type:String,required:true}),
date:{type:String,default:()=>new Date().toISOString().split('T')[0]}

})
const owner=mongoose.model("owner",ownerSchema)
export default owner


