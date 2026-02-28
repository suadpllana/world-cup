import { useState, useEffect, useRef } from 'react';
import { Send, User, Shield, AlertTriangle, MessageCircle, Users, Smile, Hash } from 'lucide-react';
import SEO from '../components/SEO';

// ---- Anti-spam & validation config ----
const MAX_MSG_LENGTH = 500;
const MIN_MSG_LENGTH = 2;
const COOLDOWN_MS = 3000; // 3 seconds between messages
const MAX_MESSAGES_PER_MIN = 8;
const MAX_STORED_MESSAGES = 200;
const USERNAME_MIN = 2;
const USERNAME_MAX = 20;

const BANNED_WORDS = ['spam', 'scam', 'hack', 'cheat'];

const CHAT_ROOMS = [
  { id: 'general', label: 'General', icon: '💬' },
  { id: 'predictions', label: 'Predictions', icon: '🔮' },
  { id: 'matchday', label: 'Match Day', icon: '⚽' },
  { id: 'memes', label: 'Memes & Fun', icon: '😂' },
];

// Generate badge colors from username
function getUserColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const colors = ['#8B1538', '#1A2744', '#D4A843', '#27ae60', '#2980b9', '#8e44ad', '#d35400', '#16a085', '#c0392b', '#2c3e50'];
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// Load/save helpers
function loadMessages(room) {
  try {
    return JSON.parse(localStorage.getItem(`wc2026-chat-${room}`)) || [];
  } catch { return []; }
}

function saveMessages(room, msgs) {
  localStorage.setItem(`wc2026-chat-${room}`, JSON.stringify(msgs.slice(-MAX_STORED_MESSAGES)));
}

function loadUsername() {
  return localStorage.getItem('wc2026-chat-username') || '';
}

function loadAdminSettings() {
  try {
    return JSON.parse(localStorage.getItem('wc2026-admin-settings')) || {};
  } catch { return {}; }
}

export default function Chat() {
  const [username, setUsername] = useState(loadUsername);
  const [usernameInput, setUsernameInput] = useState('');
  const [activeRoom, setActiveRoom] = useState('general');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [lastSentTime, setLastSentTime] = useState(0);
  const [recentCount, setRecentCount] = useState(0);
  const [recentWindow, setRecentWindow] = useState(Date.now());
  const [showRules, setShowRules] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Load messages for active room
  useEffect(() => {
    setMessages(loadMessages(activeRoom));
  }, [activeRoom]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Poll for new messages (simulate "live" by re-reading localStorage)
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(loadMessages(activeRoom));
    }, 2000);
    return () => clearInterval(interval);
  }, [activeRoom]);

  // Check admin settings
  const adminSettings = loadAdminSettings();
  const chatDisabled = adminSettings.chatDisabled === true;
  const bannedUsers = adminSettings.bannedUsers || [];
  const isBanned = bannedUsers.includes(username.toLowerCase());

  // --- Validation ---
  const validateMessage = (text) => {
    if (!text.trim()) return 'Message cannot be empty.';
    if (text.trim().length < MIN_MSG_LENGTH) return `Message must be at least ${MIN_MSG_LENGTH} characters.`;
    if (text.length > MAX_MSG_LENGTH) return `Message is too long (max ${MAX_MSG_LENGTH} chars).`;

    // Cooldown check
    const now = Date.now();
    if (now - lastSentTime < COOLDOWN_MS) {
      const wait = Math.ceil((COOLDOWN_MS - (now - lastSentTime)) / 1000);
      return `Please wait ${wait}s before sending another message.`;
    }

    // Rate limit
    if (now - recentWindow > 60000) {
      setRecentCount(0);
      setRecentWindow(now);
    }
    if (recentCount >= MAX_MESSAGES_PER_MIN) return `Too many messages! Max ${MAX_MESSAGES_PER_MIN} per minute.`;

    // Duplicate check (last 3 messages from this user)
    const userMsgs = messages.filter(m => m.username === username).slice(-3);
    if (userMsgs.some(m => m.text.toLowerCase() === text.trim().toLowerCase())) {
      return 'Please don\'t send duplicate messages.';
    }

    // Banned words
    const lower = text.toLowerCase();
    for (const word of BANNED_WORDS) {
      if (lower.includes(word)) return 'Your message contains prohibited content.';
    }

    // All caps spam
    const letters = text.replace(/[^a-zA-Z]/g, '');
    if (letters.length > 10 && letters === letters.toUpperCase()) {
      return 'Please don\'t write in all caps.';
    }

    // Repeated chars (e.g. "aaaaaaa")
    if (/(.)\1{6,}/.test(text)) return 'Please don\'t spam repeated characters.';

    return null;
  };

  const validateUsername = (name) => {
    if (!name.trim()) return 'Username is required.';
    if (name.trim().length < USERNAME_MIN) return `Username must be at least ${USERNAME_MIN} characters.`;
    if (name.trim().length > USERNAME_MAX) return `Username is too long (max ${USERNAME_MAX} chars).`;
    if (!/^[a-zA-Z0-9_\- ]+$/.test(name.trim())) return 'Username can only contain letters, numbers, spaces, hyphens, and underscores.';
    return null;
  };

  const handleSetUsername = (e) => {
    e.preventDefault();
    const err = validateUsername(usernameInput);
    if (err) { setError(err); return; }
    const name = usernameInput.trim();
    setUsername(name);
    localStorage.setItem('wc2026-chat-username', name);
    setError('');
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (chatDisabled) { setError('Chat is currently disabled by admin.'); return; }
    if (isBanned) { setError('You have been banned from chat.'); return; }

    const err = validateMessage(input);
    if (err) { setError(err); setTimeout(() => setError(''), 4000); return; }

    const newMsg = {
      id: Date.now() + Math.random(),
      username,
      text: input.trim(),
      timestamp: Date.now(),
      color: getUserColor(username),
      room: activeRoom,
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    saveMessages(activeRoom, updated);
    setInput('');
    setError('');
    setLastSentTime(Date.now());
    setRecentCount(prev => prev + 1);
    inputRef.current?.focus();
  };

  const changeRoom = (roomId) => {
    setActiveRoom(roomId);
    setInput('');
    setError('');
  };

  const formatTime = (ts) => {
    const d = new Date(ts);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (ts) => {
    const d = new Date(ts);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) return 'Today';
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Group messages by day
  const groupedMessages = messages.reduce((acc, msg) => {
    const dateKey = formatDate(msg.timestamp);
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(msg);
    return acc;
  }, {});

  // Username setup screen
  if (!username) {
    return (
      <div className="page">
        <SEO
          title="Community Chat — Talk with World Cup Fans"
          description="Join the FIFA World Cup 2026 community chat. Discuss matches, share predictions, and connect with football fans worldwide in real-time chat rooms."
          keywords="World Cup chat, football community, fan discussion, World Cup 2026 forum, match discussion"
        />
        <div className="chat-setup">
          <div className="chat-setup-icon"><MessageCircle size={48} /></div>
          <h1>Community Chat</h1>
          <p>Join the conversation with World Cup fans around the globe!</p>
          <form onSubmit={handleSetUsername} className="chat-setup-form">
            <div className="chat-setup-input-wrap">
              <User size={18} />
              <input
                type="text"
                placeholder="Choose a username..."
                value={usernameInput}
                onChange={e => { setUsernameInput(e.target.value); setError(''); }}
                maxLength={USERNAME_MAX}
                autoFocus
              />
            </div>
            {error && <div className="chat-error"><AlertTriangle size={14} /> {error}</div>}
            <button type="submit" className="btn btn-primary">Join Chat</button>
          </form>
          <div className="chat-rules-preview">
            <Shield size={16} />
            <span>Be respectful · No spamming · No offensive content · Have fun!</span>
          </div>
        </div>
      </div>
    );
  }

  const currentRoom = CHAT_ROOMS.find(r => r.id === activeRoom);

  return (
    <div className="page chat-page">
      <SEO
        title="Community Chat — Talk with World Cup Fans"
        description="Join the FIFA World Cup 2026 community chat. Discuss matches, share predictions, and connect with football fans worldwide in real-time chat rooms."
        keywords="World Cup chat, football community, fan discussion, World Cup 2026 forum"
      />
      <div className="chat-layout">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <MessageCircle size={20} />
            <span>Chat Rooms</span>
          </div>
          <div className="chat-rooms-list">
            {CHAT_ROOMS.map(room => (
              <button
                key={room.id}
                className={`chat-room-btn ${activeRoom === room.id ? 'active' : ''}`}
                onClick={() => changeRoom(room.id)}
              >
                <span className="room-icon">{room.icon}</span>
                <span className="room-label">{room.label}</span>
                {loadMessages(room.id).length > 0 && (
                  <span className="room-count">{loadMessages(room.id).length}</span>
                )}
              </button>
            ))}
          </div>
          <div className="chat-sidebar-user">
            <div className="chat-user-avatar" style={{ background: getUserColor(username) }}>
              {getInitials(username)}
            </div>
            <div className="chat-user-info">
              <span className="chat-user-name">{username}</span>
              <button className="chat-change-user" onClick={() => { setUsername(''); localStorage.removeItem('wc2026-chat-username'); }}>
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Main Chat */}
        <div className="chat-main">
          <div className="chat-main-header">
            <div className="chat-room-title">
              <span className="room-icon-lg">{currentRoom?.icon}</span>
              <div>
                <h2>{currentRoom?.label}</h2>
                <span className="chat-online"><Users size={13} /> {Math.floor(Math.random() * 50 + 15)} fans online</span>
              </div>
            </div>
            <button className="chat-rules-btn" onClick={() => setShowRules(!showRules)}>
              <Shield size={16} /> Rules
            </button>
          </div>

          {/* Rules banner */}
          {showRules && (
            <div className="chat-rules-banner">
              <h4><Shield size={16} /> Community Rules</h4>
              <ul>
                <li>Be respectful and kind to all users</li>
                <li>No spamming or flooding messages (max {MAX_MESSAGES_PER_MIN}/minute, {Math.round(COOLDOWN_MS / 1000)}s cooldown)</li>
                <li>No all-caps messages or repeated characters</li>
                <li>No duplicate messages in a row</li>
                <li>No offensive, hateful, or inappropriate content</li>
                <li>Keep messages under {MAX_MSG_LENGTH} characters</li>
                <li>Admins may ban or mute users who violate rules</li>
              </ul>
              <button className="chat-rules-close" onClick={() => setShowRules(false)}>Got it</button>
            </div>
          )}

          {chatDisabled && (
            <div className="chat-disabled-banner">
              <AlertTriangle size={18} />
              <span>Chat is currently disabled by a moderator. Please check back later.</span>
            </div>
          )}

          {isBanned && (
            <div className="chat-disabled-banner banned">
              <AlertTriangle size={18} />
              <span>You have been banned from chat. Contact an admin if you believe this is a mistake.</span>
            </div>
          )}

          {/* Messages */}
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-empty">
                <Smile size={32} />
                <p>No messages yet. Be the first to say something!</p>
              </div>
            )}
            {Object.entries(groupedMessages).map(([date, msgs]) => (
              <div key={date}>
                <div className="chat-date-divider">
                  <span>{date}</span>
                </div>
                {msgs.map((msg, i) => {
                  const isMe = msg.username === username;
                  const showAvatar = i === 0 || msgs[i - 1].username !== msg.username;
                  return (
                    <div key={msg.id} className={`chat-message ${isMe ? 'mine' : ''} ${!showAvatar ? 'continued' : ''}`}>
                      {showAvatar && !isMe && (
                        <div className="chat-msg-avatar" style={{ background: msg.color || getUserColor(msg.username) }}>
                          {getInitials(msg.username)}
                        </div>
                      )}
                      <div className="chat-msg-content">
                        {showAvatar && (
                          <div className="chat-msg-header">
                            <span className="chat-msg-user" style={{ color: msg.color || getUserColor(msg.username) }}>{msg.username}</span>
                            <span className="chat-msg-time">{formatTime(msg.timestamp)}</span>
                          </div>
                        )}
                        <div className="chat-msg-bubble">
                          <p>{msg.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chat-input-area" onSubmit={handleSend}>
            {error && <div className="chat-input-error"><AlertTriangle size={13} /> {error}</div>}
            <div className="chat-input-wrap">
              <input
                ref={inputRef}
                type="text"
                placeholder={chatDisabled ? 'Chat is disabled...' : isBanned ? 'You are banned...' : `Message #${activeRoom}...`}
                value={input}
                onChange={e => setInput(e.target.value)}
                maxLength={MAX_MSG_LENGTH}
                disabled={chatDisabled || isBanned}
                autoFocus
              />
              <span className="chat-char-count">{input.length}/{MAX_MSG_LENGTH}</span>
              <button type="submit" className="chat-send-btn" disabled={chatDisabled || isBanned || !input.trim()}>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
