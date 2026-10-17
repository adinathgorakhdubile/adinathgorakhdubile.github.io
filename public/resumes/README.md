# Portfolio Resume Connector Folder (`public/resumes/`)

This directory is the live connector for all resumes served on [https://adinathgorakhdubile.github.io](https://adinathgorakhdubile.github.io).

## How to Update Your Resumes
Whenever you export an updated resume PDF, drop it into this folder using one of the following filenames:

1. **`Adinath_Dubile_Resume.pdf`** — **Master Comprehensive Resume** (linked as primary across the entire portfolio).
2. **`Adinath_Dubile_Offensive_VAPT_Resume.pdf`** — **Penetration Testing / VAPT Focused Resume**.
3. **`Adinath_Dubile_Security_Analyst_GRC_Resume.pdf`** — **Security Analyst / GRC Focused Resume**.

## Live Connector Behavior
- The portfolio's `src/data/resumes.js` connector points directly to `/resumes/<filename>`.
- Replacing any file in this directory automatically updates all download buttons and preview links without requiring any code changes.
