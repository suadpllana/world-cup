import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Eagerly loaded (landing page)
import './index.css';

// Lazy-loaded routes for faster initial page load (better Core Web Vitals)
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Teams = lazy(() => import('./pages/Teams'));
const TeamDetail = lazy(() => import('./pages/TeamDetail'));
const Groups = lazy(() => import('./pages/Groups'));
const Fixtures = lazy(() => import('./pages/Fixtures'));
const Players = lazy(() => import('./pages/Players'));
const Stadiums = lazy(() => import('./pages/Stadiums'));
const Games = lazy(() => import('./pages/Games'));
const Chat = lazy(() => import('./pages/Chat'));
const Admin = lazy(() => import('./pages/Admin'));

function LoadingFallback() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <div className="loading-spinner" aria-label="Loading page...">
        <div style={{
          width: 40, height: 40,
          border: '3px solid #e0e0e0',
          borderTopColor: '#8B1538',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:id" element={<TeamDetail />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/players" element={<Players />} />
              <Route path="/stadiums" element={<Stadiums />} />
              <Route path="/games" element={<Games />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/admin-panel" element={<Admin />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
