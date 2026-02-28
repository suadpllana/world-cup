import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Trophy size={24} />
            <span>FIFA World Cup 2026™</span>
          </div>
          <div className="footer-links">
            <Link to="/teams">Teams</Link>
            <Link to="/fixtures">Fixtures</Link>
            <Link to="/stadiums">Stadiums</Link>
            <Link to="/players">Players</Link>
            <Link to="/news">News</Link>
          </div>
          <div className="footer-hosts">
            <span>Host Nations</span>
            <div className="host-flags">
              <span title="United States">🇺🇸</span>
              <span title="Mexico">🇲🇽</span>
              <span title="Canada">🇨🇦</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FIFA World Cup. This is a fan-made project for informational purposes.</p>
          <p>June 11 – July 19, 2026 | United States, Mexico & Canada</p>
        </div>
      </div>
    </footer>
  );
}
