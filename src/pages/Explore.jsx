import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaRegComment, FaEye } from 'react-icons/fa';
import './Explore.css';

const Explore = () => {
  const [posts] = useState([
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
  ]);

  const [categories] = useState([
    { id: 1, name: 'Technology', active: true },
    { id: 2, name: 'Design', active: false },
    { id: 3, name: 'Photography', active: false },
    { id: 4, name: 'Art', active: false },
    { id: 5, name: 'Music', active: false },
    { id: 6, name: 'Travel', active: false }
  ]);

  return (
    <div className="explore-container">
      <div className="content-container">
        {/* Category Filter */}
        <div className="category-filter neomorphic-card">
          <div className="category-scroll">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${category.active ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
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

        {/* Load More */}
        <div className="load-more-container">
          <button className="load-more-btn btn">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore; 