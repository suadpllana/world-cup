import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock, ChevronRight } from 'lucide-react';
import quizQuestions from '../data/quiz';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(20);
  const [timerActive, setTimerActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null); // null = not started

  useEffect(() => {
    if (!timerActive || timer <= 0) return;
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive, current]);

  const handleTimeout = () => {
    setTimerActive(false);
    setShowResult(true);
    setAnswers(prev => [...prev, { questionId: questions[current].id, selected: -1, correct: questions[current].answer }]);
  };

  const startGame = (diff) => {
    setDifficulty(diff);
    const count = diff === 'quick' ? 5 : diff === 'medium' ? 10 : 20;
    const timerVal = diff === 'quick' ? 15 : diff === 'medium' ? 20 : 25;
    setQuestions(shuffleArray(quizQuestions).slice(0, count));
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setGameOver(false);
    setTimer(timerVal);
    setTimerActive(true);
  };

  const handleAnswer = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    setTimerActive(false);
    const isCorrect = idx === questions[current].answer;
    if (isCorrect) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, { questionId: questions[current].id, selected: idx, correct: questions[current].answer }]);
  };

  const nextQuestion = () => {
    if (current + 1 >= questions.length) {
      setGameOver(true);
      return;
    }
    setCurrent(prev => prev + 1);
    setSelected(null);
    setShowResult(false);
    const timerVal = difficulty === 'quick' ? 15 : difficulty === 'medium' ? 20 : 25;
    setTimer(timerVal);
    setTimerActive(true);
  };

  const getScoreEmoji = () => {
    const pct = (score / questions.length) * 100;
    if (pct === 100) return '🏆';
    if (pct >= 80) return '🥇';
    if (pct >= 60) return '🥈';
    if (pct >= 40) return '🥉';
    return '😅';
  };

  const getScoreMessage = () => {
    const pct = (score / questions.length) * 100;
    if (pct === 100) return 'Perfect! You\'re a World Cup encyclopedia!';
    if (pct >= 80) return 'Excellent! You really know your football!';
    if (pct >= 60) return 'Good job! You know your stuff!';
    if (pct >= 40) return 'Not bad! Room for improvement though.';
    return 'Keep studying! The World Cup awaits!';
  };

  // Start screen
  if (!difficulty) {
    return (
      <div className="quiz-start">
        <div className="quiz-start-icon">⚽</div>
        <h2>World Cup Trivia</h2>
        <p>Test your FIFA World Cup knowledge! Choose your challenge:</p>
        <div className="quiz-difficulty">
          <button className="difficulty-card" onClick={() => startGame('quick')}>
            <span className="diff-emoji">⚡</span>
            <h4>Quick Fire</h4>
            <p>5 questions · 15s each</p>
          </button>
          <button className="difficulty-card" onClick={() => startGame('medium')}>
            <span className="diff-emoji">🎯</span>
            <h4>Challenge</h4>
            <p>10 questions · 20s each</p>
          </button>
          <button className="difficulty-card" onClick={() => startGame('full')}>
            <span className="diff-emoji">🏆</span>
            <h4>Expert</h4>
            <p>20 questions · 25s each</p>
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (gameOver) {
    return (
      <div className="quiz-results">
        <div className="results-trophy">{getScoreEmoji()}</div>
        <h2>Quiz Complete!</h2>
        <div className="results-score">
          <span className="score-big">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{questions.length}</span>
        </div>
        <p className="results-message">{getScoreMessage()}</p>
        <div className="results-breakdown">
          {answers.map((a, i) => {
            const q = questions[i];
            const isCorrect = a.selected === a.correct;
            return (
              <div key={i} className={`result-row ${isCorrect ? 'correct' : 'wrong'}`}>
                <span className="result-icon">{isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}</span>
                <span className="result-question">{q.question}</span>
                <span className="result-answer">{q.options[a.correct]}</span>
              </div>
            );
          })}
        </div>
        <div className="results-actions">
          <button className="btn btn-primary" onClick={() => startGame(difficulty)}>
            <RotateCcw size={16} /> Play Again
          </button>
          <button className="btn btn-outline-dark" onClick={() => setDifficulty(null)}>
            Change Difficulty
          </button>
        </div>
      </div>
    );
  }

  // Question screen
  const q = questions[current];
  const timerPct = (timer / (difficulty === 'quick' ? 15 : difficulty === 'medium' ? 20 : 25)) * 100;

  return (
    <div className="quiz-game">
      <div className="quiz-topbar">
        <div className="quiz-progress-info">
          <span>Question {current + 1} of {questions.length}</span>
          <span className="quiz-score-live"><Trophy size={14} /> {score} pts</span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="quiz-timer-bar">
        <div className={`quiz-timer-fill ${timer <= 5 ? 'danger' : ''}`} style={{ width: `${timerPct}%` }}></div>
      </div>
      <div className="quiz-timer-text">
        <Clock size={14} /> {timer}s
      </div>

      <div className="quiz-question">
        <h3>{q.question}</h3>
      </div>

      <div className="quiz-options">
        {q.options.map((opt, idx) => {
          let className = 'quiz-option';
          if (showResult) {
            if (idx === q.answer) className += ' correct';
            else if (idx === selected) className += ' wrong';
            else className += ' faded';
          } else if (idx === selected) {
            className += ' selected';
          }
          return (
            <button key={idx} className={className} onClick={() => handleAnswer(idx)} disabled={showResult}>
              <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="option-text">{opt}</span>
              {showResult && idx === q.answer && <CheckCircle size={18} className="option-icon correct-icon" />}
              {showResult && idx === selected && idx !== q.answer && <XCircle size={18} className="option-icon wrong-icon" />}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="quiz-explanation">
          <p>{q.explanation}</p>
          <button className="btn btn-primary" onClick={nextQuestion}>
            {current + 1 < questions.length ? <>Next Question <ChevronRight size={16} /></> : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}
