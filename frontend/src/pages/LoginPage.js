import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // ✅ Required for HTTP requests
import '../assets/styles.css';
import './AuthPage.css'; // or LoginPage.css / SignupPage.css if separated

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // ✅ Save token and userId in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);

      // ✅ Redirect with full reload so userId is available to all components
      window.location.href = '/products';
    } catch (err) {
      console.error('Login failed', err);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage; // ✅ Ensure correct export
