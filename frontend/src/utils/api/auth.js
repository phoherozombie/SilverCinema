import { get, post } from '../baseApi';

// Function to fetch the current user
export const getCurrentUser = async () => {
  try {
    const data = await get('/auth/current-user'); // API trả về thông tin người dùng dựa trên token
    return data; 
  } catch (error) {
    console.error('Failed to fetch current user:', error);
    throw error;
  }
};

// Function to handle login
export const login = async (credentials) => {
    try {
      const data = await post('/auth/login', credentials);  // Call the login API endpoint
      return data;  // Return response data (e.g., token, user data)
    } catch (error) {
      console.error('Login failed', error);
      throw error;  // Propagate the error for further handling
    }
  };
  
  // Function to handle registration
  export const register = async (userData) => {
    try {
      const data = await post('/auth/register', userData);  // Call the register API endpoint
      return data;  // Return response data (e.g., success message, user info)
    } catch (error) {
      console.error('Registration failed', error);
      throw error;  // Propagate the error for further handling
    }
  };