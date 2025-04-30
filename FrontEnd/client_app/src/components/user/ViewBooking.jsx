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
                  <th>Name</th>
                  <th>Queue ID</th>
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
                    <td>{booking.queueID}</td>
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
