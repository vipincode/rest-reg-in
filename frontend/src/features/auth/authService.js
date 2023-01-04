import axios from 'axios';

// Auth API
const API_URL_REGISTER = '/api/signup';
const API_URL_LOGIN = '/api/signin';

// Register user

const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  login,
  logout,
};

export default authService;
