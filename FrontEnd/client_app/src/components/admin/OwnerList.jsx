import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000';

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

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fc', minHeight: '100vh' }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">Registered Owners</h2>
        <p className="text-muted">All business owner accounts displayed here</p>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-success" role="status" />
          <p className="mt-3 text-muted">Loading owners...</p>
        </div>
      ) : owners.length === 0 ? (
        <p className="text-muted text-center">No owners found.</p>
      ) : (
        <div className="row g-4">
          {owners.map((owner) => (
            <div className="col-md-6 col-lg-4" key={owner._id}>
              <div
                className="p-4 shadow-sm rounded-4 h-100"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                }}
              >
                <h6 className="fw-bold text-dark mb-1">
                  {owner.name || 'Unnamed Owner'}
                </h6>
                <p className="mb-1 text-muted">
                  <strong>Email:</strong> {owner.email || 'No Email'}
                </p>
                <p className="mb-0 text-muted">
                  <strong>Phone:</strong> {owner.phone || 'No Phone'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OwnerList;
