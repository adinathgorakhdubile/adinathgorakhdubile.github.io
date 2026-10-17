import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  FileCheck2, 
  Terminal, 
  Binary, 
  GraduationCap, 
  Download, 
  ArrowRight, 
  ExternalLink,
  MapPin, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { PRIMARY_RESUME } from '../data/resumes';

const TRACKS = [
  {
    id: 'all',
    label: 'All Tracks',
    tagline: 'Multi-Disciplinary Security Researcher & Practitioner',
    summary:
      'Bridging technical vulnerability discovery, API security testing, incident investigations, and regulatory compliance frameworks (ISO 27001, NIST, GDPR).',
    metrics: [
      { label: 'Practical Labs Validated', value: '30+', detail: 'DVWA, Juice Shop, bWAPP, TryHackMe' },
      { label: 'Security Toolkits & Research', value: '4 Tracks', detail: 'VulnX, SecureAPI Tester, WebEnum Pro, ReconX' },
      { label: 'Framework Readiness', value: 'ISO / NIST / GDPR', detail: 'Control mapping & risk documentation' },
      { label: 'Education & Law', value: 'M.Sc. PGD + B.Sc.', detail: 'Cyber Forensics & Digital Science' },
    ],
    primaryCTA: { label: 'Explore All Projects', href: '#projects' },
    color: 'from-cyber-blue to-cyber-cyan',
  },
  {
    id: 'offensive',
    label: 'Offensive Security (VAPT)',
    tagline: 'Web & API Penetration Testing Specialist',
    summary:
      'Hands-on vulnerability assessments across OWASP Top 10, API authorization mechanisms (OAuth, JWT, BOLA/IDOR), and reconnaissance automation workflows.',
    metrics: [
      { label: 'Web & API Labs', value: '30+', detail: 'DVWA, Juice Shop, bWAPP, TryHackMe' },
      { label: 'VAPT Toolkits', value: 'VulnX & SecureAPI', detail: 'Automated scanning & API abuse testing' },
      { label: 'Core Methodologies', value: 'OWASP / PTES', detail: 'Auth, access control, injection flaws' },
      { label: 'Certification', value: 'Cisco CEHE', detail: 'Ethical Hacking Explorer verified' },
    ],
    primaryCTA: { label: 'View VAPT Case Studies', href: '#projects' },
    color: 'from-cyber-blue to-sky-400',
  },
  {
    id: 'grc',
    label: 'GRC & Information Security',
    tagline: 'Governance, Risk Assessment & Compliance Alignment',
    summary:
      'Connecting technical risks with organizational policies, ISO/IEC 27001 controls, NIST Cybersecurity Framework, and GDPR data protection mandates.',
    metrics: [
      { label: 'Framework Alignments', value: 'ISO 27001', detail: 'ISMS control evaluation & gap analysis' },
      { label: 'Risk Standards', value: 'NIST CSF', detail: 'Identify, Protect, Detect, Respond, Recover' },
      { label: 'Privacy Regulations', value: 'GDPR / Cyber Law', detail: 'Lawful processing & evidence standards' },
      { label: 'Study Documentation', value: 'Forensic Notes', detail: 'Legally admissible evidence handling' },
    ],
    primaryCTA: { label: 'View GRC & Study Notes', href: '#projects' },
    color: 'from-cyber-green to-emerald-400',
  },
  {
    id: 'dfir',
    label: 'DFIR & Security Operations',
    tagline: 'Digital Forensics, Incident Response & SOC Foundations',
    summary:
      'Evidence handling, incident triage procedures, MITRE ATT&CK mapping, and legal-chain-of-custody documentation derived from postgraduate forensics studies.',
    metrics: [
      { label: 'Postgraduate Forensic Studies', value: 'M.Sc. PGD', detail: 'Cyber & Computer Forensics and Law' },
      { label: 'Investigation Workflows', value: 'IR Foundations', detail: 'Triage, containment, and log auditing' },
      { label: 'Attack Mapping', value: 'MITRE ATT&CK', detail: 'Adversary tactic & technique analysis' },
      { label: 'Chain-of-Custody', value: 'Admissible Evidence', detail: 'Legal documentation standards' },
    ],
    primaryCTA: { label: 'Review DFIR Capabilities', href: '#experience' },
    color: 'from-cyber-indigo to-violet-400',
  },
];

const Hero = () => {
  const [activeTrack, setActiveTrack] = useState('all');
  const currentTrack = TRACKS.find((t) => t.id === activeTrack) || TRACKS[0];

  return (
    <section
      id="home"
      aria-label="Hero Overview"
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 relative flex flex-col justify-center overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Availability & Location Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>Available for Full-Time Roles &amp; Authorized Freelance VAPT / GRC Engagements</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
            <MapPin size={13} className="text-cyber-blue" />
            <span>Maharashtra, India • Open to Remote &amp; On-Site/Hybrid</span>
          </div>
        </motion.div>

        {/* Main Grid: Left Value Proposition & Right Bento Proof Matrix */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Subtitle & Interactive Role Switcher */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-cyber-blue font-semibold mb-2">
                Cyber Command &amp; Evidence-Backed Security Portfolio
              </p>
              {/* Single semantic h1 for the entire page */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
                Adinath Gorakh Dubile
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
                Cybersecurity Researcher in Maharashtra, India{' '}
                <span className="text-cyber-cyan block sm:inline mt-1 sm:mt-0 font-normal">
                  | Penetration Testing, GRC &amp; Information Security
                </span>
              </h2>
            </div>

            {/* Role Track Switcher Tabs */}
            <div id="role-switcher" className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers size={14} className="text-cyber-blue" />
                  Select Recruiter / Client Evaluation Track:
                </span>
                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                  Interactive Persona Filter
                </span>
              </div>

              <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950/90 border border-slate-800 rounded-xl" role="tablist" aria-label="Role Tracks">
                {TRACKS.map((track) => (
                  <button
                    key={track.id}
                    role="tab"
                    aria-selected={activeTrack === track.id}
                    onClick={() => setActiveTrack(track.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex-1 min-w-[130px] sm:min-w-0 text-center ${
                      activeTrack === track.id
                        ? 'bg-gradient-to-r ' + track.color + ' text-slate-950 shadow-md font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {track.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Track Value Summary */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-blue" />
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {currentTrack.tagline}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentTrack.summary}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 size={13} className="text-cyber-green" />
                    Authorized Testing &amp; Ethical Disclosure Only
                  </span>
                  <span>•</span>
                  <span>Verified Single Source of Truth</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href={currentTrack.primaryCTA.href} className="cyber-button">
                <span>{currentTrack.primaryCTA.label}</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={PRIMARY_RESUME.path}
                download={PRIMARY_RESUME.filename}
                className="cyber-button-outline"
                title={`Download ${PRIMARY_RESUME.title}`}
              >
                <Download size={16} />
                <span>Download Master Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white text-slate-300 text-sm font-medium transition-colors"
              >
                Direct Contact
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bento Proof & Verified Authority Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Bento Card 1: Verified Track Metrics */}
            <div className="card border-slate-800 bg-gradient-to-br from-slate-900/90 to-obsidian">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue font-mono font-bold text-xs">
                    PT
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Verified Competency Proof
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {currentTrack.label}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {currentTrack.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      {metric.label}
                    </span>
                    <span className="text-xl font-extrabold text-white tracking-tight mb-1">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Academic & Certification Authority Badge */}
            <div className="card border-slate-800/90 bg-slate-950/60 p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyber-green/10 border border-cyber-green/30 text-cyber-green shrink-0 mt-0.5">
                  <GraduationCap size={20} />
                </div>
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-slate-200">
                    M.Sc. PGD in Cyber &amp; Computer Forensics and Related Law
                  </p>
                  <p className="text-slate-400">
                    2025 – 2026 • Evidence Handling, Chain of Custody &amp; Cyber Legislation
                  </p>
                  <p className="font-semibold text-slate-300 pt-1">
                    B.Sc. in Cyber and Digital Science (2022 – 2025)
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Terminal size={13} className="text-cyber-cyan" />
                  Cisco Certified Ethical Hacking Explorer
                </span>
                <a
                  href="#certifications"
                  className="text-cyber-blue hover:underline inline-flex items-center gap-1"
                >
                  Verify <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Bento Card 3: Live Quick Resume Access */}
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue">
                  <Binary size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-200">Dedicated Resume Tracks Available</p>
                  <p className="text-[11px] text-slate-400 font-mono">Master, Offensive VAPT, or Analyst GRC</p>
                </div>
              </div>
              <a
                href="#resume"
                className="text-xs font-semibold text-cyber-blue hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-800 transition-colors"
              >
                Browse Resumes →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
