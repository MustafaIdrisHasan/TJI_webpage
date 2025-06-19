import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="auth-container">
      <div className="auth-card neomorphic">
        <div className="logo-container">
          <div className="logo">
            T.li
          </div>
        </div>

        <h2>Log In</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-field neomorphic-inset">
            <FaUser className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="input-field neomorphic-inset">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Log In
          </button>

          <button type="button" className="home-btn">
            Go to Home
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth; 