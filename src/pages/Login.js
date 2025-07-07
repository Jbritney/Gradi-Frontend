// src/pages/Login.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth'; // API function to be created

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      alert('Login successful!');
      navigate('/'); // Redirect to home page
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email or Username"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Log In</button>
          </form>
          <p className="register-link">
            New to Gradi.lk? <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
