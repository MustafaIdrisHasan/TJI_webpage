import React from 'react';
import { FaUserPlus, FaUsers, FaBuilding, FaAddressBook, FaUserFriends, FaRegCalendarAlt } from 'react-icons/fa';
import './NetworkPage.css';

const NetworkPage = () => {
  const connections = [
    {
      id: 1,
      name: 'Jane Smith',
      title: 'UX Designer at Creative Tech',
      avatar: '/avatars/jane-smith.jpg',
      mutualConnections: 12
    },
    {
      id: 2,
      name: 'Alex Johnson',
      title: 'Software Engineer at Tech Solutions',
      avatar: '/avatars/alex-johnson.jpg',
      mutualConnections: 8
    },
    {
      id: 3,
      name: 'Sarah Williams',
      title: 'Product Manager at InnoSoft',
      avatar: '/avatars/sarah-williams.jpg',
      mutualConnections: 5
    }
  ];

  const invitations = [
    {
      id: 1,
      name: 'Michael Brown',
      title: 'Frontend Developer at WebDev Inc.',
      avatar: '/avatars/michael-brown.jpg',
      mutualConnections: 3,
      time: '3d'
    },
    {
      id: 2,
      name: 'Emily Davis',
      title: 'Data Scientist at AI Solutions',
      avatar: '/avatars/emily-davis.jpg',
      mutualConnections: 7,
      time: '1w'
    }
  ];

  return (
    <div className="network-container">
      <div className="network-sidebar neomorphic">
        <div className="sidebar-header">
          <h2>Manage my network</h2>
        </div>
        <ul className="network-links">
          <li>
            <a href="#connections" className="network-link">
              <FaUserFriends className="network-icon" />
              <span>Connections</span>
              <span className="count">412</span>
            </a>
          </li>
          <li>
            <a href="#contacts" className="network-link">
              <FaAddressBook className="network-icon" />
              <span>Contacts</span>
              <span className="count">38</span>
            </a>
          </li>
          <li>
            <a href="#people" className="network-link">
              <FaUsers className="network-icon" />
              <span>People I Follow</span>
              <span className="count">28</span>
            </a>
          </li>
          <li>
            <a href="#groups" className="network-link">
              <FaUsers className="network-icon" />
              <span>Groups</span>
              <span className="count">6</span>
            </a>
          </li>
          <li>
            <a href="#events" className="network-link">
              <FaRegCalendarAlt className="network-icon" />
              <span>Events</span>
              <span className="count">0</span>
            </a>
          </li>
          <li>
            <a href="#pages" className="network-link">
              <FaBuilding className="network-icon" />
              <span>Pages</span>
              <span className="count">15</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="network-main">
        <div className="invitations-section neomorphic">
          <div className="section-header">
            <h2>Invitations</h2>
            <a href="#all-invites" className="see-all-link">See all {invitations.length}</a>
          </div>

          <div className="invitations-list">
            {invitations.map(invitation => (
              <div key={invitation.id} className="invitation-card">
                <div className="user-avatar">
                  <img src={invitation.avatar} alt={invitation.name} />
                </div>
                <div className="invitation-details">
                  <h3>{invitation.name}</h3>
                  <p className="user-title">{invitation.title}</p>
                  <p className="mutual-connections">
                    <FaUserFriends className="mutual-icon" />
                    {invitation.mutualConnections} mutual connections
                  </p>
                  <p className="invitation-time">{invitation.time}</p>
                </div>
                <div className="invitation-actions">
                  <button className="ignore-btn">Ignore</button>
                  <button className="accept-btn">Accept</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="people-section neomorphic">
          <div className="section-header">
            <h2>People you may know</h2>
            <a href="#all-connections" className="see-all-link">See all</a>
          </div>

          <div className="people-grid">
            {connections.map(connection => (
              <div key={connection.id} className="connection-card">
                <div className="user-avatar large">
                  <img src={connection.avatar} alt={connection.name} />
                </div>
                <h3>{connection.name}</h3>
                <p className="user-title">{connection.title}</p>
                <p className="mutual-connections">
                  <FaUserFriends className="mutual-icon" />
                  {connection.mutualConnections} mutual connections
                </p>
                <button className="connect-btn">
                  <FaUserPlus /> Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage; 