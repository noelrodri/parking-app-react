// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to ParkIt</h1>
        <p>Your hassle-free parking solution.</p>
      </header>
      <main className="homepage-main">
        <h2>Find and book your perfect parking spot in seconds.</h2>
        <p>
          No more circling the block. View available spots, book in advance, and
          get back to what matters.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>  
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2025 ParkIt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;