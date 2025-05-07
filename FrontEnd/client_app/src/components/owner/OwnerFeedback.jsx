import React, { useState } from "react";
import axios from "axios";

const OwnerFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setMessage("Please enter your feedback.");
      return;
    }
    try {
      const ownerEmail = localStorage.getItem("ownerEmail") || ""; // Assuming owner email stored in localStorage
      const response = await axios.post("http://localhost:3000/owner/submitFeedback", { feedback, ownerEmail });
      if (response.data.message) {
        setMessage(response.data.message);
        setFeedback("");
      }
    } catch (error) {
      setMessage("Error submitting feedback. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="owner-feedback-container">
      <h2>Owner Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here"
          rows={5}
          cols={50}
        />
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OwnerFeedback;
