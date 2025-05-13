// import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this to your backend server URL

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch(`${API_BASE_URL}/admin/allBookings`);
        const data = await res.json();
        setBookings(data.bookings || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div>
      <h2>Booking List</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <strong>{booking.userName || 'User'}:</strong> {booking.bookingDate || 'No Date'} - {booking.status || 'No Status'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;
