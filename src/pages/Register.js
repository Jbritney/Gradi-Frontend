// src/pages/Register.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Register.css';
import { registerUser } from '../api/auth'; // frontend path to the API file

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      alert('Registration successful!');
    } catch (err) {
      console.error(err);
      alert('Registration failed.');
    }
  };
  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-box">
          <h2>Create an Account</h2>
          <form className="register-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
