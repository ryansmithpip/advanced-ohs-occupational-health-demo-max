/* =====================================================================
   ADVANCED OHS — Shared UI Components + Interactions
   Single source of truth for <header> / <footer>; plus nav, reveals,
   accordion, and header-on-scroll behaviour.
   ===================================================================== */
(function () {
  "use strict";

  /* ---- Inline SVG icon set (consistent iconography) ----------------- */
  const I = {
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    external:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    stethoscope:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>',
    clipboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
    activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
    video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
    pulse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>',
    leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
    info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    menu:'<svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></svg>'+
         '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
  };

  const BOOK = "https://consumer.scheduling.athena.io/?locationId=34109-1";
  const PORTAL = "https://34109-1.portal.athenahealth.com/";

  const NAV = [
    { href: "index.html", label: "Home" },
    { href: "services.html", label: "Services" },
    { href: "team.html", label: "Our Team" },
    { href: "resources.html", label: "Resources" },
    { href: "contact.html", label: "Contact" }
  ];

  function here(href) {
    const p = location.pathname.split("/").pop() || "index.html";
    return p === href;
  }

  /* ---- Header -------------------------------------------------------- */
  function headerHTML() {
    const links = NAV.map(n =>
      `<a class="nav__link${here(n.href) ? ' is-cta' : ''}" href="${n.href}"${here(n.href) ? ' aria-current="page"' : ''}>${n.label}</a>`
    ).join("");
    return `
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header" id="siteHeader">
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="Advanced Occupational Health Services — home">
          <img class="brand__logo" src="assets/img/logo.svg" alt="Advanced OHS logo">
          <span class="brand__text">
            <span class="brand__name">Advanced OHS</span>
            <span class="brand__sub">Occupational Health</span>
          </span>
        </a>
        <nav class="nav__links" id="navLinks" aria-label="Primary">${links}</nav>
        <div class="nav__actions">
          <a class="nav__phone" href="tel:+14256502727">${I.phone} (425) 650-2727</a>
          <a class="btn btn--sm" href="${BOOK}" target="_blank" rel="noopener">Schedule Appointment</a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">${I.menu}</button>
        </div>
      </div>
    </header>`;
  }

  /* ---- Footer -------------------------------------------------------- */
  function footerHTML() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a class="brand" href="index.html" aria-label="Advanced OHS home">
              <img class="brand__logo" src="assets/img/logo.svg" alt="Advanced OHS logo" style="filter:brightness(0) invert(1)">
              <span class="brand__text">
                <span class="brand__name">Advanced OHS</span>
                <span class="brand__sub">Occupational Health</span>
              </span>
            </a>
            <p>Expert, evidence-based occupational medicine in Renton, WA — helping injured workers recover and employers keep their teams safe.</p>
            <div class="chip-list" style="margin-top:18px">
              <span class="hipaa-badge">${I.shield} HIPAA-Compliant</span>
              <span class="hipaa-badge">${I.award} Board-Certified</span>
            </div>
          </div>
          <div class="footer-col">
            <h5>Explore</h5>
            <ul>
              ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
              <li><a href="privacy.html">Privacy &amp; HIPAA</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="https://lni.wa.gov/" target="_blank" rel="noopener noreferrer">WA State L&amp;I ${I.external}</a></li>
              <li><a href="https://acoem.org/" target="_blank" rel="noopener noreferrer">ACOEM ${I.external}</a></li>
              <li><a href="${PORTAL}" target="_blank" rel="noopener noreferrer">Patient Portal ${I.external}</a></li>
              <li><a href="${BOOK}" target="_blank" rel="noopener">Schedule a Visit</a></li>
            </ul>
          </div>
          <div class="footer-col footer-contact">
            <h5>Contact</h5>
            <div class="footer-contact__item">${I.pin}<span>4174 Lind Avenue SW<br>Renton, WA 98057</span></div>
            <div class="footer-contact__item">${I.phone}<a href="tel:+14256502727">(425) 650-2727</a></div>
            <div class="footer-contact__item">${I.mail}<a href="mailto:patientsupport@advancedohs.com">patientsupport@advancedohs.com</a></div>
            <div class="footer-contact__item">${I.clock}<span>Mon–Fri · 8:00 AM – 5:00 PM</span></div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="yr"></span> Advanced Occupational Health Services. All rights reserved.</span>
          <span>
            <a href="privacy.html">Privacy Policy</a> ·
            <a href="privacy.html">Notice of Privacy Practices</a> ·
            <a href="https://lni.wa.gov/" target="_blank" rel="noopener noreferrer">WA L&amp;I</a>
          </span>
        </div>
      </div>
    </footer>`;
  }

  /* ---- Mount --------------------------------------------------------- */
  function mount() {
    // Insert header markup (skip-link + <header>) at the very top of <body>, in order
    const headerFrag = document.createRange().createContextualFragment(headerHTML());
    document.body.insertBefore(headerFrag, document.body.firstChild);
    // Append footer markup at the end of <body>
    const footerFrag = document.createRange().createContextualFragment(footerHTML());
    document.body.appendChild(footerFrag);

    const yr = document.getElementById("yr");
    if (yr) yr.textContent = new Date().getFullYear();

    /* Mobile toggle */
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      links.querySelectorAll("a").forEach(a =>
        a.addEventListener("click", () => {
          links.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }));
    }

    /* Header shadow on scroll */
    const header = document.getElementById("siteHeader");
    const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Inject named icons into [data-i] placeholders (robust + DRY) */
    document.querySelectorAll("[data-i]").forEach(el => {
      const name = el.getAttribute("data-i");
      if (I[name]) el.innerHTML = I[name];
    });

    /* Reveal on scroll */
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    }

    /* Accordion */
    document.querySelectorAll(".acc-trigger").forEach(btn => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        const panel = btn.nextElementSibling;
        if (panel) panel.style.maxHeight = !expanded ? panel.scrollHeight + "px" : null;
      });
    });

    /* Contact form (demo): show success, no real submission */
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ok = form.querySelector(".form-success");
        const card = form.querySelector(".form-card");
        if (card) card.style.display = "none";
        if (ok) ok.classList.add("show");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  // expose icon set for inline use on pages
  window.AOHS = { icons: I, BOOK, PORTAL };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
