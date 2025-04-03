import User from "../models/user.model.js"; 

//user edit profile
export const editProfile=async(request,response)=>{
    const userObject=request.body
    const{phone,city,address}=userObject
    const{email}=request.query
    console.log(`email is ${email}`)
    console.log(`phoone is ${phone}`)
    console.log(`city is ${city}`)
    console.log(`address is ${address}`)
    resopnse.send("data send")
    try{

        const filterCondition={email:email}
        const modifiedData={$set:{phone:phone,city:city,address:address}}
        console.log({phone:phone,city:city,address:address})
   const updateStatus= await User.updateOne(filterCondition,modifiedData)
  console.log(`updated status is ${updateStatus}`)
  response.json({"updateStatus":updateStatus})
    
    }  


    catch(err){console.log(err.message);}


}






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


export const getProfile = async (req, res) => {
    const { email } = req.query

    try {
      const  userObject = await  User.findOne({email:email})
      console.log(userObject)
      res.status(200).json({userObject})
    }
    catch { }
}
