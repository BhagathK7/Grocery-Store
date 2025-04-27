// src/pages/dashboard/UserProfile.js
import React from 'react';
import './UserProfile.css'; // Custom styles

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="user-profile-card">
        <p><strong>Username:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Joined:</strong> January 2023</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
