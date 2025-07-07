// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SellProduct from './pages/SellProduct';
import Handbags from './pages/categories/Handbags';
import Clothes from './pages/categories/Clothes';
import Shoes from './pages/categories/Shoes';
import Accessories from './pages/categories/Accessories';
import Suitcases from './pages/categories/Suitcases';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sell" element={<SellProduct />} />
        <Route path="/category/handbags" element={<Handbags />} />
        <Route path="/category/clothes" element={<Clothes />} />
        <Route path="/category/shoes" element={<Shoes />} />
        <Route path="/category/accessories" element={<Accessories />} />
        <Route path="/category/suitcases" element={<Suitcases />} />
      </Routes>
    </Router>
  );
}

export default App;
