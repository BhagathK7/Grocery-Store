// src/pages/dashboard/SettingsPage.js
import React from 'react';
import './SettingsPage.css'; // Add custom styling

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-content">
        <form className="settings-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter new username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter new email" />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
