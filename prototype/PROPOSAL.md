# Advanced OHS — Premium Website Redesign & Expansion
### Flagship Strategy, Design System & Webflow Implementation Specification

**Client:** Louis Lim · Advanced Occupational Health Services (Advanced OHS)
**Prepared for:** louislim@advancedohs.com · (253) 365-9043 · Renton, WA 98057
**Live prototype:** served in your workspace (`index.html` → Homepage, plus Services, Team, Resources, Contact, Privacy)
**Version:** 1.0 · Client-ready proposal

---

> **The one-line vision:** Transform advancedohs.com from an informational brochure into a **conversion engine** — a premium, HIPAA-secure, mobile-first experience that makes injured workers feel cared for, employers feel confident, and referring providers feel compelled to send patients your way. The existing brand (gradient silhouettes, deep blues → purples) is preserved and *elevated* — not replaced.

This document is the strategic blueprint behind the live prototype. Read it alongside the clickable prototype, where every section described here is already designed and built.

---

## Table of Contents
1. [Executive Summary & Strategic Approach](#1-executive-summary--strategic-approach)
2. [Site Map: Pages, Purposes & Conversion Goals](#2-site-map)
3. [The Design System (Refined Brand)](#3-the-design-system)
4. [Page-by-Page Blueprints, Copy & Rationale](#4-page-by-page-blueprints)
5. [Webflow Implementation Guidance](#5-webflow-implementation-guidance)
6. [Conversion & UX Rationale (The "Why")](#6-conversion--ux-rationale)
7. [Resources Page — Curated External Links](#7-external-links)
8. [HIPAA, Security & Compliance Checklist](#8-hipaa-security--compliance)
9. [Recommended Next Steps & Timeline](#9-next-steps)

---

## 1. Executive Summary & Strategic Approach

**What we're delivering (3–5 new high-value pages + enhanced homepage):**

| # | Page | Status | Primary Job |
|---|------|--------|-------------|
| 1 | **Homepage** | Rebuilt as a landing page | Convert → Book / Schedule |
| 2 | **Services** | New | Convert + route to right service |
| 3 | **Our Team** | Expanded | Build trust → Book |
| 4 | **Resources (Patient & Employer Hub)** | New | Authority + SEO + nurture |
| 5 | **Contact** | New/Enhanced | Capture inquiries → email |
| 6 | **Privacy & HIPAA** | New (5th, bonus) | Trust + compliance |

**Three guiding principles (every decision traces back to these):**

1. **Conversion-first, always.** Every page has one primary action and makes it frictionless. The "Book a Consultation / Schedule Appointment" CTA is reachable from anywhere within one tap.
2. **Compassionate credibility.** We balance *warmth* (recovery, partnership, human language) with *authority* (board certifications, L&I advisory roles, evidence-based care). Never sterile; never soft.
3. **Preserve & elevate the brand.** The logo stays. The blue→purple gradient stays. We add depth: refined gradients, glass-morphism used sparingly, soft shadows, generous whitespace, and a teal/cyan accent reserved for high-value CTAs so the eye always knows where to go.

**Why this works for Advanced OHS specifically:** You have a genuinely rare credential set — physicians on **WA L&I's IIMAC and ACHIEv committees**, an **ACOEM Fellow chairing a national section**, and a PA with elite urgent-care/trauma experience. Most occupational-medicine sites bury this. We surface it as a competitive moat.

---

## 2. Site Map

```
advancedohs.com
│
├── /  (Homepage) ……………………… Conversion engine → Book Consultation
│
├── /services …………………………… Explore + route → Schedule / Employer inquiry
│   ├─ #work-injury
│   ├─ #fitness-for-duty
│   ├─ #telemedicine
│   └─ #medical-director
│
├── /team …………………………………… Trust + authority → Book with specific provider
│   ├─ #lim  (Dr. Louis Lim)
│   ├─ #morris (Dr. Scott Morris)
│   └─ #aljic (Midhat Aljic, PA-C)
│
├── /resources ………………………… Patient & Employer Hub (external links) → Contact
│   ├─ #workers (Injured Workers)
│   ├─ #employers (Employers)
│   └─ #clinical (Clinical/Professional)
│
├── /contact …………………………… Capture inquiries → routed to email + Schedule
│
└── /privacy …………………………… HIPAA trust + compliance
```

| Page | Primary Audience | Primary Conversion Goal | Secondary Goal |
|------|------------------|------------------------|----------------|
| **Homepage** | Injured workers (first) | Click "Book a Consultation" / Schedule | Explore Services, Team, Resources |
| **Services** | Injured workers + Employers | Schedule / Employer-services inquiry | Self-select correct service |
| **Our Team** | All (trust-building) | Book with a specific provider | Read bios / feel reassured |
| **Resources** | Injured workers + Employers + Providers | Authority + return visits / SEO | Click through to Contact |
| **Contact** | Ready-to-act visitors | Submit secure form / call | Find hours & directions |
| **Privacy** | All (compliance/trust) | Reassure → return to booking | Meet HIPAA notice expectations |

**Global elements (on every page):** sticky nav with logo + primary CTA · phone always visible · footer with contact, HIPAA badge, external resource links, privacy links.

---

## 3. The Design System

Refined, not reinvented. These are the exact tokens implemented in `assets/css/styles.css`.

### 3.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Navy 900** | `#0A1430` | Darkest backgrounds, footer |
| **Navy 800** | `#0B1F3A` | Hero base, deep sections |
| **Blue 700** | `#1E3A8A` | Brand gradient start |
| **Blue 500** | `#2563EB` | Links, CTA gradient end |
| **Violet 600** | `#7C3AED` | Brand gradient end, accents, eyebrows |
| **Violet 500** | `#8B5CF6` | Hover, icon tints |
| **Teal 500** | `#06B6D4` | Accent |
| **Teal 400 / Cyan** | `#22D3EE` / `#19C2D6` | **Primary CTA accent** (reserved) |
| **Paper** | `#F6F8FC` | Light section backgrounds |
| **Paper-2** | `#EEF2FA` | Subtle cards, chips |
| **Ink 900** | `#101A33` | Headings |
| **Ink 700** | `#2E3440` | Body text |
| **Ink 500** | `#5A6B8C` | Muted/secondary text |
| **Line** | `#E4EAF4` | Borders, dividers |
| **Emerald** | `#34D399 / #10B981` | "Live" / success indicators |

**Signature gradients**
- **Brand:** `linear-gradient(135deg, #1E3A8A 0%, #6D28D9 100%)` — logo-aligned hero bands
- **Brand Deep:** `linear-gradient(150deg, #0B1F3A, #1E3A8A 45%, #6D28D9)` — hero/CTA backgrounds
- **CTA:** `linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)` — *only* on primary action buttons (the "click here" signal)
- **Text accent:** `linear-gradient(110deg, #7C3AED, #22D3EE)` — for emphasis words in headlines

**Rationale:** Reserving teal/cyan exclusively for the primary CTA creates a single, unambiguous visual "trail" through every page — the eye follows teal to the next action.

### 3.2 Typography

- **Headings:** *Plus Jakarta Sans* (500–800) — geometric, premium, friendly-yet-credible
- **Body:** *Inter* (400–600) — exceptional screen legibility
- Both load via Google Fonts with a robust system-font fallback (no FOUT impact on legibility).

**Fluid scale (clamp-based, scales smoothly across breakpoints):**

| Role | Size |
|------|------|
| Hero H1 | `clamp(2.6rem, 5.6vw, 4.6rem)` |
| H1 | `clamp(2.1rem, 4.2vw, 3.3rem)` |
| H2 | `clamp(1.7rem, 3vw, 2.45rem)` |
| H3 | `clamp(1.28rem, 1.8vw, 1.6rem)` |
| Lead | `clamp(1.1rem, 1.5vw, 1.32rem)` |
| Body | `1.0625rem` / line-height 1.65 |

Heading tracking `-0.02em`; eyebrows uppercase, `0.14em` tracking.

### 3.3 Spacing, Radii, Shadows, Motion

- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px
- **Radii:** sm 10 · md 16 · lg 24 · xl 32 · pill 999
- **Shadows:** layered soft shadows (`--sh-sm/md/lg`) + brand glow on CTAs (`--sh-glow`)
- **Motion:** transitions `0.18–0.28s` with `cubic-bezier(.16,1,.3,1)`; scroll-reveal at 0.7s; full `prefers-reduced-motion` support.

### 3.4 Buttons

| Class | Use |
|-------|-----|
| `.btn` (primary) | Gradient teal→blue, glow, hover lift. **Primary actions only.** |
| `.btn--secondary` | White with shadow — high-contrast secondary on dark |
| `.btn--ghost` | Outlined white — on dark backgrounds |
| `.btn--ghost-dark` | Outlined violet — on light backgrounds |
| `.btn--lg / --sm` | Size variants |
| `.link-arrow` | Tertiary text links with animated arrow |

### 3.5 Component Library (reusable in Webflow)

Container · Section (default/paper/dark/tight) · Grid (2/3/4) · Eyebrow · Card (service/value/resource/team) · Stat · Steps · Accordion · CTA Band · Trust Bar · Form fields · Contact Panel · Footer · Pills/Badges. **All are CMS-ready** (see §5).

### 3.6 Logo & Imagery Direction

- **Logo:** preserved exactly. Enhanced presentation: refined sizing in nav (42px), subtle scale-on-hover, inverted (white) treatment in the dark footer, favicon.
- **Imagery:** premium *abstract/ambient* medical-tech visuals (gradients, light, waveform motifs) + real clinic/team photography to be supplied. Prototype uses tasteful generated ambient backgrounds and elegant **monogram avatars** as placeholders for real headshots — swap in the existing professional photos for production.

---

## 4. Page-by-Page Blueprints

> Format per page: **Purpose → Section-by-section (wireframe + hierarchy + copy + rationale).**
> All copy below is written in brand voice and ready to use.

### 4.1 HOMEPAGE — The Conversion Engine
*Primary goal: Book a Consultation. Secondary: drive traffic to deep pages.*

**S1 · Sticky Navigation**
Logo (left) · Home/Services/Team/Resources/Contact (center) · Phone + **Schedule Appointment** (right). Glass background blurs on scroll; shadow appears after 8px scroll. *Rationale: the CTA is one tap away from anywhere — the single biggest conversion lever.*

**S2 · Hero** *(dark gradient + ambient image, left-aligned text)*
- Badge: "● Same-week appointments · Telehealth available"
- **H1:** "Get back to work. *Get back to life.*"
- Subhead: "Expert, evidence-based occupational medicine in Renton — prompt treatment, opioid-sparing care, and a clear path to safe return-to-work for injured workers and the employers who count on them."
- Dual CTA: **[Book a Consultation]** (primary) · **[Explore Our Services]** (ghost)
- Meta row: 50+ yrs experience · HIPAA-secure · Renton, opposite IKEA
*Rationale: emotional outcome headline + dual CTA (act now / learn more) captures both ready and researching visitors.*

**S3 · Trust Bar**
"Board-Certified Specialists · 50+ Years Combined Experience · HIPAA-Compliant & Secure · Mon–Fri 8 AM–5 PM." *Instant credibility below the fold.*

**S4 · Services Preview** (4 cards: Work Injury Care, Fitness for Duty, Telemedicine Evaluations, Medical Director Services) → each "Learn More" links to `/services#anchor`. Bottom: "View All Services." *Teaser pattern that pushes users deeper.*

**S5 · Stats Band** (paper): 50+ years · 3 board-certified specialists · 1–2 business-day response · 100% HIPAA-compliant.

**S6 · Why Advanced OHS** (2-col: value list + ambient image)
Eyebrow "Why Advanced OHS" · H2 "Occupational medicine, done the right way" · four values: Prompt treatment · Opioid-sparing care · Safe return-to-work · Objective assessments. CTA: "Meet the Team."

**S7 · Team Teaser** (3 cards): Lim, Morris, Aljic with creds + one-line bio → "Meet the Full Team." *Surfaces your differentiating credentials early.*

**S8 · What to Expect** (3 steps): Reach out → Get evaluated → Recover & return. *Reduces anxiety for first-time visitors.*

**S9 · Location Teaser** (2-col: info + live Google Map embed): address, hours, **[Get Directions]** + **[Contact Us].**

**S10 · Final Conversion Band** (gradient CTA): "Ready to take the next step?" · **[Book a Consultation]** · Call (425) 650-2727 · email. *Captures users who scrolled the whole page.*

**S11 · Footer:** logo (inverted), about, HIPAA + Board-Certified badges, Explore links, Resource links (external), full contact, legal row. **Includes `#lovable-badge` hide rule globally.**

---

### 4.2 SERVICES — Comprehensive, self-contained
*Primary goal: Schedule / Employer inquiry. Includes quick-nav anchors + FAQ.*

- **Hero:** "Occupational health services that *work for everyone*"
- **Quick-nav pills** to the four service sections
- **01 Work Injury Care** — value list (prompt eval, opioid-sparing, safe RTW, L&I docs) + "What's included" card; CTA Schedule
- **02 Fitness for Duty** — alternating layout; "Job-specific · Standardized · Defensible"; CTA Request Employer Services
- **03 Telemedicine** — full-width gradient band; "8 AM–5 PM Mon–Fri"; CTA Call (425) 659-4456 / Schedule Online
- **04 Medical Director & Consulting** — program-in-development notice (honest) + start-a-conversation CTA
- **Who We Serve** — 3 cards: Injured Workers / Employers / Referring Providers (each with its own CTA)
- **FAQ accordion** — scheduling, L&I claims, what to bring, telehealth
- **Final CTA:** "Not sure which service you need?" → Contact

---

### 4.3 OUR TEAM — Trust & Authority (Expanded)
*Primary goal: Book with a specific provider. Uses real expanded bios + per-provider scheduling links.*

- **Hero:** "Expert care. *Trusted professionals.*"
- **Credential strip:** FACOEM Fellows · WA L&I Advisory Committees · 50+ years
- **Dr. Louis Lim** — full bio (IIMAC, ACHIEv, former Medical Director Valley Medical/COHE) + chips + "Schedule with Dr. Lim" (practitioner-specific athena link)
- **Dr. Scott Morris** — full bio (ABPM certified, McGill, Albany Med, U Penn residency, ACOEM Fellow + section Chair since 2008, Senior AME) + "Schedule with Dr. Morris"
- **Midhat Aljic, PA-C** — full bio (fractures/burns/lacerations, wartime training, resilience) + "Schedule with Midhat"
- **Our Approach** — 3 values: Human-centered · Evidence-based · Trustworthy
- **CTA:** "Your partner in workplace health and safety"

---

### 4.4 RESOURCES — Patient & Employer Hub (New)
*Primary goal: authority/SEO + nurture → Contact. Curated, authoritative external links.*

- **Hero:** "Trusted resources, *all in one place*"
- **Quick actions:** Patient Portal · Schedule · Contact
- **For Injured Workers:** WA L&I · Claims & Benefits Hub · Guide to WC Benefits (PDF) · Patient Portal
- **For Employers:** L&I "Injured Worker — What You Need to Know" · Stay at Work/RTW · Workplace Safety Consultations · Advanced OHS Employer Services
- **Clinical & Professional:** ACOEM · ACOEM Practice Guidelines (MDGuidelines) · NIOSH (CDC) · OSHA
- **Disclaimer card** (not medical/legal advice; external privacy differs)
- **CTA:** "Have a question about your care or claim?"
*All external links use `target="_blank" rel="noopener noreferrer"`.*

---

### 4.5 CONTACT — Capture & Route (New/Enhanced)
*Primary goal: submit secure form / call. Routes to email.*

- **Hero:** "Let's *get in touch*" · "reply within 1–2 business days" · call CTA
- **Two-column:** (left) secure form · (right) contact panel
- **Form fields:** Name*, Phone*, Email*, Preferred Contact Method, Reason for Inquiry*, How did you hear, Comments, **HIPAA notice ("do not include sensitive medical info")**, SMS opt-in with full disclosure, **[Send Message]**
- **Contact panel:** address (opposite IKEA), clinic + telehealth phones, emails (patientsupport@ / louislim@), hours, Schedule + Patient Portal buttons
- **Full-width Google Map embed**
- **Email routing:** form submissions route to `patientsupport@advancedohs.com` (primary) with `louislim@advancedohs.com` available (see §5 + §8 for secure setup).

---

### 4.6 PRIVACY & HIPAA (5th — Bonus)
*Primary goal: trust + compliance.*

- **Hero:** "Privacy & *HIPAA compliance*"
- **3 trust pillars:** Encrypted & secure · HIPAA-aligned · Your rights honored
- **Commitment overview** (general Notice-of-Privacy-Practices language)
- **Your Rights accordion:** Access records · Request correction · Confidential communications · Request restrictions · SMS opt-out
- **Security practices:** Technical safeguards · Workforce training · Minimum necessary · Business associate oversight
- **Privacy contact CTA** + note that final legal language should be counsel-reviewed

---

## 5. Webflow Implementation Guidance

### 5.1 Build architecture
- **Static pages** for Home, Services, Team, Resources, Contact, Privacy (matches current Webflow site).
- **Optional CMS Collections** to scale later:
  - `Services` collection → powers service detail pages + homepage preview cards
  - `Team Members` collection → bios + per-provider booking link + photo
  - `Resources` collection → categorized links (multi-reference: Audience × Category)
  - `FAQ` collection → reusable on Services + future pages
- **Global symbol components:** `Nav`, `Footer`, `CTA Band`, `Section Header`, `Service Card`, `Value Item`, `Resource Card`, `Stat`, `Accordion Item`. Build once, reuse everywhere (the prototype already mirrors this structure).

### 5.2 Class system (Webflow-native)
Use the BEM-style classes from `styles.css` directly (`.btn`, `.card`, `.eyebrow`, `.section--paper`, etc.). Naming convention: `block`, `block__element`, `block--modifier`. Combo classes for variants. This keeps the project clean and handoff-ready.

### 5.3 Forms & email routing
- Use **Webflow's native form** with the fields in §4.5.
- **Routing options:**
  1. Webflow Form → site email notifications (simplest) to `patientsupport@advancedohs.com`.
  2. For **HIPAA-grade** handling, route via a **Business Associate Agreement (BAA)** email/service (e.g., a HIPAA-compliant inbox or form backend like a BAA-covered provider). **Do not** transmit PHI through standard, non-BAA email.
  3. Keep the "no sensitive medical info" notice prominent so the form stays low-risk.
- Add a **success state** (prototype already models the "Thank you" state).

### 5.4 Interactions (Webflow IX2)
- Nav: scroll-trigger background opacity + shadow (prototype replicates via `.scrolled`).
- Cards/buttons: hover lift + shadow + gradient sheen (CSS-driven, cheap and smooth).
- Scroll-reveal: fade/slide-up on sections (IntersectionObserver in prototype → mirror with IX2 "while scrolling in view").
- Accordion: expand/collapse (prototype models it; native or IX2).
- Logo: subtle scale on hover.
- Mobile menu: open/close with aria state (prototype-ready).

### 5.5 Performance
- Self-host/CDN fonts; `font-display: swap`.
- Compress + lazy-load images; serve `WebP/AVIF`; the ambient JPGs in the prototype should be optimized before launch.
- Inline critical CSS where possible; the single stylesheet is already lean.
- Embed the Google Map with `loading="lazy"`.

### 5.6 Accessibility checklist (WCAG 2.1 AA)
- [x] Semantic landmarks (`header`, `main`, `nav`, `footer`), skip-link present.
- [x] Visible `:focus-visible` outlines; keyboard-operable nav, menu, accordion, form.
- [x] Color contrast: ink-on-paper and white-on-gradient bands meet AA.
- [x] All images have `alt` (decorative = empty alt).
- [x] `aria-expanded` on toggle/accordion; `aria-current="page"` on active nav.
- [x] `prefers-reduced-motion` disables animation.
- [x] Form labels associated; required fields marked; error states to be wired.
- [x] Respects viewport / mobile-first; tap targets ≥ 44px.

---

## 6. Conversion & UX Rationale

| Decision | Why it converts |
|----------|----------------|
| **Primary CTA always visible** (sticky nav + repeated bands) | The #1 driver of bookings is making the action obvious and omnipresent. |
| **Outcome-led hero** ("Get back to work. Get back to life.") | Leads with the *patient's desired outcome*, not the clinic's features. |
| **Dual CTA** (Book now / Learn more) | Captures both ready-to-act and researching visitors. |
| **Teal reserved for primary action only** | A single visual "trail" — the eye always finds the next step. |
| **Trust bar + stats immediately** | Removes the top anxieties (credibility, security, location) within one scroll. |
| **Per-provider scheduling links** | Reduces friction from "I want to book" → booked; humanizes the team. |
| **"What to Expect" + FAQ** | Removes fear-of-the-unknown that stops injured workers from calling. |
| **Audience segmentation** (Workers/Employers/Providers) | Each persona sees itself and a tailored CTA — higher relevance, higher conversion. |
| **Multiple conversion bands** | People convert at different scroll depths; we meet them where they are. |
| **Phone number everywhere** | Many injured-worker and employer queries are urgent; calling must always be one tap away. |
| **Map + hours** | Proves convenience (opposite IKEA) and answers the #1 local-intent question. |

---

## 7. External Links (Resources Page)

All authoritative, all `target="_blank" rel="noopener noreferrer"`:

**Injured Workers**
- Washington State L&I — `lni.wa.gov`
- L&I Claims & Benefits — `lni.wa.gov/claims`
- Guide to Workers' Comp Benefits (PDF) — `lni.wa.gov/forms-publications/F242-104-000.pdf`
- Patient Portal (athenahealth) — `34109-1.portal.athenahealth.com`

**Employers**
- L&I "Injured Worker — What You Need to Know" — `lni.wa.gov/claims/for-employers/injured-worker-what-you-need-to-know`
- Stay at Work / Return-to-Work — `lni.wa.gov/claims`
- Workplace Safety & Consultations — `lni.wa.gov/safety-health`

**Clinical & Professional**
- ACOEM — `acoem.org`
- ACOEM Practice Guidelines (MDGuidelines) — `acoem.org/Practice-Resources/Practice-Guidelines-Center`
- NIOSH (CDC) — `cdc.gov/niosh`
- OSHA — `osha.gov`

*(Verify each URL before launch; government paths occasionally change.)*

---

## 8. HIPAA, Security & Compliance Checklist

**Forms & data handling**
- [ ] Keep the **"do not include sensitive medical info"** notice on all public forms.
- [ ] Route form data through a **BAA-covered** email/inbox — not standard email — if any PHI could be present.
- [ ] Enable form **encryption in transit (TLS/SSL)**; confirm Webflow SSL is active.
- [ ] Define data **retention/disposal** for form submissions; limit access to authorized staff.
- [ ] Add a clear **success message** confirming receipt (no PHI echoed back).

**Privacy notices**
- [ ] Publish a complete, **counsel-reviewed Notice of Privacy Practices** (the prototype page is a general framework).
- [ ] Link Privacy Policy + NPP in the footer and on the Contact form.
- [ ] Disclose **SMS terms** (opt-in, HELP/STOP, frequency, rates) — already modeled.
- [ ] Add a **Cookie/Analytics** disclosure if using tracking; consider a BAA-covered analytics provider.

**Security posture**
- [ ] Enforce **HTTPS** site-wide (HSTS recommended).
- [ ] Verify **Business Associate Agreements** with all vendors handling PHI (athenahealth, form provider, hosting, analytics).
- [ ] Apply **role-based access** and **minimum-necessary** principles internally.
- [ ] Maintain **workforce training** on privacy/security.
- [ ] Have an **incident-response / breach-notification** process documented.

**External links**
- [ ] All third-party links open in a new tab with `rel="noopener noreferrer"`; note external sites have separate privacy practices.

---

## 9. Recommended Next Steps & Timeline

| Phase | Deliverable | Indicative timing |
|-------|-------------|-------------------|
| **1 · Approve direction** | Review this spec + live prototype; confirm scope, copy, imagery | Week 1 |
| **2 · Content & assets** | Supply real clinic/team photography; finalize legal copy (NPP) | Week 1–2 |
| **3 · Build in Webflow** | Recreate components, pages, CMS collections, interactions | Week 2–4 |
| **4 · Integrate** | Forms → email/portal; analytics; scheduling links | Week 4 |
| **5 · QA & launch** | Accessibility, cross-browser, performance, HIPAA review, go-live | Week 5 |

**Immediate decisions to unlock the build:**
1. Confirm **primary booking flow** stays on athenahealth (yes/no).
2. Confirm **email routing** address + whether a BAA-covered mailbox is in place.
3. Provide **real photography** (clinic interior/exterior, team headshots).
4. Confirm any **additional services** or copy edits.

---

*Prepared as a complete, client-ready engagement blueprint. The accompanying clickable prototype demonstrates every component, page, and interaction described above — built to the same premium standard we'll carry into production.*
