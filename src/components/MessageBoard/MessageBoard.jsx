import React, { useState } from 'react';
import { FaSearch, FaFilter, FaPaperclip, FaImage, FaSmile, FaPaperPlane } from 'react-icons/fa';
import './MessageBoard.css';

const MessageBoard = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Tech Community',
      type: 'group',
      avatar: '/avatars/tech-community.jpg',
      lastMessage: 'Check out this new framework!',
      time: '2m ago',
      unread: 3,
      members: 128
    },
    // Add more chats
  ];

  return (
    <div className="message-board">
      <div className="chat-sidebar neomorphic">
        <div className="chat-header">
          <h2>Message Board</h2>
          <div className="chat-actions">
            <button className="action-btn">
              <FaFilter />
            </button>
          </div>
        </div>

        <div className="search-bar neomorphic-inset">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search conversations..." />
        </div>

        <div className="chat-list">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`chat-item neomorphic ${activeChat === chat.id ? 'active' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
              <div className="chat-info">
                <div className="chat-name">
                  <h4>{chat.name}</h4>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <p className="chat-preview">{chat.lastMessage}</p>
                <div className="chat-meta">
                  {chat.type === 'group' && (
                    <span className="member-count">{chat.members} members</span>
                  )}
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main neomorphic">
        {activeChat ? (
          <>
            <div className="chat-main-header">
              <div className="chat-info">
                <img
                  src={chats.find(c => c.id === activeChat)?.avatar}
                  alt="Chat"
                  className="chat-avatar"
                />
                <div>
                  <h3>{chats.find(c => c.id === activeChat)?.name}</h3>
                  <span className="chat-status">Active now</span>
                </div>
              </div>
            </div>

            <div className="messages-container">
              {/* Messages will be rendered here */}
            </div>

            <div className="message-input-container neomorphic">
              <button className="input-action-btn">
                <FaPaperclip />
              </button>
              <button className="input-action-btn">
                <FaImage />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="message-input"
              />
              <button className="input-action-btn">
                <FaSmile />
              </button>
              <button className="send-btn">
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <h3>Select a conversation to start messaging</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBoard; 