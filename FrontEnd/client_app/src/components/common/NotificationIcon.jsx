import React, { useEffect, useState, useRef } from 'react';

const API_BASE_URL = 'http://localhost:3000';

function NotificationIcon({ userEmail, type }) {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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
        const unread = data.notifications ? data.notifications.filter(n => !n.read).length : 0;
        setUnreadCount(unread);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }
    fetchNotifications();
  }, [userEmail, type]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          fontSize: '24px',
          color: '#333',
        }}
        aria-label="Notifications"
      >
        &#128276; {/* Bell icon */}
        {unreadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            marginTop: '5px',
            width: '300px',
            maxHeight: '400px',
            overflowY: 'auto',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          {notifications.length === 0 ? (
            <div style={{ padding: '10px', textAlign: 'center' }}>No notifications</div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif._id}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  backgroundColor: notif.read ? 'white' : '#e6f7ff',
                }}
              >
                <p style={{ margin: 0 }}>{notif.message}</p>
                <small>{new Date(notif.createdAt).toLocaleString()}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationIcon;
