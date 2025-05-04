import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OwnerViewQueue = () => {
  const [queues, setQueues] = useState([]);
  const [filteredQueues, setFilteredQueues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQueues = async () => {
      try {
        const response = await axios.get("http://localhost:3000/owner/getOwnerQueue", {
          params: { email: localStorage.getItem("key") },
        });
        setQueues(response.data);
        setFilteredQueues(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching queues:", error);
        setLoading(false);
      }
    };
    fetchQueues();
  }, []);

  useEffect(() => {
    const filtered = queues.filter((q) =>
      q.queueName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQueues(filtered);
  }, [searchTerm, queues]);

  const send = (queue) => {
    navigate("/owner/viewQueue", { state: { queueID: queue._id } });
  };

  if (loading) return <p className="text-center mt-5">Loading queues...</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-primary">📋 All Queues</h2>

      {/* Search Bar */}
      <div className="mb-5 d-flex justify-content-center">
        <div className="position-relative" style={{ maxWidth: "400px", width: "100%" }}>
          <input
            type="text"
            className="form-control ps-5 rounded-pill shadow-sm"
            placeholder="🔍 Search queue by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              fontSize: "0.9rem",
              height: "38px",
              backgroundColor: "#f1f3f5",
              border: "1px solid #ced4da",
            }}
          />
          <span
            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            style={{ pointerEvents: "none", fontSize: "1rem" }}
          >
            
          </span>
        </div>
      </div>

      {filteredQueues.length === 0 ? (
        <p className="text-center text-muted">No matching queues found.</p>
      ) : (
        <div className="row g-4">
          {filteredQueues.map((queue) => (
            <div className="col-md-6 col-lg-4" key={queue._id}>
              <div
                className="card shadow-sm h-100 border-0"
                style={{
                  background: "linear-gradient(to right, #fdfbfb, #ebedee)",
                  borderRadius: "15px",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="card-body">
                  <h5 className="card-title text-dark fw-bold">
                    🏷️ {queue.queueName}
                  </h5>
                  <p className="card-text mb-1">
                    📧 <strong>Email:</strong> {queue.email}
                  </p>
                  <p className="card-text mb-1">
                    🔢 <strong>Tokens:</strong> {queue.noOfToken}
                  </p>
                  <p className="card-text mb-1">
                    🕒 <strong>Start:</strong> {queue.startTime}
                  </p>
                  <p className="card-text mb-1">
                    ⌛ <strong>End:</strong> {queue.endTime}
                  </p>
                  <p className="card-text mb-3">
                    📅 <strong>Date:</strong> {queue.date}
                  </p>
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => send(queue)}
                  >
                    ✏️ Update Queue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OwnerViewQueue;
