// add user info into database
import { request, response } from "express";
import owner from "../models/owner.model.js";
import ownerqueue from "../models/ownerqueue.model.js";


//save owner registration data 
export const addowner=async(request,response)=>{
    const ownerData= request.body
    const {email,password,orgname,ownername,phone,address,orgtype,description,file}=ownerData  ///add here
    const ownerDb=new owner({email,password,orgname,ownername,phone,address,orgtype,description,file})     //add content total two plae
   await ownerDb.save()
    response.send("hello")
    console.log("vhal ja")

}



// check id and password for authenticate
export const ownerLogin = async (request, response) => {
    const userdata = request.body
    const { userID, userPassword } = userdata

    try {
        const userobject = await owner.findOne({ email: userID })
        if (userobject != null) {
            if (userobject.password === userPassword) {
                console.log("passsworddddd is : ",userobject.password)
                return response.json({ "message": "Hello " + userobject.email, "status": "Success", "token": userobject.email })
            }
            else {
                return response.json({ "message": "Invalid Password" })
            }
        }
        else {
            return response.json({ "message": "Email does not exist" })
        }
    }
    catch (err) {
        console.log(err.message);
    }


}

export const CreateQueue=async(request,response)=>{
    const queueData=request.body
    console.log(queueData)
    const {email,queueName,noOfToken,startTime,endTime}=queueData
    const queueDb=new ownerqueue({email,queueName,noOfToken,startTime,endTime})
    await queueDb.save()
    response.send("queue created")
    console.log("queue created")
    }



    export const getProfile = async (req, res) => {
        const email  = req.query.email
        console.log(email)
    
        try {
          const  ownerObject = await  owner.findOne({email:email})
          console.log(ownerObject)
          res.status(200).json({"data":ownerObject})
        }
        catch { }
    }


    
