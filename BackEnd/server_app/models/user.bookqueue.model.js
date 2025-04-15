import mongoose from "mongoose";

const bookqueueSchema = new mongoose.Schema({
  queueID: { type: mongoose.Schema.Types.ObjectId, ref: "ownerqueue", required: true },
  userEmail: { type: String, required: true },
  tokenNo: { type: Number },
  positionInQueue: { type: Number },
  estimatedWaitTime: { type: String },
  status: { type: String, default: "pending" },
  checkInTime: { type: String, required: true },
  checkInDate: { type: String, required: true },
}, { timestamps: true });

const bookqueue = mongoose.model("bookqueue", bookqueueSchema);
export default bookqueue;





















































// import mongoose from "mongoose";
// const bookqueueSchema = new mongoose.Schema({
//   queueID: { type: String, required: true },
//   userEmail: { type: String, required: true },
//   tokenNo: { type: String,required:false},
//   positionInQueue: { type: String,required:false },
//   estimatedWaitTime: { type: String,required:false },
//   status: { type: String,default:"pending" },

//   checkInTime: { type: String, required: true },
//   checkInDate: { type: String, required: true },
  
// });
// const bookqueue = mongoose.model("bookqueue", bookqueueSchema);
// export default bookqueue;






