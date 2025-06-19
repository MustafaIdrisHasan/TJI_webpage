import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaUser, 
  FaEnvelope, 
  FaBell, 
  FaSearch, 
  FaCompass,
  FaPlusSquare
} from 'react-icons/fa';
import { useNotifications } from '../../context/NotificationContext';
import SearchModal from '../SearchModal';
import NotificationsPanel from '../NotificationsPanel';
import './Navbar.css';

const Navbar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const [unreadMessages] = useState(3);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 1264);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const location = useLocation();
  const { unreadCount } = useNotifications();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsCollapsed(window.innerWidth <= 1264);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = [
    { path: '/', icon: <FaCompass />, label: 'Home', showOnMobile: true },
    { type: 'button', icon: <FaSearch />, label: 'Search', onClick: () => setShowSearch(true), showOnMobile: true, isActive: showSearch },
    { path: '/explore', icon: <FaCompass />, label: 'Explore', showOnMobile: true },
    { path: '/create', icon: <FaPlusSquare />, label: 'Create', showOnMobile: false },
    { path: '/messages', icon: <FaEnvelope />, label: 'Messages', showOnMobile: false, badge: unreadMessages },
    { type: 'button', icon: <FaBell />, label: 'Notifications', onClick: () => setShowNotif(true), showOnMobile: true, badge: unreadCount, isActive: showNotif },
    { path: '/profile', icon: <FaUser />, label: 'Profile', showOnMobile: true, isProfile: true },
  ];

  if (isMobile) {
    return (
      <>
        <nav className="navbar mobile-navbar">
          <div className="mobile-navbar-container">
            <Link to="/" className="nav-logo">
              <h1>TJI</h1>
            </Link>
            
            <div className="mobile-nav-actions">
              <Link to="/messages" className="nav-link mobile-nav-link">
                <div className="icon-with-badge">
                  <FaEnvelope />
                  {unreadMessages > 0 && (
                    <span className="badge">{unreadMessages}</span>
                  )}
                </div>
              </Link>
              <Link to="/create" className="nav-link mobile-nav-link">
                <FaPlusSquare />
              </Link>
            </div>
          </div>
        </nav>

        <nav className="mobile-tab-bar">
          {navigationItems.filter(item => item.showOnMobile).map(item => (
            item.type === 'button' ? (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`tab-item ${item.isActive ? 'active' : ''}`}
              >
                <div className="tab-icon-container">
                  <div className="icon-with-badge">
                    {item.icon}
                    {item.badge > 0 && (
                      <span className="badge">{item.badge}</span>
                    )}
                  </div>
                </div>
                <span className="tab-label">{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`tab-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <div className="tab-icon-container">
                  {item.isProfile ? (
                    <div className="profile-avatar-small">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" 
                        alt="Profile"
                      />
                    </div>
                  ) : (
                    <div className="icon-with-badge">
                      {item.icon}
                      {item.badge > 0 && (
                        <span className="badge">{item.badge}</span>
                      )}
                    </div>
                  )}
                </div>
                <span className="tab-label">{item.label}</span>
              </Link>
            )
          ))}
        </nav>

        <SearchModal open={showSearch} onClose={() => setShowSearch(false)} />
        <NotificationsPanel open={showNotif} onClose={() => setShowNotif(false)} />
      </>
    );
  }

  return (
    <>
      <nav className={`navbar desktop-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-container">
          <div className="sidebar-header">
            <Link to="/" className="nav-logo">
              <h1>{isCollapsed ? 'T' : 'TJI'}</h1>
            </Link>
          </div>

          <div className="sidebar-nav">
            {navigationItems.map(item => (
              item.type === 'button' ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={`sidebar-nav-item ${item.isActive ? 'active' : ''}`}
                  title={isCollapsed ? item.label : ''}
                >
                  <div className="nav-item-content">
                    <div className="icon-with-badge">
                      {item.icon}
                      {item.badge > 0 && (
                        <span className="badge">{item.badge}</span>
                      )}
                    </div>
                    {!isCollapsed && (
                      <span className="nav-item-label">{item.label}</span>
                    )}
                  </div>
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`sidebar-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  title={isCollapsed ? item.label : ''}
                >
                  <div className="nav-item-content">
                    {item.isProfile ? (
                      <div className="profile-avatar">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                          alt="Profile"
                        />
                      </div>
                    ) : (
                      <div className="icon-with-badge">
                        {item.icon}
                        {item.badge > 0 && (
                          <span className="badge">{item.badge}</span>
                        )}
                      </div>
                    )}
                    {!isCollapsed && (
                      <span className="nav-item-label">{item.label}</span>
                    )}
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>

      <SearchModal open={showSearch} onClose={() => setShowSearch(false)} />
      <NotificationsPanel open={showNotif} onClose={() => setShowNotif(false)} />
    </>
  );
};

export default Navbar; 