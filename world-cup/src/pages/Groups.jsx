import { Link } from 'react-router-dom';
import teams from '../data/teams';
import SEO from '../components/SEO';

export default function Groups() {
  const groups = [...new Set(teams.map(t => t.group))].sort();

  return (
    <div className="page">
      <SEO
        title="Group Stage Draw — All 12 Groups (A to L)"
        description="View the complete FIFA World Cup 2026 group stage draw. 12 groups of 4 teams each — see matchups, FIFA rankings, and advancement paths for all 48 nations."
        keywords="World Cup 2026 groups, group stage draw, Group A, Group B, World Cup draw, tournament groups, football groups"
      />
      <div className="page-header">
        <h1>📋 Group Stage</h1>
        <p>12 groups of 4 teams — Top 2 + 8 best third-placed teams advance</p>
      </div>

      <div className="groups-grid">
        {groups.map(group => {
          const groupTeams = teams.filter(t => t.group === group).sort((a, b) => a.fifaRanking - b.fifaRanking);
          return (
            <div key={group} className="group-card">
              <h2 className="group-title">Group {group}</h2>
              <div className="group-table">
                <div className="group-table-header">
                  <span>Team</span>
                  <span>FIFA Rank</span>
                  <span>Conf.</span>
                </div>
                {groupTeams.map(team => (
                  <Link to={`/teams/${team.id}`} key={team.id} className="group-table-row">
                    <div className="group-team">
                      <span className="team-flag-sm">{team.flag}</span>
                      <span>{team.name}</span>
                    </div>
                    <span className="rank">#{team.fifaRanking}</span>
                    <span className="conf">{team.confederation}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
