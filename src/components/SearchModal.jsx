import React, { useRef, useEffect, useState } from 'react';
import { FiX, FiUpload } from 'react-icons/fi';
import Search from '../pages/Search';
import './SearchModal.css';

export default function SearchModal({ open, onClose }) {
  const fileInput = useRef();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // lock body scroll while modal is open
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      const handleEscape = e => e.key === "Escape" && onClose();
      window.addEventListener("keydown", handleEscape);
      return () => {
        window.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }
  }, [open, onClose]);

  const handleDrop = e => {
    e.preventDefault();
    setFiles([...files, ...e.dataTransfer.files]);
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="backdrop" onClick={onClose} />
      <div className="search-modal">
        <button className="close-btn" onClick={onClose}>
          <FiX size={20} />
        </button>

        <Search drawerMode />

        <div
          className="upload-zone"
          onClick={() => fileInput.current.click()}
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
        >
          <FiUpload size={28} />
          <p>Drag & drop or <span>browse</span></p>
          <input
            ref={fileInput}
            type="file"
            multiple
            hidden
            onChange={e => setFiles([...files, ...e.target.files])}
          />
        </div>

        {files.length > 0 && (
          <ul className="file-list">
            {Array.from(files).map((f, i) => (
              <li key={i}>{f.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 