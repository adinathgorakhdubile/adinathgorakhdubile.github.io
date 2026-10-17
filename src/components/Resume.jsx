import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, FolderCheck, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { RESUME_TRACKS, PRIMARY_RESUME } from '../data/resumes';

const Resume = () => {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-blue font-semibold mb-2">
            Targeted Role Artifacts
          </p>
          <h2 id="resume-heading" className="section-title">
            Resume Hub &amp; Role-Specific Tracks
          </h2>
          <p className="section-subtitle">
            Download the resume version best tailored to your evaluation criteria. Each document is verified,
            reflects ethical and legal cybersecurity practice, and connects directly to the repository resume folder.
          </p>
        </div>

        {/* Live Resume Folder Connector Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <FolderCheck size={18} />
            </div>
            <div>
              <span className="font-semibold text-slate-200">Live Resume Connector Active</span>
              <p className="text-slate-400 font-mono text-[11px]">
                Connected to <code className="text-cyber-cyan font-bold">public/resumes/</code> — freshly uploaded files reflect instantly.
              </p>
            </div>
          </div>
          <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shrink-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            PDFs Ready for Download
          </span>
        </motion.div>

        {/* Resume Track Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {RESUME_TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className={`card card-hover flex flex-col justify-between border ${
                track.primary
                  ? 'border-cyber-blue/50 bg-gradient-to-b from-slate-900/90 to-obsidian shadow-lg shadow-cyber-blue/5'
                  : 'border-slate-800 bg-slate-900/60'
              } p-6`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold border ${track.badgeColor}`}>
                    {track.badge}
                  </span>
                  {track.primary && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-cyber-blue">
                      <Sparkles size={12} /> Master
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{track.title}</h3>
                <p className="text-xs font-mono text-cyber-cyan mb-3">{track.track}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{track.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>File:</span>
                  <code className="text-slate-300 truncate max-w-[180px]">{track.filename}</code>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={track.path}
                    download={track.filename}
                    className={`flex-1 text-xs py-2 px-3 ${
                      track.primary ? 'cyber-button' : 'cyber-button-outline'
                    }`}
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href={track.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
                    title={`View ${track.filename} in browser`}
                    aria-label={`View ${track.filename} in browser`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Help on updating */}
        <div className="max-w-2xl mx-auto text-center text-xs text-slate-400 font-mono">
          <p>
            Recruiters or hiring managers requesting an updated or customized CV format can also reach out directly via{' '}
            <a href="mailto:adinathdubile@zohomail.in" className="text-cyber-blue hover:underline">
              adinathdubile@zohomail.in
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
