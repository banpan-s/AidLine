import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./UserHeader";

function ViewQueue() {
  const [queue, setQueue] = useState([]);
  const tokenEmail = localStorage.getItem("key");
  const URL = "http://localhost:3000/user/getQueue";
  const BookURL = "http://localhost:3000/user/bookQueue";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);           
      console.log(res.data.queueData);
      setQueue(res.data.queueData);
    } catch (error) {
      console.log(error);
    }
  };

  //booking your number
  const bookQueue=async(e,item)=>{
    alert("function call")
    e.preventDefault();
    const params={ queueID:item._id,userEmail:tokenEmail}
    try {
      
      const res = await axios.get(BookURL,{params});
    //  console.log(res.data.queueData);
      //setQueue(res.data.queueData);
      alert("booking done")
    } catch (error) {
      console.log(error);
    }


  }

  return (     
    <>
    <Header/>
    <div className="container py-5 mt-5">
      <h2 className="text-center mb-5 fw-bold text-primary">📋 Explore Queues</h2>
      <div className="row g-4">
        {queue.length === 0 ? (
          <p className="text-center text-muted">No queues available at the moment.</p>
        ) : (
          queue.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card shadow border-0 h-100"
                style={{
                  background: "linear-gradient(to right, #f8f9fa, #e3f2fd)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
                  <button className="btn btn-outline-primary w-100" onClick={(e)=>bookQueue(e,item)}>
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
