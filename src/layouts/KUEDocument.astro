---
import { getEntry } from 'astro:content';

const { slug } = Astro.props;

const entry = await getEntry('kue', slug);
if (!entry) {
  throw new Error(`Document not found: ${slug}`);
}

const { Content } = await entry.render();

const categoryLabels: Record<string, string> = {
  BIO: 'Biographical Profile',
  SCI: 'Scientific Framework',
  TEC: 'Technical Specification',
  LSC: 'Life Sciences',
  PHY: 'Physics',
  ARC: 'Architecture',
  HIS: 'Historical Research',
  GEO: 'Geography & Planetary Science',
  PSY: 'Psychology',
  SOC: 'Sociology',
  LNG: 'Linguistics',
  ECO: 'Ecology',
  ORG: 'Organizational Models',
  OBS: 'Observation Notes',
  FND: 'Foundational Document',
  OPS: 'Operations',
  MET: 'Methodology',
};

const categoryLabel = categoryLabels[entry.data.kategorie] || entry.data.kategorie;
---

<!DOCTYPE html>
<html lang={entry.data.sprache.toLowerCase()}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{entry.data.titel} — KUEPER.COM ARCHIV</title>
  <meta name="description" content={entry.data.titel}>
  <meta name="keywords" content={entry.data.keywords.join(', ')}>
  
  <!-- Fonts -->
  <link rel="stylesheet" href="/styles/fonts.css">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/styles/kue-document.css">
  <link rel="stylesheet" href="/styles/kue-print.css" media="print">
</head>
<body>
  <!-- Navigation -->
  <nav class="doc-nav">
    <div class="nav-content">
      <a href="/" class="nav-brand">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        KUEPER.COM
      </a>
      
      <button class="print-btn" onclick="window.print()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 6 2 18 2 18 9"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <rect x="6" y="14" width="12" height="8"/>
        </svg>
        <span>Print</span>
      </button>
    </div>
  </nav>

  <!-- Main Container -->
  <div class="doc-container">
    <!-- Header -->
    <header class="doc-header">
      <svg class="doc-logo" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
      
      <div class="doc-category">{categoryLabel}</div>
      <h1 class="doc-title">{entry.data.titel}</h1>
      <div class="doc-signature">{entry.data.signatur}</div>
    </header>

    <!-- Metadata -->
    <div class="doc-meta">
      <div class="meta-grid">
        <div class="meta-item">
          <div class="meta-label">Signatur</div>
          <div class="meta-value"><code>{entry.data.signatur}</code></div>
        </div>
        
        <div class="meta-item">
          <div class="meta-label">Kategorie</div>
          <div class="meta-value">{entry.data.kategorie} — {categoryLabel}</div>
        </div>
        
        <div class="meta-item">
          <div class="meta-label">Epistemische Marker</div>
          <div class="meta-markers">
            {entry.data.marker.map(m => (
              <span class={`marker marker-${m.toLowerCase()}`}>{m}</span>
            ))}
          </div>
        </div>
        
        <div class="meta-item">
          <div class="meta-label">Version</div>
          <div class="meta-value">{entry.data.version}</div>
        </div>
        
        <div class="meta-item">
          <div class="meta-label">Status</div>
          <div class="meta-value">{entry.data.status}</div>
        </div>
        
        <div class="meta-item">
          <div class="meta-label">Datum</div>
          <div class="meta-value">{new Date(entry.data.datum).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        
        <div class="meta-item">
          <div class="meta-label">Sprache</div>
          <div class="meta-value">{entry.data.sprache}</div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <article class="doc-content">
      <Content />
    </article>

    <!-- Footer -->
    <footer class="doc-footer">
      <div class="footer-sig">
        <span>{entry.data.signatur}</span>
        <span>·</span>
        <span>Version {entry.data.version}</span>
        <span>·</span>
        <span>{new Date(entry.data.datum).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <div class="footer-text">
        KUEPER.COM ARCHIV · WISSENSCHAFTLICHE WISSENSBASIS
      </div>
    </footer>
  </div>
</body>
</html>
