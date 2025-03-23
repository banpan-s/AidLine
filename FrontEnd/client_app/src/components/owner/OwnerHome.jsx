// import React, { useEffect } from "react";
import Header from "./OwnerHeader";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Header from "../common/Header";

const UserHome = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("key");
  const URL = "http://localhost:3000/u/getprofile";

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token || token == null) {
      navigate("/u/login");
    } else {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const params = { token: tokenEmail };   
      const serverResponse=await axios.get(URL,{params})
      console.log(serverResponse);

      
      setUser(serverResponse.data.user);
    } catch {}
  };

  return (
    <>
      <Header />
      <div className="card mx-auto" style={{ width: "18rem", backgroundColor:"red",marginTop:"99px" }}>
        
        <img src={`http:/localhost:3000/images/${user.pic}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Phone : {user.phone}</h5>
          <p className="card-text">City : {user.city} </p>
          <p className="card-text">Address : {user.address} </p>
        </div>
      </div>
    </>
  );
};

export default UserHome;