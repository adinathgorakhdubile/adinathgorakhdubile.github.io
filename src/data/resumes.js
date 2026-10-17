/**
 * Resume Connector Configuration
 * 
 * Maps directly to files in `public/resumes/`.
 * To update any resume: drop your new PDF into `public/resumes/` matching the filenames below.
 */

export const RESUME_TRACKS = [
  {
    id: 'master',
    title: 'Master Comprehensive Resume',
    track: 'All Domains (Full Profile)',
    filename: 'Adinath_Dubile_Resume.pdf',
    path: '/resumes/Adinath_Dubile_Resume.pdf',
    description: 'Complete overview covering Penetration Testing, GRC Frameworks, DFIR, Academic Credentials, and 30+ Practical Labs.',
    badge: 'Recommended for Recruiters',
    badgeColor: 'border-cyber-blue/40 text-cyber-blue bg-cyber-blue/10',
    primary: true,
  },
  {
    id: 'offensive',
    title: 'Offensive Security & VAPT Resume',
    track: 'Penetration Testing / VAPT Track',
    filename: 'Adinath_Dubile_Offensive_VAPT_Resume.pdf',
    path: '/resumes/Adinath_Dubile_Offensive_VAPT_Resume.pdf',
    description: 'Focused on Web & API security testing, automated enumeration (VulnX, SecureAPI Tester, ReconX), and OWASP validation.',
    badge: 'Offensive / Red Team',
    badgeColor: 'border-cyber-cyan/40 text-cyber-cyan bg-cyber-cyan/10',
  },
  {
    id: 'analyst',
    title: 'Security Analyst & GRC Resume',
    track: 'InfoSec, SOC & Compliance Track',
    filename: 'Adinath_Dubile_Security_Analyst_GRC_Resume.pdf',
    path: '/resumes/Adinath_Dubile_Security_Analyst_GRC_Resume.pdf',
    description: 'Focused on SOC operations, incident triage, security governance, and compliance alignment (ISO 27001, NIST CSF, GDPR).',
    badge: 'GRC & SecOps',
    badgeColor: 'border-cyber-green/40 text-cyber-green bg-cyber-green/10',
  },
];

export const PRIMARY_RESUME = RESUME_TRACKS[0];
