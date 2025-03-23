// add user info into database
import { response } from "express";
import owner from "../models/owner.model.js";

async function addowner(request,response){
    const ownerData= request.body
    const {email,password,orgname,ownername,phone,address,orgtype,description,file}=ownerData  ///add here
    const ownerDb=new owner({email,password,orgname,ownername,phone,address,orgtype,description,file})     //add content total two plae
   await ownerDb.save()
    response.send("hello")
    console.log("vhal ja")

}
export default addowner;


// check id and password for authenticate
export const ownerLogin = async (request, response) => {
    const userdata = request.body
    const { userID, userPassword } = userdata
    console.log(request);
    console.log("usejhjhjjrID");


    try {
        const userobject = await owner.findOne({ email: userID })
        //console.log(userobject);
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