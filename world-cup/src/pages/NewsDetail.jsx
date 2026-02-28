import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import news from '../data/news';
import SEO from '../components/SEO';

export default function NewsDetail() {
  const { id } = useParams();
  const article = news.find(n => n.id === parseInt(id));

  if (!article) {
    return (
      <div className="page">
        <div className="not-found">
          <h2>Article not found</h2>
          <Link to="/news" className="btn btn-primary">Back to News</Link>
        </div>
      </div>
    );
  }

  const relatedNews = news.filter(n => n.id !== article.id && n.category === article.category).slice(0, 3);

  return (
    <div className="page">
      <SEO
        title={article.title}
        description={article.excerpt || article.content?.substring(0, 155) || `Read the latest on: ${article.title}`}
        keywords={`World Cup 2026 news, ${article.category}, ${article.title}`}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          description: article.excerpt || '',
          datePublished: article.date,
          author: { '@type': 'Person', name: article.author || 'World Cup 2026 Fan Hub' },
          publisher: { '@type': 'Organization', name: 'FIFA World Cup 2026 Fan Hub' },
        }}
      />
      <Link to="/news" className="back-link"><ArrowLeft size={18} /> Back to News</Link>

      <article className="news-detail">
        <div className="news-detail-header">
          <span className="news-category">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="news-meta">
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        <div className="news-detail-body">
          <p className="lead">{article.summary}</p>
          <p>{article.content}</p>
        </div>
      </article>

      {relatedNews.length > 0 && (
        <section className="section">
          <h2>Related Stories</h2>
          <div className="news-grid">
            {relatedNews.map(item => (
              <Link to={`/news/${item.id}`} key={item.id} className="news-card">
                <div className="news-card-image">
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
