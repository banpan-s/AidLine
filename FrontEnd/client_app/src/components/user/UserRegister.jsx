import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

function UserRegister() {
  const navigate = useNavigate();
  const URL = "http://localhost:3000/user/addUser";

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    gender: "",
    city: "",
    address: "",
  });

  const [userPic, setUserPic] = useState(null);
  const [message, setMessage] = useState("");

  const fetchData = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setUserPic(files[0]);
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in userData) {
      formData.append(key, userData[key]);
    }
    if (userPic) formData.append("pic", userPic);

    try {
      await axios.post(URL, formData);
      setMessage("Registration done successfully");
      setUserData({
        email: "",
        password: "",
        name: "",
        phone: "",
        gender: "",
        city: "",
        address: "",
      });
      setUserPic(null);
      setTimeout(() => {
        navigate("/userlogin");
      }, 1500);
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.message === "this email is already used"
      ) {
        setMessage("This email is already used");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />

      {/* Page Background */}
      <div style={{ backgroundColor: "#343a40", minHeight: "100vh", paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="container d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-4 bg-dark text-white"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "20px" }}
          >
            <h3 className="text-center mb-4 text-info fw-bold">User Registration</h3>
            <form onSubmit={submitData}>
              {/* Email */}
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-envelope"></i></span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Email"
                  value={userData.email}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Password */}
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-key"></i></span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Password"
                  value={userData.password}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Name */}
              <label htmlFor="name" className="form-label">Name</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-user"></i></span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Name"
                  value={userData.name}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Gender */}
              <label htmlFor="gender" className="form-label">Gender</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-venus-mars"></i></span>
                <select
                  id="gender"
                  name="gender"
                  className="form-select bg-dark text-white border-info"
                  value={userData.gender}
                  onChange={fetchData}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Phone */}
              <label htmlFor="phone" className="form-label">Phone</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-phone"></i></span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Phone"
                  value={userData.phone}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* City */}
              <label htmlFor="city" className="form-label">City</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-city"></i></span>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control bg-dark text-white border-info"
                  placeholder="City"
                  value={userData.city}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Address */}
              <label htmlFor="address" className="form-label">Address</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white"><i className="fas fa-map-marker-alt"></i></span>
                <textarea
                  id="address"
                  name="address"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Address"
                  value={userData.address}
                  onChange={fetchData}
                  required
                ></textarea>
              </div>

              {/* Profile Picture */}
              <label htmlFor="pic" className="form-label">Profile Picture</label>
              <div className="input-group mb-4">
                <span className="input-group-text bg-info text-white"><i className="fas fa-upload"></i></span>
                <input
                  type="file"
                  id="pic"
                  name="pic"
                  className="form-control bg-dark text-white border-info"
                  onChange={fetchData}
                />
              </div>

              {/* Message */}
              {message && (
                <div className="mb-3 text-center text-warning fw-semibold">{message}</div>
              )}

              {/* Submit */}
              <div className="d-grid">
                <button className="btn btn-info rounded-pill fw-semibold">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserRegister;
