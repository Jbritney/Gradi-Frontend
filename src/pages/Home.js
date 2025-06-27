// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import im4 from '../assets/im4.jpg';

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
          <a href="/category/clothes" className="product-card">
            <img src={im1} alt="Clothes" />
            <span>Clothes</span>
          </a>
          <a href="/category/handbags" className="product-card">
            <img src={im2} alt="Handbags" />
            <span>Handbags</span>
          </a>
          <a href="/category/shoes" className="product-card">
            <img src={im3} alt="Shoes" />
            <span>Shoes</span>
          </a>
          <a href="/category/accessories" className="product-card">
            <img src={im4} alt="Accessories" />
            <span>Accessories</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
