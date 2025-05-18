import { useState } from "react";
import "../../css/Custom_style.css";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  const URL = "http://localhost:3000/allContact";
  const [contactData, setContactData] = useState({
    userName: "",
    userEmail: "",
    userQuery: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, contactData);
      setSuccessMessage(serverResponse.data.message); // Show success message
      setContactData({ userName: "", userEmail: "", userQuery: "" }); // Clear form
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />
      

      {/* Light and Professional Background */}
      <div
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(to right, #e0eafc, #cfdef3)",
          padding: "40px 20px",
        }}
      >
        {/* Contact Card */}
        <div
          className="bg-white p-4 p-md-5 shadow-lg rounded-4 border border-0"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <h2 className="text-center mb-4 text-primary fw-bold">Contact Us</h2>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={submitData}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={contactData.userName}
                onChange={fetchData}
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                name="userEmail"
                value={contactData.userEmail}
                onChange={fetchData}
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="userQuery" className="form-label fw-semibold">Message</label>
              <textarea
                className="form-control"
                id="userQuery"
                name="userQuery"
                value={contactData.userQuery}
                onChange={fetchData}
                placeholder="How can we help you?"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill fw-semibold">
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
