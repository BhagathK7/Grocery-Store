// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p><Link to="/">Go back to Home Page</Link></p>
    </div>
  );
}

export default NotFoundPage;
