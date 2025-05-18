import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // Backend URL

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

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fc', minHeight: '100vh' }}>
      <div className="mb-5 text-center">
        <h2 className="fw-bold text-primary">Admin Feedback Panel</h2>
        <p className="text-muted">View feedback submitted by users and owners</p>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3 text-muted">Loading feedbacks...</p>
        </div>
      ) : (
        <>
          {/* User Feedback Section */}
          <section className="mb-5">
            <h4 className="text-dark border-bottom pb-2 mb-4">User Feedback</h4>
            {userFeedbacks.length === 0 ? (
              <p className="text-muted">No user feedbacks available.</p>
            ) : (
              <div className="row g-4">
                {userFeedbacks.map((fb) => (
                  <div className="col-md-6 col-lg-4" key={fb._id}>
                    <div
                      className="p-4 shadow-sm rounded-4 h-100"
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e3e6f0',
                      }}
                    >
                      <h6 className="fw-bold text-primary mb-2">
                        {fb.userName || 'Anonymous User'}
                      </h6>
                      <p className="text-muted mb-0">
                        {fb.feedback || fb.message || 'No feedback content.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Owner Feedback Section */}
          <section>
            <h4 className="text-dark border-bottom pb-2 mb-4">Owner Feedback</h4>
            {ownerFeedbacks.length === 0 ? (
              <p className="text-muted">No owner feedbacks available.</p>
            ) : (
              <div className="row g-4">
                {ownerFeedbacks.map((fb) => (
                  <div className="col-md-6 col-lg-4" key={fb._id}>
                    <div
                      className="p-4 shadow-sm rounded-4 h-100"
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e3e6f0',
                      }}
                    >
                      <h6 className="fw-bold text-success mb-2">
                        {fb.ownerName || 'Anonymous Owner'}
                      </h6>
                      <p className="text-muted mb-0">
                        {fb.feedback || fb.message || 'No feedback content.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default FeedbackList;
