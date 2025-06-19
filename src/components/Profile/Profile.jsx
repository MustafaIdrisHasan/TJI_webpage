import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPen, FaTrophy, FaBriefcase } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  
  const userProfile = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'New York, USA',
    avatar: '/path/to/avatar.jpg',
    stats: {
      leaderboard: 10,
      offers: 3,
      posts: 3,
      followers: '1.5K',
      following: '1K'
    },
    skills: ['UI/UX', 'Web Dev', 'Graphic Design'],
    posts: [
      '/path/to/post1.jpg',
      '/path/to/post2.jpg',
      '/path/to/post3.jpg'
    ]
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Profile</h1>
      </div>

      <div className="profile-search">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="profile-info">
        <div className="profile-main">
          <img src={userProfile.avatar} alt={userProfile.name} className="profile-avatar" />
          <div className="profile-details">
            <h2>{userProfile.name}</h2>
            <div className="profile-title">
              {userProfile.title}
              <button className="edit-btn">
                <FaPen /> Edit
              </button>
            </div>
            <div className="profile-location">{userProfile.location}</div>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <FaTrophy className="stat-icon" />
            <div className="stat-value">{userProfile.stats.leaderboard}</div>
            <div className="stat-label">Leader board</div>
          </div>
          <div className="stat-item">
            <FaBriefcase className="stat-icon" />
            <div className="stat-value">{userProfile.stats.offers}</div>
            <div className="stat-label">Offers</div>
          </div>
        </div>

        <div className="profile-skills">
          <h3>Skills</h3>
          <div className="skills-list">
            {userProfile.skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>

        <div className="profile-activity">
          <div className="activity-stats">
            <div className="activity-item">
              <div className="activity-value">{userProfile.stats.posts}</div>
              <div className="activity-label">Posts</div>
            </div>
            <div className="activity-item">
              <div className="activity-value">{userProfile.stats.followers}</div>
              <div className="activity-label">Followers</div>
            </div>
            <div className="activity-item">
              <div className="activity-value">{userProfile.stats.following}</div>
              <div className="activity-label">Following</div>
            </div>
          </div>

          <div className="posts-grid">
            {userProfile.posts.map((post, index) => (
              <div key={index} className="post-item">
                <img src={post} alt={`Post ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 