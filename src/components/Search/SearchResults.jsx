import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronDown, FaTh, FaFileAlt, FaUsers, FaBuilding } from 'react-icons/fa';
import './SearchResults.css';

const SearchResults = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [contentType, setContentType] = useState('');
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showContentDropdown, setShowContentDropdown] = useState(false);

  const filters = [
    { id: 'all', label: 'All', icon: <FaTh /> },
    { id: 'posts', label: 'Posts', icon: <FaFileAlt /> },
    { id: 'people', label: 'People', icon: <FaUsers /> },
    { id: 'companies', label: 'Companies', icon: <FaBuilding /> }
  ];

  const dateOptions = [
    { id: 'any_time', label: 'Any time' },
    { id: 'past_24h', label: 'Past 24 hours' },
    { id: 'past_week', label: 'Past week' },
    { id: 'past_month', label: 'Past month' },
    { id: 'past_year', label: 'Past year' }
  ];

  const sortOptions = [
    { id: 'relevant', label: 'Most relevant' },
    { id: 'recent', label: 'Most recent' },
    { id: 'popular', label: 'Most popular' }
  ];

  const contentOptions = [
    { id: 'all_content', label: 'All content' },
    { id: 'articles', label: 'Articles' },
    { id: 'videos', label: 'Videos' },
    { id: 'images', label: 'Images' },
    { id: 'code', label: 'Code snippets' }
  ];

  // Mock search results
  const results = [
    // This would be populated with search results
  ];

  return (
    <div className="search-results-container">
      <div className="search-bar-container">
        <div className="search-bar neomorphic-inset">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="search-filters">
        <h3>Filter by</h3>
        
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn neomorphic ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="filter-dropdowns">
          <div className="filter-dropdown">
            <button 
              className="dropdown-toggle neomorphic"
              onClick={() => setShowDateDropdown(!showDateDropdown)}
            >
              <span>{dateFilter ? dateOptions.find(o => o.id === dateFilter)?.label : 'Date'}</span>
              <FaChevronDown />
            </button>
            {showDateDropdown && (
              <div className="dropdown-menu">
                {dateOptions.map(option => (
                  <button
                    key={option.id}
                    className="dropdown-item"
                    onClick={() => {
                      setDateFilter(option.id);
                      setShowDateDropdown(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown">
            <button 
              className="dropdown-toggle neomorphic"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              <span>{sortBy ? sortOptions.find(o => o.id === sortBy)?.label : 'Sort by'}</span>
              <FaChevronDown />
            </button>
            {showSortDropdown && (
              <div className="dropdown-menu">
                {sortOptions.map(option => (
                  <button
                    key={option.id}
                    className="dropdown-item"
                    onClick={() => {
                      setSortBy(option.id);
                      setShowSortDropdown(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown">
            <button 
              className="dropdown-toggle neomorphic"
              onClick={() => setShowContentDropdown(!showContentDropdown)}
            >
              <span>{contentType ? contentOptions.find(o => o.id === contentType)?.label : 'Content type'}</span>
              <FaChevronDown />
            </button>
            {showContentDropdown && (
              <div className="dropdown-menu">
                {contentOptions.map(option => (
                  <button
                    key={option.id}
                    className="dropdown-item"
                    onClick={() => {
                      setContentType(option.id);
                      setShowContentDropdown(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="search-results-grid">
        {results.length > 0 ? (
          results.map(result => (
            <div key={result.id} className="result-item neomorphic">
              {/* Result item content */}
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found. Try different filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults; 