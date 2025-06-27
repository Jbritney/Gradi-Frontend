// src/pages/Login.js
import React from 'react';
import Navbar from '../components/Navbar';
import './Login.css';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <form className="login-form">
            <input type="text" placeholder="Email or Username" />
            <input type="password" placeholder="Password" />
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
