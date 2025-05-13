
import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this to your backend server URL

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

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>{user.name || 'Name'}:</strong> {user.email || 'No Email'} - {user.phone || 'No Phone'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
