import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(`${API_BASE_URL}/admin/allContacts`);
        const data = await res.json();
        setContacts(data.contactQuery || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: '#f8f9fc', minHeight: '100vh' }}
    >
      <div className="mb-4 text-center">
        <h2 className="fw-bold text-primary text-uppercase">Admin - Contact Queries</h2>
        <p className="text-muted">All user-submitted queries are listed below.</p>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2 text-muted">Fetching contact submissions...</p>
        </div>
      ) : contacts.length === 0 ? (
        <p className="text-center fs-5 text-muted">No contact entries available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm rounded-4 overflow-hidden">
            <thead className="table-light">
              <tr className="text-center text-primary">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {contacts.map((contact, index) => (
                <tr key={contact._id} className="text-center align-middle">
                  <td className="fw-semibold">{index + 1}</td>
                  <td className="text-capitalize">{contact.userName || 'N/A'}</td>
                  <td className="text-lowercase">{contact.userEmail || 'N/A'}</td>
                  <td className="text-wrap text-start">{contact.userQuery || 'No message provided'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ContactList;
