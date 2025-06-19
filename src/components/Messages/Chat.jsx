import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaPhone, FaVideo, FaInfo, FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';
import './Chat.css';

const Chat = ({ chatData, onBack }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chatData) {
    return (
      <div className="chat-container neu">
        <div className="no-chat">
          <h3>Select a conversation to start chatting</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container neu">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-left">
          <button className="chat-action-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <img 
            src={chatData.avatar || "/api/placeholder/40/40"} 
            alt={chatData.name}
            className="message-avatar avatar-border"
          />
          <div className="chat-header-info">
            <h3>{chatData.name}</h3>
            <p>{chatData.status || 'Online'}</p>
          </div>
        </div>
        <div className="chat-actions">
          <button className="chat-action-btn">
            <FaPhone />
          </button>
          <button className="chat-action-btn">
            <FaVideo />
          </button>
          <button className="chat-action-btn">
            <FaInfo />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="chat-messages">
        <div className="message-date">Today</div>
        
        {chatData.messages?.map((msg, index) => (
          <div key={index} className={`message-item ${msg.sent ? 'own' : ''}`}>
            {!msg.sent && (
              <img 
                src={chatData.avatar || "/api/placeholder/32/32"} 
                alt={chatData.name}
                className="message-avatar avatar-border"
              />
            )}
            <div className="message-content">
              <div className="message-bubble">
                <p>{msg.text}</p>
              </div>
              <div className="message-time">{msg.time}</div>
              {msg.sent && (
                <div className="message-status read">✓✓</div>
              )}
            </div>
            {msg.sent && (
              <img 
                src="/api/placeholder/32/32" 
                alt="You"
                className="message-avatar avatar-border"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <div className="chat-input-actions">
            <button className="chat-input-btn">
              <FaPaperclip />
            </button>
          </div>
          <textarea
            className="chat-input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={1}
          />
          <div className="chat-input-actions">
            <button className="chat-input-btn">
              <FaSmile />
            </button>
            <button 
              className="chat-input-btn send-btn"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 