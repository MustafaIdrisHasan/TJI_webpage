import React, { useState } from 'react';
import { FaTimes, FaUser, FaHashtag, FaMapMarkerAlt } from 'react-icons/fa';
import './Search.css';

const Search = ({ drawerMode = false }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [recentSearches] = useState([
    { id: 1, type: 'user', query: 'john_doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { id: 2, type: 'hashtag', query: '#technology' },
    { id: 3, type: 'user', query: 'sarah_dev', avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400' },
    { id: 4, type: 'location', query: 'San Francisco, CA' },
    { id: 5, type: 'hashtag', query: '#design' }
  ]);

  const [searchResults] = useState([
    {
      id: 1,
      type: 'user',
      username: 'tech_guru',
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      followers: '12.5K',
      verified: true
    },
    {
      id: 2,
      type: 'user',
      username: 'design_master',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      followers: '8.9K',
      verified: false
    },
    {
      id: 3,
      type: 'hashtag',
      tag: '#webdevelopment',
      posts: '1.2M'
    },
    {
      id: 4,
      type: 'hashtag',
      tag: '#uidesign',
      posts: '856K'
    }
  ]);

  const tabs = [
    { id: 'all', label: 'All', icon: null },
    { id: 'users', label: 'Users', icon: <FaUser /> },
    { id: 'hashtags', label: 'Tags', icon: <FaHashtag /> },
    { id: 'places', label: 'Places', icon: <FaMapMarkerAlt /> }
  ];

  const removeRecentSearch = (id) => {
    // In a real app, this would update the state
    console.log('Remove recent search:', id);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const content = (
    <>
      {/* Search Input for Drawer Mode */}
      {drawerMode && (
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search users, posts, #tags..."
            value={searchQuery}
            onChange={handleSearch}
            autoFocus
          />
        </div>
      )}

      {!searchQuery ? (
        /* Recent Searches */
        <div className="recent-searches">
          <div className="section-header">
            <h3>Recent Searches</h3>
            <button className="clear-all">Clear all</button>
          </div>
          <div className="recent-list">
            {recentSearches.map(item => (
              <div key={item.id} className="recent-item">
                <div className="recent-content">
                  {item.type === 'user' ? (
                    <>
                      <img src={item.avatar} alt={item.query} className="recent-avatar" />
                      <div className="recent-info">
                        <span className="recent-text">{item.query}</span>
                        <span className="recent-type">User</span>
                      </div>
                    </>
                  ) : item.type === 'hashtag' ? (
                    <>
                      <div className="recent-icon hashtag-icon">
                        <FaHashtag />
                      </div>
                      <div className="recent-info">
                        <span className="recent-text">{item.query}</span>
                        <span className="recent-type">Tag</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="recent-icon location-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="recent-info">
                        <span className="recent-text">{item.query}</span>
                        <span className="recent-type">Place</span>
                      </div>
                    </>
                  )}
                </div>
                <button 
                  className="remove-recent"
                  onClick={() => removeRecentSearch(item.id)}
                  aria-label="Remove from recent searches"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Search Results */
        <>
          <div className="search-tabs">
            <div className="tabs-scroll">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="search-results">
            <div className="results-list">
              {searchResults
                .filter(result => activeTab === 'all' || 
                  (activeTab === 'users' && result.type === 'user') ||
                  (activeTab === 'hashtags' && result.type === 'hashtag'))
                .map(result => (
                  <div key={result.id} className="result-item">
                    {result.type === 'user' ? (
                      <div className="user-result">
                        <img src={result.avatar} alt={result.username} className="user-avatar" />
                        <div className="user-info">
                          <div className="user-name">
                            {result.name}
                            {result.verified && (
                              <span className="verified-badge">
                                <i className="fas fa-check-circle"></i>
                              </span>
                            )}
                          </div>
                          <div className="username">@{result.username}</div>
                          <div className="followers">{result.followers} followers</div>
                        </div>
                        <button className="follow-btn">Follow</button>
                      </div>
                    ) : (
                      <div className="hashtag-result">
                        <div className="hashtag-icon">
                          <FaHashtag />
                        </div>
                        <div className="hashtag-info">
                          <div className="hashtag-name">{result.tag}</div>
                          <div className="hashtag-posts">{result.posts} posts</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );

  return drawerMode ? content : <div className="page-shell">{content}</div>;
};

export default Search; 