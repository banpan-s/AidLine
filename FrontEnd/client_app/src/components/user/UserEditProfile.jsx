import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./UserHeader";
function UserEditProfile() {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("key");
  const URL = "http://localhost:3000/user/userProfile";
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!tokenEmail || tokenEmail == null) {
      navigate("/userlogin");
    } else {
      fetchuserDetails();
    }
  }, []); //useeffect ends here

  const fetchuserDetails = async () => {
    try {
      const params = { email: tokenEmail };
      const serverResponse = await axios.get(URL, { params });
      console.log(serverResponse);
      setUser(serverResponse.data.userObject); //setting user profile details in user object
    } catch (err) {
      console.log(err.messsage);
    }
  };

  //make form responsibe
  const fetchData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  //send data
  const EDIT_PROFILE_URL = "http://localhost:3000/user/editProfile";

  const submitData = async (e) => {
    e.PreventDefault();
    try {
      const params = { email: tokenEmail };
      console.log(user)
      const serverResponse = await axios.put(EDIT_PROFILE_URL, user, {
        params,
      });
      const serverStatus = serverResponse.data.updateStatus;
      if (serverStatus.acknowledged) {
        alert("profile Updated Successfully");
        navigate("UserHome");
      }
    } catch (err) {
      console.log(err.messsage);
    }
  };

  return (
    <>
      <Header />
      {/* <h1 className='talign'>Welcome {user.username}</h1> */}

      <div
        className="card mx-auto"
        style={{ width: "18rem", backgroundColor: "red", marginTop: "150px" }}
      >
        <form onSubmit={submitData}>
          <img
            style={{
              borderRadius: "50%",
              height: "130px",
              width: "40%",
              margin: "auto",
            }}
            src={`http://localhost:3000/uploads/${user.pic}`}
            alt="User Profile" // Added alt attribute
          />{" "}
          <div className="card-body">
            <div style={{ fontFamily: "cursive" }}>
              <h5 className="card-title">
                Phone:-
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  className="form-control"
                  onChange={fetchData}
                  required
                />
              </h5>
              <p className="card-text">
                City:-
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  className="form-control"
                  onChange={fetchData}
                  required
                />
              </p>

              {/* <input type="hidden" /> */}

              <p className="card-text">
                Address:-
                <textarea
                  name="address"
                  className="form-control"
                  onChange={fetchData}
                  value={user.address}
                  required
                ></textarea>
              </p>
              <button className="btn btn-danger">EditProfile</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserEditProfile;

// add profile pic in usermodel userregister usercontroler
//
