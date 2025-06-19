import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      messages: true,
      connections: true,
      posts: false,
      newsletter: true
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false
    },
    theme: {
      darkMode: true,
      fontSize: 'medium'
    }
  });

  const handleNotificationChange = (setting) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: !prev.notifications[setting]
      }
    }));
  };

  const handlePrivacyChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value
      }
    }));
  };

  const handleThemeChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      theme: {
        ...prev.theme,
        [setting]: value
      }
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="settings-content">
        <section className="settings-section">
          <h2>Notifications</h2>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Messages</h3>
                <p>Get notified when you receive a message</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.messages}
                  onChange={() => handleNotificationChange('messages')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>New Connections</h3>
                <p>Get notified when someone connects with you</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.connections}
                  onChange={() => handleNotificationChange('connections')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Post Activity</h3>
                <p>Get notified about likes and comments on your posts</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.posts}
                  onChange={() => handleNotificationChange('posts')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Newsletter</h3>
                <p>Receive our weekly newsletter</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.newsletter}
                  onChange={() => handleNotificationChange('newsletter')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>Privacy</h2>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Profile Visibility</h3>
                <p>Control who can see your profile</p>
              </div>
              <select
                value={settings.privacy.profileVisibility}
                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                className="select-input"
              >
                <option value="public">Public</option>
                <option value="connections">Connections Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Show Email</h3>
                <p>Display your email on your profile</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.showEmail}
                  onChange={() => handlePrivacyChange('showEmail', !settings.privacy.showEmail)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Show Phone Number</h3>
                <p>Display your phone number on your profile</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.showPhone}
                  onChange={() => handlePrivacyChange('showPhone', !settings.privacy.showPhone)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>Theme</h2>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Dark Mode</h3>
                <p>Toggle dark mode theme</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.theme.darkMode}
                  onChange={() => handleThemeChange('darkMode', !settings.theme.darkMode)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Font Size</h3>
                <p>Adjust the text size</p>
              </div>
              <select
                value={settings.theme.fontSize}
                onChange={(e) => handleThemeChange('fontSize', e.target.value)}
                className="select-input"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </section>
      </div>

      <div className="settings-footer">
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings; 