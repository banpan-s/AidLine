import owner from "../models/owner.model.js";
async function addowner(request,response){
    const ownerData= request.body
    const {email,password,orgname}=ownerData  ///dddddd
    const ownerDb=new owner({email,password,orgname})     //add two plae
   await ownerDb.save()
    response.send("hello")
    console.log("vhal ja")

}
export default addowner;