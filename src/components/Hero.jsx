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
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const Hero = () => {
  const { activeDomain, setActiveDomain, domain, DOMAINS } = useDomainTheme();

  return (
    <section
      id="home"
      aria-label="Hero Overview"
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 relative flex flex-col justify-center overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Availability & Active Theme Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300"
            style={{
              borderColor: domain.borderHex,
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: domain.accentHex,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: domain.accentHex }} />
            <span className="w-2 h-2 rounded-full -ml-4" style={{ backgroundColor: domain.accentHex }} />
            <span>Active Engagement Focus: {domain.name}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-slate-800 text-slate-300 text-xs font-mono">
            <MapPin size={13} style={{ color: domain.accentHex }} />
            <span>Maharashtra, India • Available for Remote &amp; Hybrid Engagements</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-slate-800/80 text-[11px] font-mono text-slate-400">
            <span>Theme: {domain.themeName}</span>
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
              <p
                className="text-xs uppercase tracking-widest font-mono font-bold mb-2 transition-colors duration-300"
                style={{ color: domain.accentHex }}
              >
                Executive Cybersecurity Portfolio &amp; Service Tracks
              </p>
              {/* Single semantic h1 for the entire page */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
                Adinath Gorakh Dubile
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
                Cybersecurity Researcher in Maharashtra, India{' '}
                <span className="block sm:inline mt-1 sm:mt-0 font-normal" style={{ color: domain.accentHex }}>
                  | {domain.serviceTitle}
                </span>
              </h2>
            </div>

            {/* Interactive Domain / Theme Switcher */}
            <div id="role-switcher" className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5 font-semibold">
                  <Layers size={14} style={{ color: domain.accentHex }} />
                  Select Domain Service &amp; Dynamic Theme:
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  Interactive Evaluation Tracks
                </span>
              </div>

              {/* 3 Domain Buttons */}
              <div
                className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-xl bg-black/70 border border-slate-800"
                role="tablist"
                aria-label="Domain Service Tracks"
              >
                {Object.values(DOMAINS).map((d) => (
                  <button
                    key={d.id}
                    role="tab"
                    aria-selected={activeDomain === d.id}
                    onClick={() => setActiveDomain(d.id)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center gap-0.5 ${
                      activeDomain === d.id
                        ? `${d.buttonClass} shadow-md`
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{d.shortName}</span>
                    <span className="text-[10px] opacity-80 font-normal">{d.themeName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Domain Service Value Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`p-5 rounded-xl ${domain.cardBg} border ${domain.cardBorder} space-y-3.5 transition-colors duration-300 shadow-xl`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: domain.accentHex }} />
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {domain.serviceOffering.type}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${domain.highlightBadge}`}>
                    {domain.resume.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {domain.tagline}
                </p>

                <div className="p-3 rounded-lg bg-black/50 border border-slate-800/80 space-y-1 text-xs">
                  <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                    Scope of Engagement:
                  </span>
                  <p className="text-slate-300">{domain.serviceOffering.scope}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 size={13} style={{ color: domain.accentHex }} />
                    Attached Resume: <strong className="text-white">{domain.resume.title}</strong>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Primary Action Buttons: Single Dynamic Download Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Single Dynamic Download Button attached to active domain */}
              <a
                href={domain.resume.path}
                download={domain.resume.filename}
                className={`cyber-button ${domain.buttonClass} text-sm py-3 px-5 font-bold shadow-lg`}
                title={`Download ${domain.resume.title}`}
              >
                <Download size={16} />
                <span>{domain.resume.buttonLabel}</span>
              </a>

              <a
                href="#about"
                className={`cyber-button-outline ${domain.buttonOutlineClass} text-sm py-3 px-5`}
              >
                <span>Tailored {domain.shortName} Details</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                className="px-4 py-3 rounded-lg border border-slate-800 bg-black/50 hover:bg-slate-800 hover:text-white text-slate-300 text-sm font-medium transition-colors"
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
            {/* Bento Card 1: Verified Telemetry Matrix */}
            <div className={`card border ${domain.cardBorder} ${domain.cardBg} p-5 space-y-4 transition-colors duration-300`}>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      border: `1px solid ${domain.borderHex}`,
                      color: domain.accentHex,
                    }}
                  >
                    CS
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
                    Verified Competency Proof
                  </span>
                </div>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${domain.highlightBadge}`}>
                  {domain.shortName}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Hands-On Security Labs
                  </span>
                  <span className="text-2xl font-extrabold text-white tracking-tight mb-0.5">
                    30+
                  </span>
                  <span className="text-[11px] text-slate-300 leading-tight">
                    DVWA, Juice Shop, bWAPP, TryHackMe
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Security Toolkits
                  </span>
                  <span className="text-2xl font-extrabold text-white tracking-tight mb-0.5">
                    4
                  </span>
                  <span className="text-[11px] text-slate-300 leading-tight">
                    VulnX, SecureAPI, ReconX, Notes
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Compliance Readiness
                  </span>
                  <span className="text-lg font-extrabold text-white tracking-tight mb-0.5">
                    ISO / NIST
                  </span>
                  <span className="text-[11px] text-slate-300 leading-tight">
                    ISO 27001, NIST CSF, GDPR
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Certification
                  </span>
                  <span className="text-lg font-extrabold text-white tracking-tight mb-0.5">
                    Cisco CEHE
                  </span>
                  <span className="text-[11px] text-slate-300 leading-tight">
                    Ethical Hacking Explorer
                  </span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Academic Forensics & Legal Standing */}
            <div className="card border-slate-800 bg-black/60 p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg border shrink-0 mt-0.5"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderColor: domain.borderHex,
                    color: domain.accentHex,
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-white">
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
                  <ShieldCheck size={13} style={{ color: domain.accentHex }} />
                  Ethical &amp; Authorized Validation Only
                </span>
                <a
                  href="#experience"
                  className="hover:underline inline-flex items-center gap-1 font-semibold"
                  style={{ color: domain.accentHex }}
                >
                  Details <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Bento Card 3: Direct Resume Connector Status */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white/5" style={{ color: domain.accentHex }}>
                  <Binary size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Attached Resume Ready</p>
                  <p className="text-[11px] text-slate-400 font-mono truncate max-w-[210px]">
                    {domain.resume.filename}
                  </p>
                </div>
              </div>
              <a
                href={domain.resume.path}
                download={domain.resume.filename}
                className="text-xs font-bold px-2.5 py-1.5 rounded-md transition-colors hover:bg-white/10"
                style={{ color: domain.accentHex }}
              >
                Download ↓
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
