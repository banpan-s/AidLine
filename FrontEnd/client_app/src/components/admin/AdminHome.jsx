import React, { useState } from 'react';
import FeedbackList from './FeedbackList';
import ContactList from './ContactList';
import UserList from './UserList';
import OwnerList from './OwnerList';
import BookingList from './BookingList';

function AdminHome() {
  const [activeTab, setActiveTab] = useState('feedback');

  const renderContent = () => {
    switch (activeTab) {
      case 'feedback':
        return <FeedbackList />;
      case 'contacts':
        return <ContactList />;
      case 'users':
        return <UserList />;
      case 'owners':
        return <OwnerList />;
      case 'bookings':
        return <BookingList />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block bg-light sidebar border-end">
          <div className="position-sticky pt-3">
            <h4 className="text-center">Admin Panel</h4>
            <ul className="nav flex-column mt-4">
              <li className="nav-item">
                <button className={`nav-link btn w-100 text-start ${activeTab === 'feedback' ? 'active btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('feedback')}>
                  Feedback
                </button>
              </li>
              <li className="nav-item mt-2">
                <button className={`nav-link btn w-100 text-start ${activeTab === 'contacts' ? 'active btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('contacts')}>
                  Contacts
                </button>
              </li>
              <li className="nav-item mt-2">
                <button className={`nav-link btn w-100 text-start ${activeTab === 'users' ? 'active btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('users')}>
                  Users
                </button>
              </li>
              <li className="nav-item mt-2">
                <button className={`nav-link btn w-100 text-start ${activeTab === 'owners' ? 'active btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('owners')}>
                  Owners
                </button>
              </li>
              <li className="nav-item mt-2">
                <button className={`nav-link btn w-100 text-start ${activeTab === 'bookings' ? 'active btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('bookings')}>
                  Bookings
                </button>
              </li>
              
              
            </ul>
          </div>
        </nav>

        {/* Content Area */}
        <main className="col-md-10 ms-sm-auto px-md-4 pt-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default AdminHome;
