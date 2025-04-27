import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = (userId, token) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    setUserId(userId);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    setUserId(null);
    setToken(null);
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedToken = localStorage.getItem('token');
    if (storedUserId) setUserId(storedUserId);
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider value={{ userId, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
