import React, { useState, useRef } from 'react';
import { FaImage, FaVideo, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Create.css';

export default function Create() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [step, setStep] = useState('upload'); // upload, filter, details
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    
    setFiles(prevFiles => [...prevFiles, ...validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'video'
    }))]);
    
    if (validFiles.length > 0) {
      setStep('filter');
    }
  };

  const removeFile = (index) => {
    setFiles(prevFiles => {
      const newFiles = [...prevFiles];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
    
    if (files.length <= 1) {
      setStep('upload');
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="create-page">
      <div className="create-container neu">
        {/* Header */}
        <div className="create-header">
          {step !== 'upload' && (
            <button 
              className="back-btn"
              onClick={() => setStep(step === 'details' ? 'filter' : 'upload')}
            >
              <FaChevronLeft />
            </button>
          )}
          <h2>Create new post</h2>
          {step !== 'upload' && (
            <button 
              className="next-btn"
              onClick={() => setStep(step === 'filter' ? 'details' : 'share')}
            >
              {step === 'filter' ? 'Next' : 'Share'}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="create-content">
          {step === 'upload' ? (
            <form 
              className={`upload-form ${dragActive ? 'drag-active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={inputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              
              <div className="upload-content">
                <div className="upload-icon">
                  <FaImage className="icon" />
                  <FaVideo className="icon" />
                </div>
                <h3>Drag photos and videos here</h3>
                <button type="button" className="select-btn" onClick={onButtonClick}>
                  Select from computer
                </button>
              </div>
            </form>
          ) : (
            <div className="preview-container">
              {/* Media Preview */}
              <div className="media-preview">
                {files.map((file, index) => (
                  <div key={index} className="preview-item">
                    {file.type === 'image' ? (
                      <img src={file.preview} alt={`Preview ${index + 1}`} />
                    ) : (
                      <video src={file.preview} controls />
                    )}
                    <button 
                      className="remove-btn"
                      onClick={() => removeFile(index)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                {files.length > 1 && (
                  <>
                    <button className="nav-btn prev">
                      <FaChevronLeft />
                    </button>
                    <button className="nav-btn next">
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>

              {/* Edit Panel */}
              {step === 'filter' && (
                <div className="edit-panel">
                  <div className="filters-list">
                    <div className="filter-item active">
                      <div className="filter-preview original" />
                      <span>Original</span>
                    </div>
                    <div className="filter-item">
                      <div className="filter-preview clarendon" />
                      <span>Clarendon</span>
                    </div>
                    <div className="filter-item">
                      <div className="filter-preview gingham" />
                      <span>Gingham</span>
                    </div>
                    <div className="filter-item">
                      <div className="filter-preview moon" />
                      <span>Moon</span>
                    </div>
                    <div className="filter-item">
                      <div className="filter-preview lark" />
                      <span>Lark</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Details Panel */}
              {step === 'details' && (
                <div className="details-panel">
                  <div className="caption-input">
                    <textarea 
                      placeholder="Write a caption..."
                      maxLength={2200}
                    />
                  </div>
                  <div className="post-options">
                    <div className="option-item">
                      <span>Add location</span>
                      <button>Add</button>
                    </div>
                    <div className="option-item">
                      <span>Accessibility</span>
                      <button>Edit</button>
                    </div>
                    <div className="option-item">
                      <span>Advanced settings</span>
                      <button>Edit</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 