---
name: portfolio-seo-redesign
description: Audits, optimizes SEO, fixes GitHub Pages SPA crawlability, and reshapes UI/UX for Adinath Gorakh Dubile's cybersecurity portfolio (adinathgorakhdubile.github.io). Use when updating SEO metadata, fixing blank page deployment issues, or redesigning React/Tailwind portfolio components.
---

# Portfolio SEO & UI/UX Redesign Skill

When invoked, execute the following 6-stage engineering workflow in sequential order. Verify each stage before moving to the next.

## Decision Tree
- **If `https://adinathgorakhdubile.github.io` renders a blank page or build fails:** Execute **Stage 1 (Build & GitHub Pages Pipeline Fix)** first.
- **If updating SEO rankings, metadata, or crawlability:** Execute **Stage 2 (`index.html`, JSON-LD, Static Pre-Render & Sitemap)**.
- **If updating visual design, layout, or role positioning:** Execute **Stage 3 (Design System)**, **Stage 4 (Hero, About & Role Switcher)**, and **Stage 5 (Case Studies, Skills, Resumes & Contact)**.
- **Always finish with Stage 6 (Verification & Build Audit).**

## Stage-by-Stage Execution Protocol

### Stage 1 — Audit & Fix Vite + GitHub Pages Deployment Pipeline
1. Inspect `vite.config.js`, `package.json`, and `.github/workflows/deploy.yml`.
2. Ensure `vite.config.js` sets `base: '/'`.
3. Verify `.github/workflows/deploy.yml` runs `npm ci && npm run build` and deploys the `./dist` directory via `actions/upload-pages-artifact` and `actions/deploy-pages` (or `gh-pages` branch) so raw `/src/main.jsx` is never served uncompiled.
4. Run `npm run build` in the terminal sandbox to verify zero compilation errors.

### Stage 2 — Technical SEO, Geo-Keyword Injection & Static HTML Pre-Render
1. Update `index.html` `<head>` with:
   - `<title>Adinath Gorakh Dubile | Cybersecurity Researcher, Penetration Tester & GRC Specialist in Maharashtra, India</title>`
   - Geo meta tags (`geo.region="IN-MH"`, `geo.placename="Maharashtra, India"`) and enriched Open Graph / Twitter tags.
   - `Schema.org` JSON-LD (`ProfilePage` + `Person`) declaring `Adinath Gorakh Dubile`, `alternateName: "Adinath Dubile"`, `addressRegion: "Maharashtra"`, `addressCountry: "IN"`, `knowsAbout` (Penetration Testing, GRC, ISO 27001, NIST, GDPR, Information Security, DFIR, Cyber Law), and `alumniOf` (`M.Sc. PGD in Cyber & Computer Forensics and Related Law`, `B.Sc. in Cyber and Digital Science`).
2. Populate `<div id="root">...</div>` in `index.html` with clean, semantic fallback HTML (`<header>`, `<main>`, `<h1>Adinath Gorakh Dubile — Cybersecurity Researcher in Maharashtra, India</h1>`, summary of Penetration Testing, GRC, InfoSec capabilities, projects `VulnX`, `SecureAPI Tester`, `WebEnum Pro`, `Forensic & Compliance Study Notes`, and links to `/ResumeO.pdf`, `/ResumeSA.pdf`, and `/Adinath_Dubile_Resume_2025.pdf`) so search crawlers index 100% of the content before JS execution.
3. Replace the default `/vite.svg` favicon with a custom cybersecurity shield SVG (`public/favicon.svg`) bearing the `AD` monogram.
4. Update `public/sitemap.xml` with current `<lastmod>` ISO date and verify `public/robots.txt` allows all crawlers and references `https://adinathgorakhdubile.github.io/sitemap.xml`.

### Stage 3 — Design System & Tailwind Theme Upgrade (`tailwind.config.js` & `src/index.css`)
1. Configure a high-contrast, executive dark theme in `tailwind.config.js` and `src/index.css`:
   - Deep Obsidian background (`#070B14`) with lightweight CSS radial mesh gradients instead of heavy raster backgrounds.
   - Domain-coded semantic accent tokens: Offensive/Pentest Cyan (`#00D9FF`), GRC/InfoSec Emerald (`#10B981`), and DFIR/Law Indigo (`#6366F1`).
2. Add `@media (prefers-reduced-motion: reduce)` rules in `src/index.css` to disable infinite floating/glow animations for users who prefer reduced motion and to improve Core Web Vitals.

### Stage 4 — Reshape Above-the-Fold Authority (`Header.jsx`, `Hero.jsx`, `About.jsx`)
1. **`Header.jsx`:** Add brand title `Adinath Gorakh Dubile`, a status badge (`Available for Pentest, GRC & InfoSec — Maharashtra, India & Remote`), streamlined navigation anchors, and a high-contrast `Hire / Contact` CTA.
2. **`Hero.jsx`:**
   - Render a single semantic `<h1>`: **Adinath Gorakh Dubile** with subtitle **Cybersecurity Researcher in Maharashtra, India | Penetration Testing, GRC & Information Security**.
   - Add an interactive **Role Track Switcher** (`All Tracks` | `Offensive Security (VAPT)` | `GRC & InfoSec` | `DFIR & SecOps`) that highlights relevant value propositions and CTAs.
   - Build a **Bento Proof & Authority Grid** on the right side showcasing strictly verified metrics: `30+ Practical Security Labs (DVWA, Juice Shop, bWAPP, TryHackMe)`, `4 Security Toolkits & Research Tracks`, `ISO 27001 / NIST / GDPR Readiness`, and `M.Sc. PGD Cyber Forensics & Law + B.Sc. Cyber & Digital Science`.
3. **`About.jsx`:** Reshape into a dual-audience layout addressing **Full-Time Hiring Managers** and **Freelance / Consulting Clients** across three pillars:
   - *Offensive Security & VAPT* (Web, API, Network testing, OWASP Top 10, OAuth/JWT validation)
   - *Governance, Risk & Compliance (GRC)* (ISO 27001 control alignment, NIST CSF, GDPR privacy & risk communication)
   - *Information Security & DFIR* (SOC triage, MITRE ATT&CK mapping, legally admissible forensic documentation)

### Stage 5 — Reshape Evidence Sections (`Skills.jsx`, `Projects.jsx`, `Experience.jsx`, `Certifications.jsx`, `Publications.jsx`, `Resume.jsx`, `Contact.jsx`, `Footer.jsx`)
1. **`Skills.jsx`:** Add interactive category filtering across the 7 existing domains (SOC, Incident Response, Threat Intelligence, Penetration Testing, DFIR, GRC, Cyber Law) with clear tool and framework tags.
2. **`Projects.jsx`:** Upgrade the 4 existing projects (`VulnX`, `SecureAPI Tester`, `WebEnum Pro`, `Forensic & Compliance Study Notes`) into structured **Case Study Cards** featuring: *Problem Statement*, *Methodology & Frameworks*, *Tech Stack*, and *GitHub / Documentation Action Links*.
3. **`Experience.jsx`, `Certifications.jsx`, `Publications.jsx`:** Present `ReconX`, `30+ Practical Labs`, `M.Sc. PGD (2025–2026)`, `B.Sc. (2022–2025)`, `Cisco Certified Ethical Hacking Explorer`, and `TryHackMe Learning Paths` in a scannable timeline and credential grid.
4. **`Resume.jsx`:** Present all 3 existing PDFs in `public/` (`/ResumeO.pdf` for Offensive/Pentest roles, `/ResumeSA.pdf` for Security Analyst/InfoSec roles, and `/Adinath_Dubile_Resume_2025.pdf` as Comprehensive Master Resume) with preview metadata and direct download buttons.
5. **`Contact.jsx` & `Footer.jsx`:** Remove `adinath@example.com` immediately. Wire up the user's real contact email, GitHub (`https://github.com/adinathgorakhdubile`), LinkedIn, and explicit local SEO footer copy (`Adinath Gorakh Dubile — Cybersecurity Researcher in Maharashtra, India`).

### Stage 6 — Final Build, Accessibility & SEO Verification
1. Run `npm run build` and `npm run preview` to confirm the production bundle compiles cleanly and renders without console errors.
2. Verify that `dist/index.html` contains the full static fallback HTML inside `<div id="root">`, valid JSON-LD schema, single `<h1>`, and zero instances of `adinath@example.com`.

