import { useState, useEffect } from 'react';
import { Trophy, RotateCcw, ChevronRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import teams from '../data/teams';

export default function BracketPredictor() {
  const groups = [...new Set(teams.map(t => t.group))].sort();
  
  // Initialize predictions from localStorage
  const loadPredictions = () => {
    try {
      const saved = localStorage.getItem('wc2026-bracket');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return null;
  };

  const [groupPicks, setGroupPicks] = useState(() => {
    const saved = loadPredictions();
    if (saved?.groupPicks) return saved.groupPicks;
    const init = {};
    groups.forEach(g => { init[g] = { first: null, second: null }; });
    return init;
  });
  
  const [knockoutPicks, setKnockoutPicks] = useState(() => {
    const saved = loadPredictions();
    if (saved?.knockoutPicks) return saved.knockoutPicks;
    return {
      r16: Array(8).fill(null),
      qf: Array(4).fill(null),
      sf: Array(2).fill(null),
      final: null,
      champion: null,
    };
  });

  const [expandedGroup, setExpandedGroup] = useState(null);
  const [activeTab, setActiveTab] = useState('groups');
  const [showConfetti, setShowConfetti] = useState(false);

  // Save to localStorage whenever predictions change
  useEffect(() => {
    localStorage.setItem('wc2026-bracket', JSON.stringify({ groupPicks, knockoutPicks }));
  }, [groupPicks, knockoutPicks]);

  const getGroupTeams = (group) => teams.filter(t => t.group === group);

  const pickGroupWinner = (group, place, team) => {
    setGroupPicks(prev => {
      const updated = { ...prev };
      const current = { ...updated[group] };
      
      // If picking for first and team is already second, swap
      if (place === 'first' && current.second?.id === team.id) {
        current.second = current.first;
      }
      // If picking for second and team is already first, swap
      if (place === 'second' && current.first?.id === team.id) {
        current.first = current.second;
      }
      
      current[place] = team;
      updated[group] = current;
      return updated;
    });
  };

  const allGroupsPicked = () => {
    return groups.every(g => groupPicks[g].first && groupPicks[g].second);
  };

  // Generate R16 matchups from group winners
  // Simplified bracket: 1A vs 2B, 1C vs 2D, 1E vs 2F, etc.
  const getR16Matchups = () => {
    const matchups = [];
    for (let i = 0; i < groups.length; i += 2) {
      const g1 = groups[i];
      const g2 = groups[i + 1];
      matchups.push({
        id: i / 2,
        team1: groupPicks[g1]?.first,
        team2: groupPicks[g2]?.second,
        label: `1st ${g1} vs 2nd ${g2}`,
      });
      matchups.push({
        id: i / 2 + 6,
        team1: groupPicks[g2]?.first,
        team2: groupPicks[g1]?.second,
        label: `1st ${g2} vs 2nd ${g1}`,
      });
    }
    return matchups.slice(0, 8);
  };

  const pickKnockout = (round, idx, team) => {
    setKnockoutPicks(prev => {
      const updated = { ...prev };
      updated[round] = [...(updated[round] || [])];
      if (Array.isArray(updated[round])) {
        updated[round][idx] = team;
      } else {
        updated[round] = team;
      }
      
      // Clear downstream if changed
      if (round === 'r16') {
        const qfIdx = Math.floor(idx / 2);
        if (updated.qf[qfIdx]?.id === team?.id) { /* keep */ } 
        else {
          // Check if the previous pick at this downstream slot needs clearing
          const otherR16 = idx % 2 === 0 ? idx + 1 : idx - 1;
          const prevWinner = prev.r16?.[idx];
          if (prevWinner && updated.qf[qfIdx]?.id === prevWinner.id) {
            updated.qf[qfIdx] = null;
            // Clear further downstream
            const sfIdx = Math.floor(qfIdx / 2);
            if (updated.sf[sfIdx]?.id === prevWinner.id) {
              updated.sf[sfIdx] = null;
              if (updated.final?.id === prevWinner.id) updated.final = null;
              if (updated.champion?.id === prevWinner.id) updated.champion = null;
            }
          }
        }
      }
      if (round === 'qf') {
        const sfIdx = Math.floor(idx / 2);
        const prevWinner = prev.qf?.[idx];
        if (prevWinner && updated.sf[sfIdx]?.id === prevWinner.id) {
          updated.sf[sfIdx] = null;
          if (updated.final?.id === prevWinner.id) updated.final = null;
          if (updated.champion?.id === prevWinner.id) updated.champion = null;
        }
      }
      if (round === 'sf') {
        const prevWinner = prev.sf?.[idx];
        if (prevWinner && updated.final?.id === prevWinner.id) {
          updated.final = null;
          if (updated.champion?.id === prevWinner.id) updated.champion = null;
        }
      }
      
      return updated;
    });
  };

  const pickChampion = (team) => {
    setKnockoutPicks(prev => ({ ...prev, champion: team }));
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const resetAll = () => {
    const init = {};
    groups.forEach(g => { init[g] = { first: null, second: null }; });
    setGroupPicks(init);
    setKnockoutPicks({ r16: Array(8).fill(null), qf: Array(4).fill(null), sf: Array(2).fill(null), final: null, champion: null });
    setActiveTab('groups');
    localStorage.removeItem('wc2026-bracket');
  };

  const completedGroups = groups.filter(g => groupPicks[g].first && groupPicks[g].second).length;
  const r16Matchups = getR16Matchups();

  return (
    <div className="bracket-predictor">
      {showConfetti && <div className="confetti-overlay">🎉🏆🎊⚽🥇</div>}
      
      <div className="bracket-tabs">
        <button className={`bracket-tab ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => setActiveTab('groups')}>
          Group Stage
          <span className="tab-badge">{completedGroups}/{groups.length}</span>
        </button>
        <button 
          className={`bracket-tab ${activeTab === 'knockout' ? 'active' : ''}`} 
          onClick={() => setActiveTab('knockout')}
          disabled={!allGroupsPicked()}
        >
          Knockout Stage
          {!allGroupsPicked() && <span className="tab-lock">🔒</span>}
        </button>
        <button className="btn-icon bracket-reset" onClick={resetAll} title="Reset All">
          <RotateCcw size={16} />
        </button>
      </div>

      {/* GROUP PREDICTIONS */}
      {activeTab === 'groups' && (
        <div className="bracket-groups">
          <p className="bracket-instruction">Pick 1st and 2nd place for each group. Tap a team to select.</p>
          
          <div className="bracket-groups-grid">
            {groups.map(group => {
              const groupTeamsList = getGroupTeams(group);
              const isExpanded = expandedGroup === group;
              const isDone = groupPicks[group].first && groupPicks[group].second;
              
              return (
                <div key={group} className={`bracket-group-card ${isDone ? 'done' : ''}`}>
                  <button className="bracket-group-header" onClick={() => setExpandedGroup(isExpanded ? null : group)}>
                    <span className="bracket-group-name">Group {group}</span>
                    <div className="bracket-group-picks">
                      {groupPicks[group].first && (
                        <span className="mini-pick">{groupPicks[group].first.flag} 1st</span>
                      )}
                      {groupPicks[group].second && (
                        <span className="mini-pick">{groupPicks[group].second.flag} 2nd</span>
                      )}
                      {isDone && <Check size={16} className="done-check" />}
                    </div>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  
                  {isExpanded && (
                    <div className="bracket-group-body">
                      <div className="pick-section">
                        <span className="pick-label">🥇 Group Winner</span>
                        <div className="pick-options">
                          {groupTeamsList.map(team => (
                            <button
                              key={team.id}
                              className={`pick-team-btn ${groupPicks[group].first?.id === team.id ? 'selected first' : ''}`}
                              onClick={() => pickGroupWinner(group, 'first', team)}
                            >
                              <span>{team.flag}</span>
                              <span>{team.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="pick-section">
                        <span className="pick-label">🥈 Runner-up</span>
                        <div className="pick-options">
                          {groupTeamsList.map(team => (
                            <button
                              key={team.id}
                              className={`pick-team-btn ${groupPicks[group].second?.id === team.id ? 'selected second' : ''}`}
                              onClick={() => pickGroupWinner(group, 'second', team)}
                            >
                              <span>{team.flag}</span>
                              <span>{team.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {allGroupsPicked() && (
            <div className="bracket-advance">
              <button className="btn btn-primary" onClick={() => setActiveTab('knockout')}>
                Continue to Knockout Stage <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* KNOCKOUT PREDICTIONS */}
      {activeTab === 'knockout' && allGroupsPicked() && (
        <div className="bracket-knockout">
          {/* Round of 16 */}
          <div className="ko-round">
            <h3 className="ko-round-title">Round of 16</h3>
            <div className="ko-matchups">
              {r16Matchups.map((match, idx) => (
                <div key={idx} className="ko-match">
                  <span className="ko-match-label">{match.label}</span>
                  <div className="ko-match-teams">
                    <button
                      className={`ko-team-btn ${knockoutPicks.r16[idx]?.id === match.team1?.id ? 'winner' : ''}`}
                      onClick={() => match.team1 && pickKnockout('r16', idx, match.team1)}
                      disabled={!match.team1}
                    >
                      <span>{match.team1?.flag || '?'}</span>
                      <span>{match.team1?.name || 'TBD'}</span>
                    </button>
                    <span className="ko-vs">vs</span>
                    <button
                      className={`ko-team-btn ${knockoutPicks.r16[idx]?.id === match.team2?.id ? 'winner' : ''}`}
                      onClick={() => match.team2 && pickKnockout('r16', idx, match.team2)}
                      disabled={!match.team2}
                    >
                      <span>{match.team2?.flag || '?'}</span>
                      <span>{match.team2?.name || 'TBD'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quarter-finals */}
          <div className="ko-round">
            <h3 className="ko-round-title">Quarter-finals</h3>
            <div className="ko-matchups">
              {[0, 1, 2, 3].map(idx => {
                const t1 = knockoutPicks.r16[idx * 2];
                const t2 = knockoutPicks.r16[idx * 2 + 1];
                return (
                  <div key={idx} className="ko-match">
                    <div className="ko-match-teams">
                      <button
                        className={`ko-team-btn ${knockoutPicks.qf[idx]?.id === t1?.id ? 'winner' : ''}`}
                        onClick={() => t1 && pickKnockout('qf', idx, t1)}
                        disabled={!t1}
                      >
                        <span>{t1?.flag || '?'}</span>
                        <span>{t1?.name || 'TBD'}</span>
                      </button>
                      <span className="ko-vs">vs</span>
                      <button
                        className={`ko-team-btn ${knockoutPicks.qf[idx]?.id === t2?.id ? 'winner' : ''}`}
                        onClick={() => t2 && pickKnockout('qf', idx, t2)}
                        disabled={!t2}
                      >
                        <span>{t2?.flag || '?'}</span>
                        <span>{t2?.name || 'TBD'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Semi-finals */}
          <div className="ko-round">
            <h3 className="ko-round-title">Semi-finals</h3>
            <div className="ko-matchups">
              {[0, 1].map(idx => {
                const t1 = knockoutPicks.qf[idx * 2];
                const t2 = knockoutPicks.qf[idx * 2 + 1];
                return (
                  <div key={idx} className="ko-match">
                    <div className="ko-match-teams">
                      <button
                        className={`ko-team-btn ${knockoutPicks.sf[idx]?.id === t1?.id ? 'winner' : ''}`}
                        onClick={() => t1 && pickKnockout('sf', idx, t1)}
                        disabled={!t1}
                      >
                        <span>{t1?.flag || '?'}</span>
                        <span>{t1?.name || 'TBD'}</span>
                      </button>
                      <span className="ko-vs">vs</span>
                      <button
                        className={`ko-team-btn ${knockoutPicks.sf[idx]?.id === t2?.id ? 'winner' : ''}`}
                        onClick={() => t2 && pickKnockout('sf', idx, t2)}
                        disabled={!t2}
                      >
                        <span>{t2?.flag || '?'}</span>
                        <span>{t2?.name || 'TBD'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final */}
          <div className="ko-round ko-final">
            <h3 className="ko-round-title">🏆 Final</h3>
            <div className="ko-matchups">
              {(() => {
                const t1 = knockoutPicks.sf[0];
                const t2 = knockoutPicks.sf[1];
                return (
                  <div className="ko-match final-match">
                    <div className="ko-match-teams">
                      <button
                        className={`ko-team-btn final-team ${knockoutPicks.champion?.id === t1?.id ? 'champion' : ''}`}
                        onClick={() => t1 && pickChampion(t1)}
                        disabled={!t1}
                      >
                        <span className="final-flag">{t1?.flag || '?'}</span>
                        <span>{t1?.name || 'TBD'}</span>
                      </button>
                      <span className="ko-vs final-vs">🏆</span>
                      <button
                        className={`ko-team-btn final-team ${knockoutPicks.champion?.id === t2?.id ? 'champion' : ''}`}
                        onClick={() => t2 && pickChampion(t2)}
                        disabled={!t2}
                      >
                        <span className="final-flag">{t2?.flag || '?'}</span>
                        <span>{t2?.name || 'TBD'}</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Champion Display */}
          {knockoutPicks.champion && (
            <div className="champion-display">
              <div className="champion-trophy">🏆</div>
              <h2>Your Predicted Champion</h2>
              <div className="champion-flag">{knockoutPicks.champion.flag}</div>
              <h3>{knockoutPicks.champion.name}</h3>
              <p>FIFA World Cup 2026 Winners</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
