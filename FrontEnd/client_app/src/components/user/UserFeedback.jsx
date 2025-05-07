import React, { useState } from "react";
import axios from "axios";

const UserFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFeedback(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setMessage("💬 Please enter your feedback.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/submitFeedback", { feedback });
      if (response.status === 200) {
        setMessage("🎉 Thank you! Your feedback means a lot.");
        setFeedback("");
      } else {
        setMessage("❌ Oops! Please try again.");
      }
    } catch (error) {
      console.error("Feedback error:", error);
      setMessage("⚠️ Something went wrong. Try later.");
    }
  };

  const wrapperStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "2rem",
  };

  const cardStyle = {
    backgroundColor: "#ffffffcc",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
    padding: "2rem",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const textareaStyle = {
    width: "100%",
    height: "140px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    padding: "1rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    resize: "none",
    outline: "none",
    boxShadow: "inset 0 2px 5px rgba(0,0,0,0.05)",
  };

  const buttonStyle = {
    backgroundColor: "#ff6b81",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "30px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#ff4757",
  };

  const messageStyle = {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#2f3542",
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>
          ✨ Send Us Your Thoughts
        </h2>
        <form onSubmit={handleSubmit}>
          <textarea
            style={textareaStyle}
            placeholder="💡 We'd love to hear your suggestions, feedback, or anything else!"
            value={feedback}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4757")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6b81")}
          >
            🚀 Submit Feedback
          </button>
        </form>
        {message && <div style={messageStyle}>{message}</div>}
      </div>
    </div>
  );
};

export default UserFeedback;
