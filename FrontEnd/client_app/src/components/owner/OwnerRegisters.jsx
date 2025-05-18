import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OwnerRegister() {
  const navigate = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    orgname: "",
    ownername: "",
    address: "",
    phone: "",
    orgtype: "",
    description: "",
    file: "",
  });

  const [message, setMessage] = useState("");

  const fetchData = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setRegistrationData({ ...registrationData, [name]: files[0] });
    } else {
      setRegistrationData({ ...registrationData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let key in registrationData) {
      formData.append(key, registrationData[key]);
    }

    try {
      const serverResponse = await axios.post(
        "http://localhost:3000/owner/addowner",
        formData
      );
      setMessage(serverResponse.data.message);
      setTimeout(() => {
        navigate("/ownerlogin");
      }, 1500);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "this email is already used"
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

      {/* 🔷 Dark Gradient Background Container */}
      <div
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          padding: "40px 0",
        }}
      >
        {/* 📝 Form Card */}
        <div
          className="card shadow-lg p-4 bg-dark bg-opacity-75 text-white"
          style={{ width: "90%", maxWidth: "600px", borderRadius: "20px" }}
        >
          <h3 className="text-center mb-4 text-info fw-bold">
            Organization Registration
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control bg-dark text-white border-info"
                placeholder="Email"
                id="email"
                name="email"
                value={registrationData.email}
                onChange={fetchData}
                required
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-key"></i>
              </span>
              <input
                type="password"
                className="form-control bg-dark text-white border-info"
                placeholder="Password"
                id="password"
                name="password"
                value={registrationData.password}
                onChange={fetchData}
                required
              />
            </div>

            {/* Organization Name */}
            <label htmlFor="orgname" className="form-label text-white">
              Organization Name
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-building"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-info"
                placeholder="Organization Name"
                id="orgname"
                name="orgname"
                value={registrationData.orgname}
                onChange={fetchData}
                required
              />
            </div>

            {/* Owner Name */}
            <label htmlFor="ownername" className="form-label text-white">
              Owner Name
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-info"
                placeholder="Owner Name"
                id="ownername"
                name="ownername"
                value={registrationData.ownername}
                onChange={fetchData}
                required
              />
            </div>

            {/* Phone */}
            <label htmlFor="phone" className="form-label text-white">
              Phone
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                className="form-control bg-dark text-white border-info"
                placeholder="Phone"
                id="phone"
                name="phone"
                value={registrationData.phone}
                onChange={fetchData}
                required
              />
            </div>

            {/* Address */}
            <label htmlFor="address" className="form-label text-white">
              Address
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-info"
                placeholder="Address"
                id="address"
                name="address"
                value={registrationData.address}
                onChange={fetchData}
                required
              />
            </div>

            {/* Organization Type */}
            <label htmlFor="orgtype" className="form-label text-white">
              Organization Type
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-list"></i>
              </span>
              <select
                className="form-select bg-dark text-white border-info"
                id="orgtype"
                name="orgtype"
                value={registrationData.orgtype}
                onChange={fetchData}
                required
              >
                <option value="">Select Organization Type</option>
                <option value="Salon">Salon</option>
                <option value="Clinic">Clinic</option>
                <option value="Hospital">Hospital</option>
                <option value="Shop">Shop</option>
              </select>
            </div>

            {/* Description */}
            <label htmlFor="description" className="form-label text-white">
              Description
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-info-circle"></i>
              </span>
              <textarea
                className="form-control bg-dark text-white border-info"
                placeholder="Description"
                id="description"
                name="description"
                value={registrationData.description}
                onChange={fetchData}
                required
              ></textarea>
            </div>

            {/* File Upload */}
            <label htmlFor="file" className="form-label text-white">
              Upload File
            </label>
            <div className="input-group mb-4">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-upload"></i>
              </span>
              <input
                type="file"
                name="file"
                id="file"
                className="form-control bg-dark text-white border-info"
                onChange={fetchData}
              />
            </div>

            {/* Message */}
            {message && (
              <div className="mb-3 text-center text-warning fw-semibold">
                {message}
              </div>
            )}

            {/* Submit Button */}
            <div className="d-grid">
              <button className="btn btn-info rounded-pill fw-semibold">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OwnerRegister;
