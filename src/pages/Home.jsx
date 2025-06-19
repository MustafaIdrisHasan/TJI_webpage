import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaRegComment, FaRegBookmark, FaRegPaperPlane, FaEllipsisH, FaTrash, FaCopy, FaExpand, FaEdit, FaCode, FaUsers, FaTimes } from 'react-icons/fa';
import { ArrowsPointingInIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import './Home.css';

const Home = () => {
  const [stories] = useState([
    {
      id: 1,
      username: 'mallika.t4',
      avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
      hasStory: true
    },
    {
      id: 2,
      username: 'silentzound_',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      hasStory: true
    },
    {
      id: 3,
      username: 'salmannnnn',
      avatar: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400',
      hasStory: true
    },
    {
      id: 4,
      username: 'chk67y',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      hasStory: true
    }
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Tech Daily',
      avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
      verified: true,
      username: '@techdaily',
      content: 'The Future of AI Development',
      description: 'Latest developments in artificial intelligence and machine learning are reshaping how we build software. What are your thoughts on AI-powered development tools? 🤖✨',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
      timestamp: '2h',
      likes: 102350,
      isLiked: false,
      comments: [
        { id: 1, username: '@dev_sarah', text: 'This is amazing! 🚀', timestamp: '1h' },
        { id: 2, username: '@techie_john', text: 'Great insights on AI development!', timestamp: '30m' }
      ],
      saved: false
    },
    {
      id: 2,
      author: 'AI Workflow Designer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      verified: true,
      username: '@flowmaster',
      content: 'Conversational AI Flow Builder',
      description: 'Built this amazing conversational AI workflow using a visual flow builder! Drag-and-drop nodes make it incredibly easy to design complex conversation paths. Perfect for chatbots, customer support automation, and interactive AI systems. The prompt configuration and variable extraction features are game-changers! 🤖⚡ #AIWorkflow #ConversationalAI #FlowBuilder',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600',
      timestamp: '30m',
      likes: 89420,
      isLiked: true,
      comments: [
        { id: 8, username: '@chatbot_dev', text: 'This interface looks so intuitive! Which platform?', timestamp: '15m' },
        { id: 9, username: '@ai_builder', text: 'The node-based approach is perfect for complex flows 🎯', timestamp: '10m' }
      ],
      saved: true
    },
    {
      id: 3,
      author: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400',
      verified: true,
      username: '@datavisualist',
      content: 'Life Expectancy Data Visualization',
      description: 'Created this beautiful choropleth map showing life expectancy by country using Python and Plotly! The color gradients really help visualize the global patterns. Data from 2007 WHO statistics. Perfect example of how data visualization can tell powerful stories 📊🌍 #DataScience #Python #Plotly',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
      timestamp: '1h',
      likes: 125670,
      isLiked: true,
      comments: [
        { id: 10, username: '@python_coder', text: 'Amazing work! Love the color scheme choice', timestamp: '45m' },
        { id: 11, username: '@data_analyst', text: 'This is exactly what I needed for my project! Thanks!', timestamp: '30m' },
        { id: 12, username: '@geo_viz', text: 'The geographic projection looks perfect! 🗺️', timestamp: '20m' }
      ],
      saved: true
    },
    {
      id: 4,
      author: 'Math Visualizer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      verified: false,
      username: '@mathplots',
      content: 'Interactive Mathematical Functions',
      description: 'Plotting sine and cosine graphs with interactive controls! This real-time mathematical visualization tool makes it easy to explore trigonometric functions and their relationships. Great for educational purposes and mathematical research. The smooth curves and precise calculations showcase the beauty of mathematics! 📐📊 #Mathematics #Visualization #Education',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600',
      timestamp: '2h',
      likes: 67890,
      isLiked: false,
      comments: [
        { id: 13, username: '@math_teacher', text: 'Perfect for teaching trigonometry! 📚', timestamp: '1h' },
        { id: 14, username: '@student_dev', text: 'This would have helped me so much in calculus class!', timestamp: '45m' }
      ],
      saved: false
    },
    {
      id: 5,
      author: 'Network Analyst',
      avatar: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400',
      verified: true,
      username: '@networkpro',
      content: 'Interactive Network Graph Analysis',
      description: 'Built this interactive network graph visualization to analyze complex relationships and connections! The dynamic node positioning and edge weights provide deep insights into network topology. Perfect for social network analysis, system architecture mapping, and data relationship exploration. The interactive features allow for real-time exploration! 🕸️🔍 #NetworkAnalysis #DataViz #GraphTheory',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
      timestamp: '45m',
      likes: 73250,
      isLiked: false,
      comments: [
        { id: 15, username: '@graph_expert', text: 'Beautiful force-directed layout! Which library did you use?', timestamp: '30m' },
        { id: 16, username: '@data_scientist', text: 'The clustering patterns are fascinating! 🎯', timestamp: '15m' }
      ],
      saved: false
    },
    {
      id: 6,
      author: 'Code Master',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      verified: false,
      username: '@codemaster',
      content: 'React Performance Tips',
      description: 'Here are some essential React performance optimization techniques that every developer should know. Swipe to see the code examples! 💻',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
      timestamp: '4h',
      likes: 45230,
      isLiked: true,
      comments: [
        { id: 3, username: '@react_dev', text: 'Very helpful tips!', timestamp: '2h' }
      ],
      saved: true
    },
    {
      id: 7,
      author: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      verified: true,
      username: '@alexdev',
      content: 'Advanced Flow Builder Interface',
      description: 'Just built this amazing conversational AI workflow using a visual flow builder! The drag-and-drop interface makes it so easy to create complex conversation flows. Perfect for building chatbots and automated customer support systems. 🔗🤖 #AIWorkflow #FlowBuilder',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600',
      timestamp: '5h',
      likes: 78420,
      isLiked: false,
      comments: [
        { id: 4, username: '@workflow_expert', text: 'This looks incredible! Which platform did you use?', timestamp: '45m' },
        { id: 5, username: '@ai_enthusiast', text: 'Visual flow builders are game changers! 🎯', timestamp: '20m' }
      ],
      saved: false
    }
  ]);

  const [codeExamples] = useState([
    {
      id: 1,
      title: 'React Custom Hook',
      language: 'javascript',
      code: `// Custom hook for API calls
import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApi;`
    },
    {
      id: 2,
      title: 'Python Data Processing',
      language: 'python',
      code: `# Data processing with pandas
import pandas as pd
import numpy as np

def process_data(df):
    """
    Clean and process the dataset
    """
    # Remove duplicates
    df = df.drop_duplicates()
    
    # Handle missing values
    df = df.fillna(df.mean())
    
    # Normalize numerical columns
    numerical_cols = df.select_dtypes(include=[np.number]).columns
    df[numerical_cols] = (df[numerical_cols] - df[numerical_cols].mean()) / df[numerical_cols].std()
    
    return df

# Example usage
data = pd.read_csv('dataset.csv')
cleaned_data = process_data(data)
print(f"Processed {len(cleaned_data)} rows")`
    }
  ]);

  const [newComments, setNewComments] = useState({});
  const [showComments, setShowComments] = useState({});
  const [activeCodeExample, setActiveCodeExample] = useState(0);

  // New state for drawers and overlay
  const [activePost, setActivePost] = useState(null);
  const [isCodeFull, setIsCodeFull] = useState(false);
  const [isFeedExpanded, setFeedExpanded] = useState(false);

  // Handle like toggle with animation
  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  // Handle comment submission
  const handleCommentSubmit = (postId, event) => {
    event.preventDefault();
    const commentText = newComments[postId];
    if (!commentText?.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), {
            id: Date.now(),
            username: '@mustafa03hasan',
            text: commentText,
            timestamp: 'now',
            likes: 0,
            isLiked: false
          }]
        };
      }
      return post;
    }));

    setNewComments({ ...newComments, [postId]: '' });
  };

  // Handle comment deletion
  const handleDeleteComment = (postId, commentId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.filter(comment => comment.id !== commentId)
        };
      }
      return post;
    }));
  };

  // Handle comment like
  const handleCommentLike = (postId, commentId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map(comment => {
            if (comment.id === commentId) {
              return {
                ...comment,
                isLiked: !comment.isLiked,
                likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
              };
            }
            return comment;
          })
        };
      }
      return post;
    }));
  };

  // Toggle comments visibility
  const toggleComments = (postId) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId]
    });
  };

  const copyCode = () => {
    console.log('Copy code functionality');
  };

  const expandCode = () => {
    setIsCodeFull(true);
  };

  const editCode = () => {
    console.log('Edit code functionality');
  };

  // New drawer handlers
  const openPost = (post) => {
    setActivePost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setActivePost(null);
    document.body.style.overflow = 'unset';
  };

  const openCode = () => {
    setIsCodeFull(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCode = () => {
    setIsCodeFull(false);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key for closing drawers and overlay
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (activePost) setActivePost(null);
        if (isCodeFull) closeCode();
      }
    };
    document.addEventListener('keydown', handleEsc, false);
    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, [activePost, isCodeFull]);

  // Toggle feed handler
  const toggleFeed = () => {
    setFeedExpanded(!isFeedExpanded);
  };

  // Handle body class for feed expansion
  useEffect(() => {
    if (isFeedExpanded) {
      document.body.classList.add('feed-expanded');
    } else {
      document.body.classList.remove('feed-expanded');
    }
    return () => document.body.classList.remove('feed-expanded');
  }, [isFeedExpanded]);

  const renderCodeWithSyntaxHighlighting = (code) => {
    const lines = code.split('\n');
    return lines.map((line, index) => (
      <div key={index} className="code-line">
        <span className="line-number">{index + 1}</span>
        <span className="code-content" dangerouslySetInnerHTML={{ 
          __html: highlightSyntax(line) 
        }} />
      </div>
    ));
  };

  const highlightSyntax = (line) => {
    return line
      .replace(/(import|export|const|let|var|function|class|if|else|for|while|return|async|await|try|catch|finally)/g, '<span class="keyword">$1</span>')
      .replace(/(['"`])((?:(?!\1)[^\\]|\\.)*)(\1)/g, '<span class="string">$1$2$3</span>')
      .replace(/(\/\/.*$)/g, '<span class="comment">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\(/g, '<span class="function">$1</span>(')
      .replace(/\b([a-z][a-zA-Z0-9]*)\s*=/g, '<span class="variable">$1</span> =');
  };

  // PostCard component for reusable post display
  const PostCard = ({ post, isGallery = false, onClick, onOpen, disabled = false }) => {
    const handleClick = () => {
      if (disabled) return;
      if (onOpen) onOpen();
      if (onClick) onClick();
    };

    return (
      <article
        className={`post neomorphic-card card-interactive ${isGallery ? 'post-gallery-card' : ''}`}
        onClick={handleClick}
        style={{ cursor: (onClick || onOpen) && !disabled ? 'pointer' : 'default' }}
      >
      <div className="post-header">
        <div className="post-author">
          <img src={post.avatar} alt={post.author} className="avatar" />
          <div className="author-info">
            <div className="author-name">
              {post.author}
              {post.verified && (
                <span className="verified-badge">
                  <i className="fas fa-check-circle"></i>
                </span>
              )}
            </div>
            <span className="post-time">{post.timestamp}</span>
          </div>
        </div>
        {!isGallery && (
          <button className="more-options btn btn-sm">
            <FaEllipsisH />
          </button>
        )}
      </div>

      {post.image && (
        <div className="post-image">
          <img src={post.image} alt={post.content} />
        </div>
      )}

      <div className="post-content">
        <h3 className="post-title">{post.content}</h3>
        <p className={`post-description ${isGallery ? 'post-description-truncated' : ''}`}>
          {post.description}
        </p>
      </div>

      {!isGallery && (
        <>
          <div className="post-actions">
            <div className="action-buttons">
              <button
                className={`action-btn like-btn ${post.isLiked ? 'liked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(post.id);
                }}
              >
                {post.isLiked ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button
                className="action-btn comment-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleComments(post.id);
                }}
              >
                <FaRegComment />
              </button>
              <button className="action-btn share-btn">
                <FaRegPaperPlane />
              </button>
            </div>
            <button className="action-btn save-btn">
              <FaRegBookmark />
            </button>
          </div>

          <div className="post-stats">
            <span className="likes-count">{post.likes.toLocaleString()} likes</span>
          </div>

          {/* Comments Section */}
          {showComments[post.id] && (
            <div className="comments-section">
              <div className="comments-list">
                {post.comments?.map(comment => (
                  <div key={comment.id} className="comment">
                    <div className="comment-content">
                      <span className="comment-username">{comment.username}</span>
                      <span className="comment-text">{comment.text}</span>
                    </div>
                    <div className="comment-actions">
                      <span className="comment-time">{comment.timestamp}</span>
                      <button
                        className="comment-like-btn"
                        onClick={() => handleCommentLike(post.id, comment.id)}
                      >
                        {comment.isLiked ? <FaHeart /> : <FaRegHeart />}
                      </button>
                      {comment.username === '@mustafa03hasan' && (
                        <button
                          className="comment-delete-btn"
                          onClick={() => handleDeleteComment(post.id, comment.id)}
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="comment-form"
                onSubmit={(e) => handleCommentSubmit(post.id, e)}
              >
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComments[post.id] || ''}
                  onChange={(e) => setNewComments({
                    ...newComments,
                    [post.id]: e.target.value
                  })}
                  className="comment-input form-input"
                />
                <button type="submit" className="comment-submit btn btn-primary">
                  Post
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </article>
    );
  };

  return (
    <div className={`home-content ${isFeedExpanded ? 'feed-expanded' : ''}`}>
      <div className="scrollable-sections">
        {/* Feed Section */}
        {!isFeedExpanded && (
          <div className="section-slide fade-in">
            <h2 className="section-title">
              <FaUsers />
              Social Feed
            </h2>
          
          {/* Stories */}
          <div className="stories-container neomorphic-card">
            <div className="stories-scroll">
              {stories.map(story => (
                <div key={story.id} className="story-item">
                  <div className={`story-avatar-border ${story.hasStory ? 'has-story' : ''}`}>
                    <img src={story.avatar} alt={story.username} className="story-avatar" />
                  </div>
                  <span className="story-username">{story.username}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="feed">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        )}

        {/* Post Gallery Section */}
        <div className="section-slide fade-in">
          <div className="section-header">
            <h2 className="section-title">
              <FaUsers />
              Latest Posts
            </h2>
            <button className="feed-toggle" onClick={toggleFeed}>
              {isFeedExpanded ? <ArrowsPointingInIcon className="w-4 h-4"/> : <ArrowsPointingOutIcon className="w-4 h-4"/>}
              {isFeedExpanded ? ' Collapse' : ' Expand'}
            </button>
          </div>

          <section className={isFeedExpanded ? 'post-gallery wide' : 'post-gallery'}>
            {posts.map(post => (
              <PostCard
                key={`gallery-${post.id}`}
                post={post}
                isGallery={true}
                disabled={isFeedExpanded}
                onOpen={() => setActivePost(post)}
              />
            ))}
          </section>
        </div>

        {/* Code Editor Section */}
        {!isFeedExpanded && (
          <div className="section-slide fade-in">
            <h2 className="section-title">
              <FaCode />
              Code Playground
            </h2>
          
          <div className="code-editor-section">
            <div className="code-editor-header">
              <div className="code-editor-title">
                {codeExamples[activeCodeExample].title}
              </div>
              <div className="code-editor-controls">
                <button className="code-control-btn" onClick={copyCode} title="Copy Code">
                  <FaCopy />
                  Copy
                </button>
                <button className="code-control-btn" onClick={expandCode} title="Expand">
                  <FaExpand />
                  Expand
                </button>
                <button className="code-control-btn" onClick={editCode} title="Edit">
                  <FaEdit />
                  Edit
                </button>
              </div>
            </div>
            <div className="code-editor-content">
              {renderCodeWithSyntaxHighlighting(codeExamples[activeCodeExample].code)}
            </div>
          </div>

          {/* Code Example Tabs */}
          <div className="code-tabs">
            {codeExamples.map((example, index) => (
              <button
                key={example.id}
                className={`code-tab btn ${activeCodeExample === index ? 'btn-primary' : ''}`}
                onClick={() => setActiveCodeExample(index)}
              >
                {example.title}
              </button>
            ))}
          </div>
        </div>
        )}

        {/* Instagram-Style Post Overlay */}
        {activePost && (
          <div className="post-overlay" onClick={() => setActivePost(null)}>
            <div className="overlay-inner" onClick={e => e.stopPropagation()}>
              <div className="overlay-image">
                <img src={activePost.image} alt={activePost.content} />
              </div>
              <aside className="overlay-meta">
                <header className="overlay-header">
                  <img src={activePost.avatar} alt={activePost.author} className="overlay-avatar" />
                  <div className="overlay-author-info">
                    <h4>{activePost.author}</h4>
                    <span>{activePost.timestamp}</span>
                  </div>
                </header>
                <div className="overlay-content">
                  <h3>{activePost.content}</h3>
                  <p>{activePost.description}</p>
                </div>
                <div className="overlay-actions">
                  <button className={`action-btn like-btn ${activePost.isLiked ? 'liked' : ''}`}>
                    {activePost.isLiked ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button className="action-btn comment-btn">
                    <FaRegComment />
                  </button>
                  <button className="action-btn share-btn">
                    <FaRegPaperPlane />
                  </button>
                </div>
                <div className="overlay-stats">
                  <span>{activePost.likes.toLocaleString()} likes</span>
                </div>
              </aside>
              <button className="overlay-close" onClick={() => setActivePost(null)} aria-label="Close">
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Post Drawer */}
      {activePost && (
        <div className="drawer-overlay" onClick={closePost}>
          <div className="post-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="drawer-header">
              <button className="drawer-close" onClick={closePost} aria-label="Close">
                <FaTimes />
              </button>
            </div>
            <div className="drawer-content">
              <PostCard post={activePost} />
            </div>
          </div>
        </div>
      )}

      {/* Code Drawer */}
      {isCodeFull && (
        <div className="drawer-overlay" onClick={closeCode}>
          <div className="code-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="drawer-header">
              <div className="drawer-title">
                {codeExamples[activeCodeExample].title}
              </div>
              <div className="drawer-controls">
                <button className="code-control-btn" onClick={copyCode} title="Copy Code">
                  <FaCopy />
                  Copy
                </button>
                <button className="code-control-btn" onClick={editCode} title="Edit">
                  <FaEdit />
                  Edit
                </button>
                <button className="drawer-close" onClick={closeCode} aria-label="Close">
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="drawer-content">
              <div className="code-editor-content">
                {renderCodeWithSyntaxHighlighting(codeExamples[activeCodeExample].code)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 