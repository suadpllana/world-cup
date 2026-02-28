import { useState } from 'react';
import { Search, Star } from 'lucide-react';
import players from '../data/players';
import teams from '../data/teams';
import SEO from '../components/SEO';

const positions = ['All', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

export default function Players() {
  const [search, setSearch] = useState('');
  const [posFilter, setPosFilter] = useState('All');
  const [showStarsOnly, setShowStarsOnly] = useState(false);

  const filtered = players.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.team.toLowerCase().includes(search.toLowerCase()) ||
      p.club.toLowerCase().includes(search.toLowerCase());
    const matchPos = posFilter === 'All' || p.position === posFilter;
    const matchStar = !showStarsOnly || p.isStar;
    return matchSearch && matchPos && matchStar;
  });

  const getTeamFlag = (teamId) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.flag : '';
  };

  return (
    <div className="page">
      <SEO
        title="Star Players — Top Footballers at World Cup 2026"
        description="Discover the top players competing at FIFA World Cup 2026. Browse forwards, midfielders, defenders and goalkeepers from all 48 nations — stats, clubs and profiles."
        keywords="World Cup 2026 players, star players, top footballers, Mbappe, Messi, Haaland, Bellingham, World Cup stars, football players"
      />
      <div className="page-header">
        <h1>⚽ Star Players</h1>
        <p>Meet the stars who will light up the FIFA World Cup 2026</p>
      </div>

      <div className="players-filters">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search players, teams, or clubs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-bar">
          {positions.map(pos => (
            <button
              key={pos}
              className={`filter-btn ${posFilter === pos ? 'active' : ''}`}
              onClick={() => setPosFilter(pos)}
            >
              {pos}
            </button>
          ))}
          <button
            className={`filter-btn star-filter ${showStarsOnly ? 'active' : ''}`}
            onClick={() => setShowStarsOnly(!showStarsOnly)}
          >
            <Star size={14} /> Stars Only
          </button>
        </div>
      </div>

      <div className="players-list">
        {filtered.map(player => (
          <div key={player.id} className="player-card">
            <div className="player-card-left">
              <div className="player-avatar">
                <span className="player-number-lg">#{player.number}</span>
              </div>
              <div className="player-main-info">
                <h3>
                  {player.name}
                  {player.isCaptain && <span className="captain-badge">C</span>}
                  {player.isStar && <Star size={14} className="star-icon" />}
                </h3>
                <div className="player-team-info">
                  <span className="team-flag-sm">{getTeamFlag(player.teamId)}</span>
                  <span>{player.team}</span>
                </div>
                <span className="player-club">{player.club}</span>
              </div>
            </div>
            <div className="player-card-right">
              <div className="player-stat">
                <span className="stat-value">{player.position}</span>
                <span className="stat-label">Position</span>
              </div>
              <div className="player-stat">
                <span className="stat-value">{player.caps}</span>
                <span className="stat-label">Caps</span>
              </div>
              <div className="player-stat">
                <span className="stat-value">{player.goals}</span>
                <span className="stat-label">Goals</span>
              </div>
              <div className="player-stat">
                <span className="stat-value">{player.age}</span>
                <span className="stat-label">Age</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No players found matching your search.</p>
        </div>
      )}
    </div>
  );
}
