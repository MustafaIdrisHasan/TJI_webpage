import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './SettingsPage.css';

const AccountInfo = () => {
  const navigate = useNavigate();

  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (123) 456-7890',
    location: 'New York, USA'
  };

  return (
    <div className="settings-page-container">
      <div className="settings-page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Account Information</h1>
      </div>

      <div className="settings-page-content">
        <div className="info-section neomorphic">
          <div className="info-item">
            <div className="info-icon">
              <FaUser />
            </div>
            <div className="info-content">
              <label>Name</label>
              <div className="info-value">{userInfo.name}</div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <label>Email</label>
              <div className="info-value">{userInfo.email}</div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <label>Phone</label>
              <div className="info-value">{userInfo.phone}</div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <label>Location</label>
              <div className="info-value">{userInfo.location}</div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>
        </div>

        <div className="settings-actions">
          <button className="primary-btn">Update Information</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo; 