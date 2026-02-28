import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import teams from '../data/teams';
import SEO from '../components/SEO';

const confederations = ['All', 'UEFA', 'CONMEBOL', 'CONCACAF', 'AFC', 'CAF', 'OFC'];

export default function Teams() {
  const [search, setSearch] = useState('');
  const [confFilter, setConfFilter] = useState('All');

  const filtered = teams.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.code.toLowerCase().includes(search.toLowerCase());
    const matchConf = confFilter === 'All' || t.confederation === confFilter;
    return matchSearch && matchConf;
  });

  return (
    <div className="page">
      <SEO
        title="All 48 Teams — Confederations, Rankings & Squads"
        description="Explore all 48 national teams competing in the FIFA World Cup 2026. Browse by confederation — UEFA, CONMEBOL, CONCACAF, AFC, CAF, OFC — with FIFA rankings, coaches, and squad details."
        keywords="World Cup 2026 teams, qualified teams, FIFA rankings, UEFA, CONMEBOL, CONCACAF, AFC, CAF, football nations"
      />
      <div className="page-header">
        <h1>🌍 All 48 Teams</h1>
        <p>Explore every nation competing in the FIFA World Cup 2026</p>
      </div>

      <div className="teams-filters">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search teams..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-bar">
          {confederations.map(conf => (
            <button
              key={conf}
              className={`filter-btn ${confFilter === conf ? 'active' : ''}`}
              onClick={() => setConfFilter(conf)}
            >
              {conf}
            </button>
          ))}
        </div>
      </div>

      <div className="teams-grid">
        {filtered.map(team => (
          <Link to={`/teams/${team.id}`} key={team.id} className="team-card">
            <div className="team-card-flag">{team.flag}</div>
            <div className="team-card-info">
              <h3>{team.name}</h3>
              <span className="team-conf">{team.confederation}</span>
              <div className="team-card-details">
                <span>Group {team.group}</span>
                <span>Rank #{team.fifaRanking}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No teams found matching your search.</p>
        </div>
      )}
    </div>
  );
}
