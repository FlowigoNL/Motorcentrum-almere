export const headerContent = `
  <header class="mca-header" id="mca-header">
    <div class="mca-header-inner">

      <a href="/" class="mca-logo" aria-label="Motorcentrum Almere - homepage">
        <img src="/logo.png" alt="Motorcentrum Almere" width="160" height="52" />
      </a>

      <nav class="mca-nav" id="mca-nav" aria-label="Hoofdnavigatie">
        <a href="/occasions.html" class="mca-nav-link">Occasions</a>
        <a href="/nieuwe-motoren.html" class="mca-nav-link">Nieuwe Motoren</a>
        <a href="/werkplaats.html" class="mca-nav-link">Werkplaats</a>
        <a href="/kleding.html" class="mca-nav-link">Kleding &amp; Helmen</a>
        <a href="/verhuur-motoren.html" class="mca-nav-link">Verhuur</a>
        <a href="/over-ons.html" class="mca-nav-link">Over Ons</a>
      </nav>

      <div class="mca-header-right">
        <a href="/contact.html" class="mca-contact-btn">Contact</a>
        <button class="mca-hamburger" id="mca-hamburger" aria-label="Menu openen" aria-expanded="false" aria-controls="mca-nav">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>
  </header>

  <style>
    .mca-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 0;
      margin: 0;
      background: rgba(8,8,8,0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      transition: background 0.3s, box-shadow 0.3s;
    }
    .mca-header.scrolled {
      background: rgba(8,8,8,0.98);
      box-shadow: 0 2px 20px rgba(0,0,0,0.4);
    }
    .mca-header-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 clamp(20px, 4vw, 60px);
      height: 72px;
      display: flex;
      align-items: center;
      gap: 40px;
    }
    .mca-logo {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    .mca-logo img {
      height: 36px;
      width: auto;
      object-fit: contain;
    }
    .mca-nav {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
    }
    .mca-nav-link {
      display: inline-flex;
      align-items: center;
      height: 40px;
      padding: 0 14px;
      font-family: 'Roboto', sans-serif;
      font-size: 0.82rem;
      font-weight: 500;
      color: rgba(255,255,255,0.65);
      text-decoration: none;
      border-radius: 6px;
      white-space: nowrap;
      transition: color 0.2s, background 0.2s;
      letter-spacing: 0.2px;
    }
    .mca-nav-link:hover {
      color: #fff;
      background: rgba(255,255,255,0.07);
    }
    .mca-nav-link.active {
      color: var(--mc-orange);
      background: rgba(232,93,4,0.08);
    }
    .mca-header-right {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .mca-contact-btn {
      display: inline-flex;
      align-items: center;
      height: 38px;
      padding: 0 20px;
      background: var(--mc-orange);
      color: #fff;
      font-family: 'Oswald', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.2s, transform 0.2s;
      white-space: nowrap;
    }
    .mca-contact-btn:hover {
      background: var(--mc-orange-hover);
      transform: translateY(-1px);
    }
    .mca-hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px;
      height: 36px;
      padding: 6px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      cursor: pointer;
    }
    .mca-hamburger span {
      display: block;
      width: 100%;
      height: 1.5px;
      background: rgba(255,255,255,0.7);
      border-radius: 2px;
      transition: all 0.25s;
    }
    .mca-hamburger.open span:nth-child(1) {
      transform: translateY(6.5px) rotate(45deg);
    }
    .mca-hamburger.open span:nth-child(2) {
      opacity: 0;
    }
    .mca-hamburger.open span:nth-child(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }

    /* Push page content below fixed header */
    body { padding-top: 72px; }

    @media (max-width: 768px) {
      .mca-hamburger { display: flex; }
      .mca-nav {
        display: none;
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background: rgba(10,10,10,0.97);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 12px 16px 24px;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 8px 30px rgba(0,0,0,0.4);
      }
      .mca-nav.open { display: flex; }
      .mca-nav-link {
        height: 48px;
        padding: 0 12px;
        border-radius: 8px;
        font-size: 0.95rem;
      }
    }
  </style>
`;
