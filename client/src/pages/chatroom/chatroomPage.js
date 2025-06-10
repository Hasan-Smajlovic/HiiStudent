import { useState, useEffect, useRef } from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./chatroomPage.css";

export default function StudyChatPage() {
  const [activeCategory, setActiveCategory] = useState('math');
  const [activeRoom, setActiveRoom] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const messagesEndRef = useRef(null);

  // Study categories and rooms
  const studyCategories = [
    {
      id: 'math',
      name: 'Mathematics',
      icon: '🧮',
      rooms: [
        { id: 'calc1', name: 'Calculus I', users: 24 },
        { id: 'linear-algebra', name: 'Linear Algebra', users: 18 },
        { id: 'stats', name: 'Statistics', users: 32 },
        { id: 'discrete-math', name: 'Discrete Math', users: 12 }
      ]
    },
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      rooms: [
        { id: 'physics1', name: 'Physics I', users: 28 },
        { id: 'chem101', name: 'Chemistry 101', users: 22 },
        { id: 'biology', name: 'Biology', users: 19 },
        { id: 'astro', name: 'Astronomy', users: 8 }
      ]
    },
    {
      id: 'cs',
      name: 'Computer Science',
      icon: '💻',
      rooms: [
        { id: 'data-structures', name: 'Data Structures', users: 45 },
        { id: 'algorithms', name: 'Algorithms', users: 38 },
        { id: 'web-dev', name: 'Web Development', users: 52 },
        { id: 'ai', name: 'Artificial Intelligence', users: 29 }
      ]
    },
    {
      id: 'humanities',
      name: 'Humanities',
      icon: '📚',
      rooms: [
        { id: 'history', name: 'World History', users: 15 },
        { id: 'philosophy', name: 'Philosophy', users: 11 },
        { id: 'literature', name: 'Literature', users: 13 },
        { id: 'art-history', name: 'Art History', users: 7 }
      ]
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: '🗣️',
      rooms: [
        { id: 'english', name: 'English', users: 21 },
        { id: 'spanish', name: 'Spanish', users: 18 },
        { id: 'french', name: 'French', users: 12 },
        { id: 'german', name: 'German', users: 9 }
      ]
    }
  ];

  // Mock messages for demo
  const mockMessages = {
    'calc1': [
      { id: 1, user: 'Alex Johnson', text: 'Can someone help with this limit problem? lim x→0 (sin x)/x', time: '10:24 AM' },
      { id: 2, user: 'Maria Chen', text: 'That\'s a fundamental limit! The answer is 1.', time: '10:26 AM' },
      { id: 3, user: 'Sam Wilson', text: 'Remember to use L\'Hôpital\'s rule if you need to prove it', time: '10:27 AM' }
    ],
    'data-structures': [
      { id: 1, user: 'Jordan Lee', text: 'What\'s the time complexity of quicksort in worst case?', time: '9:15 AM' },
      { id: 2, user: 'Taylor Smith', text: 'O(n²) in worst case, but O(n log n) average case', time: '9:17 AM' },
      { id: 3, user: 'Casey Kim', text: 'And remember it\'s not stable but is in-place', time: '9:19 AM' }
    ],
    'physics1': [
      { id: 1, user: 'Riley Patel', text: 'Can someone explain Newton\'s Third Law?', time: '11:30 AM' },
      { id: 2, user: 'Morgan Zhao', text: 'For every action, there\'s an equal and opposite reaction', time: '11:32 AM' },
      { id: 3, user: 'Jamie Brown', text: 'Think of it like when you push against a wall, the wall pushes back with equal force', time: '11:33 AM' }
    ]
  };

  // Simulate joining a room
  const joinRoom = (roomId) => {
    setActiveRoom(roomId);
    setMessages(mockMessages[roomId] || []);
    // In a real app, you'd connect to a WebSocket or similar here
    const room = studyCategories
      .flatMap(cat => cat.rooms)
      .find(r => r.id === roomId);
    setOnlineUsers(room ? room.users : 0);
  };

  // Send a message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      user: 'You', // In real app, use actual username
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Auto-scroll to bottom
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Auto-scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="study-chat-page">
      <Navbar />
      
      <main className="study-chat-main">
        {/* Hero Section */}
        <section className="chat-hero">
          <div className="hero-content">
            <h1 className="hero-title">Study Together</h1>
            <p className="hero-subtitle">
              Collaborate with peers in real-time study sessions
            </p>
          </div>
        </section>

        {/* Main Chat Container */}
        <div className="chat-container">
          {/* Categories Sidebar */}
          <aside className="categories-sidebar">
            <div className="sidebar-header">
              <h3>Study Categories</h3>
              <div className="online-count">
                <span className="indicator"></span>
                {studyCategories.flatMap(cat => cat.rooms).reduce((sum, room) => sum + room.users, 0)} Online
              </div>
            </div>
            
            <ul className="category-list">
              {studyCategories.map(category => (
                <li 
                  key={category.id}
                  className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                  <span className="room-count">{category.rooms.length} rooms</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Rooms List */}
          <div className="rooms-list">
            <div className="rooms-header">
              <h3>
                {studyCategories.find(cat => cat.id === activeCategory)?.icon}
                {studyCategories.find(cat => cat.id === activeCategory)?.name} Rooms
              </h3>
              <button className="new-room-button">+ Create Room</button>
            </div>
            
            <div className="rooms-grid">
              {studyCategories
                .find(cat => cat.id === activeCategory)
                ?.rooms.map(room => (
                  <div 
                    key={room.id}
                    className={`room-card ${activeRoom === room.id ? 'active' : ''}`}
                    onClick={() => joinRoom(room.id)}
                  >
                    <div className="room-icon">
                      {studyCategories.find(cat => cat.id === activeCategory)?.icon}
                    </div>
                    <div className="room-info">
                      <h4>{room.name}</h4>
                      <div className="room-meta">
                        <span>{room.users} active</span>
                        <span className="dot">•</span>
                        <span>Study Group</span>
                      </div>
                    </div>
                    <div className="join-button">Join</div>
                  </div>
                ))}
            </div>
          </div>

          {/* Chat Area */}
          {activeRoom ? (
            <div className="chat-area">
              <div className="chat-header">
                <div className="room-title">
                  {
                    studyCategories
                      .flatMap(cat => cat.rooms)
                      .find(r => r.id === activeRoom)?.name
                  }
                </div>
                <div className="room-meta">
                  <span className="online-users">
                    <span className="indicator"></span>
                    {onlineUsers} online
                  </span>
                  <button className="leave-button">Leave Room</button>
                </div>
              </div>
              
              <div className="messages-container">
                {messages.length > 0 ? (
                  <>
                    {messages.map(msg => (
                      <div key={msg.id} className={`message ${msg.user === 'You' ? 'own-message' : ''}`}>
                        <div className="message-header">
                          <span className="user">{msg.user}</span>
                          <span className="time">{msg.time}</span>
                        </div>
                        <div className="message-text">{msg.text}</div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </>
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon">💬</div>
                    <h4>No messages yet</h4>
                    <p>Be the first to start the conversation!</p>
                  </div>
                )}
              </div>
              <form onSubmit={sendMessage} className="message-input">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                />
                <button type="submit" className="send-button">
                  <svg viewBox="0 0 24 24">
                    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </svg>
                </button>
              </form>
            </div>
          ) : (
            <div className="chat-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">👋</div>
                <h3>Select a study room</h3>
                <p>Choose from the available rooms to start collaborating with other students</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}