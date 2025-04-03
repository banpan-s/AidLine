import contact from "../models/contact.model.js";
import Admin from "../models/admin.model.js";
//--------------contact listin code----------------
export const allContacts=async(request,response)=>{
try{
        //select * from contact it will return all the rows
        const contactDocs=await contact.find()  //return all object

        response.json({"contactQuery":contactDocs})
        console.log(contactDocs)
}
// response.json({"contactQuery"con})


catch(err){
    console.log(err.message);
}
}