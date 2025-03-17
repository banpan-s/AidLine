import { useState } from "react";
import "../../css/Custom_style.css"; // Corrected path for the CSS file
import Header from "../common/Header";

function userlogin() {
  const [contactData, setContactData] = useState({
    userID: "",
    userPassword: "",
  });

  const fetchData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(contactData);
  };

  return (
    <>
      <Header />
      {/* <link to='/Header'> d</link> */}
      <h1 style={{ textAlign: "center",fontFamily:"fantasy" }}>User login page</h1>
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
              placeholder="User_ID"
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

            <div
              className="input-group mb-3"
              style={{ marginTop: "4%", marginLeft: "8%" }}
            >
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i
                    class="far fa-envelope-open"
                    style={{ fontSize: "24px" }}
                  ></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <button style={{ marginTop: "4%", marginLeft: "9%", width: "25%" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default userlogin;
