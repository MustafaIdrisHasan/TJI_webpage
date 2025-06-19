import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiCompass,
  FiPlusSquare,
  FiMessageSquare,
  FiUser,
  FiSettings,
  FiSearch,
  FiBell
} from 'react-icons/fi';

import SearchModal from '../SearchModal';
import NotificationsPanel from '../NotificationsPanel';
import useNotifications from '@/context/NotificationContext';

import './Sidebar.css';

export default function Sidebar() {
  const location = useLocation();
  const { unreadCount } = useNotifications();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <nav className="sidebar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-box">
            <span className="logo-icon">🟢</span>
            <span className="logo-text">TJI</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-items">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <FiHome className="nav-icon" />
            <span className="nav-text">Home</span>
          </Link>

          <Link to="/explore" className={`nav-item ${location.pathname === '/explore' ? 'active' : ''}`}>
            <FiCompass className="nav-icon" />
            <span className="nav-text">Explore</span>
          </Link>

          <Link to="/create" className={`nav-item ${location.pathname === '/create' ? 'active' : ''}`}>
            <FiPlusSquare className="nav-icon" />
            <span className="nav-text">Create</span>
          </Link>

          <Link to="/messages" className={`nav-item ${location.pathname === '/messages' ? 'active' : ''}`}>
            <FiMessageSquare className="nav-icon" />
            <span className="nav-text">Messages</span>
            <span className="message-badge">3</span>
          </Link>

          <button
            className="nav-item"
            onClick={() => setSearchOpen(true)}
          >
            <FiSearch className="nav-icon" />
            <span className="nav-text">Search</span>
          </button>

          <button
            className="nav-item"
            onClick={() => setNotifOpen(true)}
          >
            <FiBell className="nav-icon" />
            <span className="nav-text">Notifications</span>
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
            <FiUser className="nav-icon" />
            <span className="nav-text">Profile</span>
          </Link>

          <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
            <FiSettings className="nav-icon" />
            <span className="nav-text">Settings</span>
          </Link>
        </div>
      </nav>

      {/* Modals */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <NotificationsPanel open={notifOpen} onClose={() => setNotifOpen(false)} />
    </>
  );
} 