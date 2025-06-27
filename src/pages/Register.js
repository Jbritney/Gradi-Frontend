// src/pages/Register.js
import React from 'react';
import Navbar from '../components/Navbar';
import './Register.css';

const Register = () => {
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
