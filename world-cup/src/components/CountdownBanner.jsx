import { Link } from 'react-router-dom';

export default function CountdownBanner() {
  const targetDate = new Date('2026-06-11T20:00:00-04:00');
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));

  return (
    <section className="countdown-banner">
      <div className="countdown-content">
        <h2 className="countdown-label">Countdown to Kick-off</h2>
        <div className="countdown-timer">
          <div className="countdown-unit">
            <span className="countdown-number">{days}</span>
            <span className="countdown-text">Days</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-text">Hours</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-text">Minutes</span>
          </div>
        </div>
        <p className="countdown-date">June 11 – July 19, 2026</p>
        <div className="countdown-hosts">
          <span>🇺🇸 United States</span>
          <span>🇲🇽 Mexico</span>
          <span>🇨🇦 Canada</span>
        </div>
      </div>
    </section>
  );
}
