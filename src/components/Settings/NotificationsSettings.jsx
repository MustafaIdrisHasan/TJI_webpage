import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBell, FaEnvelope, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import './SettingsPage.css';

const NotificationsSettings = () => {
  const navigate = useNavigate();
  
  const [notificationSettings, setNotificationSettings] = useState({
    messages: {
      email: true,
      push: true,
      sms: false
    },
    connections: {
      email: true,
      push: true,
      sms: false
    },
    posts: {
      email: false,
      push: true,
      sms: false
    },
    jobAlerts: {
      email: true,
      push: false,
      sms: false
    }
  });

  const handleToggle = (category, channel) => {
    setNotificationSettings({
      ...notificationSettings,
      [category]: {
        ...notificationSettings[category],
        [channel]: !notificationSettings[category][channel]
      }
    });
  };

  return (
    <div className="settings-page-container">
      <div className="settings-page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Notifications</h1>
      </div>

      <div className="settings-page-content">
        <div className="notification-channels neomorphic">
          <h2>Notification Channels</h2>
          <div className="channel-list">
            <div className="channel-item">
              <div className="channel-icon">
                <FaEnvelope />
              </div>
              <div className="channel-content">
                <div className="channel-title">Email</div>
                <div className="channel-description">Receive notifications via email</div>
              </div>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="channel-item">
              <div className="channel-icon">
                <FaMobileAlt />
              </div>
              <div className="channel-content">
                <div className="channel-title">Push Notifications</div>
                <div className="channel-description">Receive notifications on your device</div>
              </div>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="channel-item">
              <div className="channel-icon">
                <FaDesktop />
              </div>
              <div className="channel-content">
                <div className="channel-title">SMS</div>
                <div className="channel-description">Receive notifications via text message</div>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="notification-settings neomorphic">
          <h2>Notification Settings</h2>
          
          <div className="setting-category">
            <div className="category-header">
              <FaBell />
              <h3>Messages</h3>
            </div>
            <div className="category-toggles">
              <label className="toggle-label">
                Email
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.messages.email}
                    onChange={() => handleToggle('messages', 'email')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="toggle-label">
                Push
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.messages.push}
                    onChange={() => handleToggle('messages', 'push')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="toggle-label">
                SMS
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.messages.sms}
                    onChange={() => handleToggle('messages', 'sms')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
            </div>
          </div>

          <div className="setting-category">
            <div className="category-header">
              <FaBell />
              <h3>Connection Requests</h3>
            </div>
            <div className="category-toggles">
              <label className="toggle-label">
                Email
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.connections.email}
                    onChange={() => handleToggle('connections', 'email')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="toggle-label">
                Push
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.connections.push}
                    onChange={() => handleToggle('connections', 'push')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="toggle-label">
                SMS
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.connections.sms}
                    onChange={() => handleToggle('connections', 'sms')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
            </div>
          </div>

          <div className="setting-category">
            <div className="category-header">
              <FaBell />
              <h3>Post Activity</h3>
            </div>
            <div className="category-toggles">
              <label className="toggle-label">
                Email
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.posts.email}
                    onChange={() => handleToggle('posts', 'email')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="toggle-label">
                Push
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.posts.push}
                    onChange={() => handleToggle('posts', 'push')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="toggle-label">
                SMS
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.posts.sms}
                    onChange={() => handleToggle('posts', 'sms')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="primary-btn">Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettings; 