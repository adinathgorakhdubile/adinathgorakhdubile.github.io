---
trigger: glob
globs: "index.html, src/**/*.jsx, src/**/*.css, tailwind.config.js, public/*.xml, public/*.txt"
description: "Component-level SEO, semantic HTML, accessibility, and Tailwind styling invariants for portfolio files."
---

# Component & Markup Invariants
1. **Heading Hierarchy:** Only `src/components/Hero.jsx` (and its static pre-render mirror in `index.html`) may render an `<h1>`. Every top-level section component (`About`, `Skills`, `Projects`, `Certifications`, `Experience`, `Publications`, `Resume`, `Contact`) must start with a single `<section id="..." aria-labelledby="...">` and an `<h2>`.
2. **Keyword Integration:** Ensure `Adinath Gorakh Dubile`, `Cybersecurity Researcher in Maharashtra, India`, `Penetration Testing`, `GRC (ISO 27001, NIST, GDPR)`, and `Information Security` appear naturally in semantic text rather than hidden CSS text.
3. **External Links & Security:** Every external `<a target="_blank">` must include `rel="noopener noreferrer"`. Every icon-only button or link must include an explicit `aria-label`.
4. **Resume Links:** Verify that `/ResumeO.pdf`, `/ResumeSA.pdf`, and `/Adinath_Dubile_Resume_2025.pdf` resolve accurately from `public/` and include descriptive `download` attributes.

