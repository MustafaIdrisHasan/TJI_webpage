import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import { FaSearch, FaHome, FaCompass, FaPlus, FaUsers, FaCog } from 'react-icons/fa';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreadcrumbTitle = () => {
    switch (location.pathname) {
      case '/':
      case '/home':
        return 'Home';
      case '/explore':
        return 'Explore';
      case '/search':
        return 'Search';
      case '/messages':
        return 'Messages';
      case '/profile':
        return 'Profile';
      case '/settings':
        return 'Settings';
      case '/create':
        return 'Create';
      case '/ticket-chats':
        return 'Ticket Chats';
      case '/group-chats':
        return 'Group Chats';
      case '/requests':
        return 'Requests';
      default:
        return 'TJI';
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className={`app-layout ${isMobile ? 'mobile' : 'desktop'}`}>
      <Navbar />
      
      {!isMobile && (
        <div className="layout-container">
          {/* GitHub-style Top Header */}
          <div className="layout-header">
            <div className="header-content">
              {/* Breadcrumb */}
              <div className="breadcrumb">
                <span className="breadcrumb-item">TJI</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item current">{getBreadcrumbTitle()}</span>
              </div>

              {/* Consolidated Search Bar */}
              <div className="header-search">
                <div className="search-shell neu">
                  <div className="search-icon-wrapper">
                    <FaSearch className="search-icon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search users, posts, #tags…"
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="clear-search"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Header Stats */}
              <div className="header-actions">
                <div className="header-stats">
                  <div className="stat-item">
                    <span className="stat-value">2.4K</span>
                    <span className="stat-label">Posts</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">847</span>
                    <span className="stat-label">Users</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">156</span>
                    <span className="stat-label">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area with CSS Grid */}
          <div className="layout-main">
            {/* Content Column */}
            <div className="content-column">
              <div className="content-wrapper">
                {children}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="sidebar-column">
              <div className="sidebar-wrapper">
                {/* Profile Summary Card */}
                <div className="sidebar-card">
                  <div className="card-header">
                    <h3>Your Profile</h3>
                  </div>
                  <div className="card-content">
                    <div className="profile-summary">
                      <div className="profile-avatar">
                        <img src="/api/placeholder/60/60" alt="Profile" />
                      </div>
                      <div className="profile-info">
                        <h4>John Doe</h4>
                        <p>@johndoe</p>
                        <div className="profile-stats">
                          <div className="stat">
                            <span className="stat-number">127</span>
                            <span className="stat-text">Posts</span>
                          </div>
                          <div className="stat">
                            <span className="stat-number">1.2K</span>
                            <span className="stat-text">Followers</span>
                          </div>
                          <div className="stat">
                            <span className="stat-number">456</span>
                            <span className="stat-text">Following</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bio">
                      <p>Frontend Developer passionate about React and modern web technologies.</p>
                    </div>
                    <div className="skills-tags">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">CSS</span>
                      <span className="skill-tag">Node.js</span>
                    </div>
                  </div>
                </div>

                {/* Trending Topics Card */}
                <div className="sidebar-card">
                  <div className="card-header">
                    <h3>Trending Topics</h3>
                  </div>
                  <div className="card-content">
                    <div className="trending-list">
                      <div className="trending-item">
                        <span className="trending-tag">#ReactJS</span>
                        <span className="trending-count">2.4K posts</span>
                      </div>
                      <div className="trending-item">
                        <span className="trending-tag">#WebDev</span>
                        <span className="trending-count">1.8K posts</span>
                      </div>
                      <div className="trending-item">
                        <span className="trending-tag">#JavaScript</span>
                        <span className="trending-count">3.1K posts</span>
                      </div>
                      <div className="trending-item">
                        <span className="trending-tag">#CSS</span>
                        <span className="trending-count">924 posts</span>
                      </div>
                      <div className="trending-item">
                        <span className="trending-tag">#TechNews</span>
                        <span className="trending-count">1.3K posts</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Who to Follow Card */}
                <div className="sidebar-card">
                  <div className="card-header">
                    <h3>Who to Follow</h3>
                  </div>
                  <div className="card-content">
                    <div className="suggestions-list">
                      <div className="suggestion-item">
                        <div className="suggestion-avatar">
                          <img src="/api/placeholder/40/40" alt="Sarah Wilson" />
                        </div>
                        <div className="suggestion-info">
                          <h5>Sarah Wilson</h5>
                          <p>UI/UX Designer</p>
                        </div>
                        <button className="follow-btn">Follow</button>
                      </div>
                      <div className="suggestion-item">
                        <div className="suggestion-avatar">
                          <img src="/api/placeholder/40/40" alt="Mike Chen" />
                        </div>
                        <div className="suggestion-info">
                          <h5>Mike Chen</h5>
                          <p>Full Stack Developer</p>
                        </div>
                        <button className="follow-btn">Follow</button>
                      </div>
                      <div className="suggestion-item">
                        <div className="suggestion-avatar">
                          <img src="/api/placeholder/40/40" alt="Alex Johnson" />
                        </div>
                        <div className="suggestion-info">
                          <h5>Alex Johnson</h5>
                          <p>DevOps Engineer</p>
                        </div>
                        <button className="follow-btn">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="mobile-main">
          {children}
        </div>
      )}
    </div>
  );
};

export default MainLayout; 