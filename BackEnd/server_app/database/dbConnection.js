import mongoose from "mongoose"
import "dotenv/config"
const DB_URL=process.env.MON_URL;

// Improved error handling for database connection

 const dbConnect=async()=>{

    try{
const connection= await mongoose.connect(DB_URL)
        console.log("Connection established with database");
        return connection; // Return the connection object for further use


    }
    catch(error)
    {
        console.error("Database connection error:", error.message);
        // Additional error handling can be added here

        
    }
 }
 export default dbConnect
