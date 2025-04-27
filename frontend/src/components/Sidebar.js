// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Sidebar.css'; // Make sure to import the CSS for styling

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Dashboard</h2>
        <nav className="sidebar-nav">
          <ul>
            {/* Home */}
            <li><Link to="/">Home</Link></li>

            {/* Dashboard Links */}
            <li><Link to="/dashboard/profile">User Profile</Link></li>
            <li><Link to="/dashboard/orders">Orders</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>

            {/* Additional Links */}
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
