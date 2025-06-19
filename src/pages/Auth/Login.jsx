import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleGuestAccess = () => {
    // Set a guest user in localStorage
    localStorage.setItem('user', JSON.stringify({ 
      isGuest: true, 
      username: 'Guest User' 
    }));
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card neomorphic-card fade-in">
        <div className="auth-logo">
          <img src="/logo192.png" alt="TJI Logo" />
          <h1>TJI Social</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="neomorphic-input"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="neomorphic-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="neomorphic-button auth-button">
            Log In
          </button>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <button 
            type="button" 
            onClick={handleGuestAccess}
            className="neomorphic-button guest-button"
          >
            Continue as Guest
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </p>
          <Link to="/forgot-password" className="auth-link forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 