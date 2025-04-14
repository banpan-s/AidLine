import { useState } from "react";
import '../../css/Custom_style.css';
import axios from "axios";
import Header from './Header';

function Contact() {
  const URL = "http://localhost:3000/allContact";
  const [contactData, setContactData] = useState({
    userName: "",
    userEmail: "",
    userQuery: "",
  });

  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, contactData);
      console.log(serverResponse);
    } catch (err) {
      console.log("err.message");
    }
  };

  return (
    <>
      <Header />

      {/* Section with gradient background color */}
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div className="card p-4 p-md-5 bg-dark bg-opacity-75 text-white shadow-lg border-0 rounded-4" style={{ maxWidth: "600px", width: "100%" }}>
          <h2 className="text-center mb-4 text-info">Contact Us</h2>

          <form onSubmit={submitData}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control bg-transparent text-white border-info"
                id="userName"
                name="userName"
                value={contactData.userName}
                onChange={fetchData}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control bg-transparent text-white border-info"
                id="userEmail"
                name="userEmail"
                value={contactData.userEmail}
                onChange={fetchData}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="userQuery" className="form-label">Your Message</label>
              <textarea
                className="form-control bg-transparent text-white border-info"
                id="userQuery"
                name="userQuery"
                value={contactData.userQuery}
                onChange={fetchData}
                placeholder="Write your feedback..."
                rows="5"
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-outline-info rounded-pill btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
