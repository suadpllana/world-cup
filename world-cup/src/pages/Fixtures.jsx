import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import fixtures from '../data/fixtures';
import SEO from '../components/SEO';

const stages = ['All', 'Group Stage', 'Round of 32', 'Round of 16', 'Quarter-final', 'Semi-final', 'Final'];
const allGroups = ['All Groups', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export default function Fixtures() {
  const [stageFilter, setStageFilter] = useState('All');
  const [groupFilter, setGroupFilter] = useState('All Groups');

  const filtered = fixtures.filter(f => {
    const matchStage = stageFilter === 'All' || f.stage === stageFilter;
    const matchGroup = groupFilter === 'All Groups' || f.group === groupFilter;
    return matchStage && matchGroup;
  });

  // Group by date
  const grouped = filtered.reduce((acc, match) => {
    const dateStr = new Date(match.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    if (!acc[dateStr]) acc[dateStr] = [];
    acc[dateStr].push(match);
    return acc;
  }, {});

  return (
    <div className="page">
      <SEO
        title="Match Schedule & Fixtures — All 104 Games"
        description="Complete FIFA World Cup 2026 match schedule. Browse all group stage, Round of 32, Round of 16, quarter-final, semi-final and final fixtures with dates, kick-off times, stadiums and venues."
        keywords="World Cup 2026 schedule, match fixtures, World Cup calendar, football schedule, game times, kick-off times, World Cup matches"
      />
      <div className="page-header">
        <h1>📅 Match Schedule</h1>
        <p>Complete fixture list for FIFA World Cup 2026</p>
      </div>

      <div className="fixtures-filters">
        <div className="filter-bar">
          {stages.map(s => (
            <button
              key={s}
              className={`filter-btn ${stageFilter === s ? 'active' : ''}`}
              onClick={() => setStageFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>
        {stageFilter === 'Group Stage' || stageFilter === 'All' ? (
          <div className="filter-bar small">
            {allGroups.map(g => (
              <button
                key={g}
                className={`filter-btn small ${groupFilter === g ? 'active' : ''}`}
                onClick={() => setGroupFilter(g)}
              >
                {g === 'All Groups' ? g : `Group ${g}`}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="fixtures-schedule">
        {Object.entries(grouped).map(([date, matches]) => (
          <div key={date} className="fixture-day">
            <h3 className="fixture-day-title"><Calendar size={18} /> {date}</h3>
            <div className="fixture-list">
              {matches.map(match => (
                <div key={match.id} className="fixture-card">
                  <div className="fixture-info">
                    <span className="fixture-group">{match.group ? `Group ${match.group}` : match.stage}</span>
                    <span className="fixture-time">{match.time}</span>
                  </div>
                  <div className="fixture-teams">
                    <div className="fixture-team home">
                      <span>{match.homeTeam}</span>
                      <span className="fixture-flag">{match.homeFlag}</span>
                    </div>
                    <span className="fixture-vs">VS</span>
                    <div className="fixture-team away">
                      <span className="fixture-flag">{match.awayFlag}</span>
                      <span>{match.awayTeam}</span>
                    </div>
                  </div>
                  <div className="fixture-venue">
                    <MapPin size={14} /> {match.venue}, {match.city}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No fixtures found for the selected filters.</p>
        </div>
      )}
    </div>
  );
}
