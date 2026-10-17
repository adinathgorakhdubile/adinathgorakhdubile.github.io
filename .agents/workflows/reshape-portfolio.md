# Reshape Portfolio for SEO, Hiring & Conversion (`/reshape-portfolio`)

Sequentially audit, optimize for Google Search (SEO), fix GitHub Pages rendering, and redesign Adinath Gorakh Dubile's cybersecurity portfolio (`adinathgorakhdubile.github.io`) without inventing unverified credentials.

## Step 1: Pre-Flight Check & Missing Contact Verification
1. Read `@AGENTS.md` (or `@.agents/rules/portfolio-rules.md`), `@index.html`, `@vite.config.js`, `@.github/workflows/deploy.yml`, and `@src/components/Contact.jsx`.
2. Check if `adinath@example.com` is still present in `src/components/Contact.jsx`, `Header.jsx`, or `Footer.jsx`. If the user has not yet provided their live email address and LinkedIn profile URL, ask the user for those two values before hardcoding contact links.

## Step 2: Fix Build & GitHub Pages Deployment
1. Verify `vite.config.js` has `base: '/'`.
2. Inspect `.github/workflows/deploy.yml` to ensure GitHub Pages deploys the compiled `dist/` directory produced by `npm run build`.
3. Create `public/favicon.svg` with a clean `AD` cybersecurity shield monogram and reference it in `index.html`.

## Step 3: Implement On-Page SEO, JSON-LD & Static Pre-Render in `index.html`
1. Update `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="geo.region" content="IN-MH">`, `<meta name="geo.placename" content="Maharashtra, India">`, Open Graph, and Twitter Card tags in `index.html` targeting:
   - `Adinath Gorakh Dubile` / `Adinath Dubile`
   - `Cybersecurity Researcher in Maharashtra, India`
   - `Penetration Testing`, `GRC (ISO 27001, NIST, GDPR)`, `Information Security`
2. Inject the `ProfilePage` + `Person` JSON-LD script block into `<head>` in `index.html`.
3. Insert semantic pre-rendered HTML inside `<div id="root">...</div>` in `index.html` so search crawlers index all headings, bio, skills, projects, education, and resume links before React mounts.
4. Update `public/sitemap.xml` and `public/robots.txt`.

## Step 4: Upgrade Design System & Reshape Components
1. Update `tailwind.config.js` and `src/index.css` with high-contrast dark obsidian surfaces (`#070B14`, `#0F172A`), domain accents (Pentest Cyan `#00D9FF`, GRC Emerald `#10B981`, DFIR Indigo `#6366F1`), and `prefers-reduced-motion` rules.
2. Refactor `src/components/Header.jsx` and `src/components/Hero.jsx` to feature the semantic `<h1>Adinath Gorakh Dubile</h1>`, geo-role subtitle, interactive Role Track Switcher (`All`, `Penetration Testing`, `GRC & InfoSec`, `DFIR & SecOps`), and Bento Authority Grid.
3. Refactor `src/components/About.jsx` and `src/components/Skills.jsx` to highlight both Full-Time Readiness and Freelance Consulting Services across Offensive Security, GRC (ISO 27001, NIST, GDPR), and InfoSec/DFIR.
4. Refactor `src/components/Projects.jsx`, `src/components/Experience.jsx`, `src/components/Certifications.jsx`, and `src/components/Publications.jsx` into evidence-driven Case Study cards using only verified repository data (`VulnX`, `SecureAPI Tester`, `WebEnum Pro`, `Forensic & Compliance Study Notes`, `ReconX`, `30+ Labs`, `M.Sc. PGD`, `B.Sc.`, `Cisco Ethical Hacking Explorer`, `TryHackMe`).
5. Update `src/components/Resume.jsx`, `src/components/Contact.jsx`, and `src/components/Footer.jsx` to link `/ResumeO.pdf`, `/ResumeSA.pdf`, and `/Adinath_Dubile_Resume_2025.pdf`, replace `adinath@example.com`, and reinforce Maharashtra, India local SEO signals.

## Step 5: Build & Audit Verification
1. Run `npm run build` in the terminal.
2. Confirm zero build errors, single `<h1>` landmark, zero `adinath@example.com` occurrences, and complete static HTML fallback in `dist/index.html`.

