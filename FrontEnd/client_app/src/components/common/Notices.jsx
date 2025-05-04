import React, { useState, useEffect } from "react";
import axios from "axios";

const NOTICES_URL = "http://localhost:3000/owner/getAllAddNotices";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(NOTICES_URL);
      setNotices(res.data.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const containerStyle = {
    marginTop: "3rem",
    textAlign: "center",
  };

  const cardStyle = {
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const cardHeaderStyle = {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "0.75rem",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const cardBodyStyle = {
    padding: "1rem",
    textAlign: "left",
    flex: 1,
    overflowY: "auto",
    maxHeight: "400px",
  };

  const cardFooterStyle = {
    padding: "0.75rem",
    backgroundColor: "#f8f9fa",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    color: "#6c757d",
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (err) {
      return "Invalid Date";
    }
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="text-primary mb-4">Exclusive Owner Notices</h2>
      {notices.length === 0 ? (
        <div className="alert alert-info">No notices available at the moment.</div>
      ) : (
        <div className="card" style={cardStyle}>
          <div className="card-header" style={cardHeaderStyle}>
            <h5 className="card-title mb-0">Important Notices</h5>
          </div>
          <div className="card-body" style={cardBodyStyle}>
            {notices.map((notice) => (
              <div key={notice._id} className="mb-3">
                <h6 className="card-title">
                  Notice Date: {notice.createdAt ? formatDate(notice.createdAt) : "24  Hour"}
                </h6>
                <p className="card-text">{notice.text}</p>
              </div>
            ))}
          </div>
          <div className="card-footer" style={cardFooterStyle}>
            <small>All notices displayed here. Scroll for more.</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notices;
