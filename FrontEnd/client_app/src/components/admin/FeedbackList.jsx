import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this to your backend server URL

function FeedbackList() {
  const [userFeedbacks, setUserFeedbacks] = useState([]);
  const [ownerFeedbacks, setOwnerFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const userRes = await fetch(`${API_BASE_URL}/admin/allUserFeedback`);
        const userData = await userRes.json();
        const ownerRes = await fetch(`${API_BASE_URL}/admin/allOwnerFeedback`);
        const ownerData = await ownerRes.json();
        setUserFeedbacks(userData.userFeedbacks || []);
        setOwnerFeedbacks(ownerData.ownerFeedbacks || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setLoading(false);
      }
    }
    fetchFeedbacks();
  }, []);

  if (loading) return <p>Loading feedbacks...</p>;

  return (
    <div>
      <h2>User Feedbacks</h2>
      {userFeedbacks.length === 0 ? (
        <p>No user feedbacks found.</p>
      ) : (
        <ul>
          {userFeedbacks.map((fb) => (
            <li key={fb._id}>
              <strong>{fb.userName || 'User'}:</strong> {fb.feedback || fb.message || ''}
            </li>
          ))}
        </ul>
      )}

      <h2>Owner Feedbacks</h2>
      {ownerFeedbacks.length === 0 ? (
        <p>No owner feedbacks found.</p>
      ) : (
        <ul>
          {ownerFeedbacks.map((fb) => (
            <li key={fb._id}>
              <strong>{fb.ownerName || 'Owner'}:</strong> {fb.feedback || fb.message || ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
