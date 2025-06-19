import React, { useState } from 'react';
import './Messages.css';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for the feedback on the project!',
      time: '10:30 AM',
      unread: 2,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      name: 'Mike Peterson',
      lastMessage: 'When is the next team meeting?',
      time: 'Yesterday',
      unread: 0,
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      lastMessage: 'The new design looks great!',
      time: 'Yesterday',
      unread: 1,
      avatar: 'https://via.placeholder.com/40'
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      text: 'Hi! How are you doing?',
      time: '10:00 AM'
    },
    {
      id: 2,
      senderId: 'me',
      text: "Hey! I'm doing great, thanks for asking. How about you?",
      time: '10:05 AM'
    },
    {
      id: 3,
      senderId: 1,
      text: "I'm good too! Just wanted to check about the project progress.",
      time: '10:10 AM'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    // Here you would typically send the message to your backend
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  return (
    <div className="messages-container">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Messages</h2>
          <button className="new-message-btn">
            <i className="fas fa-edit"></i>
          </button>
        </div>
        
        <div className="chat-list-content">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
              <div className="chat-info">
                <div className="chat-header">
                  <h3>{chat.name}</h3>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <p className="chat-preview">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <span className="unread-badge">{chat.unread}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <img
                src={chats.find(c => c.id === selectedChat)?.avatar}
                alt="Profile"
                className="chat-avatar"
              />
              <h3>{chats.find(c => c.id === selectedChat)?.name}</h3>
            </div>

            <div className="messages-list">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`message ${message.senderId === 'me' ? 'sent' : 'received'}`}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <form className="message-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages; 