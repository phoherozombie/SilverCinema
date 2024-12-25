import axios from 'axios';

// Create an Axios instance
const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (optional)
baseApi.interceptors.request.use(
  (config) => {
    // Add Authorization token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor (optional)
baseApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (optional)
    if (error.response?.status === 401) {
      console.error('Unauthorized: Please log in again.');
      // Optionally redirect to login or clear token
    }
    return Promise.reject(error);
  }
);

export default baseApi;
