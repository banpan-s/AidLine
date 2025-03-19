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