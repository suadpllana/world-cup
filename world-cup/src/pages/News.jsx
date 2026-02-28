import { useState } from 'react';
import { Link } from 'react-router-dom';
import news from '../data/news';
import SEO from '../components/SEO';

const categories = ['All', 'Tournament', 'Players', 'Teams', 'Stadiums'];

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? news
    : news.filter(n => n.category === activeCategory);

  return (
    <div className="page">
      <SEO
        title="Latest News & Updates"
        description="Stay updated with the latest FIFA World Cup 2026 news, transfers, tournament updates, team announcements and stadium developments across USA, Mexico & Canada."
        keywords="World Cup 2026 news, FIFA news, World Cup updates, tournament news, football news"
      />
      <div className="page-header">
        <h1>📰 World Cup 2026 News</h1>
        <p>Stay updated with the latest stories, transfers, and developments</p>
      </div>

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="news-grid">
        {filtered.map(article => (
          <Link to={`/news/${article.id}`} key={article.id} className={`news-card ${article.featured ? 'featured' : ''}`}>
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
    </div>
  );
}
