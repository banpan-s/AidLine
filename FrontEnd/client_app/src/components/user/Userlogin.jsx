import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/Custom_style.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    userID: "",
    userPassword: "",
  });

  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const URL = "http://localhost:3000/user/userlogin";

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, contactData);
      if (serverResponse.data.status === "Success") {
        localStorage.setItem("key", serverResponse.data.token);
        navigate("/userhome");
      } else {
        alert(serverResponse.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // Disable scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Header />

      {/* Fullscreen Video Background */}
      <div className="position-fixed top-0 start-0 w-100 h-100 z-n1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src="/videos/v.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Centered Login Form */}
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card text-white bg-dark bg-opacity-75 shadow-lg p-4 rounded-4"
          style={{ width: "380px", zIndex: 2 }}
        >
          <h3 className="text-center mb-4 text-info fw-bold">User Login</h3>

          <form onSubmit={submitData}>
            {/* User ID */}
            <div className="mb-3">
              <label htmlFor="userID" className="form-label text-white">
                User ID
              </label>
              <div className="input-group">
                <span className="input-group-text bg-info text-white">
                  <i className="fas fa-user" />
                </span>
                <input
                  type="text"
                  id="userID"
                  name="userID"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Enter User ID"
                  value={contactData.userID}
                  onChange={fetchData}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="userPassword" className="form-label text-white">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text bg-info text-white">
                  <i className="fas fa-lock" />
                </span>
                <input
                  type="password"
                  id="userPassword"
                  name="userPassword"
                  className="form-control bg-dark text-white border-info"
                  placeholder="Enter Password"
                  value={contactData.userPassword}
                  onChange={fetchData}
                  required
                />
              </div>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-info fw-semibold rounded-pill"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
