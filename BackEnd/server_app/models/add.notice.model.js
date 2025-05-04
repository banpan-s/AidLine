import mongoose from "mongoose";
const addnoticeSchema=new mongoose.Schema({
ownerName:{type:String,required:true},
userEmail: {type:String,required:true},
text: { type: String,required: true},
})
const addnotice=mongoose.model("addnotice",addnoticeSchema)
export default addnotice






