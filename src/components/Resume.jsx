import { motion } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  FolderCheck, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const Resume = () => {
  const { activeDomain, setActiveDomain, domain, DOMAINS } = useDomainTheme();

  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-20 px-4 sm:px-6 relative transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p
            className="text-xs font-mono uppercase tracking-widest font-bold mb-2 transition-colors duration-300"
            style={{ color: domain.accentHex }}
          >
            Engagement Services &amp; Attached Resume Artifacts
          </p>
          <h2 id="resume-heading" className="section-title">
            Service Tracks &amp; Resume Hub
          </h2>
          <p className="section-subtitle">
            Rather than generic CVs, each resume artifact is directly attached to its specialized cybersecurity service domain.
            Select a service track below to download the corresponding verified resume PDF.
          </p>
        </div>

        {/* Live Resume Folder Connector Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-black/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <FolderCheck size={18} />
            </div>
            <div>
              <span className="font-semibold text-white">Live Resume Folder Connector</span>
              <p className="text-slate-400 font-mono text-[11px]">
                Connected to <code className="text-sky-400 font-bold">public/resumes/</code> — freshly uploaded files reflect instantly.
              </p>
            </div>
          </div>
          <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shrink-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live Connector Ready
          </span>
        </motion.div>

        {/* Primary Single Dynamic Download Banner */}
        <div
          className={`max-w-4xl mx-auto mb-12 p-6 rounded-2xl border ${domain.cardBorder} ${domain.cardBg} transition-all duration-300 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6`}
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${domain.highlightBadge} font-bold`}>
              Active Service: {domain.shortName}
            </span>
            <h3 className="text-xl font-bold text-white">
              {domain.resume.title}
            </h3>
            <p className="text-xs text-slate-300 font-mono">
              Attached to: <strong className="text-white">{domain.serviceTitle}</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {/* Single Dynamic Download Button */}
            <a
              href={domain.resume.path}
              download={domain.resume.filename}
              className={`cyber-button ${domain.buttonClass} py-3 px-5 text-sm font-bold inline-flex items-center gap-2 shadow-xl`}
              title={`Download ${domain.resume.title}`}
            >
              <Download size={16} />
              <span>{domain.resume.buttonLabel}</span>
            </a>

            <a
              href={domain.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg border border-slate-800 transition-colors"
              title="Preview in browser"
              aria-label="Preview resume in browser"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* 3 Domain Service Type Cards with Attached Resumes */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.values(DOMAINS).map((d, index) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              onClick={() => setActiveDomain(d.id)}
              className={`card card-hover flex flex-col justify-between cursor-pointer border ${
                activeDomain === d.id
                  ? `${d.cardBorder} ${d.cardBg} shadow-xl scale-[1.02]`
                  : 'border-slate-800/80 bg-black/50 opacity-80 hover:opacity-100'
              } p-6 rounded-2xl transition-all duration-300`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${d.highlightBadge}`}>
                    {d.shortName}
                  </span>
                  {activeDomain === d.id && (
                    <span className="text-[10px] font-mono text-white flex items-center gap-1">
                      <Sparkles size={11} style={{ color: d.accentHex }} /> Active
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white pt-1">{d.serviceTitle}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{d.serviceOffering.scope}</p>

                <div className="p-3 rounded-lg bg-black/60 border border-slate-800 space-y-1 text-xs font-mono">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-semibold">
                    Attached Resume Artifact:
                  </span>
                  <p className="text-white font-bold truncate">{d.resume.title}</p>
                  <p className="text-slate-400 text-[10px] truncate">{d.resume.filename}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDomain(d.id);
                  }}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                    activeDomain === d.id
                      ? `${d.buttonClass}`
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-slate-800'
                  }`}
                >
                  {activeDomain === d.id ? 'Active Service Track' : `Select ${d.shortName}`}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
