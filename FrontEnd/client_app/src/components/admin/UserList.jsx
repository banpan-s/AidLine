import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`${API_BASE_URL}/admin/allUsers`);
        const data = await res.json();
        setUsers(data.users || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fc', minHeight: '100vh' }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Registered Users</h2>
        <p className="text-muted">All user accounts listed here</p>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3 text-muted">Loading users...</p>
        </div>
      ) : users.length === 0 ? (
        <p className="text-muted text-center">No users found.</p>
      ) : (
        <div className="row g-4">
          {users.map((user) => (
            <div className="col-md-6 col-lg-4" key={user._id}>
              <div
                className="p-4 shadow-sm rounded-4 h-100"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e3e6f0',
                }}
              >
                <h6 className="fw-bold text-dark mb-1">{user.name || 'Unnamed User'}</h6>
                <p className="mb-1 text-muted">
                  <strong>Email:</strong> {user.email || 'No Email'}
                </p>
                <p className="mb-0 text-muted">
                  <strong>Phone:</strong> {user.phone || 'No Phone'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
