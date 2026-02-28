import { useState } from 'react';
import { MapPin, Users, Calendar, Landmark } from 'lucide-react';
import stadiums from '../data/stadiums';
import SEO from '../components/SEO';

const countries = ['All', 'USA', 'Mexico', 'Canada'];

export default function Stadiums() {
  const [countryFilter, setCountryFilter] = useState('All');

  const filtered = countryFilter === 'All'
    ? stadiums
    : stadiums.filter(s => s.country === countryFilter);

  return (
    <div className="page">
      <SEO
        title="Stadiums & Venues — 16 Host Cities in USA, Mexico & Canada"
        description="Explore all 16 FIFA World Cup 2026 stadiums across the USA, Mexico and Canada. Capacity, location, features and match assignments for every venue — from MetLife Stadium to Estadio Azteca."
        keywords="World Cup 2026 stadiums, venues, MetLife Stadium, Estadio Azteca, SoFi Stadium, host cities, World Cup venues, football stadiums"
      />
      <div className="page-header">
        <h1>🏟️ Stadiums & Venues</h1>
        <p>16 world-class stadiums across 3 nations hosting FIFA World Cup 2026</p>
      </div>

      <div className="filter-bar">
        {countries.map(c => (
          <button
            key={c}
            className={`filter-btn ${countryFilter === c ? 'active' : ''}`}
            onClick={() => setCountryFilter(c)}
          >
            {c === 'All' ? 'All Countries' : c}
          </button>
        ))}
      </div>

      <div className="stadiums-grid">
        {filtered.map(stadium => (
          <div key={stadium.id} className="stadium-card">
            <div className="stadium-card-image">
              <div className="stadium-country-badge">
                {stadium.flag} {stadium.country}
              </div>
            </div>
            <div className="stadium-card-body">
              <h3>{stadium.name}</h3>
              <div className="stadium-details">
                <div className="stadium-detail">
                  <MapPin size={16} />
                  <span>{stadium.city}</span>
                </div>
                <div className="stadium-detail">
                  <Users size={16} />
                  <span>{stadium.capacity.toLocaleString()} capacity</span>
                </div>
                <div className="stadium-detail">
                  <Calendar size={16} />
                  <span>Built {stadium.yearBuilt}</span>
                </div>
                <div className="stadium-detail">
                  <Landmark size={16} />
                  <span>{stadium.surface}</span>
                </div>
              </div>
              <p className="stadium-desc">{stadium.description}</p>
              <div className="stadium-matches">
                <span className="matches-label">Hosting:</span>
                <div className="match-tags">
                  {stadium.matches.map(m => (
                    <span key={m} className="match-tag">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
