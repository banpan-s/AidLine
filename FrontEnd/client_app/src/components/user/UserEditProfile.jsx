import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./UserHeader";

function UserEditProfile() {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("key"); // Retrieve email from local storage
  const URL = "http://localhost:3000/user/editprofile"; // API endpoint for fetching user details

  // State to manage user details
  const [user, setUser] = useState({
    phone: "",
    city: "",
    address: "",
    pic: "",
  });

  // Fetch user details on component mount
  useEffect(() => {
    if (!tokenEmail) {
      navigate("/userlogin"); // Redirect to login if no token is found
    } else {
      fetchuserDetails();
    }
  }, []);

  // Function to fetch user details from backend
  const fetchuserDetails = async () => {
    try {
      const params = { email: tokenEmail }; // Passing email as parameter
      const serverResponse = await axios.post(URL,user);
      setUser(serverResponse.data.userObject || {}); // Update state with user data
    } catch (err) {
      console.log(err.message); // Log any errors
    }
  };

  // Handle input changes
  const fetchData = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const EDIT_PROFILE_URL = "http://localhost:3000/user/editProfile"; // API endpoint for updating profile

  // Handle form submission
  const submitData = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const params = { email: tokenEmail }; // Pass email to backend
      const serverResponse = await axios.put(EDIT_PROFILE_URL, user, { params });
      if (serverResponse.data.updateStatus.acknowledged) {
        alert("Profile Updated Successfully"); // Show success message
        navigate("/UserHome"); // Redirect to User Home page
      }
    } catch (err) {
      console.log(err.message); // Log errors
    }
  };

  return (
    <>
      <Header />
      {/* User profile card */}
      <div className="card mx-auto" style={{ width: "18rem", backgroundColor: "red", marginTop: "150px" }}>
        <form onSubmit={submitData}>
          {/* Profile Image */}
          <img
            style={{ borderRadius: "50%", height: "130px", width: "40%", margin: "auto" }}
            src={`http://localhost:3000/uploads/${user?.pic || "default.jpg"}`}
            alt="User Profile"
          />
          <div className="card-body">
            <div style={{ fontFamily: "cursive" }}>
              <h5 className="card-title">
                Phone: 
                <input type="text" name="phone" value={user?.phone || ""} className="form-control" onChange={fetchData} required />
              </h5>
              <p className="card-text">
                City: 
                <input type="text" name="city" value={user?.city || ""} className="form-control" onChange={fetchData} required />
              </p>
              <p className="card-text">
                Address:
                <textarea name="address" className="form-control" value={user?.address || ""} onChange={fetchData} required></textarea>
              </p>
              {/* Submit Button */}
              <button className="btn btn-danger">Edit Profile</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserEditProfile;