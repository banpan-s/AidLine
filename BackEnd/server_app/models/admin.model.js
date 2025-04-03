import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({

  email: { type: String, required: true }, //  update 234567
  password: { type: String, required: true },

});
const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;








//  1. Model (M)
// Model ka kaam database se interact karna hota hai.
// Yeh data ko store, retrieve, update aur delete karne ke liye use hota hai.
// Example: Agar hum MongoDB use kar rahe hain, toh hum Mongoose ka use karke schema banayenge.
