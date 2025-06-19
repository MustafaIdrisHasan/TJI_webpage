import React, { useState } from 'react';
import { FaTimes, FaFileAlt, FaImage, FaVideo, FaMusic, FaTicketAlt, FaPlus, FaTags } from 'react-icons/fa';
import './NewPost.css';

const NewPost = ({ onClose }) => {
  const [postText, setPostText] = useState('');
  const [activeType, setActiveType] = useState('post');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const contentTypes = [
    { id: 'post', icon: <FaFileAlt />, label: 'Post' },
    { id: 'photo', icon: <FaImage />, label: 'Photo' },
    { id: 'video', icon: <FaVideo />, label: 'Video' },
    { id: 'audio', icon: <FaMusic />, label: 'Audio' },
    { id: 'ticket', icon: <FaTicketAlt />, label: 'Ticket' }
  ];

  const handleSubmit = () => {
    // Handle post submission
    console.log({
      type: activeType,
      content: postText,
      tags
    });
    onClose();
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  return (
    <div className="new-post-container neomorphic">
      <div className="new-post-header">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Create New Post</h2>
        <button 
          className="post-btn" 
          onClick={handleSubmit}
          disabled={!postText.trim()}
        >
          Post
        </button>
      </div>

      <div className="content-type-selector">
        {contentTypes.map(type => (
          <button
            key={type.id}
            className={`type-btn ${activeType === type.id ? 'active' : ''}`}
            onClick={() => setActiveType(type.id)}
          >
            {type.icon}
            <span>{type.label}</span>
          </button>
        ))}
      </div>

      <div className="post-content">
        <textarea
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="post-textarea neomorphic-inset"
        />
      </div>

      <button className="add-media-btn neomorphic-inset">
        <FaPlus />
        <span>Add Media</span>
      </button>

      <div className="tags-section">
        <h3>Add Tags</h3>
        <div className="tag-input-container neomorphic-inset">
          <FaTags />
          <input
            type="text"
            placeholder="Add tags..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
        </div>
        {tags.length > 0 && (
          <div className="tags-list">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost; 