import { useState } from 'react';
import { Gamepad2, Users, Brain, GitBranch } from 'lucide-react';
import LineupBuilder from '../components/LineupBuilder';
import Quiz from '../components/Quiz';
import BracketPredictor from '../components/BracketPredictor';
import SEO from '../components/SEO';

const games = [
  { id: 'lineup', label: 'Dream Lineup', icon: Users, desc: 'Build your ultimate World Cup XI from all 48 teams' },
  { id: 'quiz', label: 'Trivia Quiz', icon: Brain, desc: 'Test your FIFA World Cup knowledge' },
  { id: 'bracket', label: 'Bracket Predictor', icon: GitBranch, desc: 'Predict group winners and the knockout bracket' },
];

export default function Games() {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="page">
      <SEO
        title="Fan Games — Lineup Builder, Trivia Quiz & Bracket Predictor"
        description="Play interactive FIFA World Cup 2026 fan games. Build your dream XI lineup, test your football knowledge with trivia quizzes, and predict the tournament bracket."
        keywords="World Cup 2026 games, football quiz, dream lineup builder, bracket predictor, World Cup fantasy, fan games, trivia"
      />
      <div className="page-header">
        <h1><Gamepad2 size={28} style={{ verticalAlign: 'middle' }} /> Fan Games</h1>
        <p>Have fun with interactive World Cup 2026 games — build lineups, take quizzes, and predict the bracket!</p>
      </div>

      {/* Game Selector */}
      {!activeGame && (
        <div className="games-selector">
          {games.map(game => {
            const Icon = game.icon;
            return (
              <button key={game.id} className="game-selector-card" onClick={() => setActiveGame(game.id)}>
                <div className="game-card-icon">
                  <Icon size={36} />
                </div>
                <h3>{game.label}</h3>
                <p>{game.desc}</p>
                <span className="game-play-btn">Play Now →</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Active Game */}
      {activeGame && (
        <div className="active-game">
          <button className="game-back-btn" onClick={() => setActiveGame(null)}>
            ← Back to Games
          </button>
          
          <div className="game-tabs">
            {games.map(game => {
              const Icon = game.icon;
              return (
                <button
                  key={game.id}
                  className={`game-tab ${activeGame === game.id ? 'active' : ''}`}
                  onClick={() => setActiveGame(game.id)}
                >
                  <Icon size={16} /> {game.label}
                </button>
              );
            })}
          </div>

          <div className="game-container">
            {activeGame === 'lineup' && <LineupBuilder />}
            {activeGame === 'quiz' && <Quiz />}
            {activeGame === 'bracket' && <BracketPredictor />}
          </div>
        </div>
      )}
    </div>
  );
}
