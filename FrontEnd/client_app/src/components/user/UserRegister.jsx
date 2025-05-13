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
      const response = await axios.post(URL, formData);
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
      console.log(err.message);
      if (err.response && err.response.data && err.response.data.message === "this email is already used") {
        setMessage("this email is already used");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src="/videos/v.mp4" type="video/mp4" />
      </video>

      <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "100vh" }}>
        <div
          className="card shadow-lg p-4 bg-dark bg-opacity-75 text-white"
          style={{ width: "90%", maxWidth: "600px", borderRadius: "20px" }}
        >
          <h3 className="text-center mb-4 text-info fw-bold">User Registration</h3>
          <form onSubmit={submitData}>

            {/* Email */}
            <label htmlFor="email" className="form-label text-white">Email</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-envelope-square"></i>
              </span>
              <input
                type="email"
                id="email"
                className="form-control bg-dark text-white border-info"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={fetchData}
                required
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="form-label text-white">Password</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-key"></i>
              </span>
              <input
                type="password"
                id="password"
                className="form-control bg-dark text-white border-info"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={fetchData}
                required
              />
            </div>

            {/* Name */}
            <label htmlFor="name" className="form-label text-white">Name</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-user-circle"></i>
              </span>
              <input
                type="text"
                id="name"
                className="form-control bg-dark text-white border-info"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={fetchData}
                required
              />
            </div>

            {/* Gender */}
            <label htmlFor="gender" className="form-label text-white">Gender</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-venus-mars"></i>
              </span>
              <select
                id="gender"
                className="form-select bg-dark text-white border-info"
                name="gender"
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
            <label htmlFor="phone" className="form-label text-white">Phone</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                id="phone"
                className="form-control bg-dark text-white border-info"
                placeholder="Phone"
                name="phone"
                value={userData.phone}
                onChange={fetchData}
                required
              />
            </div>

            {/* City */}
            <label htmlFor="city" className="form-label text-white">City</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-city"></i>
              </span>
              <input
                type="text"
                id="city"
                className="form-control bg-dark text-white border-info"
                placeholder="City"
                name="city"
                value={userData.city}
                onChange={fetchData}
                required
              />
            </div>

            {/* Address */}
            <label htmlFor="address" className="form-label text-white">Address</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-map"></i>
              </span>
              <textarea
                id="address"
                className="form-control bg-dark text-white border-info"
                placeholder="Address"
                name="address"
                value={userData.address}
                onChange={fetchData}
                required
              ></textarea>
            </div>

            {/* Profile Picture */}
            <label htmlFor="pic" className="form-label text-white">Profile Picture</label>
            <div className="input-group mb-4">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-upload"></i>
              </span>
              <input
                type="file"
                id="pic"
                name="pic"
                className="form-control bg-dark text-white border-info"
                onChange={fetchData}
              />
            </div>

            {message && (
              <div className="mb-3 text-center text-warning fw-semibold">
                {message}
              </div>
            )}

            <div className="d-grid">
              <button className="btn btn-info rounded-pill fw-semibold">Register</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserRegister;
