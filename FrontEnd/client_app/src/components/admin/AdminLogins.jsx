import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admindata, setadmindata] = useState({ adminemail: "", adminpass: "" });
  const URL = "http://localhost:3000/admin/adminLogin";

  const fetchdata = (e) => {
    setadmindata({ ...admindata, [e.target.name]: e.target.value });
  };

  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, admindata);
      if (serverResponse.data.status === "Success") {
        localStorage.setItem("key", serverResponse.data.token);
        alert(serverResponse.data.message);
        navigate("/adminhome");
      } else {
        alert(serverResponse.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const mainStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    padding: "2rem",
  };

  const containerStyle = {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    maxWidth: "900px",
    width: "100%",
  };

  const formStyle = {
    flex: 1,
    padding: "3rem",
  };

  const sideStyle = {
    flex: 1,
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={mainStyle}>
      <div style={containerStyle}>
        <div style={formStyle}>
          <h3 className="mb-4 text-center">Admin Login</h3>
          <form onSubmit={submitdata}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <div className="form-floating flex-grow-1">
                <input
                  type="email"
                  name="adminemail"
                  className="form-control"
                  value={admindata.adminemail}
                  id="floatingInput"
                  onChange={fetchdata}
                  placeholder="email"
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="fas fa-key"></i>
              </span>
              <div className="form-floating flex-grow-1">
                <input
                  type="password"
                  name="adminpass"
                  className="form-control"
                  value={admindata.adminpass}
                  id="floatingPassword"
                  onChange={fetchdata}
                  placeholder="password"
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success btn-lg">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div style={sideStyle}>
          <h2>Hello, Admin!</h2>
          <p style={{ marginTop: "1rem" }}>
            Enter your credentials to access the admin dashboard. Your information is secure with us.
          </p>
          <p className="mt-3" style={{ fontStyle: "italic" }}>
            "We'll never share your email with anyone else."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
