// import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this to your backend server URL

function OwnerList() {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOwners() {
      try {
        const res = await fetch(`${API_BASE_URL}/admin/allOwners`);
        const data = await res.json();
        setOwners(data.owners || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching owners:', error);
        setLoading(false);
      }
    }
    fetchOwners();
  }, []);

  if (loading) return <p>Loading owners...</p>;

  return (
    <div>
      <h2>Owner List</h2>
      {owners.length === 0 ? (
        <p>No owners found.</p>
      ) : (
        <ul>
          {owners.map((owner) => (
            <li key={owner._id}>
              <strong>{owner.name || 'Name'}:</strong> {owner.email || 'No Email'} - {owner.phone || 'No Phone'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OwnerList;
