import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Newspaper, Star, ArrowRight, Trophy, Globe } from 'lucide-react';
import CountdownBanner from '../components/CountdownBanner';
import SEO from '../components/SEO';
import news from '../data/news';
import teams from '../data/teams';
import fixtures from '../data/fixtures';

export default function Home() {
  const featuredNews = news.filter(n => n.featured).slice(0, 3);
  const upcomingMatches = fixtures.filter(f => f.stage === 'Group Stage').slice(0, 4);
  const topTeams = teams.filter(t => t.fifaRanking <= 10).sort((a, b) => a.fifaRanking - b.fifaRanking).slice(0, 8);

  return (
    <div className="home-page">
      <SEO
        title="Home — FIFA World Cup 2026 Schedule, Teams & News"
        description="Your ultimate guide to the FIFA World Cup 2026 hosted in USA, Mexico & Canada. 48 teams, 16 stadiums, full match schedule, player profiles, group standings, live news, fan games and community chat."
        keywords="FIFA World Cup 2026, World Cup 2026 schedule, World Cup teams, USA Mexico Canada, World Cup fixtures, football, soccer"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'FIFA World Cup 2026 Fan Hub',
          description: 'Your ultimate guide to the 2026 FIFA World Cup.',
          url: 'https://worldcup2026.com/',
        }}
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Trophy size={20} /> Official Fan Hub
          </div>
          <h1>FIFA World Cup<br /><span className="hero-year">2026</span></h1>
          <p className="hero-tagline">48 Teams · 16 Stadiums · 3 Nations · 1 Dream</p>
          <div className="hero-flags">
            <span>🇺🇸</span><span>🇲🇽</span><span>🇨🇦</span>
          </div>
          <div className="hero-actions">
            <Link to="/fixtures" className="btn btn-primary">View Fixtures</Link>
            <Link to="/teams" className="btn btn-outline">Explore Teams</Link>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <CountdownBanner />

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="stat-card">
          <Globe size={32} />
          <div>
            <h3>48</h3>
            <p>Teams</p>
          </div>
        </div>
        <div className="stat-card">
          <Calendar size={32} />
          <div>
            <h3>104</h3>
            <p>Matches</p>
          </div>
        </div>
        <div className="stat-card">
          <MapPin size={32} />
          <div>
            <h3>16</h3>
            <p>Stadiums</p>
          </div>
        </div>
        <div className="stat-card">
          <Users size={32} />
          <div>
            <h3>3</h3>
            <p>Host Nations</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section">
        <div className="section-header">
          <h2><Newspaper size={24} /> Latest News</h2>
          <Link to="/news" className="see-all">See All <ArrowRight size={16} /></Link>
        </div>
        <div className="news-grid home-news">
          {featuredNews.map(article => (
            <Link to={`/news/${article.id}`} key={article.id} className="news-card featured">
              <div className="news-card-image">
                <span className="news-category">{article.category}</span>
              </div>
              <div className="news-card-body">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="news-meta">
                  <span>{article.author}</span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Teams */}
      <section className="section">
        <div className="section-header">
          <h2><Star size={24} /> Top-Ranked Teams</h2>
          <Link to="/teams" className="see-all">All 48 Teams <ArrowRight size={16} /></Link>
        </div>
        <div className="top-teams-grid">
          {topTeams.map(team => (
            <Link to={`/teams/${team.id}`} key={team.id} className="top-team-card">
              <span className="team-rank">#{team.fifaRanking}</span>
              <span className="team-flag-lg">{team.flag}</span>
              <h4>{team.name}</h4>
              <span className="team-group-badge">Group {team.group}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Fixtures */}
      <section className="section">
        <div className="section-header">
          <h2><Calendar size={24} /> Upcoming Matches</h2>
          <Link to="/fixtures" className="see-all">Full Schedule <ArrowRight size={16} /></Link>
        </div>
        <div className="fixture-list home-fixtures">
          {upcomingMatches.map(match => (
            <div key={match.id} className="fixture-card">
              <div className="fixture-info">
                <span className="fixture-group">Group {match.group}</span>
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

      {/* Tournament Info */}
      <section className="section tournament-info">
        <h2>About the Tournament</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>🏟️ New Format</h3>
            <p>48 teams compete in 12 groups of 4. Top 2 plus 8 best third-placed teams advance to a Round of 32, followed by knockout rounds through to the Final.</p>
          </div>
          <div className="info-card">
            <h3>🌎 Three Nations</h3>
            <p>The first World Cup hosted across three countries: United States (11 venues), Mexico (3 venues), and Canada (2 venues).</p>
          </div>
          <div className="info-card">
            <h3>🏆 History</h3>
            <p>Estadio Azteca becomes the only stadium to host three World Cups. MetLife Stadium hosts the final. The tournament features 104 matches over 39 days.</p>
          </div>
          <div className="info-card">
            <h3>⚽ Records</h3>
            <p>The biggest FIFA World Cup ever: most teams (48), most matches (104), most venues (16), and expected to be the most-watched sporting event in history.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
