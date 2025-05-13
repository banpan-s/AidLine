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
        params: { userEmail },
      });
      console.log("Fetched bookings:", res.data.bookings);
      setBookingData(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  // Helper function to format check-in time as hour:minute AM/PM
  const formatTime = (timeStr) => {
    if (!timeStr) return "";
    const [hour, minute] = timeStr.split(":");
    const date = new Date();
    date.setHours(parseInt(hour), parseInt(minute));
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #e3f2fd)",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="text-center fw-bold mb-4 text-primary">
        📊 Your Queue Bookings
      </h2>

      {bookingData.length === 0 ? (
        <p className="text-center text-muted">No bookings found.</p>
      ) : (
        <>
          {/* Chart visualization (optional) */}
          {/* <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="checkInDate" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tokenNo" fill="#0d6efd" />
            </BarChart>
          </ResponsiveContainer> */}

          {/* Booking Table */}
          <div className="table-responsive mt-4">
            <table className="table table-hover table-bordered align-middle shadow-sm">
              <thead className="table-primary">
                <tr>
                  <th scope="col">📍 Queue Name</th>
                  <th scope="col">🎫 Token No</th>
                  <th scope="col">⏳ Estimated Time</th>
                  <th scope="col">📅 Check-In Date</th>
                  <th scope="col">🕒 Check-In Time</th>
                  <th scope="col">📌 Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.queueName}</td>
                    <td>{booking.tokenNo}</td>
                    <td>{booking.estimatedWaitTime}</td>
                    <td>{booking.checkInDate}</td>
                    <td>{formatTime(booking.checkInTime)}</td>
                    <td>
                      <span
                        className={`badge ${
                          booking.status === "pending"
                            ? "bg-warning text-dark"
                            : "bg-success"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
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
