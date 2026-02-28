import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, MapPin, Trophy, Star, Users } from 'lucide-react';
import teams from '../data/teams';
import players from '../data/players';
import fixtures from '../data/fixtures';
import SEO from '../components/SEO';

export default function TeamDetail() {
  const { id } = useParams();
  const team = teams.find(t => t.id === parseInt(id));

  if (!team) {
    return (
      <div className="page">
        <div className="not-found">
          <h2>Team not found</h2>
          <Link to="/teams" className="btn btn-primary">Back to Teams</Link>
        </div>
      </div>
    );
  }

  const teamPlayers = players.filter(p => p.teamId === team.id);
  const teamFixtures = fixtures.filter(f =>
    f.homeTeam === team.name || f.awayTeam === team.name
  );
  const groupTeams = teams.filter(t => t.group === team.group);

  return (
    <div className="page">
      <SEO
        title={`${team.name} ${team.flag} — World Cup 2026 Team Profile`}
        description={`${team.name} at FIFA World Cup 2026. FIFA Ranking #${team.fifaRanking}, Group ${team.group}, coached by ${team.coach}. Captain: ${team.captain}. ${team.appearances} World Cup appearances, best finish: ${team.bestFinish}.`}
        keywords={`${team.name} World Cup 2026, ${team.code}, ${team.coach}, ${team.captain}, Group ${team.group}, ${team.confederation}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SportsTeam',
          name: team.name,
          sport: 'Soccer',
          coach: { '@type': 'Person', name: team.coach },
          athlete: teamPlayers.map(p => ({ '@type': 'Person', name: p.name })),
        }}
      />
      <Link to="/teams" className="back-link"><ArrowLeft size={18} /> Back to Teams</Link>

      <div className="team-detail">
        <div className="team-detail-header">
          <span className="team-flag-xl">{team.flag}</span>
          <div>
            <h1>{team.name}</h1>
            <p className="team-nickname">{team.nickname}</p>
            <div className="team-badges">
              <span className="badge">Group {team.group}</span>
              <span className="badge">FIFA #{team.fifaRanking}</span>
              <span className="badge">{team.confederation}</span>
              <span className="badge">{team.qualified}</span>
            </div>
          </div>
        </div>

        <div className="team-info-grid">
          <div className="info-item">
            <Shield size={20} />
            <div>
              <span className="info-label">Coach</span>
              <span className="info-value">{team.coach}</span>
            </div>
          </div>
          <div className="info-item">
            <Star size={20} />
            <div>
              <span className="info-label">Captain</span>
              <span className="info-value">{team.captain}</span>
            </div>
          </div>
          <div className="info-item">
            <Trophy size={20} />
            <div>
              <span className="info-label">Best Finish</span>
              <span className="info-value">{team.bestFinish}</span>
            </div>
          </div>
          <div className="info-item">
            <Users size={20} />
            <div>
              <span className="info-label">WC Appearances</span>
              <span className="info-value">{team.appearances}</span>
            </div>
          </div>
        </div>

        {/* Group Opponents */}
        <section className="team-section">
          <h2>Group {team.group} Opponents</h2>
          <div className="group-opponents">
            {groupTeams.map(t => (
              <Link to={`/teams/${t.id}`} key={t.id} className={`opponent-card ${t.id === team.id ? 'current' : ''}`}>
                <span className="team-flag-lg">{t.flag}</span>
                <span>{t.name}</span>
                <span className="badge small">#{t.fifaRanking}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Players */}
        {teamPlayers.length > 0 && (
          <section className="team-section">
            <h2>Key Players</h2>
            <div className="players-grid">
              {teamPlayers.map(player => (
                <div key={player.id} className="player-card-mini">
                  <div className="player-number">#{player.number}</div>
                  <div className="player-info">
                    <h4>{player.name} {player.isCaptain && <span className="captain-badge">C</span>}</h4>
                    <span className="player-position">{player.position}</span>
                    <span className="player-club">{player.club}</span>
                  </div>
                  <div className="player-stats-mini">
                    <span>{player.caps} caps</span>
                    <span>{player.goals} goals</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Team Fixtures */}
        {teamFixtures.length > 0 && (
          <section className="team-section">
            <h2>Fixtures</h2>
            <div className="fixture-list">
              {teamFixtures.map(match => (
                <div key={match.id} className="fixture-card">
                  <div className="fixture-info">
                    <span className="fixture-group">{match.group ? `Group ${match.group}` : match.stage}</span>
                    <span className="fixture-date">
                      {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {match.time}
                    </span>
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
          </section>
        )}
      </div>
    </div>
  );
}
