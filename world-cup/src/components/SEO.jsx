import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'FIFA World Cup 2026™ Fan Hub';
const BASE_URL = 'https://worldcup2026.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * Lightweight SEO component — sets document title + meta tags per page.
 * No external dependency needed; works with React 19.
 *
 * Props:
 *   title       – page-specific title (auto-appended with site name)
 *   description – meta description (max ~155 chars for Google snippet)
 *   keywords    – comma-separated keyword string
 *   ogImage     – Open Graph image URL (optional)
 *   ogType      – Open Graph type (default "website")
 *   noIndex     – if true, adds noindex (e.g. admin page)
 *   jsonLd      – optional JSON-LD object for page-level structured data
 */
export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  noIndex = false,
  jsonLd,
}) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${BASE_URL}${pathname}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set/create a <meta> tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set/create a <link> tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard meta
    if (description) setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    if (description) setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage || DEFAULT_OG_IMAGE);

    // Twitter
    setMeta('name', 'twitter:title', fullTitle);
    if (description) setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage || DEFAULT_OG_IMAGE);

    // JSON-LD (per-page)
    let scriptId = 'seo-page-jsonld';
    let scriptEl = document.getElementById(scriptId);
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, ogType, noIndex, jsonLd]);

  return null;
}
