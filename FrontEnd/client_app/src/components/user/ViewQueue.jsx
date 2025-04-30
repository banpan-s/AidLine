import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./UserHeader";

function ViewQueue() {
  const [queue, setQueue] = useState([]);
  const [filteredQueue, setFilteredQueue] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const tokenEmail = localStorage.getItem("key");

  const URL = "http://localhost:3000/user/getQueue";
  const BookURL = "http://localhost:3000/user/bookQueue";

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = queue.filter((item) =>
      item.queueName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQueue(filtered);
  }, [searchTerm, queue]);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setQueue(res.data.queueData);
      setFilteredQueue(res.data.queueData); // Initialize with all queues
    } catch (error) {
      console.log(error);
    }
  };

  const bookQueue = async (e, item) => {
    e.preventDefault();
    const params = { queueID: item._id, userEmail: tokenEmail };
    try {
      await axios.get(BookURL, { params });
      alert("Booking done");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container py-5 mt-5">
        <h2 className="text-center mb-4 fw-bold text-primary">
          📋 Explore Queues
        </h2>

        {/* 🔍 Search Input */}
        <div className="mb-4 d-flex justify-content-center">
          <div
            className="position-relative"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <input
              type="text"
              className="form-control ps-5 rounded-pill shadow-sm"
              placeholder="🔍 Search for a queue..."
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
            ></span>
          </div>
        </div>

        <div className="row g-4">
          {filteredQueue.length === 0 ? (
            <p className="text-center text-muted">No queues found.</p>
          ) : (
            filteredQueue.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="card shadow border-0 h-100"
                  style={{
                    background: "linear-gradient(to right, #f8f9fa, #e3f2fd)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-bold">
                      🏷️ {item.queueName}
                    </h5>
                    <p className="card-text mb-2">
                      🔢 <strong>Tokens:</strong> {item.noOfToken}
                    </p>
                    <p className="card-text mb-2">
                      🕒 <strong>Start:</strong> {item.startTime}
                    </p>
                    <p className="card-text mb-3">
                      ⌛ <strong>End:</strong> {item.endTime}
                    </p>
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={(e) => bookQueue(e, item)}
                    >
                      ➕ Join Queue
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ViewQueue;
