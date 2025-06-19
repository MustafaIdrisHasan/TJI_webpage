import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaLock, FaMobileAlt, FaHistory, FaExclamationTriangle } from 'react-icons/fa';
import './SettingsPage.css';

const SecuritySettings = () => {
  const navigate = useNavigate();

  const devices = [
    {
      id: 1,
      name: 'iPhone 12',
      location: 'New York, USA',
      lastActive: 'Active now',
      current: true
    },
    {
      id: 2,
      name: 'MacBook Pro',
      location: 'New York, USA',
      lastActive: '2 days ago',
      current: false
    },
    {
      id: 3,
      name: 'Windows PC',
      location: 'Boston, USA',
      lastActive: '1 week ago',
      current: false
    }
  ];

  return (
    <div className="settings-page-container">
      <div className="settings-page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Security</h1>
      </div>

      <div className="settings-page-content">
        <div className="security-section neomorphic">
          <div className="section-header">
            <FaLock />
            <h2>Password</h2>
          </div>
          <p className="section-description">
            It's a good idea to use a strong password that you're not using elsewhere.
          </p>
          <button className="secondary-btn">Change Password</button>
        </div>

        <div className="security-section neomorphic">
          <div className="section-header">
            <FaMobileAlt />
            <h2>Two-Factor Authentication</h2>
          </div>
          <p className="section-description">
            Add an extra layer of security to your account by requiring more than just a password to sign in.
          </p>
          <div className="security-toggle">
            <span>Enable two-factor authentication</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="security-section neomorphic">
          <div className="section-header">
            <FaHistory />
            <h2>Device History</h2>
          </div>
          <p className="section-description">
            These devices have logged into your account. Revoke any that you don't recognize.
          </p>
          
          <div className="device-list">
            {devices.map(device => (
              <div key={device.id} className="device-item">
                <div className="device-info">
                  <div className="device-name">{device.name}</div>
                  <div className="device-location">{device.location}</div>
                  <div className="device-activity">
                    {device.lastActive}
                    {device.current && <span className="current-badge">Current</span>}
                  </div>
                </div>
                {!device.current && (
                  <button className="danger-btn">Revoke</button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="security-section neomorphic danger-section">
          <div className="section-header">
            <FaExclamationTriangle />
            <h2>Account Deletion</h2>
          </div>
          <p className="section-description">
            Permanently delete your account and all of your content.
          </p>
          <button className="danger-btn">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings; 