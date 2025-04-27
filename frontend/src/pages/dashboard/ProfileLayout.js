// src/pages/dashboard/ProfileLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Used to render child routes

const ProfileLayout = () => {
  return (
    <div className="profile-layout">
      <h1>Dashboard</h1>
      <div className="dashboard-menu">
        {/* Sidebar or navigation for different pages */}
      </div>
      <div className="dashboard-content">
        <Outlet /> {/* This will render the profile, orders, settings, etc. */}
      </div>
    </div>
  );
};

export default ProfileLayout;
