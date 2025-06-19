import React from 'react';
import { FaSearch, FaEdit, FaTrophy, FaBriefcase, FaArrowLeft, FaGraduationCap, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './EnhancedProfile.css';

const EnhancedProfile = () => {
  const user = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'New York, USA',
    about: 'Passionate developer with expertise in web development and cloud solutions. Always looking to learn new technologies and solve challenging problems.',
    avatar: '/avatars/john-doe.jpg',
    coverPhoto: '/cover/cover-photo.jpg',
    stats: {
      leaderboard: 10,
      offers: 3,
      posts: 3,
      followers: '1.5K',
      following: '1K'
    },
    skills: ['JavaScript', 'React', 'Node.js', 'UI/UX', 'Web Development', 'Cloud Computing'],
    experience: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        logo: '/logos/tech-solutions.png',
        duration: 'Jan 2020 - Present',
        location: 'New York, USA',
        description: 'Leading frontend development for enterprise applications using React and TypeScript.'
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'Digital Innovations',
        logo: '/logos/digital-innovations.png',
        duration: 'Mar 2017 - Dec 2019',
        location: 'Boston, USA',
        description: 'Developed responsive web applications and collaborated with UX designers.'
      }
    ],
    education: [
      {
        id: 1,
        school: 'University of Technology',
        degree: 'Master of Computer Science',
        logo: '/logos/university.png',
        duration: '2015 - 2017',
        location: 'New York, USA'
      },
      {
        id: 2,
        school: 'City College',
        degree: 'Bachelor of Science in Software Engineering',
        logo: '/logos/college.png',
        duration: '2011 - 2015',
        location: 'Chicago, USA'
      }
    ],
    posts: [
      {
        id: 1,
        image: '/posts/post1.jpg'
      },
      {
        id: 2,
        image: '/posts/post2.jpg'
      },
      {
        id: 3,
        image: '/posts/post3.jpg'
      }
    ]
  };

  return (
    <div className="enhanced-profile-container">
      <div className="profile-cover">
        <img src={user.coverPhoto} alt="Cover" className="cover-photo" />
      </div>

      <div className="profile-details neomorphic">
        <div className="profile-avatar-container">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
        </div>
        <div className="user-info">
          <div className="user-header">
            <h1>{user.name}</h1>
            <button className="edit-btn neomorphic">
              <FaEdit />
              <span>Edit Profile</span>
            </button>
          </div>
          <p className="user-title">{user.title}</p>
          <p className="user-location"><FaMapMarkerAlt /> {user.location}</p>
          
          <div className="profile-actions">
            <button className="connect-btn">Connect</button>
            <button className="message-btn">Message</button>
            <button className="more-btn">More</button>
          </div>
        </div>
      </div>

      <div className="about-section neomorphic">
        <h2>About</h2>
        <p>{user.about}</p>
      </div>

      <div className="profile-stats neomorphic">
        <div className="stat-item">
          <FaTrophy className="stat-icon" />
          <span className="stat-value">{user.stats.leaderboard}</span>
          <span className="stat-label">Leader board</span>
        </div>
        <div className="stat-item">
          <FaBriefcase className="stat-icon" />
          <span className="stat-value">{user.stats.offers}</span>
          <span className="stat-label">Offers</span>
        </div>
      </div>

      <div className="skills-section neomorphic">
        <div className="section-header">
          <h2>Skills</h2>
          <button className="add-btn">
            <FaPlus />
          </button>
        </div>
        <div className="skills-list">
          {user.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="experience-section neomorphic">
        <div className="section-header">
          <h2>Experience</h2>
          <button className="add-btn">
            <FaPlus />
          </button>
        </div>
        <div className="experience-list">
          {user.experience.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="company-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="experience-details">
                <h3>{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="experience-duration">{exp.duration} • {exp.location}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="education-section neomorphic">
        <div className="section-header">
          <h2>Education</h2>
          <button className="add-btn">
            <FaPlus />
          </button>
        </div>
        <div className="education-list">
          {user.education.map(edu => (
            <div key={edu.id} className="education-item">
              <div className="school-logo">
                <img src={edu.logo} alt={edu.school} />
              </div>
              <div className="education-details">
                <h3>{edu.school}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="education-duration">{edu.duration} • {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="social-stats neomorphic">
        <div className="section-header">
          <h2>Activity</h2>
        </div>
        <div className="social-stats-container">
          <div className="social-stat-item">
            <span className="social-stat-value">{user.stats.posts}</span>
            <span className="social-stat-label">Posts</span>
          </div>
          <div className="social-stat-item">
            <span className="social-stat-value">{user.stats.followers}</span>
            <span className="social-stat-label">Followers</span>
          </div>
          <div className="social-stat-item">
            <span className="social-stat-value">{user.stats.following}</span>
            <span className="social-stat-label">Following</span>
          </div>
        </div>

        <div className="posts-grid">
          {user.posts.map(post => (
            <div key={post.id} className="post-item">
              <img src={post.image} alt="Post" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedProfile; 