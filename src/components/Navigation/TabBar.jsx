import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaCompass, FaHeart, FaUser } from 'react-icons/fa';
import './TabBar.css';

const TabBar = () => {
  const location = useLocation();
  
  const tabs = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/explore', icon: <FaCompass />, label: 'Explore' },
    { path: '/search', icon: <FaSearch />, label: 'Search' },
    { path: '/activity', icon: <FaHeart />, label: 'Activity' },
    { path: '/profile', icon: <FaUser />, label: 'Profile' }
  ];

  return (
    <div className="tab-bar">
      {tabs.map(tab => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`tab-item ${location.pathname === tab.path ? 'active' : ''}`}
        >
          <div className="tab-icon">{tab.icon}</div>
          <span className="tab-label">{tab.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default TabBar; 