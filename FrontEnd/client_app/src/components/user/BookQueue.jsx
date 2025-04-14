import { useState } from "react";
import axios from "axios";

function BookQueue() {
  const URL = "http://localhost:3000/user/allbookqueue";

  const [bookqueue, setbookqueue] = useState({
    userName: "",
    userId: "",
    contact: ""
  });

  const fetchData = (e) => {
    setbookqueue({ ...bookqueue, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, bookqueue);
      console.log(serverResponse);
      alert("done")      
    } catch (err) {
      console.log(err.message);
    }
  };

  // const backgroundImage =
  //   "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1470&q=80"; // people in line / queue

  return (
    <></>
    // <div
    //   className="container-fluid d-flex justify-content-center align-items-center vh-100"
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat"
    //   }}
    // >
    //   <div
    //     className="p-4 shadow-lg text-white"
    //     style={{
    //       maxWidth: "480px",
    //       width: "100%",
    //       borderRadius: "16px",
    //       backgroundColor: "rgba(0, 0, 20, 0.75)",
    //       backdropFilter: "blur(6px)"
    //     }}
    //   >
    //     <h3 className="text-center mb-4 fw-bold">
    //       <i className="bi bi-people-fill me-2"></i>Book Your Spot
    //     </h3>
    //     <form onSubmit={submitData}>
    //       <div className="mb-3">
    //         <label htmlFor="userName" className="form-label">
    //           <i className="bi bi-person-fill me-2"></i>Name
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="userName"
    //           name="userName"
    //           value={bookqueue.userName}
    //           onChange={fetchData}
    //           placeholder="Enter your name"
    //           required
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="userId" className="form-label">
    //           <i className="bi bi-card-heading me-2"></i>User ID
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="userId"
    //           name="userId"
    //           value={bookqueue.userId}
    //           onChange={fetchData}
    //           placeholder="Enter your ID"
    //           required
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <label htmlFor="contact" className="form-label">
    //           <i className="bi bi-phone-vibrate-fill me-2"></i>Contact
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="contact"
    //           name="contact"
    //           value={bookqueue.contact}
    //           onChange={fetchData}
    //           placeholder="Enter your contact"
    //           required
    //         />
    //       </div>

    //       <button type="submit" className="btn btn-info w-100 fw-bold">
    //         <i className="bi bi-check2-circle me-2"></i>Join Queue
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default BookQueue;
