import App from "../../App";
import { useState } from "react";
import '../../css/Custom_style.css'; // Corrected path for the CSS file
import Footer from "../common/Footer";
import Header from "../common/Header";


function Adminlogin() {
  const [contactData, setContactData] = useState({
    userID: "",
    userPassword: "",
    
  });

  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  }

  const submitData = (e) => {
    e.preventDefault();
    console.log(contactData);
  }

  return (
    <>
    
     <Header/>

    {/* <link to='/Header'> d</link> */}
      <h1 style={{ textAlign: "center" }}>Admin login page</h1>
      <form onSubmit={submitData}>
        <div style={{ display: "flex", marginLeft: "3%" }}>
          <div
            style={{
              background: "",
              width: "40%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              name="userID"
              value={contactData.userID}
              placeholder="Admin_ID"
              style={{ marginTop: "4%", marginLeft: "9%" }}
              onChange={fetchData}
            />
            <input
              type="text"
              placeholder="Password"
              name="userPassword"
              value={contactData.userPassword}
              style={{ marginTop: "4%", marginLeft: "9%" }}
              onChange={fetchData}
            />
           
            <button style={{ marginTop: "4%", marginLeft: "9%", width: "25%" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="main" style={{minHeight:"70vh"}}>
            <Footer/>
            </div>
    </>
  );
}

export default Adminlogin;
