import { useState, useEffect } from 'react';
import { Shield, Lock, Unlock, Trash2, UserX, MessageSquare, ToggleLeft, ToggleRight, Eye, EyeOff, LogOut, Settings, Users, BarChart3, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

// ========== HARDCODED CREDENTIALS ==========
const ADMIN_USER = 'suad';
const ADMIN_PASS = 'wc2026admin';
// ============================================

const CHAT_ROOMS = ['general', 'predictions', 'matchday', 'memes'];

function loadAdminSettings() {
  try {
    return JSON.parse(localStorage.getItem('wc2026-admin-settings')) || {};
  } catch { return {}; }
}

function saveAdminSettings(settings) {
  localStorage.setItem('wc2026-admin-settings', JSON.stringify(settings));
}

function loadMessages(room) {
  try {
    return JSON.parse(localStorage.getItem(`wc2026-chat-${room}`)) || [];
  } catch { return []; }
}

function clearMessages(room) {
  localStorage.removeItem(`wc2026-chat-${room}`);
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState(0);

  const [settings, setSettings] = useState(loadAdminSettings);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [banInput, setBanInput] = useState('');
  const [announcement, setAnnouncement] = useState(settings.announcement || '');
  const [actionLog, setActionLog] = useState([]);

  // Check session
  useEffect(() => {
    const session = sessionStorage.getItem('wc2026-admin-session');
    if (session === 'active') setIsLoggedIn(true);
  }, []);

  // Lockout timer
  useEffect(() => {
    if (lockoutUntil > Date.now()) {
      const timer = setInterval(() => {
        if (Date.now() >= lockoutUntil) {
          setLockoutUntil(0);
          setLoginAttempts(0);
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [lockoutUntil]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (lockoutUntil > Date.now()) {
      const secs = Math.ceil((lockoutUntil - Date.now()) / 1000);
      setLoginError(`Too many attempts. Try again in ${secs}s.`);
      return;
    }

    if (loginUser === ADMIN_USER && loginPass === ADMIN_PASS) {
      setIsLoggedIn(true);
      sessionStorage.setItem('wc2026-admin-session', 'active');
      setLoginError('');
      setLoginAttempts(0);
      addLog('Logged in');
    } else {
      const attempts = loginAttempts + 1;
      setLoginAttempts(attempts);
      if (attempts >= 3) {
        setLockoutUntil(Date.now() + 30000); // 30 second lockout
        setLoginError('Too many failed attempts. Locked for 30 seconds.');
      } else {
        setLoginError(`Invalid credentials. ${3 - attempts} attempts remaining.`);
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('wc2026-admin-session');
    setLoginUser('');
    setLoginPass('');
  };

  const addLog = (action) => {
    setActionLog(prev => [{ action, time: new Date().toLocaleTimeString() }, ...prev].slice(0, 20));
  };

  const updateSetting = (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    saveAdminSettings(updated);
    addLog(`${key}: ${JSON.stringify(value)}`);
  };

  const toggleChat = () => {
    updateSetting('chatDisabled', !settings.chatDisabled);
  };

  const banUser = () => {
    if (!banInput.trim()) return;
    const current = settings.bannedUsers || [];
    const name = banInput.trim().toLowerCase();
    if (current.includes(name)) return;
    updateSetting('bannedUsers', [...current, name]);
    setBanInput('');
  };

  const unbanUser = (name) => {
    const current = settings.bannedUsers || [];
    updateSetting('bannedUsers', current.filter(u => u !== name));
  };

  const clearRoomMessages = (room) => {
    clearMessages(room);
    addLog(`Cleared messages in #${room}`);
  };

  const clearAllMessages = () => {
    CHAT_ROOMS.forEach(r => clearMessages(r));
    addLog('Cleared ALL chat messages');
  };

  const saveAnnouncement = () => {
    updateSetting('announcement', announcement);
  };

  const clearAnnouncement = () => {
    setAnnouncement('');
    updateSetting('announcement', '');
  };

  // --- Stats ---
  const totalMessages = CHAT_ROOMS.reduce((sum, r) => sum + loadMessages(r).length, 0);
  const roomStats = CHAT_ROOMS.map(r => ({ room: r, count: loadMessages(r).length }));
  const uniqueUsers = new Set();
  CHAT_ROOMS.forEach(r => loadMessages(r).forEach(m => uniqueUsers.add(m.username)));

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="admin-login-page">
        <SEO title="Admin Login" noIndex={true} />
        <div className="admin-login-card">
          <div className="admin-login-header">
            <Shield size={36} />
            <h1>Admin Panel</h1>
            <p>World Cup 2026 Management</p>
          </div>
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="admin-input-group">
              <label>Username</label>
              <input
                type="text"
                value={loginUser}
                onChange={e => { setLoginUser(e.target.value); setLoginError(''); }}
                placeholder="Enter admin username"
                autoFocus
                disabled={lockoutUntil > Date.now()}
              />
            </div>
            <div className="admin-input-group">
              <label>Password</label>
              <div className="admin-pass-wrap">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={loginPass}
                  onChange={e => { setLoginPass(e.target.value); setLoginError(''); }}
                  placeholder="Enter admin password"
                  disabled={lockoutUntil > Date.now()}
                />
                <button type="button" className="pass-toggle" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {loginError && (
              <div className="admin-login-error">
                <AlertTriangle size={14} /> {loginError}
              </div>
            )}
            <button type="submit" className="btn btn-primary admin-login-btn" disabled={lockoutUntil > Date.now()}>
              <Lock size={16} /> Sign In
            </button>
          </form>
          <p className="admin-login-hint">This area is restricted to authorized administrators only.</p>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="admin-page">
      <SEO title="Admin Dashboard" noIndex={true} />
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <Shield size={22} />
          <h1>Admin Panel</h1>
        </div>
        <button className="admin-logout-btn" onClick={handleLogout}>
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="admin-layout">
        {/* Sidebar nav */}
        <div className="admin-sidebar">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'chat', label: 'Chat Controls', icon: MessageSquare },
            { id: 'users', label: 'User Management', icon: Users },
            { id: 'settings', label: 'App Settings', icon: Settings },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`admin-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="admin-content">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="admin-section">
              <h2>Dashboard Overview</h2>
              <div className="admin-stats">
                <div className="admin-stat-card">
                  <MessageSquare size={24} />
                  <div>
                    <span className="admin-stat-num">{totalMessages}</span>
                    <span className="admin-stat-label">Total Messages</span>
                  </div>
                </div>
                <div className="admin-stat-card">
                  <Users size={24} />
                  <div>
                    <span className="admin-stat-num">{uniqueUsers.size}</span>
                    <span className="admin-stat-label">Unique Users</span>
                  </div>
                </div>
                <div className="admin-stat-card">
                  <UserX size={24} />
                  <div>
                    <span className="admin-stat-num">{(settings.bannedUsers || []).length}</span>
                    <span className="admin-stat-label">Banned Users</span>
                  </div>
                </div>
                <div className="admin-stat-card">
                  <Shield size={24} />
                  <div>
                    <span className="admin-stat-num">{settings.chatDisabled ? 'OFF' : 'ON'}</span>
                    <span className="admin-stat-label">Chat Status</span>
                  </div>
                </div>
              </div>

              <h3>Messages per Room</h3>
              <div className="admin-room-stats">
                {roomStats.map(r => (
                  <div key={r.room} className="admin-room-row">
                    <span className="admin-room-name">#{r.room}</span>
                    <div className="admin-room-bar-wrap">
                      <div className="admin-room-bar" style={{ width: `${totalMessages ? (r.count / totalMessages) * 100 : 0}%` }}></div>
                    </div>
                    <span className="admin-room-count">{r.count}</span>
                  </div>
                ))}
              </div>

              <h3>Recent Actions</h3>
              {actionLog.length === 0 ? (
                <p className="admin-muted">No actions recorded this session.</p>
              ) : (
                <div className="admin-log">
                  {actionLog.map((log, i) => (
                    <div key={i} className="admin-log-row">
                      <span className="admin-log-time">{log.time}</span>
                      <span className="admin-log-action">{log.action}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chat Controls */}
          {activeTab === 'chat' && (
            <div className="admin-section">
              <h2>Chat Controls</h2>

              <div className="admin-control-row">
                <div>
                  <h4>Enable / Disable Chat</h4>
                  <p>When disabled, no users can send messages.</p>
                </div>
                <button className={`admin-toggle ${settings.chatDisabled ? 'off' : 'on'}`} onClick={toggleChat}>
                  {settings.chatDisabled ? <><ToggleLeft size={24} /> Disabled</> : <><ToggleRight size={24} /> Enabled</>}
                </button>
              </div>

              <div className="admin-control-row">
                <div>
                  <h4>Clear Messages</h4>
                  <p>Delete all messages in a specific room or all rooms.</p>
                </div>
              </div>
              <div className="admin-clear-buttons">
                {CHAT_ROOMS.map(r => (
                  <button key={r} className="admin-clear-btn" onClick={() => clearRoomMessages(r)}>
                    <Trash2 size={14} /> #{r} ({loadMessages(r).length})
                  </button>
                ))}
                <button className="admin-clear-btn danger" onClick={clearAllMessages}>
                  <Trash2 size={14} /> Clear ALL
                </button>
              </div>

              <div className="admin-control-row" style={{ marginTop: '1.5rem' }}>
                <div>
                  <h4>Announcement Banner</h4>
                  <p>Show an announcement message across the app (optional).</p>
                </div>
              </div>
              <div className="admin-announce-wrap">
                <input
                  type="text"
                  value={announcement}
                  onChange={e => setAnnouncement(e.target.value)}
                  placeholder="Write an announcement..."
                  maxLength={200}
                />
                <button className="btn btn-primary" onClick={saveAnnouncement} style={{ borderRadius: '8px', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  Save
                </button>
                {settings.announcement && (
                  <button className="admin-clear-btn" onClick={clearAnnouncement}>
                    <Trash2 size={14} /> Clear
                  </button>
                )}
              </div>
              {settings.announcement && (
                <div className="admin-preview-announce">
                  <strong>Preview:</strong> {settings.announcement}
                </div>
              )}
            </div>
          )}

          {/* User Management */}
          {activeTab === 'users' && (
            <div className="admin-section">
              <h2>User Management</h2>

              <div className="admin-control-row">
                <div>
                  <h4>Ban a User</h4>
                  <p>Banned users cannot send messages in any room.</p>
                </div>
              </div>
              <div className="admin-ban-form">
                <input
                  type="text"
                  value={banInput}
                  onChange={e => setBanInput(e.target.value)}
                  placeholder="Username to ban..."
                />
                <button className="btn btn-primary" onClick={banUser} style={{ borderRadius: '8px', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  <UserX size={14} /> Ban
                </button>
              </div>

              <h3>Banned Users ({(settings.bannedUsers || []).length})</h3>
              {(settings.bannedUsers || []).length === 0 ? (
                <p className="admin-muted">No banned users.</p>
              ) : (
                <div className="admin-banned-list">
                  {(settings.bannedUsers || []).map(user => (
                    <div key={user} className="admin-banned-row">
                      <span className="admin-banned-name">{user}</span>
                      <button className="admin-unban-btn" onClick={() => unbanUser(user)}>
                        <Unlock size={14} /> Unban
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <h3 style={{ marginTop: '2rem' }}>Active Chat Users</h3>
              <div className="admin-user-list">
                {[...uniqueUsers].map(user => (
                  <div key={user} className="admin-user-row">
                    <span>{user}</span>
                    <span className="admin-user-msgs">
                      {CHAT_ROOMS.reduce((sum, r) => sum + loadMessages(r).filter(m => m.username === user).length, 0)} msgs
                    </span>
                    {!(settings.bannedUsers || []).includes(user.toLowerCase()) && (
                      <button className="admin-ban-quick" onClick={() => { setBanInput(user); banUser(); updateSetting('bannedUsers', [...(settings.bannedUsers || []), user.toLowerCase()]); }}>
                        Ban
                      </button>
                    )}
                  </div>
                ))}
                {uniqueUsers.size === 0 && <p className="admin-muted">No users have chatted yet.</p>}
              </div>
            </div>
          )}

          {/* App Settings */}
          {activeTab === 'settings' && (
            <div className="admin-section">
              <h2>App Settings</h2>

              <div className="admin-control-row">
                <div>
                  <h4>Chat Configuration</h4>
                  <p>Current anti-spam settings (hardcoded):</p>
                </div>
              </div>
              <div className="admin-settings-list">
                <div className="admin-setting-item">
                  <span>Message cooldown</span>
                  <span className="admin-setting-val">3 seconds</span>
                </div>
                <div className="admin-setting-item">
                  <span>Max messages per minute</span>
                  <span className="admin-setting-val">8</span>
                </div>
                <div className="admin-setting-item">
                  <span>Max message length</span>
                  <span className="admin-setting-val">500 chars</span>
                </div>
                <div className="admin-setting-item">
                  <span>Min message length</span>
                  <span className="admin-setting-val">2 chars</span>
                </div>
                <div className="admin-setting-item">
                  <span>Max stored messages/room</span>
                  <span className="admin-setting-val">200</span>
                </div>
                <div className="admin-setting-item">
                  <span>All-caps detection</span>
                  <span className="admin-setting-val">Enabled (&gt;10 chars)</span>
                </div>
                <div className="admin-setting-item">
                  <span>Repeated char filter</span>
                  <span className="admin-setting-val">7+ consecutive</span>
                </div>
                <div className="admin-setting-item">
                  <span>Duplicate message check</span>
                  <span className="admin-setting-val">Last 3 messages</span>
                </div>
              </div>

              <div className="admin-control-row" style={{ marginTop: '2rem' }}>
                <div>
                  <h4>Reset All App Data</h4>
                  <p>This will clear all chat messages, banned users, and other stored data.</p>
                </div>
                <button className="admin-clear-btn danger" onClick={() => {
                  CHAT_ROOMS.forEach(r => clearMessages(r));
                  localStorage.removeItem('wc2026-admin-settings');
                  localStorage.removeItem('wc2026-bracket');
                  setSettings({});
                  addLog('Reset all app data');
                }}>
                  <Trash2 size={14} /> Reset Everything
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
