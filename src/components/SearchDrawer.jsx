import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Search from '../pages/Search';

export default function SearchDrawer({ open, onClose }) {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="search-drawer-overlay">
      {/* Backdrop */}
      <div className="search-drawer-backdrop" onClick={onClose} />
      
      {/* Drawer */}
      <aside className="search-drawer">
        <button
          className="search-drawer-close"
          onClick={onClose}
          aria-label="Close search"
        >
          <FaTimes />
        </button>

        {/* Search Content */}
        <div className="search-drawer-content">
          <Search drawerMode />
        </div>
      </aside>
    </div>
  );
} 