import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./UserHeader";

function UserEditProfile() {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("key");
  const getProfileURL = "http://localhost:3000/user/userProfile";
  const updateProfileURL = "http://localhost:3000/user/editprofile";

  const [user, setUser] = useState({
    phone: "",
    city: "",
    address: "",
    pic: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!tokenEmail) {
      navigate("/userlogin");
    } else {
      fetchUserDetails();
    }
  }, [tokenEmail, navigate]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(getProfileURL, {
        params: { email: tokenEmail },
      });
      setUser(response.data.userObject || {});
      setPreviewUrl(`http://localhost:3000/uploads/${response.data.userObject?.pic || "default.jpg"}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("phone", user.phone);
      formData.append("city", user.city);
      formData.append("address", user.address);
      if (selectedFile) {
        formData.append("pic", selectedFile);
      }

      const res = await axios.post(updateProfileURL, formData, {
        params: { email: tokenEmail },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.updateStatus?.acknowledged) {
        setSuccessMessage("Profile Updated Successfully");
        if (res.data.updatedPic) {
          setUser((prev) => ({ ...prev, pic: res.data.updatedPic }));
          setPreviewUrl(`http://localhost:3000/uploads/${res.data.updatedPic}`);
        }
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/UserHome");
        }, 2000);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "90px" }}>
        <div className="container mt-5">
          <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
            <div className="text-center mb-3">
              <img
                src={previewUrl || `http://localhost:3000/uploads/${user?.pic || "default.jpg"}`}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="mt-3">Edit Profile</h5>
              {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  {successMessage}
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Profile Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={user.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={user.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={user.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEditProfile;
