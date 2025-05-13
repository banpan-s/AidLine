import React, { useState } from "react";
import axios from "axios";
import Header from "./OwnerHeader";

const OwnerFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setMessage("Please enter your feedback.");
      return;
    }
    const ownerEmail = localStorage.getItem("ownerEmail");
    if (!ownerEmail) {
      setMessage("Owner email not found. Please login again.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/owner/submitFeedback", {
        feedback,
        ownerEmail,
      });
      if (response.data.message) {
        setMessage(response.data.message);
        setFeedback("");
      }
    } catch (error) {
      setMessage("Error submitting feedback. Please try again later.");
      console.error("Error in feedback submission:", error);
    }
  };

  return (
    <> <Header/>
    <div className="container my-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Owner Feedback</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="feedbackTextarea" className="form-label">
                    Your Feedback
                  </label>
                  <textarea
                    id="feedbackTextarea"
                    className="form-control"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback here"
                    rows={5}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit Feedback
                  </button>
                </div>
              </form>
              {message && (
                <div className="alert alert-info mt-3" role="alert">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OwnerFeedback;
