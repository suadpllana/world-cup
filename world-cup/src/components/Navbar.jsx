import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/news', label: 'News' },
  { path: '/teams', label: 'Teams' },
  { path: '/groups', label: 'Groups' },
  { path: '/fixtures', label: 'Fixtures' },
  { path: '/players', label: 'Players' },
  { path: '/stadiums', label: 'Stadiums' },
  { path: '/games', label: 'Games' },
  { path: '/chat', label: 'Chat' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Trophy size={28} />
          <div>
            <span className="brand-title">FIFA World Cup</span>
            <span className="brand-year">2026™</span>
          </div>
        </Link>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
