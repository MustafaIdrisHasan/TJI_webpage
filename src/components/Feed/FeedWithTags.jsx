import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaBookmark, FaEllipsisH, FaGlobeAmericas, FaThumbsUp, FaRegComment } from 'react-icons/fa';
import './FeedWithTags.css';

const FeedWithTags = () => {
  const [activeTag, setActiveTag] = useState('all');
  const [sortBy, setSortBy] = useState('top');

  const tags = [
    { id: 'all', label: 'All' },
    { id: 'html', label: 'HTML', icon: '🔖' },
    { id: 'python', label: 'PYTHON', icon: '🐍' },
    { id: 'java', label: 'JAVA', icon: '☕' },
    { id: 'react', label: 'REACT', icon: '⚛️' },
  ];

  const sortOptions = [
    { id: 'top', label: 'Top' },
    { id: 'recent', label: 'Recent' },
    { id: 'trending', label: 'Trending' }
  ];

  const posts = [
    {
      id: 1,
      author: 'User X',
      handle: '@yasir',
      verified: true,
      position: 'Frontend Developer',
      company: 'Tech Solutions',
      avatar: '/avatars/user-x.jpg',
      time: '14h',
      content: 'How do I center the div? Looking for the best approach for responsive design.',
      image: '/posts/mountains.jpg',
      likes: 245,
      comments: 5,
      tags: ['html', 'css']
    },
    {
      id: 2,
      author: 'Tech Daily',
      handle: '@techdaily',
      verified: false,
      position: 'Tech News Organization',
      company: 'TechMedia Inc.',
      avatar: '/avatars/tech-daily.jpg',
      time: '2h',
      title: 'The Future of AI Development',
      content: 'Latest developments in artificial intelligence and machine learning show promising results for web development. What do you think about the integration of AI in coding?',
      image: '/posts/ai-image.jpg',
      likes: 245,
      comments: 12,
      tags: ['python', 'ai']
    }
  ];

  const filteredPosts = activeTag === 'all' 
    ? posts 
    : posts.filter(post => post.tags.includes(activeTag));

  return (
    <div className="feed-container">
      <div className="feed-header">
        <div className="sort-options">
          {sortOptions.map(option => (
            <button 
              key={option.id}
              className={`sort-option ${sortBy === option.id ? 'active' : ''}`}
              onClick={() => setSortBy(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="language-tags">
        {tags.map(tag => (
          <button 
            key={tag.id}
            className={`language-tag ${activeTag === tag.id ? 'active' : ''}`}
            onClick={() => setActiveTag(tag.id)}
          >
            {tag.icon && <span className="tag-icon">{tag.icon}</span>}
            <span className="tag-label">{tag.label}</span>
          </button>
        ))}
      </div>

      <div className="create-post neomorphic">
        <div className="create-post-header">
          <div className="user-avatar-small">
            <img src="/avatars/default-avatar.png" alt="Your avatar" />
          </div>
          <button className="create-post-input">
            Start a post
          </button>
        </div>
      </div>

      <div className="posts-feed">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-card neomorphic">
            <div className="post-header">
              <div className="post-user">
                <img src={post.avatar} alt={post.author} className="user-avatar" />
                <div className="user-info">
                  <div className="user-name">
                    {post.author} 
                    {post.verified && <span className="verified-badge">✓</span>}
                  </div>
                  <div className="user-position">
                    {post.position} • {post.company}
                  </div>
                  <div className="post-meta">
                    <span className="post-time">{post.time}</span>
                    <span className="visibility"><FaGlobeAmericas /> Anyone</span>
                  </div>
                </div>
              </div>
              <button className="more-options">
                <FaEllipsisH />
              </button>
            </div>

            <div className="post-content">
              {post.title && <h3 className="post-title">{post.title}</h3>}
              <p className="post-text">{post.content}</p>
              {post.image && (
                <div className="post-image-container">
                  <img src={post.image} alt="" className="post-image" />
                </div>
              )}
            </div>

            <div className="post-stats">
              <span className="reaction-count"><FaThumbsUp className="reaction-icon" /> {post.likes}</span>
              <span className="comments-count">{post.comments} comments</span>
            </div>

            <div className="post-divider"></div>

            <div className="post-actions">
              <button className="action-button">
                <FaThumbsUp />
                <span>Like</span>
              </button>
              <button className="action-button">
                <FaRegComment />
                <span>Comment</span>
              </button>
              <button className="action-button">
                <FaShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedWithTags; 