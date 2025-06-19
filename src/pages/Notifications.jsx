import React from 'react';
import { useNotifications } from '../context/NotificationContext';
import { FaTimes, FaCheckCircle, FaUserPlus, FaComment, FaHeart, FaBell } from 'react-icons/fa';
import './Notifications.css';

const NotificationItem = ({ notification, onMarkAsRead, onRemove }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'follow':
        return <FaUserPlus className="notification-icon follow" />;
      case 'like':
        return <FaHeart className="notification-icon like" />;
      case 'comment':
        return <FaComment className="notification-icon comment" />;
      default:
        return <FaCheckCircle className="notification-icon" />;
    }
  };

  return (
    <div className={`notification-item neu ${!notification.read ? 'unread' : ''}`}>
      <div className="notification-content">
        {getIcon()}
        <div className="notification-text">
          <p>{notification.message}</p>
          <span className="notification-time">
            {new Date(notification.timestamp).toLocaleDateString(undefined, {
              hour: 'numeric',
              minute: 'numeric'
            })}
          </span>
        </div>
      </div>
      <div className="notification-actions">
        {!notification.read && (
          <button 
            className="mark-read-btn"
            onClick={() => onMarkAsRead(notification.id)}
            title="Mark as read"
          >
            <FaCheckCircle />
          </button>
        )}
        <button 
          className="remove-btn"
          onClick={() => onRemove(notification.id)}
          title="Remove notification"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default function Notifications() {
  const { 
    notifications, 
    unreadCount,
    markAsRead, 
    markAllAsRead,
    removeNotification,
    clearAll 
  } = useNotifications();

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <div className="notifications-header">
          <div className="header-left">
            <h1>Notifications</h1>
            {unreadCount > 0 && (
              <span className="unread-badge">{unreadCount}</span>
            )}
          </div>
          <div className="header-actions">
            {unreadCount > 0 && (
              <button 
                className="mark-all-btn"
                onClick={markAllAsRead}
              >
                Mark all as read
              </button>
            )}
            {notifications.length > 0 && (
              <button 
                className="clear-all-btn"
                onClick={clearAll}
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        <div className="notifications-list">
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={markAsRead}
                onRemove={removeNotification}
              />
            ))
          ) : (
            <div className="no-notifications">
              <FaBell className="empty-icon" />
              <h3>No notifications yet</h3>
              <p>When you get notifications, they'll show up here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 