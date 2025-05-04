import Header from "./OwnerHeader";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OwnerHome = () => {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("key");
  const URL = "http://localhost:3000/owner/getProfile";
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!tokenEmail) {
      navigate("/u/login");
    } else {
      fetchUserDetails(tokenEmail);
    }
  }, []);

  const fetchUserDetails = async (tokenEmail) => {
    try {
      const res = await axios.get(URL, { params: { email: tokenEmail } });
      setUser(res.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const profileImageUrl = user.file
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
            <h4 className="fw-bold mb-2 text-primary">👤 {user.ownername}</h4>
            <p className="mb-1"><strong>🏢 Organization:</strong> {user.orgname}</p>
            <p className="mb-1"><strong>📌 Type:</strong> {user.orgtype}</p>
            <p className="mb-1"><strong>📝 Description:</strong> {user.description}</p>
            <p className="mb-1"><strong>📞 Phone:</strong> {user.phone}</p>
            <p className="mb-0"><strong>📍 Address:</strong> {user.address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerHome;
