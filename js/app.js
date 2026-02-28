// ============================================================
// FIFA WORLD CUP 2026 - APPLICATION ENGINE
// ============================================================

class WorldCupApp {
  constructor() {
    this.currentPage = 'home';
    this.currentData = null;
    this.searchOpen = false;
    this.init();
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.startCountdown();
    this.handleRoute();
    window.addEventListener('hashchange', () => this.handleRoute());
    setTimeout(() => {
      document.getElementById('app-loader').classList.add('hidden');
    }, 1200);
  }

  cacheDOM() {
    this.mainContent = document.getElementById('main-content');
    this.navItems = document.querySelectorAll('.nav-item');
    this.searchOverlay = document.getElementById('search-overlay');
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.countdownEl = document.getElementById('countdown');
  }

  bindEvents() {
    // Navigation
    this.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        window.location.hash = page;
      });
    });

    // Search
    document.getElementById('search-toggle').addEventListener('click', () => this.toggleSearch());
    document.getElementById('search-close').addEventListener('click', () => this.toggleSearch());
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.searchOpen) this.toggleSearch();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.toggleSearch();
      }
    });
  }

  // ---- ROUTING ----
  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    const page = parts[0];
    const id = parts[1];

    this.currentPage = page;
    this.updateNav(page);

    switch (page) {
      case 'home': this.renderHome(); break;
      case 'news': id ? this.renderNewsDetail(id) : this.renderNews(); break;
      case 'fixtures': this.renderFixtures(); break;
      case 'groups': this.renderGroups(); break;
      case 'teams': id ? this.renderTeamDetail(id) : this.renderTeams(); break;
      case 'players': this.renderPlayers(); break;
      case 'stadiums': id ? this.renderStadiumDetail(id) : this.renderStadiums(); break;
      case 'history': this.renderHistory(); break;
      case 'records': this.renderRecords(); break;
      default: this.renderHome();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateNav(page) {
    this.navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
  }

  // ---- COUNTDOWN ----
  startCountdown() {
    const updateCountdown = () => {
      const now = new Date();
      const start = new Date('2026-06-11T00:00:00');
      const diff = start - now;

      if (diff <= 0) {
        this.countdownEl.textContent = 'LIVE NOW!';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);

      this.countdownEl.textContent = `${days}d ${hours}h ${mins}m`;
    };

    updateCountdown();
    setInterval(updateCountdown, 60000);
  }

  // ---- SEARCH ----
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
    this.searchOverlay.classList.toggle('active', this.searchOpen);
    if (this.searchOpen) {
      setTimeout(() => this.searchInput.focus(), 100);
    } else {
      this.searchInput.value = '';
      this.searchResults.innerHTML = '';
    }
  }

  handleSearch(query) {
    if (query.length < 2) {
      this.searchResults.innerHTML = '';
      return;
    }

    const q = query.toLowerCase();
    const results = [];

    // Search teams
    WC2026.teams.forEach(team => {
      if (team.name.toLowerCase().includes(q) || team.code.toLowerCase().includes(q)) {
        results.push({
          icon: team.flag,
          title: team.name,
          subtitle: `Group ${team.group} • FIFA Ranking #${team.fifaRanking}`,
          action: () => { window.location.hash = `teams/${team.code}`; this.toggleSearch(); }
        });
      }
    });

    // Search players
    WC2026.starPlayers.forEach(player => {
      if (player.name.toLowerCase().includes(q)) {
        results.push({
          icon: player.flag,
          title: player.name,
          subtitle: `${player.team} • ${player.position} • ${player.club}`,
          action: () => { window.location.hash = `teams/${WC2026.teams.find(t => t.name === player.team)?.code || ''}`; this.toggleSearch(); }
        });
      }
    });

    // Search stadiums
    WC2026.stadiums.forEach(stadium => {
      if (stadium.name.toLowerCase().includes(q) || stadium.city.toLowerCase().includes(q)) {
        results.push({
          icon: '🏟️',
          title: stadium.name,
          subtitle: `${stadium.city} • Capacity: ${stadium.capacity.toLocaleString()}`,
          action: () => { window.location.hash = `stadiums/${stadium.id}`; this.toggleSearch(); }
        });
      }
    });

    // Search news
    WC2026.news.forEach(article => {
      if (article.title.toLowerCase().includes(q) || article.summary.toLowerCase().includes(q)) {
        results.push({
          icon: '📰',
          title: article.title,
          subtitle: article.date,
          action: () => { window.location.hash = `news/${article.id}`; this.toggleSearch(); }
        });
      }
    });

    this.searchResults.innerHTML = results.length > 0
      ? results.slice(0, 10).map(r => `
          <div class="search-result-item" data-action>
            <span class="result-icon">${r.icon}</span>
            <div class="result-info">
              <h4>${r.title}</h4>
              <p>${r.subtitle}</p>
            </div>
          </div>
        `).join('')
      : '<div class="search-result-item"><div class="result-info"><h4>No results found</h4><p>Try a different search term</p></div></div>';

    // Bind click events
    this.searchResults.querySelectorAll('[data-action]').forEach((el, i) => {
      el.addEventListener('click', () => results[i]?.action());
    });
  }

  // ---- HELPERS ----
  getTeamByName(name) {
    return WC2026.teams.find(t => t.name === name);
  }

  getFlag(teamName) {
    const team = this.getTeamByName(teamName);
    return team ? team.flag : '🏳️';
  }

  formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  getDateParts(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' })
    };
  }

  // ============================================================
  // HOME PAGE
  // ============================================================
  renderHome() {
    const featuredNews = WC2026.news[0];
    const upcomingFixtures = WC2026.fixtures.slice(0, 6);
    const topPlayers = WC2026.starPlayers.slice(0, 8);

    this.mainContent.innerHTML = `
      <!-- HERO -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-badge">🏆 ${WC2026.tournament.edition} Edition • ${WC2026.tournament.slogan}</div>
          <h1>
            FIFA <span class="gradient-text">World Cup</span><br>
            2026™
          </h1>
          <p>The biggest sporting event in history. 48 nations, 16 stadiums, 3 countries, 1 dream. Coming June 11, 2026.</p>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="value">${WC2026.tournament.totalTeams}</div>
              <div class="label">Teams</div>
            </div>
            <div class="hero-stat">
              <div class="value">${WC2026.tournament.totalMatches}</div>
              <div class="label">Matches</div>
            </div>
            <div class="hero-stat">
              <div class="value">${WC2026.stadiums.length}</div>
              <div class="label">Stadiums</div>
            </div>
            <div class="hero-stat">
              <div class="value">3</div>
              <div class="label">Host Nations</div>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <!-- FEATURED NEWS -->
        <section>
          <div class="section-header">
            <h2><span class="emoji">📰</span> Latest News</h2>
            <button class="view-all-btn" onclick="window.location.hash='news'">View All →</button>
          </div>
          <div class="featured-news card" onclick="window.location.hash='news/${featuredNews.id}'">
            <div class="featured-image">
              <img src="${featuredNews.image}" alt="${featuredNews.title}" loading="lazy">
            </div>
            <div class="featured-overlay">
              <h2>${featuredNews.title}</h2>
              <p>${featuredNews.summary}</p>
            </div>
          </div>
          <div class="news-grid">
            ${WC2026.news.slice(1, 4).map(article => this.renderNewsCard(article)).join('')}
          </div>
        </section>

        <!-- UPCOMING FIXTURES -->
        <section style="margin-top: 48px;">
          <div class="section-header">
            <h2><span class="emoji">📅</span> Key Fixtures</h2>
            <button class="view-all-btn" onclick="window.location.hash='fixtures'">Full Schedule →</button>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${upcomingFixtures.map(fix => this.renderFixtureCard(fix)).join('')}
          </div>
        </section>

        <!-- STAR PLAYERS -->
        <section style="margin-top: 48px;">
          <div class="section-header">
            <h2><span class="emoji">⭐</span> Star Players</h2>
            <button class="view-all-btn" onclick="window.location.hash='players'">All Players →</button>
          </div>
          <div class="players-grid">
            ${topPlayers.map(p => this.renderPlayerCard(p)).join('')}
          </div>
        </section>

        <!-- GROUPS PREVIEW -->
        <section style="margin-top: 48px;">
          <div class="section-header">
            <h2><span class="emoji">🏆</span> Groups</h2>
            <button class="view-all-btn" onclick="window.location.hash='groups'">All Groups →</button>
          </div>
          <div class="groups-grid">
            ${Object.entries(WC2026.groups).slice(0, 6).map(([letter, data]) => this.renderGroupCard(letter, data)).join('')}
          </div>
        </section>

        <!-- STADIUMS PREVIEW -->
        <section style="margin-top: 48px;">
          <div class="section-header">
            <h2><span class="emoji">🏟️</span> Stadiums</h2>
            <button class="view-all-btn" onclick="window.location.hash='stadiums'">All Venues →</button>
          </div>
          <div class="stadiums-grid">
            ${WC2026.stadiums.slice(0, 3).map(s => this.renderStadiumCard(s)).join('')}
          </div>
        </section>
      </div>
    `;
  }

  // ============================================================
  // NEWS PAGE
  // ============================================================
  renderNews() {
    const categories = ['all', ...new Set(WC2026.news.map(n => n.category))];

    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">📰</span> News & Updates</h2>
        </div>
        <div class="fixture-filters" id="news-filters">
          ${categories.map(cat => `
            <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
              ${cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          `).join('')}
        </div>
        <div class="news-grid" id="news-grid">
          ${WC2026.news.map(article => this.renderNewsCard(article)).join('')}
        </div>
      </div>
    `;

    // Filter events
    document.getElementById('news-filters').addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#news-filters .filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.dataset.category;
        const filtered = cat === 'all' ? WC2026.news : WC2026.news.filter(n => n.category === cat);
        document.getElementById('news-grid').innerHTML = filtered.map(a => this.renderNewsCard(a)).join('');
      }
    });
  }

  renderNewsCard(article) {
    return `
      <div class="card news-card animate-in" onclick="window.location.hash='news/${article.id}'">
        <div class="card-image">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <span class="category-badge">${article.category}</span>
        </div>
        <div class="card-body">
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <div class="card-meta">
            <span>${this.formatDate(article.date)}</span>
            <span>${article.readTime} read</span>
          </div>
        </div>
      </div>
    `;
  }

  renderNewsDetail(id) {
    const article = WC2026.news.find(n => n.id === parseInt(id));
    if (!article) return this.renderNews();

    this.mainContent.innerHTML = `
      <div class="container">
        <button class="back-btn" onclick="window.location.hash='news'">← Back to News</button>
        <div class="article-detail">
          <div class="article-hero">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
          </div>
          <h1>${article.title}</h1>
          <div class="article-meta">
            <span>📅 ${this.formatDate(article.date)}</span>
            <span>✍️ ${article.author}</span>
            <span>⏱️ ${article.readTime} read</span>
            <span style="padding: 2px 10px; background: rgba(139,21,56,0.2); border-radius: 20px; color: var(--primary-light);">${article.category}</span>
          </div>
          <div class="article-content">
            <p>${article.content}</p>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================================
  // FIXTURES PAGE
  // ============================================================
  renderFixtures() {
    const stages = ['All', 'Group Stage', 'Round of 32', 'Round of 16', 'Quarter-Final', 'Semi-Final', 'Final'];

    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">📅</span> Match Schedule</h2>
        </div>
        <div class="fixture-filters" id="fixture-filters">
          ${stages.map(s => `
            <button class="filter-btn ${s === 'All' ? 'active' : ''}" data-stage="${s}">${s}</button>
          `).join('')}
        </div>
        <div id="fixtures-list" style="display: flex; flex-direction: column; gap: 8px;">
          ${WC2026.fixtures.map(fix => this.renderFixtureCard(fix)).join('')}
        </div>
      </div>
    `;

    document.getElementById('fixture-filters').addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#fixture-filters .filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const stage = e.target.dataset.stage;
        const filtered = stage === 'All' ? WC2026.fixtures : WC2026.fixtures.filter(f => f.stage === stage);
        document.getElementById('fixtures-list').innerHTML = filtered.map(f => this.renderFixtureCard(f)).join('');
      }
    });
  }

  renderFixtureCard(fixture) {
    const dateParts = this.getDateParts(fixture.date);
    const homeFlag = this.getFlag(fixture.home) || '';
    const awayFlag = this.getFlag(fixture.away) || '';

    return `
      <div class="card fixture-card animate-in">
        <div class="fixture-date">
          <div class="day">${dateParts.day}</div>
          <div class="month">${dateParts.month}</div>
          <div class="time">${fixture.time}</div>
        </div>
        <div class="fixture-teams">
          <div class="team-row">
            <span class="flag">${homeFlag}</span>
            <span>${fixture.home}</span>
          </div>
          <div class="team-row">
            <span class="flag">${awayFlag}</span>
            <span>${fixture.away}</span>
          </div>
        </div>
        <div class="fixture-info">
          <div class="stage">${fixture.stage}</div>
          <div class="venue">${fixture.stadium}</div>
          ${fixture.group ? `<span class="group-badge">Group ${fixture.group}</span>` : ''}
        </div>
      </div>
    `;
  }

  // ============================================================
  // GROUPS PAGE
  // ============================================================
  renderGroups() {
    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">🏆</span> Group Stage</h2>
        </div>
        <div class="groups-grid">
          ${Object.entries(WC2026.groups).map(([letter, data]) => this.renderGroupCard(letter, data)).join('')}
        </div>
      </div>
    `;
  }

  renderGroupCard(letter, data) {
    return `
      <div class="card group-card animate-in">
        <div class="group-header">
          <span class="group-letter">Group ${letter}</span>
        </div>
        <div class="group-teams">
          ${data.teams.map(teamName => {
            const team = this.getTeamByName(teamName);
            return `
              <div class="group-team" onclick="window.location.hash='teams/${team?.code || ''}'">
                <span class="flag">${team?.flag || '🏳️'}</span>
                <span class="team-name">${teamName}</span>
                <span class="ranking">#${team?.fifaRanking || '-'}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // ============================================================
  // TEAMS PAGE
  // ============================================================
  renderTeams() {
    const confederations = ['All', 'UEFA', 'CONMEBOL', 'CONCACAF', 'AFC', 'CAF', 'OFC'];

    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">🌍</span> All 48 Teams</h2>
        </div>
        <div class="fixture-filters" id="team-filters">
          ${confederations.map(c => `
            <button class="filter-btn ${c === 'All' ? 'active' : ''}" data-conf="${c}">${c}</button>
          `).join('')}
        </div>
        <div class="groups-grid" id="teams-grid">
          ${WC2026.teams.sort((a, b) => a.fifaRanking - b.fifaRanking).map(team => `
            <div class="card group-card animate-in" style="cursor:pointer" onclick="window.location.hash='teams/${team.code}'">
              <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px;">
                <span style="font-size:2.5rem">${team.flag}</span>
                <div>
                  <h3 style="font-size:1.1rem;font-weight:700;">${team.name}</h3>
                  <span style="font-size:0.75rem;color:var(--text-muted)">${team.confederation} • Group ${team.group}</span>
                </div>
              </div>
              <div style="display:flex;gap:12px;">
                <div class="team-meta-item" style="flex:1">
                  <div class="meta-label">Ranking</div>
                  <div class="meta-value">#${team.fifaRanking}</div>
                </div>
                <div class="team-meta-item" style="flex:1">
                  <div class="meta-label">Apps</div>
                  <div class="meta-value">${team.appearances}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById('team-filters').addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#team-filters .filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const conf = e.target.dataset.conf;
        const filtered = conf === 'All' ? WC2026.teams : WC2026.teams.filter(t => t.confederation === conf);
        document.getElementById('teams-grid').innerHTML = filtered.sort((a, b) => a.fifaRanking - b.fifaRanking).map(team => `
          <div class="card group-card animate-in" style="cursor:pointer" onclick="window.location.hash='teams/${team.code}'">
            <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px;">
              <span style="font-size:2.5rem">${team.flag}</span>
              <div>
                <h3 style="font-size:1.1rem;font-weight:700;">${team.name}</h3>
                <span style="font-size:0.75rem;color:var(--text-muted)">${team.confederation} • Group ${team.group}</span>
              </div>
            </div>
            <div style="display:flex;gap:12px;">
              <div class="team-meta-item" style="flex:1">
                <div class="meta-label">Ranking</div>
                <div class="meta-value">#${team.fifaRanking}</div>
              </div>
              <div class="team-meta-item" style="flex:1">
                <div class="meta-label">Apps</div>
                <div class="meta-value">${team.appearances}</div>
              </div>
            </div>
          </div>
        `).join('');
      }
    });
  }

  renderTeamDetail(code) {
    const team = WC2026.teams.find(t => t.code === code);
    if (!team) return this.renderTeams();

    const teamFixtures = WC2026.fixtures.filter(f => f.home === team.name || f.away === team.name);
    const groupTeams = WC2026.groups[team.group]?.teams || [];

    this.mainContent.innerHTML = `
      <div class="container">
        <button class="back-btn" onclick="window.location.hash='teams'">← All Teams</button>

        <div class="team-header" style="border-left: 4px solid ${team.colors.primary}">
          <div class="team-flag-large">${team.flag}</div>
          <div class="team-info">
            <h1>${team.name}</h1>
            <p style="color: var(--text-secondary); margin-bottom: 4px;">${team.confederation} • Group ${team.group}</p>
            <div class="team-meta">
              <div class="team-meta-item">
                <div class="meta-label">FIFA Ranking</div>
                <div class="meta-value">#${team.fifaRanking}</div>
              </div>
              <div class="team-meta-item">
                <div class="meta-label">Coach</div>
                <div class="meta-value">${team.coach}</div>
              </div>
              <div class="team-meta-item">
                <div class="meta-label">Captain</div>
                <div class="meta-value">${team.captain}</div>
              </div>
              <div class="team-meta-item">
                <div class="meta-label">Appearances</div>
                <div class="meta-value">${team.appearances}</div>
              </div>
              <div class="team-meta-item">
                <div class="meta-label">Best Finish</div>
                <div class="meta-value">${team.bestFinish}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Players -->
        <section style="margin-bottom:32px">
          <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 16px;">⭐ Key Players</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${team.keyPlayers.map(name => `
              <span class="player-chip" style="background: linear-gradient(135deg, ${team.colors.primary}22, ${team.colors.secondary}22); border-color: ${team.colors.primary}44;">
                ${name}
              </span>
            `).join('')}
          </div>
        </section>

        <!-- Group -->
        <section style="margin-bottom:32px">
          <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 16px;">🏆 Group ${team.group}</h2>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${groupTeams.map(name => {
              const t = this.getTeamByName(name);
              return `
                <div class="card" style="padding: 14px 20px; display: flex; align-items: center; gap: 12px; cursor: pointer; ${name === team.name ? 'border-color: var(--accent); background: rgba(255,215,0,0.05);' : ''}" onclick="window.location.hash='teams/${t?.code}'">
                  <span style="font-size: 1.5rem">${t?.flag || '🏳️'}</span>
                  <span style="flex: 1; font-weight: 500;">${name}</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">#${t?.fifaRanking}</span>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Fixtures -->
        ${teamFixtures.length > 0 ? `
          <section style="margin-bottom:32px">
            <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 16px;">📅 Fixtures</h2>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${teamFixtures.map(f => this.renderFixtureCard(f)).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Squad -->
        <div class="squad-section">
          <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 20px;">👥 Full Squad</h2>
          ${this.renderSquadSection('🧤 Goalkeepers', team.squad.goalkeepers)}
          ${this.renderSquadSection('🛡️ Defenders', team.squad.defenders)}
          ${this.renderSquadSection('🎯 Midfielders', team.squad.midfielders)}
          ${this.renderSquadSection('⚡ Forwards', team.squad.forwards)}
        </div>
      </div>
    `;
  }

  renderSquadSection(title, players) {
    return `
      <div class="squad-position">
        <h3>${title}</h3>
        <div class="squad-list">
          ${players.map(p => `<div class="player-chip">${p}</div>`).join('')}
        </div>
      </div>
    `;
  }

  // ============================================================
  // PLAYERS PAGE
  // ============================================================
  renderPlayers() {
    const positions = ['All', 'Forward', 'Midfielder', 'Defender'];

    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">⭐</span> Star Players</h2>
        </div>
        <div class="fixture-filters" id="player-filters">
          ${positions.map(p => `
            <button class="filter-btn ${p === 'All' ? 'active' : ''}" data-pos="${p}">${p}s</button>
          `).join('')}
        </div>
        <div class="players-grid" id="players-grid">
          ${WC2026.starPlayers.sort((a, b) => b.rating - a.rating).map(p => this.renderPlayerCard(p)).join('')}
        </div>
      </div>
    `;

    document.getElementById('player-filters').addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#player-filters .filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const pos = e.target.dataset.pos;
        const filtered = pos === 'All' ? WC2026.starPlayers : WC2026.starPlayers.filter(p => p.position === pos);
        document.getElementById('players-grid').innerHTML = filtered.sort((a, b) => b.rating - a.rating).map(p => this.renderPlayerCard(p)).join('');
      }
    });
  }

  renderPlayerCard(player) {
    const team = this.getTeamByName(player.team);
    return `
      <div class="card player-card animate-in" onclick="window.location.hash='teams/${team?.code || ''}'">
        <div class="player-avatar">
          ${player.flag}
          <span class="rating">${player.rating}</span>
        </div>
        <h3>${player.name}</h3>
        <div class="player-team">${player.team} • ${player.position}</div>
        <div style="font-size:0.75rem; color: var(--text-muted); margin-bottom: 8px;">${player.club}</div>
        <div class="player-stats">
          <span><strong>${player.goals}</strong> Goals</span>
          <span><strong>${player.caps}</strong> Caps</span>
        </div>
      </div>
    `;
  }

  // ============================================================
  // STADIUMS PAGE
  // ============================================================
  renderStadiums() {
    const countries = ['All', 'USA', 'Mexico', 'Canada'];

    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">🏟️</span> Stadiums & Venues</h2>
        </div>
        <div class="fixture-filters" id="stadium-filters">
          ${countries.map(c => `
            <button class="filter-btn ${c === 'All' ? 'active' : ''}" data-country="${c}">${c}</button>
          `).join('')}
        </div>
        <div class="stadiums-grid" id="stadiums-grid">
          ${WC2026.stadiums.map(s => this.renderStadiumCard(s)).join('')}
        </div>
      </div>
    `;

    document.getElementById('stadium-filters').addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#stadium-filters .filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const country = e.target.dataset.country;
        const filtered = country === 'All' ? WC2026.stadiums : WC2026.stadiums.filter(s => s.country === country);
        document.getElementById('stadiums-grid').innerHTML = filtered.map(s => this.renderStadiumCard(s)).join('');
      }
    });
  }

  renderStadiumCard(stadium) {
    const countryFlags = { USA: '🇺🇸', Mexico: '🇲🇽', Canada: '🇨🇦' };
    return `
      <div class="card stadium-card animate-in" onclick="window.location.hash='stadiums/${stadium.id}'">
        <div class="card-image">
          <img src="${stadium.image}" alt="${stadium.name}" loading="lazy">
          <span class="country-badge">${countryFlags[stadium.country] || ''} ${stadium.country}</span>
        </div>
        <div class="card-body">
          <h3>${stadium.name}</h3>
          <div class="city">📍 ${stadium.city}</div>
          <div class="stadium-stats">
            <div class="stadium-stat">
              <div class="stat-value">${(stadium.capacity / 1000).toFixed(1)}k</div>
              <div class="stat-label">Capacity</div>
            </div>
            <div class="stadium-stat">
              <div class="stat-value">${stadium.yearBuilt}</div>
              <div class="stat-label">Built</div>
            </div>
            <div class="stadium-stat">
              <div class="stat-value">${stadium.hostMatches.length}</div>
              <div class="stat-label">Matches</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderStadiumDetail(id) {
    const stadium = WC2026.stadiums.find(s => s.id === parseInt(id));
    if (!stadium) return this.renderStadiums();

    const stadiumFixtures = WC2026.fixtures.filter(f => f.stadium === stadium.name);
    const countryFlags = { USA: '🇺🇸', Mexico: '🇲🇽', Canada: '🇨🇦' };

    this.mainContent.innerHTML = `
      <div class="container">
        <button class="back-btn" onclick="window.location.hash='stadiums'">← All Stadiums</button>

        <div style="border-radius: var(--radius-lg); overflow: hidden; height: 350px; margin-bottom: 32px; position: relative;">
          <img src="${stadium.image}" alt="${stadium.name}" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px;">
            <h1 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800;">${stadium.name}</h1>
            <p style="color: var(--text-secondary);">${countryFlags[stadium.country]} ${stadium.city}, ${stadium.country}</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 32px;">
          <div class="card" style="padding: 20px; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Capacity</div>
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">${stadium.capacity.toLocaleString()}</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Year Built</div>
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">${stadium.yearBuilt}</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Surface</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent);">${stadium.surface}</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Matches</div>
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">${stadium.hostMatches.length}</div>
          </div>
        </div>

        <div class="card" style="padding: 24px; margin-bottom: 32px;">
          <p style="color: var(--text-secondary); line-height: 1.7;">${stadium.description}</p>
        </div>

        <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 16px;">🏆 Hosting Stages</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;">
          ${stadium.hostMatches.map(m => `
            <span style="padding: 6px 16px; background: rgba(139,21,56,0.15); border-radius: 20px; font-size: 0.85rem; color: var(--primary-light); font-weight: 500;">${m}</span>
          `).join('')}
        </div>

        ${stadiumFixtures.length > 0 ? `
          <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 16px;">📅 Matches at This Venue</h2>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${stadiumFixtures.map(f => this.renderFixtureCard(f)).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  // ============================================================
  // HISTORY PAGE
  // ============================================================
  renderHistory() {
    this.mainContent.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2><span class="emoji">📜</span> World Cup History</h2>
        </div>

        <!-- Records -->
        <section style="margin-bottom: 48px;">
          <h3 style="font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 20px;">🏅 All-Time Records</h3>
          <div class="records-grid">
            <div class="card record-card animate-in">
              <div class="record-icon">⚽</div>
              <div class="record-title">All-Time Top Scorer</div>
              <div class="record-value">${WC2026.records.allTimeTopScorer.goals} Goals</div>
              <div class="record-detail">${WC2026.records.allTimeTopScorer.name} (${WC2026.records.allTimeTopScorer.country})</div>
            </div>
            <div class="card record-card animate-in">
              <div class="record-icon">👟</div>
              <div class="record-title">Most Appearances</div>
              <div class="record-value">${WC2026.records.mostAppearances.matches} Matches</div>
              <div class="record-detail">${WC2026.records.mostAppearances.name} (${WC2026.records.mostAppearances.country})</div>
            </div>
            <div class="card record-card animate-in">
              <div class="record-icon">🏆</div>
              <div class="record-title">Most Titles</div>
              <div class="record-value">${WC2026.records.mostTitles.titles} Titles</div>
              <div class="record-detail">${WC2026.records.mostTitles.country}</div>
            </div>
            <div class="card record-card animate-in">
              <div class="record-icon">⚡</div>
              <div class="record-title">Fastest Goal</div>
              <div class="record-value">${WC2026.records.fastestGoal.seconds} Seconds</div>
              <div class="record-detail">${WC2026.records.fastestGoal.name} (${WC2026.records.fastestGoal.year})</div>
            </div>
            <div class="card record-card animate-in">
              <div class="record-icon">🎯</div>
              <div class="record-title">Most Goals (Tournament)</div>
              <div class="record-value">${WC2026.records.mostGoalsInTournament.goals} Goals</div>
              <div class="record-detail">${WC2026.records.mostGoalsInTournament.name} (${WC2026.records.mostGoalsInTournament.year})</div>
            </div>
            <div class="card record-card animate-in">
              <div class="record-icon">🎯</div>
              <div class="record-title">Highest Scoring Match</div>
              <div class="record-value">12 Goals</div>
              <div class="record-detail">${WC2026.records.highestScoringMatch.match} (${WC2026.records.highestScoringMatch.year})</div>
            </div>
          </div>
        </section>

        <!-- Confederation Breakdown -->
        <section style="margin-bottom: 48px;">
          <h3 style="font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 20px;">🌍 Confederations</h3>
          <div class="confed-grid">
            ${WC2026.confederations.map(conf => `
              <div class="card confed-card animate-in">
                <div class="confed-header">
                  <span class="confed-name" style="border-left: 3px solid ${conf.color}; padding-left: 10px;">${conf.name}</span>
                  <span class="confed-slots">${conf.teams.length} teams</span>
                </div>
                <div class="confed-teams">
                  ${conf.teams.map(t => `<span class="confed-team-chip">${this.getFlag(t)} ${t}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Timeline -->
        <section>
          <h3 style="font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 20px;">📅 Past World Cups</h3>
          <div class="history-timeline">
            ${WC2026.history.map(h => `
              <div class="card history-card animate-in">
                <div class="year-badge">${h.year}</div>
                <div class="history-info">
                  <div class="history-detail">
                    <div class="detail-label">Host</div>
                    <div class="detail-value">${h.host}</div>
                  </div>
                  <div class="history-detail winner">
                    <div class="detail-label">Winner 🏆</div>
                    <div class="detail-value">${h.winner}</div>
                  </div>
                  <div class="history-detail">
                    <div class="detail-label">Runner-Up</div>
                    <div class="detail-value">${h.runnerUp}</div>
                  </div>
                  <div class="history-detail">
                    <div class="detail-label">Top Scorer</div>
                    <div class="detail-value">${h.topScorer}</div>
                  </div>
                  <div class="history-detail">
                    <div class="detail-label">Golden Ball</div>
                    <div class="detail-value">${h.goldenBall}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;
  }

  // ============================================================
  // RECORDS PAGE (standalone)
  // ============================================================
  renderRecords() {
    this.renderHistory();
  }
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  window.app = new WorldCupApp();
});
