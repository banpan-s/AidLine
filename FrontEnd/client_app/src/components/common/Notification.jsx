import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000';

function Notification({ userEmail, type }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const url = new URL(API_BASE_URL + '/notification/list');
        url.searchParams.append('type', type);
        if (userEmail) {
          url.searchParams.append('userEmail', userEmail);
        }
        const res = await fetch(url.toString());
        const data = await res.json();
        setNotifications(data.notifications || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    }
    fetchNotifications();
  }, [userEmail, type]);

  if (loading) {
    return <div>Loading notifications...</div>;
  }

  if (notifications.length === 0) {
    return <div>No notifications.</div>;
  }

  return (
    <div className="notification-container" style={{ position: 'fixed', top: 10, right: 10, width: 300, zIndex: 1000 }}>
      {notifications.map((notif) => (
        <div key={notif._id} style={{ backgroundColor: '#f8d7da', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
          <p>{notif.message}</p>
          <small>{new Date(notif.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default Notification;
