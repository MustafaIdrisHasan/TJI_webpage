import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaSmile, FaPaperclip, FaMicrophone, FaCamera, FaEdit, FaEllipsisV } from 'react-icons/fa';
import Chat from './Chat';
import './Messages.css';

const Messages = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const messages = [
    {
      id: 1,
      name: 'Mickey Mouse Club House',
      avatar: '/path/to/mickey.jpg',
      lastMessage: '4+ new messages',
      time: '7w',
      unread: 4
    },
    {
      id: 2,
      name: 'CODE WITH HOPEUI',
      avatar: '/path/to/code.jpg',
      lastMessage: '4+ new messages',
      time: '2h',
      unread: 4
    },
    {
      id: 3,
      name: 'FIGHT CLUB',
      avatar: '/path/to/fight.jpg',
      lastMessage: '4+ new messages',
      time: '77w',
      unread: 4
    },
    {
      id: 4,
      name: 'Afroze Tamkanat',
      avatar: '/path/to/afroze.jpg',
      lastMessage: '4+ new messages',
      time: '1d',
      unread: 4
    }
  ];

  const conversations = [
    {
      id: 1,
      name: 'Sarah Wilson',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'Hey, how are you doing today?',
      time: '2m ago',
      unread: 2,
      status: 'online'
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'Thanks for the code review!',
      time: '1h ago',
      unread: 0,
      status: 'away'
    },
    {
      id: 3,
      name: 'Team Chat',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'Alice: Meeting at 3 PM today',
      time: '3h ago',
      unread: 5,
      status: 'online'
    },
    {
      id: 4,
      name: 'Alex Johnson',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'See you tomorrow!',
      time: '1d ago',
      unread: 0,
      status: 'offline'
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectChat = (conversation) => {
    const chatData = {
      ...conversation,
      messages: [
        { text: 'Hello there!', time: '10:30 AM', sent: false },
        { text: 'Hi! How are you?', time: '10:31 AM', sent: true },
        { text: conversation.lastMessage, time: conversation.time, sent: false }
      ]
    };
    setSelectedChat(chatData);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  return (
    <div className="messages-container">
      <div className="messages-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>mustafa03hasan</h1>
      </div>

      <div className="messages-search">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search messages..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="messages-tabs">
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Messages
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tickets' ? 'active' : ''}`}
            onClick={() => setActiveTab('tickets')}
          >
            Ticket Chats
          </button>
          <button 
            className={`tab-btn ${activeTab === 'group' ? 'active' : ''}`}
            onClick={() => setActiveTab('group')}
          >
            Group Chats
          </button>
        </div>
      </div>

      <div className="messages-sections">
        <div className="section-tabs">
          <button 
            className={`section-tab ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
          <button 
            className={`section-tab ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            Requests
          </button>
        </div>
      </div>

      <div className="messages-list">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`conversation-item ${selectedChat?.id === conversation.id ? 'active' : ''}`}
            onClick={() => handleSelectChat(conversation)}
          >
            <div className="conversation-avatar">
              <img 
                src={conversation.avatar} 
                alt={conversation.name}
                className="avatar-border"
              />
              {conversation.status === 'online' && (
                <div className="online-indicator"></div>
              )}
            </div>
            <div className="conversation-info">
              <h4 className="conversation-name">{conversation.name}</h4>
              <p className="conversation-preview">{conversation.lastMessage}</p>
            </div>
            <div className="conversation-meta">
              <span className="conversation-time">{conversation.time}</span>
              {conversation.unread > 0 && (
                <span className="unread-badge">{conversation.unread}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="messages-main">
        {selectedChat ? (
          <Chat chatData={selectedChat} onBack={handleBackToList} />
        ) : (
          <div className="no-conversation">
            <div className="no-conversation-icon">💬</div>
            <h3>Your Messages</h3>
            <p>Send private messages to friends and colleagues</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages; 