import axios from "axios";
        import { useState, useEffect } from "react";
        import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
function ViewBooking(){
    return(
        <><h1>
        
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
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="checkInDate" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tokenNo" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          );
        }
        
        export default ViewBooking;
        </h1>
        </>
    )
}
export default ViewBooking