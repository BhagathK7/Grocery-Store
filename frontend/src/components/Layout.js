// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
 // Import Footer component

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayoutPaths = ['/login', '/signup'];  // Paths where layout should not be shown
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Sidebar />} {/* Include Sidebar */}
      {!shouldHideLayout && <Navbar />} {/* Include Navbar */}
      {children} {/* The content of the current page */}
      {!shouldHideLayout && <Footer />} {/* Include Footer */}
    </>
  );
};

export default Layout;
