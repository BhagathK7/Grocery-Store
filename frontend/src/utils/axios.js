// src/utils/axios.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the JWT token in the request headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if token exists in localStorage and add it to request headers
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
