import React, { useState } from 'react';
import { FaTimes, FaHeart } from 'react-icons/fa';
import './CommentSection.css';

const CommentSection = ({ postId, onClose }) => {
  const [newComment, setNewComment] = useState('');
  
  const comments = [
    {
      id: 1,
      author: 'john_doe',
      avatar: '/avatars/john-doe.jpg',
      text: 'Great post! 🔥',
      time: '2h',
      replyCount: 5,
      likes: 5
    }
    // More comments can be added here
  ];

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Submit comment logic
      console.log('Submitting comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section neomorphic">
      <div className="comments-header">
        <button className="close-comment-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Comments</h2>
        <div className="header-space"></div>
      </div>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-item">
            <div className="comment-avatar">
              <img src={comment.avatar} alt={comment.author} />
            </div>
            <div className="comment-content">
              <div className="comment-author">{comment.author}</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-meta">
                <span className="comment-time">{comment.time}</span>
                <span className="comment-replies">Reply{comment.replyCount > 1 ? 's' : ''}{comment.replyCount > 0 ? `: ${comment.replyCount}` : ''}</span>
                <span className="comment-likes">{comment.likes} like{comment.likes !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <button className="like-comment-btn">
              <FaHeart />
            </button>
          </div>
        ))}
      </div>

      <div className="comment-input-area">
        <div className="current-user-avatar">
          <img src="/avatars/current-user.jpg" alt="Your avatar" />
        </div>
        <div className="comment-input-wrapper">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button 
            className="post-comment-btn"
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection; 