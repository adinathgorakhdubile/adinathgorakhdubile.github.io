import { motion } from 'framer-motion';
import { FileText, Mic, BookOpen, ShieldCheck, ArrowUpRight } from 'lucide-react';

const PUBLICATIONS = [
  {
    icon: FileText,
    title: 'Practical Vulnerability Write-ups & Remediation Guides',
    type: 'Applied Research Documentation',
    color: 'border-cyber-blue/30 text-cyber-blue',
    description:
      'Structured technical breakdowns of web application weaknesses (SQLi, IDOR, BOLA, JWT signature verification) derived from controlled lab assessments, detailing root causes, impact analysis, and developer remediation code samples.',
    tags: ['Vulnerability Write-ups', 'Remediation Guides', 'OWASP Top 10', 'API Testing'],
  },
  {
    icon: BookOpen,
    title: 'Digital Evidence Handling & Cyber Law Synthesis',
    type: 'Postgraduate Case Notes',
    color: 'border-cyber-indigo/30 text-cyber-indigo',
    description:
      'Academic study notes and comparative frameworks evaluating digital chain of custody preservation, statutory legal compliance under the Information Technology Act, and ISO/IEC 27001 ISMS audit preparedness.',
    tags: ['Chain of Custody', 'Cyber Law', 'ISO 27001', 'Evidence Admissibility'],
  },
  {
    icon: Mic,
    title: 'Community Knowledge Sharing & Security Workshops',
    type: 'Advocacy & Peer Sessions',
    color: 'border-cyber-green/30 text-cyber-green',
    description:
      'Participating in academic peer study circles and technical workshops on responsible vulnerability disclosure, ethical reconnaissance techniques, and emerging API security threats.',
    tags: ['Responsible Disclosure', 'Ethical Hacking', 'Workshops', 'Peer Learning'],
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="py-20 px-4 sm:px-6 relative bg-obsidian-surface/20 border-t border-b border-slate-800/80"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-blue font-semibold mb-2">
            Research &amp; Community Engagement
          </p>
          <h2 id="publications-heading" className="section-title">
            Publications, Research &amp; Talks
          </h2>
          <p className="section-subtitle">
            Synthesized research write-ups, case study notes connecting digital forensics with compliance,
            and commitment to knowledge-sharing and responsible disclosure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PUBLICATIONS.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="card card-hover border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-slate-950 border ${pub.color}`}>
                    <pub.icon size={22} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {pub.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pub.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/adinathgorakhdubile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyber-blue hover:text-white inline-flex items-center gap-1 group"
                >
                  <span>Explore on GitHub</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
