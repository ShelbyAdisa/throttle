import React, { useState } from 'react';
import { User, Mail, Lock, Truck, Package, MapPin, Trophy, Settings, LogOut } from 'lucide-react';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('auth'); // 'auth' or 'main'
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Mock user data storage (in a real app, this would be handled by backend)
  const [users, setUsers] = useState([
    { id: 1, username: 'demo', email: 'demo@example.com', password: 'demo123', level: 5, deliveries: 47 }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(u => 
      u.username === formData.username && u.password === formData.password
    );
    
    if (foundUser) {
      setUser(foundUser);
      setCurrentView('main');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    } else {
      alert('Invalid credentials! Try demo/demo123');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (users.find(u => u.username === formData.username)) {
      alert('Username already exists!');
      return;
    }
    
    const newUser = {
      id: users.length + 1,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      level: 1,
      deliveries: 0
    };
    
    setUsers([...users, newUser]);
    setUser(newUser);
    setCurrentView('main');
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('auth');
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  const startGame = () => {
    alert('Starting delivery simulator... (will insert game here)');
  };

  if (currentView === 'auth') {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <div className="logo-background">
                <Truck className="logo-icon" />
              </div>
            </div>
            <h1 className="auth-title">Delivery Simulator</h1>
            <p className="auth-subtitle">Master the art of delivery</p>
          </div>

          <div className="auth-tabs">
            <button
              onClick={() => setAuthMode('login')}
              className={`auth-tab ${authMode === 'login' ? 'auth-tab-active' : ''}`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode('register')}
              className={`auth-tab ${authMode === 'register' ? 'auth-tab-active' : ''}`}
            >
              Register
            </button>
          </div>

          <div className="auth-form">
            <div className="input-group">
              <User className="input-icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="auth-input"
                required
              />
            </div>

            {authMode === 'register' && (
              <div className="input-group">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="auth-input"
                  required
                />
              </div>
            )}

            <div className="input-group">
              <Lock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="auth-input"
                required
              />
            </div>

            {authMode === 'register' && (
              <div className="input-group">
                <Lock className="input-icon" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="auth-input"
                  required
                />
              </div>
            )}

            <button
              onClick={authMode === 'login' ? handleLogin : handleRegister}
              className="auth-button"
            >
              {authMode === 'login' ? 'Login' : 'Create Account'}
            </button>
          </div>

          {authMode === 'login' && (
            <div className="demo-info">
              <p className="demo-text">
                Demo account: <span className="demo-credentials">demo / demo123</span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo">
              <Truck className="header-icon" />
            </div>
            <h1 className="header-title">Delivery Central</h1>
          </div>
          
          <div className="header-right">
            <div className="user-info">
              <p className="user-name">{user.username}</p>
              <p className="user-stats">Level {user.level} • {user.deliveries} deliveries</p>
            </div>
            <button
              onClick={handleLogout}
              className="logout-button"
            >
              <LogOut className="logout-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-grid">
          {/* Game Actions */}
          <div className="main-section">
            <div className="card">
              <h2 className="card-title">Quick Actions</h2>
              <div className="actions-grid">
                <button
                  onClick={startGame}
                  className="action-button action-button-green"
                >
                  <Package className="action-icon" />
                  <span>Start New Delivery</span>
                </button>
                
                <button className="action-button action-button-blue">
                  <MapPin className="action-icon" />
                  <span>View Map</span>
                </button>
                
                <button className="action-button action-button-purple">
                  <Trophy className="action-icon" />
                  <span>Achievements</span>
                </button>
                
                <button className="action-button action-button-gray">
                  <Settings className="action-icon" />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            {/* Game Stats */}
            <div className="card">
              <h2 className="card-title">Your Stats</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon stat-icon-orange">
                    <Package className="stat-icon-svg" />
                  </div>
                  <p className="stat-number">{user.deliveries}</p>
                  <p className="stat-label">Total Deliveries</p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon stat-icon-green">
                    <Trophy className="stat-icon-svg" />
                  </div>
                  <p className="stat-number">{user.level}</p>
                  <p className="stat-label">Current Level</p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon stat-icon-blue">
                    <MapPin className="stat-icon-svg" />
                  </div>
                  <p className="stat-number">12</p>
                  <p className="stat-label">Cities Unlocked</p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon stat-icon-purple">
                    <Truck className="stat-icon-svg" />
                  </div>
                  <p className="stat-number">3</p>
                  <p className="stat-label">Vehicles Owned</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Recent Activity */}
            <div className="card">
              <h3 className="sidebar-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-dot activity-dot-green"></div>
                  <div className="activity-content">
                    <p className="activity-text">Delivered package to Downtown</p>
                    <p className="activity-time">2 hours ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot activity-dot-blue"></div>
                  <div className="activity-content">
                    <p className="activity-text">Unlocked new vehicle</p>
                    <p className="activity-time">1 day ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot activity-dot-purple"></div>
                  <div className="activity-content">
                    <p className="activity-text">Reached Level {user.level}</p>
                    <p className="activity-time">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Challenges */}
            <div className="card">
              <h3 className="sidebar-title">Daily Challenges</h3>
              <div className="challenges-list">
                <div className="challenge-item challenge-item-yellow">
                  <p className="challenge-title">Speed Demon</p>
                  <p className="challenge-description">Complete 5 deliveries in under 30 minutes</p>
                  <div className="challenge-progress">
                    <div className="challenge-progress-bar challenge-progress-yellow" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div className="challenge-item challenge-item-blue">
                  <p className="challenge-title">Distance Master</p>
                  <p className="challenge-description">Travel 100km in total today</p>
                  <div className="challenge-progress">
                    <div className="challenge-progress-bar challenge-progress-blue" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;