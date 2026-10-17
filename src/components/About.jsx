import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Briefcase, 
  Layers, 
  Sparkles,
  FileCheck2,
  Terminal,
  Scale
} from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const About = () => {
  const { activeDomain, setActiveDomain, domain, DOMAINS } = useDomainTheme();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 px-4 sm:px-6 relative border-t border-b border-slate-800/80 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p
            className="text-xs font-mono uppercase tracking-widest font-bold mb-2 transition-colors duration-300"
            style={{ color: domain.accentHex }}
          >
            Tailored Domain Profile &amp; Service Alignment
          </p>
          <h2 id="about-heading" className="section-title">
            About Adinath Gorakh Dubile
          </h2>
          <p className="section-subtitle">
            Cybersecurity researcher and practitioner based in Maharashtra, India. Review specialized capabilities
            tailored to the active domain track below.
          </p>
        </div>

        {/* Domain Switcher inside About Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5 font-semibold">
              <Layers size={14} style={{ color: domain.accentHex }} />
              Switch Tailored Perspective:
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Active: <strong style={{ color: domain.accentHex }}>{domain.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-black/60 border border-slate-800">
            {Object.values(DOMAINS).map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDomain(d.id)}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center ${
                  activeDomain === d.id
                    ? `${d.buttonClass} shadow-md`
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {d.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Tailored Domain Information Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`max-w-5xl mx-auto rounded-2xl border ${domain.cardBorder} ${domain.cardBg} p-6 sm:p-8 space-y-6 shadow-2xl transition-colors duration-300`}
          >
            {/* Top Bar: Service Offering Badge & Single Resume Download Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-1">
                <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border font-semibold ${domain.highlightBadge}`}>
                  {domain.serviceOffering.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                  {domain.serviceTitle}
                </h3>
              </div>

              {/* Single Dynamic Download Button matching the active domain */}
              <div className="shrink-0">
                <a
                  href={domain.resume.path}
                  download={domain.resume.filename}
                  className={`cyber-button ${domain.buttonClass} text-xs py-2.5 px-4 font-bold inline-flex items-center gap-2`}
                  title={`Download ${domain.resume.title}`}
                >
                  <Download size={15} />
                  <span>{domain.resume.buttonLabel}</span>
                </a>
              </div>
            </div>

            {/* Tailored About Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Domain Practice Overview:
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {domain.tailoredAbout.summary}
              </p>
            </div>

            {/* Domain Strengths & Proven Methods Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {domain.tailoredAbout.strengths.map((str, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-black/50 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: domain.accentHex }} />
                  <span className="leading-snug">{str}</span>
                </div>
              ))}
            </div>

            {/* Expected Deliverables & Scope Card */}
            <div className="p-4 rounded-xl bg-black/60 border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400 block">
                Typical Engagement Deliverables:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {domain.tailoredAbout.deliverables}
              </p>
            </div>

            {/* Academic & Ethical Anchor Banner */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} style={{ color: domain.accentHex }} />
                <span>M.Sc. PGD Cyber Forensics &amp; Law (2025–2026) • B.Sc. Cyber &amp; Digital Science (2022–2025)</span>
              </div>
              <span className="text-slate-300 font-semibold">
                Theme: <span style={{ color: domain.accentHex }}>{domain.themeName}</span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
