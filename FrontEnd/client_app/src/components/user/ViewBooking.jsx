import axios from "axios";
import { useState, useEffect } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function ViewBooking() {
  const [bookingData, setBookingData] = useState([]);
  const userEmail = localStorage.getItem("key");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/getMyBookings", {
        params: { userEmail }
      });
      console.log("Fetched bookings:", res.data.bookings);
      setBookingData(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">📊 Your Queue Bookings</h3>

      {bookingData.length === 0 ? (
        <p className="text-center text-muted">No bookings found.</p>
      ) : (
        <>
          {/* Chart */}
          {/* <ResponsiveContainer width="100%" height={400}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="checkInDate" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tokenNo" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer> */}

          {/* Table */}
          <div className="table-responsive mt-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Token No</th>
                  <th>Queue Name</th>
                  {/* <th>Queue ID</th> */}
                  <th>Eastimate Time</th>
                  <th>Check-In Date</th>
                  <th>Check-In Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.tokenNo}</td>
                    <td>{booking.queueName}</td>
                    {/* <td>{booking.queueID}</td> */}
                    <td>{booking.estimatedWaitTime}</td>
                    <td>{booking.checkInDate}</td>
                    <td>{booking.checkInTime}</td>
                    <td>{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewBooking;






// import axios from "axios";
// import { useState, useEffect } from "react";
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// function ViewBooking() {
//   const [bookingData, setBookingData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // 🔸 NEW: for search
//   const userEmail = localStorage.getItem("key");

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/user/getMyBookings", {
//         params: { userEmail }
//       });
//       console.log("Fetched bookings:", res.data.bookings);
//       setBookingData(res.data.bookings);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 🔸 NEW: Filter bookings based on search term
//   const filteredBookings = bookingData.filter((booking) =>
//     booking.queueName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mt-5">
//       <h3 className="text-center mb-4">📊 Your Queue Bookings</h3>

//       {/* 🔸 NEW: Search Input */}
//       <div className="mb-4 text-center">
//         <input
//           type="text"
//           className="form-control w-50 mx-auto"
//           placeholder="Search by queue name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {filteredBookings.length === 0 ? (
//         <p className="text-center text-muted">No bookings found.</p>
//       ) : (
//         <>
//           {/* Table */}
//           <div className="table-responsive mt-4">
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Token No</th>
//                   <th>Queue Name</th>
//                   {/* <th>Queue ID</th> */}
//                   <th>Estimate Time</th>
//                   <th>Check-In Date</th>
//                   <th>Check-In Time</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredBookings.map((booking, index) => (
//                   <tr key={index}>
//                     <td>{booking.tokenNo}</td>
//                     <td>{booking.queueName}</td>
//                     {/* <td>{booking.queueID}</td> */}
//                     <td>{booking.estimatedWaitTime}</td>
//                     <td>{booking.checkInDate}</td>
//                     <td>{booking.checkInTime}</td>
//                     <td>{booking.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ViewBooking;
