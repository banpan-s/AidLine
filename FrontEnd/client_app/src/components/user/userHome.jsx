import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './UserHeader';

function Userhome() {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("key");
  const URL = "http://localhost:3000/user/userProfile";
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!tokenEmail) {
      navigate("/userlogin");
    } else {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const params = { email: tokenEmail };
      const serverResponse = await axios.get(URL, { params });
      setUser(serverResponse.data.userObject || {});
    } catch (err) {
      console.log("Error fetching user:", err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5 d-flex justify-content-center " style={{ marginTop:"99px"}}>
        <div className="card shadow-lg" style={{ width: "24rem", borderRadius: "20px", backgroundColor: "#f0f8ff" ,marginTop:"57px"}}>
          <div className="card-body text-center p-4" style={{ marginTop:"99px"}}>
            <img
              src={`http://localhost:3000/uploads/${user.pic || "default.jpg"}`}
              alt="User Profile"
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px", objectFit: "cover", border: "4px solid #0d6efd" }}
            />
            <h4 className="card-title mb-2" style={{ fontFamily: "Georgia, serif", color: "#0d6efd" }}>
              Welcome {user.name || "User"}
            </h4>
            <hr />
            <p className="card-text mb-2"><strong>Phone:</strong> {user.phone}</p>
            <p className="card-text mb-2"><strong>City:</strong> {user.city}</p>
            <p className="card-text"><strong>Address:</strong> {user.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userhome;
