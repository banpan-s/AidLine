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

    const serverResponse = await axios.post(
      "http://localhost:3000/owner/addowner",
      formData
    );
    alert(serverResponse.data.message);
    navigate("/ownerlogin");
  };

  return (
    <>
      <Header />

      {/* Fullscreen Fixed Background Video */}
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
        <source src="/videos/rv.mp4" type="video/mp4" />
      </video>

      {/* Form Container */}
      <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "100vh" }}>
        <div
          className="card shadow-lg p-4 bg-dark bg-opacity-75 text-white"
          style={{ width: "90%", maxWidth: "600px", borderRadius: "20px" }}
        >
          <h3 className="text-center mb-4 text-info fw-bold">Organization Registration</h3>
          <form onSubmit={handleSubmit}>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control bg-dark text-white border-info"
                placeholder="Email"
                name="email"
                value={registrationData.email}
                onChange={fetchData}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-key"></i>
              </span>
              <input
                type="password"
                className="form-control bg-dark text-white border-info"
                placeholder="Password"
                name="password"
                value={registrationData.password}
                onChange={fetchData}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-building"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-info"
                placeholder="Organization Name"
                name="orgname"
                value={registrationData.orgname}
                onChange={fetchData}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-info"
                placeholder="Owner Name"
                name="ownername"
                value={registrationData.ownername}
                onChange={fetchData}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                className="form-control bg-dark text-white border-info"
                placeholder="Phone"
                name="phone"
                value={registrationData.phone}
                onChange={fetchData}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-info"
                placeholder="Address"
                name="address"
                value={registrationData.address}
                onChange={fetchData}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-list"></i>
              </span>
              <select
                className="form-select bg-dark text-white border-info"
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

            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-info-circle"></i>
              </span>
              <textarea
                className="form-control bg-dark text-white border-info"
                placeholder="Description"
                name="description"
                value={registrationData.description}
                onChange={fetchData}
                required
              ></textarea>
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text bg-info text-white">
                <i className="fas fa-upload"></i>
              </span>
              <input
                type="file"
                name="file"
                className="form-control bg-dark text-white border-info"
                onChange={fetchData}
              />
            </div>

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

export default OwnerRegister;
