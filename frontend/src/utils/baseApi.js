import axios from 'axios';

// Create an axios instance with the base URL from the environment variable
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
//   timeout: 10000,
});

// Add request interceptor for any necessary logic (like token handling if needed in the future)
api.interceptors.request.use(
  (config) => {
    console.log('Base URL:', config.baseURL);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// General method to make GET requests
export const get = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('API GET Error:', error);
    throw error; // Propagate the error for handling in the component
  }
};

// General method to make POST requests
export const post = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API POST Error:', error);
    throw error;
  }
};

// General method to make PUT requests
export const put = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error('API PUT Error:', error);
    throw error;
  }
};

// General method to make DELETE requests
export const del = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error('API DELETE Error:', error);
    throw error;
  }
};
