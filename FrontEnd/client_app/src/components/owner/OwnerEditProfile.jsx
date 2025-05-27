import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./OwnerHeader";

const OwnerEditProfile = () => {
  const navigate = useNavigate();
  const tokenEmail = localStorage.getItem("ownerEmail");
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
      const response = await axios.get(getProfileURL, {
        params: { email: tokenEmail },
      });
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

      setTimeout(() => {
        navigate("/ownerhome");
      }, 2000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile");
    }
  };

  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", background: "linear-gradient(to right, #e3f2fd, #ffffff)" }}
      >
        <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "650px", width: "100%" }}>
          <h3 className="text-center mb-4 text-primary fw-bold">Edit Your Profile</h3>

          {message && <div className="alert alert-info text-center">{message}</div>}

          {/* Profile image section */}
          <div className="mb-4 text-center">
             {previewImage && (
              <img
                src={previewImage}
                alt="Profile Preview"
                className="img-thumbnail mt-3"
                style={{ maxWidth: "180px", borderRadius: "10px" }}
              />
            )}
            {/* <label htmlFor="file" className="form-label fw-semibold text-secondary">Update Profile Image</label> */}

            <input
              type="file"
              className="form-control"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
            />
           
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-primary">Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="ownername"
                value={formData.ownername}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-primary">Organization Name</label>
              <input
                type="text"
                className="form-control"
                name="orgname"
                value={formData.orgname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-primary">Organization Type</label>
              <select
                className="form-select"
                name="orgtype"
                value={formData.orgtype}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Type --</option>
                <option value="Private">Private</option>
                <option value="Government">Government</option>
                <option value="NGO">NGO</option>
                <option value="Startup">Startup</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label text-primary">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label text-primary">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-primary">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4 py-2">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OwnerEditProfile;