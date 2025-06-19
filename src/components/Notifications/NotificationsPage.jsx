import React, { useState } from 'react';
import { FaUserPlus, FaThumbsUp, FaComment, FaEllipsisH, FaBell, FaFilter } from 'react-icons/fa';
import './NotificationsPage.css';

const NotificationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'connections', label: 'Connections' },
    { id: 'mentions', label: 'Mentions' },
    { id: 'posts', label: 'Posts' }
  ];

  const notifications = [
    {
      id: 1,
      type: 'connection',
      avatar: '/avatars/jane-smith.jpg',
      content: 'Jane Smith has accepted your connection request',
      time: '2h',
      read: false
    },
    {
      id: 2,
      type: 'like',
      avatar: '/avatars/alex-johnson.jpg',
      content: 'Alex Johnson liked your post about React development',
      time: '1d',
      read: true,
      postImage: '/posts/react-post.jpg'
    },
    {
      id: 3,
      type: 'comment',
      avatar: '/avatars/sarah-williams.jpg',
      content: 'Sarah Williams commented on your recent post',
      time: '2d',
      read: true,
      comment: 'Great insights! Thanks for sharing this information.'
    },
    {
      id: 4,
      type: 'connection',
      avatar: '/avatars/michael-brown.jpg',
      content: 'Michael Brown is now following you',
      time: '3d',
      read: true
    },
    {
      id: 5,
      type: 'mention',
      avatar: '/avatars/emily-davis.jpg',
      content: 'Emily Davis mentioned you in a comment',
      time: '5d',
      read: true,
      comment: '@johndoe What do you think about this approach?'
    }
  ];

  const filteredNotifications = activeFilter === 'all' 
    ? notifications 
    : notifications.filter(notif => {
        if (activeFilter === 'connections') return notif.type === 'connection';
        if (activeFilter === 'mentions') return notif.type === 'mention';
        if (activeFilter === 'posts') return ['like', 'comment'].includes(notif.type);
        return true;
      });

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'connection':
        return <FaUserPlus className="notification-type-icon connection" />;
      case 'like':
        return <FaThumbsUp className="notification-type-icon like" />;
      case 'comment':
      case 'mention':
        return <FaComment className="notification-type-icon comment" />;
      default:
        return <FaBell className="notification-type-icon" />;
    }
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>Notifications</h1>
        <button className="filter-button">
          <FaFilter />
          <span>Manage</span>
        </button>
      </div>

      <div className="notifications-filters">
        {filterOptions.map(option => (
          <button
            key={option.id}
            className={`filter-option ${activeFilter === option.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-card neomorphic ${!notification.read ? 'unread' : ''}`}
            >
              <div className="notification-icon">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="notification-avatar">
                <img src={notification.avatar} alt="User avatar" />
              </div>
              <div className="notification-content">
                <p className="notification-text">{notification.content}</p>
                <span className="notification-time">{notification.time}</span>
                
                {notification.comment && (
                  <div className="notification-comment">
                    "{notification.comment}"
                  </div>
                )}
                
                {notification.postImage && (
                  <div className="notification-image">
                    <img src={notification.postImage} alt="Post" />
                  </div>
                )}
              </div>
              <button className="notification-more">
                <FaEllipsisH />
              </button>
            </div>
          ))
        ) : (
          <div className="no-notifications">
            <p>No notifications found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage; 