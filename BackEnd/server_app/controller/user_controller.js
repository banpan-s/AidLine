// import { response } from "express"; 
import User from "../models/user.model.js"; // 🟢 Importing the User model from the models folder

// 🟢 Function to add a new user to the database
async function addUser(request, response) { 
    const userData = request.body; // 📌 Extracting user data from the request body (sent by frontend)

    // 📌 Destructuring user details from the request body
    const { email, password, name, phone, address, gender, city, pic } = userData; 


     // If no file is uploaded, set a default or empty value
    const file = request.body.pic || "default.jpg"; // Or store an empty stringif no file is uploaded



    // 📌 Creating a new user instance using the Mongoose model
    const userDb = new User({ email, password, name, phone, address, gender, city, pic }); 
    
    try {
        await userDb.save(); // 📌 Saving the user data to MongoDB
        response.send("User registered successfully!"); // 📌 Sending a success response to the frontend
        console.log("User added"); // 📌 Logging confirmation in the server console
    } catch (error) {
        console.error("Error registering user:", error.message); // 🔴 Logging the error if something goes wrong
        response.status(500).send("Error registering user"); // 🔴 Sending an error response to the frontend
    }
}

// 🟢 Exporting the `addUser` function to use in routes
export default addUser;



    
// 🟢 Function to handle user login
export const userLogin = async (request, response) => {
    const userData = request.body; // 📌 Extracting login credentials from the request body
    const { userID, userPassword } = userData; // 📌 Destructuring email and password from request

    console.log(request);                  // 📌 Logging the request object (for debugging)
    console.log("User Login Attempt");     // 📌 Logging that a login attempt is happening

    try {
                                           // 📌 Searching for a user in the database with the given email
        const userObject = await User.findOne({ email: userID });

        // 🟢 If a user with the given email exists
        if (userObject != null) {
            // 📌 Checking if the entered password matches the stored password
            if (userObject.password === userPassword) {
                console.log("Password matched:", userObject.password); // 📌 Logging the matched password

                // 📌 Sending a success response with user details and a "token" (email for now)
                return response.json({ 
                    "message": "Hello " + userObject.email, 
                    "status": "Success", 
                    "token": userObject.email 
                });
            } else {
                // 🔴 If the password is incorrect, send an error message
                return response.json({ "message": "Invalid Password" });
            }
        } else {
            // 🔴 If the email doesn't exist, send an error message
            return response.json({ "message": "Email does not exist" });
        }
    } catch (err) {
        console.log(err.message); // 🔴 Logging the error if something goes wrong
    }
};




















































































// import { response } from "express";
// import owner from "../models/owner.model.js";

// async function addowner(request,response){
//     const ownerData= request.body
//     const {email,password,orgname,ownername,phone,address,orgtype,description,file}=ownerData  ///add here
//     const ownerDb=new owner({email,password,orgname,ownername,phone,address,orgtype,description,file})     //add content total two plae
//    await ownerDb.save()
//     response.send("hello")
//     console.log("vhal ja")

// }
// export default addowner;

// export const ownerLogin = async (request, response) => {
//     const userdata = request.body
//     const { userID, userPassword } = userdata
//     console.log(request);
//     console.log("usejhjhjjrID");


//     try {
//         const userobject = await owner.findOne({ email: userID })
//         //console.log(userobject);
//         if (userobject != null) {
//             if (userobject.password === userPassword) {
//                 console.log("passsworddddd is : ",userobject.password)
//                 return response.json({ "message": "Hello " + userobject.email, "status": "Success", "token": userobject.email })
//             }
//             else {
//                 return response.json({ "message": "Invalid Password" })
//             }
//         }
//     catch (err) {
//         console.log(err.message);
//     }


// }
