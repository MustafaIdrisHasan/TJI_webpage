import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBuilding, FaBookmark, FaFilter, FaChevronDown, FaBriefcase, FaTimes } from 'react-icons/fa';
import './JobsPage.css';

const JobsPage = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'Tech Solutions Inc.',
      location: 'New York, USA (Remote)',
      logo: '/logos/tech-solutions.png',
      posted: '1 day ago',
      applicants: 12,
      saved: false
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'Digital Innovations',
      location: 'San Francisco, USA (On-site)',
      logo: '/logos/digital-innovations.png',
      posted: '3 days ago',
      applicants: 47,
      saved: true
    },
    {
      id: 3,
      title: 'Full Stack JavaScript Developer',
      company: 'WebApps Co.',
      location: 'London, UK (Hybrid)',
      logo: '/logos/webapps.png',
      posted: '5 days ago',
      applicants: 85,
      saved: false
    }
  ];

  return (
    <div className="jobs-container">
      <div className="jobs-sidebar neomorphic">
        <div className="job-search-container">
          <div className="search-item">
            <span className="search-icon"><FaSearch /></span>
            <input type="text" placeholder="Search by title, skill, or company" className="search-input" />
          </div>
          <div className="search-item">
            <span className="search-icon"><FaMapMarkerAlt /></span>
            <input type="text" placeholder="Location" className="search-input" />
          </div>
          <button className="search-button">
            Search
          </button>
        </div>

        <div className="job-filters">
          <button className="filter-btn" onClick={() => setFilterModalOpen(true)}>
            <FaFilter />
            <span>All filters</span>
          </button>
          <div className="filter-chips">
            <div className="filter-chip">
              Date Posted <FaChevronDown />
            </div>
            <div className="filter-chip">
              Experience Level <FaChevronDown />
            </div>
            <div className="filter-chip">
              Job Type <FaChevronDown />
            </div>
          </div>
        </div>

        <div className="jobs-actions">
          <a href="#saved-jobs" className="jobs-action-link">
            <FaBookmark className="action-icon" />
            <span>My Items</span>
          </a>
          <a href="#job-alerts" className="jobs-action-link">
            <FaBriefcase className="action-icon" />
            <span>Job Alerts</span>
          </a>
        </div>
      </div>

      <div className="jobs-listings">
        <div className="jobs-section-header">
          <h2>Recommended for you</h2>
          <p className="jobs-subtitle">Based on your profile and search history</p>
        </div>

        <div className="jobs-list">
          {jobs.map(job => (
            <div key={job.id} className="job-card neomorphic">
              <div className="job-header">
                <div className="company-logo">
                  <img src={job.logo} alt={job.company} />
                </div>
                <div className="job-main-info">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="company-name">{job.company}</div>
                  <div className="job-location">
                    <FaMapMarkerAlt className="location-icon" />
                    {job.location}
                  </div>
                </div>
                <button className={`save-job-btn ${job.saved ? 'saved' : ''}`}>
                  <FaBookmark />
                </button>
              </div>

              <div className="job-details">
                <div className="job-posted">Posted {job.posted}</div>
                <div className="job-applicants">{job.applicants} applicants</div>
              </div>

              <div className="job-actions">
                <button className="apply-btn">Apply</button>
                <button className="message-btn">Message</button>
              </div>
            </div>
          ))}
        </div>

        {filterModalOpen && (
          <div className="filter-modal">
            <div className="filter-modal-content neomorphic">
              <div className="filter-modal-header">
                <h3>All filters</h3>
                <button className="close-btn" onClick={() => setFilterModalOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="filter-sections">
                <div className="filter-section">
                  <h4>Date Posted</h4>
                  <div className="filter-options">
                    <label className="filter-option">
                      <input type="radio" name="date-posted" value="any" />
                      <span className="option-label">Any time</span>
                    </label>
                    <label className="filter-option">
                      <input type="radio" name="date-posted" value="month" />
                      <span className="option-label">Past month</span>
                    </label>
                    <label className="filter-option">
                      <input type="radio" name="date-posted" value="week" />
                      <span className="option-label">Past week</span>
                    </label>
                    <label className="filter-option">
                      <input type="radio" name="date-posted" value="24h" />
                      <span className="option-label">Past 24 hours</span>
                    </label>
                  </div>
                </div>
                
                <div className="filter-section">
                  <h4>Experience Level</h4>
                  <div className="filter-options">
                    <label className="filter-option">
                      <input type="checkbox" name="experience" value="internship" />
                      <span className="option-label">Internship</span>
                    </label>
                    <label className="filter-option">
                      <input type="checkbox" name="experience" value="entry" />
                      <span className="option-label">Entry level</span>
                    </label>
                    <label className="filter-option">
                      <input type="checkbox" name="experience" value="mid" />
                      <span className="option-label">Mid-Senior level</span>
                    </label>
                    <label className="filter-option">
                      <input type="checkbox" name="experience" value="senior" />
                      <span className="option-label">Senior level</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="filter-modal-actions">
                <button className="clear-btn">Clear all</button>
                <button className="show-btn">Show results</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage; 