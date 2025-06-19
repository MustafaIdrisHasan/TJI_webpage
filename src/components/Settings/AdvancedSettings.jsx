import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaBriefcase, FaBell, FaCreditCard, FaBookmark, FaHistory, FaUsers, FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import './AdvancedSettings.css';

const AdvancedSettings = () => {
  const navigate = useNavigate();

  const settingsItems = [
    { id: 'account-info', label: 'Account Information', icon: <FaUser />, path: '/settings/account-info' },
    { id: 'available', label: 'Available', icon: <FaBriefcase />, path: '/settings/available' },
    { id: 'notifications', label: 'Notifications', icon: <FaBell />, path: '/settings/notifications' },
    { id: 'payment', label: 'Payment', icon: <FaCreditCard />, path: '/settings/payment' },
    { id: 'saved', label: 'Saved', icon: <FaBookmark />, path: '/settings/saved' },
    { id: 'restore', label: 'Restore', icon: <FaHistory />, path: '/settings/restore' },
    { id: 'request', label: 'Request', icon: <FaUsers />, path: '/settings/request' },
    { id: 'job-tickets', label: 'Job Tickets', icon: <FaFileAlt />, path: '/settings/job-tickets' },
    { id: 'security', label: 'Security', icon: <FaShieldAlt />, path: '/settings/security' }
  ];

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Settings and activity</h1>
      </div>

      <div className="settings-search">
        <input type="text" placeholder="Search settings" className="search-input" />
      </div>

      <div className="settings-list">
        {settingsItems.map((item) => (
          <Link key={item.id} to={item.path} className="settings-item">
            <div className="item-icon">{item.icon}</div>
            <div className="item-label">{item.label}</div>
            <div className="item-arrow">›</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSettings; 