import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./OwnerHeader";

const OwnerEditProfile = () => {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("key");
  const getProfileURL = "http://localhost:3000/owner/getProfile";
  const updateProfileURL = "http://localhost:3000/owner/editProfile";

  const [formData, setFormData] = useState({
    ownername: "",
    orgname: "",
    orgtype: "",
    description: "",
    phone: "",
    address: "",
    file: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!tokenEmail) {
      navigate("/u/login");
    } else {
      fetchProfile();
    }
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(getProfileURL, { params: { email: tokenEmail } });
      const data = response.data.data;
      setFormData({
        ownername: data.ownername || "",
        orgname: data.orgname || "",
        orgtype: data.orgtype || "",
        description: data.description || "",
        phone: data.phone || "",
        address: data.address || "",
        file: null,
      });
      if (data.file) {
        setPreviewImage(`http://localhost:3000/uploads/${data.file}`);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("email", tokenEmail);
      data.append("ownername", formData.ownername);
      data.append("orgname", formData.orgname);
      data.append("orgtype", formData.orgtype);
      data.append("description", formData.description);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      if (formData.file) {
        data.append("file", formData.file);
      }

      const response = await axios.put(updateProfileURL, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message || "Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile");
    }
  };

  return (
    <>
      <Header />
      <div style={{marginTop:"99px"}}>
      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <h2>Edit Owner Profile</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="ownername" className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              id="ownername"
              name="ownername"
              value={formData.ownername}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orgname" className="form-label">Organization Name</label>
            <input
              type="text"
              className="form-control"
              id="orgname"
              name="orgname"
              value={formData.orgname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orgtype" className="form-label">Organization Type</label>
            <input
              type="text"
              className="form-control"
              id="orgtype"
              name="orgtype"
              value={formData.orgtype}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">Profile Image</label>
            <input
              type="file"
              className="form-control"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
            />
            {previewImage && (
              <img src={previewImage} alt="Profile Preview" className="img-thumbnail mt-2" style={{ maxWidth: "200px" }} />
            )}
          </div>
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default OwnerEditProfile;
