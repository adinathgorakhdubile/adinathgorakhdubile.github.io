import { motion } from 'framer-motion';
import { FileText, Mic, BookOpen } from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const PUBLICATIONS = [
  {
    icon: FileText,
    title: 'Practical Vulnerability Write-ups & Remediation Guides',
    type: 'Applied Research Documentation',
    description:
      'Structured technical breakdowns of web application weaknesses (SQLi, IDOR, BOLA, JWT signature verification) derived from controlled lab assessments, detailing root causes, impact analysis, and developer remediation code samples.',
    tags: ['Vulnerability Write-ups', 'Remediation Guides', 'OWASP Top 10', 'API Testing'],
  },
  {
    icon: BookOpen,
    title: 'Digital Evidence Handling & Cyber Law Synthesis',
    type: 'Postgraduate Case Notes',
    description:
      'Academic study notes and comparative frameworks evaluating digital chain of custody preservation, statutory legal compliance under the Information Technology Act, and ISO/IEC 27001 ISMS audit preparedness.',
    tags: ['Chain of Custody', 'Cyber Law', 'ISO 27001', 'Evidence Admissibility'],
  },
  {
    icon: Mic,
    title: 'Community Knowledge Sharing & Security Workshops',
    type: 'Advocacy & Peer Sessions',
    description:
      'Participating in academic peer study circles and technical workshops on responsible vulnerability disclosure, ethical reconnaissance techniques, and emerging API security threats.',
    tags: ['Responsible Disclosure', 'Ethical Hacking', 'Workshops', 'Peer Learning'],
  },
];

const Publications = () => {
  const { domain } = useDomainTheme();

  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="py-20 px-4 sm:px-6 relative border-t border-b border-slate-800/80 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p
            className="text-xs font-mono uppercase tracking-widest font-semibold mb-2"
            style={{ color: domain.accentHex }}
          >
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
              className="card card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="p-2.5 rounded-lg bg-black/60 border border-slate-800"
                    style={{ color: domain.accentHex }}
                  >
                    <pub.icon size={22} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider font-semibold block"
                      style={{ color: domain.accentHex }}
                    >
                      {pub.type}
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {pub.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pub.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                {pub.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
