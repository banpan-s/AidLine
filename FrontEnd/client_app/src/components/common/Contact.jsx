import { useState } from "react";
import '../../css/Custom_style.css'; // Corrected path for the CSS file
import axios from "axios"
import Header from './Header'

function Contact() {
  const URL="http://localhost:3000/allContact"
  const [contactData, setContactData] = useState({
    userName: "",
    userEmail: "",
    userQuery: "",
  });

  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  }

  const submitData =async(e) => {
    e.preventDefault();
    console.log(contactData);
    try{
       const serverResponse=await axios.post(URL,contactData)
       console.log(serverResponse)
    }
    catch(err){
      console.log("err.message");
    }
  }

  return (
    <>
    <Header />

    {/* <link to='/Header'> d</link> */}
      <h1 style={{ textAlign: "center" }}>This is Contact</h1>
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
              name="userName"
              value={contactData.userName}
              placeholder="NAME"
              style={{ marginTop: "4%", marginLeft: "9%" }}
              onChange={fetchData}
            />
            <input
              type="text"
              placeholder="Email"
              name="userEmail"
              value={contactData.userEmail}
              style={{ marginTop: "4%", marginLeft: "9%" }}
              onChange={fetchData}
            />
            <textarea
              type="feedback"
              placeholder="feedback"
              name="userQuery"
              value={contactData.userQuery}
              style={{ marginTop: "4%", marginLeft: "9%" }}
              onChange={fetchData}
            />
            <button style={{ marginTop: "4%", marginLeft: "9%", width: "25%" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
