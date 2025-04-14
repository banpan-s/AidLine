import React, { useState } from "react";
import axios from "axios";

const CreateQueue = () => {
  const tokenEmail = localStorage.getItem("key");

  const [formData, setFormData] = useState({
    email: tokenEmail,
    queueName: "",
    noOfToken: "",
    startTime: "",
    endTime: ""
  });

  const queue = "http://localhost:3000/owner/createq";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("on submit");
      const res = await axios.post(queue, formData);
      alert("Queue created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const backgroundImage =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1470&q=80";
 // techy queue dashboard

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "rgba(0,0,30,0.75)",
          color: "white",
          borderRadius: "20px"
        }}
      >
        <h3 className="text-center mb-4">
          <i className="bi bi-ui-checks-grid me-2"></i>Create Queue
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="queueName" className="form-label">
              Queue Name
            </label>
            <input
              type="text"
              name="queueName"
              value={formData.queueName}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g. Morning Queue"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="noOfToken" className="form-label">
              Number of Tokens
            </label>
            <input
              type="number"
              name="noOfToken"
              value={formData.noOfToken}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter token limit"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endTime" className="form-label">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-info w-100 fw-bold">
            <i className="bi bi-send-fill me-2"></i>Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQueue;
