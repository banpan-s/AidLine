
import { useState } from "react";
import axios from "axios";
import "../../css/Custom_style.css"; // Custom styles if needed
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";


function Userlogin() {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    userID: "",
    userPassword: "",
  });

  // Handle input changes
  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const URL = "http://localhost:3000/user/userlogin";     //owner/userlogin

  // Handle form submission
  const submitData = async (e) => {
    e.preventDefault();
    console.log(contactData);

    try {
      const serverResponse = await axios.post(URL, contactData);

      if (serverResponse.data.status === "Success") {
        alert(serverResponse.data.message);
        localStorage.setItem("key", serverResponse.data.token);
        navigate("/userhome");
      } else {
        alert(serverResponse.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
          <h3 className="text-center mb-3">User Login</h3>
          <form onSubmit={submitData}>
            {/* User ID Field */}
            <div className="mb-3">
              <label htmlFor="userID" className="form-label">User ID</label>
              <div className="input-group">
                <span className="input-group-text">
                <i className="fas fa-user"/>                </span>
                <input
                  type="text"
                  id="userID"
                  name="userID"
                  className="form-control"
                  placeholder="Enter User ID"
                  value={contactData.userID}
                  onChange={fetchData}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                <i className="fas fa-lock"/>               
                 </span>
                <input
                  type="password"
                  id="userPassword"
                  name="userPassword"
                  className="form-control"
                  placeholder="Enter Password"
                  value={contactData.userPassword}
                  onChange={fetchData}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Userlogin;
