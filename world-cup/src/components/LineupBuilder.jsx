import { useState } from 'react';
import { X, RotateCcw, Share2, Download } from 'lucide-react';
import players from '../data/players';
import teams from '../data/teams';

const formations = {
  '4-3-3': { name: '4-3-3', positions: [
    { role: 'GK', x: 50, y: 90 },
    { role: 'LB', x: 15, y: 70 }, { role: 'CB', x: 37, y: 72 }, { role: 'CB', x: 63, y: 72 }, { role: 'RB', x: 85, y: 70 },
    { role: 'CM', x: 25, y: 48 }, { role: 'CM', x: 50, y: 45 }, { role: 'CM', x: 75, y: 48 },
    { role: 'LW', x: 18, y: 22 }, { role: 'ST', x: 50, y: 18 }, { role: 'RW', x: 82, y: 22 },
  ]},
  '4-4-2': { name: '4-4-2', positions: [
    { role: 'GK', x: 50, y: 90 },
    { role: 'LB', x: 15, y: 70 }, { role: 'CB', x: 37, y: 72 }, { role: 'CB', x: 63, y: 72 }, { role: 'RB', x: 85, y: 70 },
    { role: 'LM', x: 15, y: 46 }, { role: 'CM', x: 37, y: 48 }, { role: 'CM', x: 63, y: 48 }, { role: 'RM', x: 85, y: 46 },
    { role: 'ST', x: 37, y: 20 }, { role: 'ST', x: 63, y: 20 },
  ]},
  '3-5-2': { name: '3-5-2', positions: [
    { role: 'GK', x: 50, y: 90 },
    { role: 'CB', x: 25, y: 72 }, { role: 'CB', x: 50, y: 74 }, { role: 'CB', x: 75, y: 72 },
    { role: 'LWB', x: 10, y: 48 }, { role: 'CM', x: 32, y: 50 }, { role: 'CM', x: 50, y: 46 }, { role: 'CM', x: 68, y: 50 }, { role: 'RWB', x: 90, y: 48 },
    { role: 'ST', x: 37, y: 20 }, { role: 'ST', x: 63, y: 20 },
  ]},
  '4-2-3-1': { name: '4-2-3-1', positions: [
    { role: 'GK', x: 50, y: 90 },
    { role: 'LB', x: 15, y: 70 }, { role: 'CB', x: 37, y: 72 }, { role: 'CB', x: 63, y: 72 }, { role: 'RB', x: 85, y: 70 },
    { role: 'CDM', x: 37, y: 52 }, { role: 'CDM', x: 63, y: 52 },
    { role: 'LW', x: 18, y: 34 }, { role: 'CAM', x: 50, y: 32 }, { role: 'RW', x: 82, y: 34 },
    { role: 'ST', x: 50, y: 16 },
  ]},
};

const positionMap = {
  GK: 'Goalkeeper', LB: 'Defender', CB: 'Defender', RB: 'Defender',
  LWB: 'Defender', RWB: 'Defender',
  CM: 'Midfielder', CDM: 'Midfielder', CAM: 'Midfielder', LM: 'Midfielder', RM: 'Midfielder',
  LW: 'Forward', RW: 'Forward', ST: 'Forward',
};

export default function LineupBuilder() {
  const [formation, setFormation] = useState('4-3-3');
  const [lineup, setLineup] = useState(Array(11).fill(null));
  const [selectingSlot, setSelectingSlot] = useState(null);
  const [search, setSearch] = useState('');
  const [teamName, setTeamName] = useState('My Dream XI');

  const currentFormation = formations[formation];

  const getFilteredPlayers = (slotIdx) => {
    const role = currentFormation.positions[slotIdx]?.role;
    const preferredPos = positionMap[role] || 'Forward';
    const usedIds = lineup.filter(Boolean).map(p => p.id);

    let filtered = players.filter(p => !usedIds.includes(p.id));

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.team.toLowerCase().includes(search.toLowerCase()) ||
        p.club.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort: matching position first, then stars, then by name
    filtered.sort((a, b) => {
      const aMatch = a.position === preferredPos ? 0 : 1;
      const bMatch = b.position === preferredPos ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
      if (a.isStar !== b.isStar) return b.isStar - a.isStar;
      return a.name.localeCompare(b.name);
    });

    return filtered;
  };

  const pickPlayer = (player) => {
    if (selectingSlot === null) return;
    const next = [...lineup];
    next[selectingSlot] = player;
    setLineup(next);
    setSelectingSlot(null);
    setSearch('');
  };

  const removePlayer = (idx) => {
    const next = [...lineup];
    next[idx] = null;
    setLineup(next);
  };

  const resetLineup = () => {
    setLineup(Array(11).fill(null));
    setSelectingSlot(null);
  };

  const changeFormation = (f) => {
    setFormation(f);
    setLineup(Array(11).fill(null));
    setSelectingSlot(null);
  };

  const getTeamFlag = (teamId) => {
    const t = teams.find(tm => tm.id === teamId);
    return t ? t.flag : '';
  };

  const filledCount = lineup.filter(Boolean).length;

  return (
    <div className="lineup-builder">
      <div className="lineup-header">
        <div className="lineup-title-row">
          <input
            type="text"
            className="lineup-name-input"
            value={teamName}
            onChange={e => setTeamName(e.target.value)}
            maxLength={30}
          />
          <div className="lineup-actions">
            <button className="btn-icon" onClick={resetLineup} title="Reset"><RotateCcw size={18} /></button>
          </div>
        </div>
        <div className="formation-selector">
          <span className="formation-label">Formation:</span>
          {Object.keys(formations).map(f => (
            <button key={f} className={`filter-btn small ${formation === f ? 'active' : ''}`} onClick={() => changeFormation(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="lineup-progress">
          <div className="lineup-progress-bar" style={{ width: `${(filledCount / 11) * 100}%` }}></div>
          <span>{filledCount}/11 players selected</span>
        </div>
      </div>

      <div className="lineup-content">
        {/* Pitch */}
        <div className="pitch">
          <div className="pitch-svg">
            {/* Pitch markings */}
            <div className="pitch-center-circle"></div>
            <div className="pitch-center-line"></div>
            <div className="pitch-penalty-top"></div>
            <div className="pitch-penalty-bottom"></div>
            <div className="pitch-goal-top"></div>
            <div className="pitch-goal-bottom"></div>

            {currentFormation.positions.map((pos, idx) => (
              <div
                key={idx}
                className={`pitch-player ${lineup[idx] ? 'filled' : 'empty'} ${selectingSlot === idx ? 'selecting' : ''}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onClick={() => lineup[idx] ? null : setSelectingSlot(idx)}
              >
                {lineup[idx] ? (
                  <>
                    <div className="pitch-player-avatar">
                      <span className="pitch-player-number">{lineup[idx].number}</span>
                      <button className="pitch-player-remove" onClick={(e) => { e.stopPropagation(); removePlayer(idx); }}>
                        <X size={10} />
                      </button>
                    </div>
                    <span className="pitch-player-name">{lineup[idx].name.split(' ').pop()}</span>
                    <span className="pitch-player-flag">{getTeamFlag(lineup[idx].teamId)}</span>
                  </>
                ) : (
                  <>
                    <div className="pitch-player-avatar empty-avatar" onClick={() => setSelectingSlot(idx)}>
                      <span>+</span>
                    </div>
                    <span className="pitch-player-role">{pos.role}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Player Picker */}
        {selectingSlot !== null && (
          <div className="player-picker">
            <div className="picker-header">
              <h3>Pick {currentFormation.positions[selectingSlot].role}</h3>
              <button className="btn-icon" onClick={() => { setSelectingSlot(null); setSearch(''); }}>
                <X size={18} />
              </button>
            </div>
            <input
              type="text"
              className="picker-search"
              placeholder="Search players..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoFocus
            />
            <div className="picker-list">
              {getFilteredPlayers(selectingSlot).map(player => (
                <button key={player.id} className="picker-item" onClick={() => pickPlayer(player)}>
                  <span className="picker-flag">{getTeamFlag(player.teamId)}</span>
                  <div className="picker-info">
                    <span className="picker-name">{player.name}</span>
                    <span className="picker-meta">{player.team} · {player.club} · {player.position}</span>
                  </div>
                  <span className="picker-number">#{player.number}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      {filledCount === 11 && (
        <div className="lineup-complete">
          <h3>🎉 {teamName} is complete!</h3>
          <div className="lineup-summary">
            {lineup.map((p, i) => (
              <div key={i} className="summary-player">
                <span className="summary-pos">{currentFormation.positions[i].role}</span>
                <span className="summary-flag">{getTeamFlag(p.teamId)}</span>
                <span className="summary-name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
