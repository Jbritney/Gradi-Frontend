// src/pages/Home.js
import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import im4 from '../assets/im4.jpg';
import im5 from '../assets/im5.jpg'; 
import im6 from '../assets/im6.jpg'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for handbags or brands..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <h2 className="section-title">Shop by Category</h2>
        <div className="product-grid">
          <Link to="/category/clothes" className="product-card">
            <img src={im1} alt="Clothes" />
            <span>Clothes</span>
          </Link>
          <Link to="/category/handbags" className="product-card">
            <img src={im2} alt="Handbags" />
            <span>Handbags</span>
          </Link>
          <Link to="/category/shoes" className="product-card">
            <img src={im3} alt="Shoes" />
            <span>Shoes</span>
          </Link>
          <Link to="/category/accessories" className="product-card">
            <img src={im4} alt="Accessories" />
            <span>Accessories</span>
          </Link>
          <Link to="/category/suitcases" className="product-card">
            <img src={im5} alt="Suitecases" />
            <span>Suitcases</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
