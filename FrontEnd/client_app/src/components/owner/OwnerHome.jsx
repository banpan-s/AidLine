import Header from "./OwnerHeader";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OwnerHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tokenEmail = localStorage.getItem("ownerEmail");
  const URL = "http://localhost:3000/owner/getProfile";
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!tokenEmail) {
      navigate("/ownerlogin");
    } else {
      fetchUserDetails(tokenEmail);
      if (location.state && location.state.loginSuccess) {
        toast.success("Login successful!");
      }
    }
  }, [tokenEmail, location.state, navigate]);

  const fetchUserDetails = async (tokenEmail) => {
  try {
    const res = await axios.get(URL, { params: { email: tokenEmail } });
    setUser(res.data.data || null); 
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};


  const profileImageUrl = user && user.file
    ? `http://localhost:3000/uploads/${user.file}`
    : "/images/Aidline_logo.png";

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "80px" }}>
        <div
          className="card shadow-lg p-4"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
          }}
        >
          <div className="text-center">
            <img
              src={profileImageUrl}
              alt="Owner Profile"
              className="rounded-circle border border-3"
              style={{ width: "120px", height: "120px", objectFit: "cover", marginBottom: "20px" }}
            />
          </div>
          <div className="card-body text-center">
            <h4 className="fw-bold mb-2 text-primary">👤 {user ? user.ownername : ""}</h4>
            <p className="mb-1"><strong>🏢 Organization:</strong> {user ? user.orgname : ""}</p>
            <p className="mb-1"><strong>📌 Type:</strong> {user ? user.orgtype : ""}</p>
            <p className="mb-1"><strong>📝 Description:</strong> {user ? user.description : ""}</p>
            <p className="mb-1"><strong>📞 Phone:</strong> {user ? user.phone : ""}</p>
            <p className="mb-0"><strong>📍 Address:</strong> {user ? user.address : ""}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default OwnerHome;
