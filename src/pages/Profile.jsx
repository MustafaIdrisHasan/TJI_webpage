import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaRegComment, FaEye, FaCog, FaUserPlus, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCode, FaStar, FaUsers, FaBookmark } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const userProfile = {
    username: 'mustafa03hasan',
    name: 'Mustafa Idris Hasan',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    bio: 'Passionate software engineer with 5+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies. Always eager to learn and share knowledge with the community. 🚀',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    posts: 127,
    followers: '2.5K',
    following: 892,
    connections: '500+',
    verified: true,
    website: 'https://mustafa-dev.com',
    github: 'https://github.com/mustafa03hasan',
    linkedin: 'https://linkedin.com/in/mustafa-hasan',
    twitter: 'https://twitter.com/mustafa_dev'
  };

  const skills = [
    { name: 'React', level: 95, endorsements: 45 },
    { name: 'Node.js', level: 90, endorsements: 38 },
    { name: 'TypeScript', level: 85, endorsements: 32 },
    { name: 'Python', level: 80, endorsements: 28 },
    { name: 'AWS', level: 75, endorsements: 25 },
    { name: 'Docker', level: 70, endorsements: 22 }
  ];

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      duration: '2022 - Present',
      description: 'Leading frontend development team, architecting scalable React applications.'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      duration: '2020 - 2022',
      description: 'Built end-to-end web applications using MERN stack.'
    }
  ];

  const repositories = [
    {
      id: 1,
      name: 'react-dashboard',
      description: 'Modern React dashboard with TypeScript and Material-UI',
      language: 'TypeScript',
      stars: 234,
      forks: 45
    },
    {
      id: 2,
      name: 'node-api-boilerplate',
      description: 'Production-ready Node.js API boilerplate with authentication',
      language: 'JavaScript',
      stars: 156,
      forks: 32
    }
  ];

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
      likes: 1234,
      comments: 56,
      views: 12500,
      isVideo: false
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600',
      likes: 892,
      comments: 23,
      views: 8900,
      isVideo: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600',
      likes: 2156,
      comments: 89,
      views: 15600,
      isVideo: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600',
      likes: 567,
      comments: 12,
      views: 6700,
      isVideo: false
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=600',
      likes: 3421,
      comments: 156,
      views: 28900,
      isVideo: true
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600',
      likes: 789,
      comments: 34,
      views: 9800,
      isVideo: false
    }
  ];

  const tabs = [
    { id: 'posts', label: 'Posts', icon: '⊞' },
    { id: 'repos', label: 'Repositories', icon: <FaGithub /> },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'saved', label: 'Saved', icon: <FaBookmark /> }
  ];

  return (
    <div className="profile-container">
      <div className="profile-layout">
        {/* Main Content Column */}
        <div className="profile-main-column">
          {/* Profile Header Card */}
          <div className="profile-header-card neomorphic-card">
            <div className="profile-cover">
              <img src={userProfile.coverImage} alt="Cover" className="cover-image" />
            </div>

            <div className="profile-info-section">
              <div className="profile-avatar-container">
                <img src={userProfile.avatar} alt="Profile" className="profile-avatar-large" />
              </div>

              <div className="profile-details-section">
                <div className="profile-main-info">
                  <div className="profile-name-section">
                    <h1 className="profile-username">
                      {userProfile.name}
                      {userProfile.verified && (
                        <span className="verified-badge">
                          <i className="fas fa-check-circle"></i>
                        </span>
                      )}
                    </h1>
                    <h2 className="profile-title">{userProfile.title}</h2>
                    <p className="profile-company">{userProfile.company} • {userProfile.location}</p>
                  </div>

                  <div className="profile-actions">
                    <button
                      className={`action-btn ${isFollowing ? 'following' : 'follow'}`}
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      <FaUserPlus />
                      {isFollowing ? 'Following' : 'Connect'}
                    </button>
                    <button className="action-btn message-btn">
                      <FaEnvelope />
                      Message
                    </button>
                    <button className="action-btn settings-btn">
                      <FaCog />
                    </button>
                  </div>
                </div>

                <div className="profile-bio">
                  <p>{userProfile.bio}</p>
                  <div className="profile-links">
                    {userProfile.website && (
                      <a href={userProfile.website} target="_blank" rel="noopener noreferrer" className="profile-link">
                        🌐 {userProfile.website}
                      </a>
                    )}
                    <div className="social-links">
                      <a href={userProfile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub />
                      </a>
                      <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin />
                      </a>
                      <a href={userProfile.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="about-section neomorphic-card">
            <h3 className="section-title">About</h3>
            <p>{userProfile.bio}</p>
          </div>

          {/* Experience Section */}
          <div className="experience-section neomorphic-card">
            <h3 className="section-title">
              <FaUsers />
              Experience
            </h3>
            <div className="experience-list">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.title}</h4>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section neomorphic-card">
            <h3 className="section-title">
              <FaCode />
              Skills & Endorsements
            </h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-endorsements">
                      <FaStar />
                      {skill.endorsements}
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="profile-tabs neomorphic-card">
            <div className="tabs-container">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="posts-section">
            {activeTab === 'posts' && (
              <div className="posts-grid">
                {posts.map(post => (
                  <div key={post.id} className="grid-post neomorphic-card">
                    <div className="post-image-container">
                      <img src={post.image} alt="Post" className="grid-post-image" />
                      {post.isVideo && (
                        <div className="video-indicator">
                          <i className="fas fa-play"></i>
                        </div>
                      )}
                      <div className="post-overlay">
                        <div className="post-stats">
                          <div className="stat-item">
                            <FaHeart />
                            <span>{post.likes.toLocaleString()}</span>
                          </div>
                          <div className="stat-item">
                            <FaRegComment />
                            <span>{post.comments}</span>
                          </div>
                          <div className="stat-item">
                            <FaEye />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'repos' && (
              <div className="repos-grid">
                {repositories.map(repo => (
                  <div key={repo.id} className="repo-card neomorphic-card">
                    <div className="repo-header">
                      <h4 className="repo-name">
                        <FaGithub />
                        {repo.name}
                      </h4>
                      <span className="repo-language">{repo.language}</span>
                    </div>
                    <p className="repo-description">{repo.description}</p>
                    <div className="repo-stats">
                      <span className="repo-stat">
                        <FaStar />
                        {repo.stars}
                      </span>
                      <span className="repo-stat">
                        <FaCode />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'resume' && (
              <div className="resume-section neomorphic-card">
                <div className="resume-header">
                  <h3>Resume</h3>
                  <button className="btn btn-primary">Download PDF</button>
                </div>
                <div className="resume-content">
                  <p>Professional resume and CV details would be displayed here.</p>
                  <p>This section could include education, certifications, projects, and achievements.</p>
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="empty-state">
                <div className="empty-icon">
                  <FaBookmark />
                </div>
                <h3>No saved posts yet</h3>
                <p>Posts you save will appear here</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="profile-sidebar-column">
          {/* Profile Stats Card */}
          <div className="profile-stats-card neomorphic-card">
            <h3 className="section-title">Profile Stats</h3>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">{userProfile.connections}</span>
                <span className="stat-label">Connections</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{userProfile.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{userProfile.posts}</span>
                <span className="stat-label">Posts</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="quick-actions-card neomorphic-card">
            <h3 className="section-title">Quick Actions</h3>
            <div className="quick-actions">
              <button className="quick-action-btn">
                <FaUserPlus />
                <span>View Connections</span>
              </button>
              <button className="quick-action-btn">
                <FaEnvelope />
                <span>Send Message</span>
              </button>
              <button className="quick-action-btn">
                <FaBookmark />
                <span>Save Profile</span>
              </button>
            </div>
          </div>

          {/* Activity Summary Card */}
          <div className="activity-summary-card neomorphic-card">
            <h3 className="section-title">Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <FaHeart />
                </div>
                <div className="activity-content">
                  <p>Liked 5 posts today</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <FaRegComment />
                </div>
                <div className="activity-content">
                  <p>Commented on React tutorial</p>
                  <span className="activity-time">4 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <FaUsers />
                </div>
                <div className="activity-content">
                  <p>Connected with 3 developers</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Topics Card */}
          <div className="trending-topics-card neomorphic-card">
            <h3 className="section-title">Trending Topics</h3>
            <div className="trending-list">
              <div className="trending-item">
                <span className="trending-tag">#ReactJS</span>
                <span className="trending-posts">244 posts</span>
              </div>
              <div className="trending-item">
                <span className="trending-tag">#WebDev</span>
                <span className="trending-posts">186 posts</span>
              </div>
              <div className="trending-item">
                <span className="trending-tag">#JavaScript</span>
                <span className="trending-posts">315 posts</span>
              </div>
              <div className="trending-item">
                <span className="trending-tag">#CSS</span>
                <span className="trending-posts">126 posts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 