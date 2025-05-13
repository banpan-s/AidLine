// import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this to your backend server URL

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

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              <strong>{contact.name || 'Name'}:</strong> {contact.email || 'No Email'} - {contact.message || 'No Message'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
