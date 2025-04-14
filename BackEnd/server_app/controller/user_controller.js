import { request, response } from "express";
import ownerqueue from "../models/ownerqueue.model.js";
// import bookqueue from "../models/user.bookqueue.model.js";
import User from "../models/user.model.js"; 

//user fetch data
const getUserData=async(request,response)=>{
    
}


//save user BookQueue data 
export const addBookqueue= async(request,response)=>{
    const addBookqueue =request.body
    const {userName,userId,contact}=addBookqueue
    const bookqueueDb=new bookqueue({userName,userId,contact})
    await bookqueueDb.save()
    response.send("hello")
    console.log("sucessfull")
}


//user edit profile
export const editProfile = async (request, response) => {
    const userObject = request.body;
    const { phone, city, address } = userObject;
    const { email } = request.query;

    console.log(`email is ${email}`);
    console.log(`phone is ${phone}`);
    console.log(`city is ${city}`);
    console.log(`address is ${address}`);

    try {
        const filterCondition = { email: email };
        const modifiedData = { $set: { phone, city, address } };
        console.log(modifiedData);

        const updateStatus = await User.updateOne(filterCondition, modifiedData);
        console.log(`update status is ${JSON.stringify(updateStatus)}`);

        response.json({ updateStatus });
    } catch (err) {
        console.error(err.message);
        response.status(500).json({ error: "Internal Server Error" });
    }
};


//user register 
async function addUser(request, response) { 
    const userData = request.body; 
    const { email, password, name, phone, address, gender, city } = userData; 
    const pic = request.file.filename
console.log(pic)
console.log(request)
    const userDb = new User({ email, password, name, phone, address, gender, city, pic }); 
    try {
        await userDb.save(); 
        response.send("User registered successfully!"); 
        console.log("User added"); 
    } catch (error) {
        console.error("Error registering user:", error.message); 
        response.status(500).send("Error registering user"); 
    }
}

export default addUser;

//check user login 
export const userLogin = async (request, response) => {
    const userData = request.body; 
    const { userID, userPassword } = userData; 

    console.log(request);                  
    console.log("User Login Attempt");     

    try {
        const userObject = await User.findOne({ email: userID });

        if (userObject != null) {
            if (userObject.password === userPassword) {
                console.log("Password matched:", userObject.password); 
                return response.json({ 
                    "message": "Hello " + userObject.email, 
                    "status": "Success", 
                    "token": userObject.email 
                });
            } else {
                return response.json({ "message": "Invalid Password" });
            }
        } else {
            return response.json({ "message": "Email does not exist" });
        }
    } catch (err) {
        console.log(err.message); 
    }
};

// Get user profile
export const getProfile = async (req, res) => {
    const { email } = req.query

    try {
      const  userObject = await  User.findOne({email:email})
      console.log(userObject)
      res.status(200).json({userObject})
    }
    catch (err){
        console.log(err.message)
        
     }
}

// Get owner queue
export const getQueue=async(req,res)=>{

    try {
        const queueData= await  ownerqueue.find()
        console.log(queueData);       
        res.status(201).json({queueData})      
    } catch (error) {
        console.log(error);             
    }
}