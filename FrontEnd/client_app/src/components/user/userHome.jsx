// import React, { useEffect } from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function UserHome() {
  console.log("UserHome component rendered");
  const URL="http://localhost;3000/user/userProfile"
  const[user,setUser]=useState({})
  useEffect(()=>{
if(tokenEmail||tokenemail==null)
{
    Navigate("/user_login")
}
else{
    fetchUserDetails()
}
  },[]) //useEffect close
  const fetchUserDetails=async()=>{
    try{
     const serverResponse=await axios.get(URL, {tokenEmail})
     console.log(serverResponse);
     serUser(serverResponse.data) 
    }
    catch(err)
    {
        console.log("Error fetching user details");
    }
    
  }

  return (
    <>
    <h1>Hello{}</h1>
    </>
  );
}
export default UserHome
