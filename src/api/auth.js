// src/api/auth.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
});

// Register function
export const registerUser = (formData) => API.post('/auth/register', formData);

// Login function
export const loginUser = (formData) => API.post('/auth/login', formData);
