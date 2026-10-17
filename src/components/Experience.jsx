import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Scale, CheckCircle2 } from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const TIMELINE = [
  {
    type: 'Academic & Legal Training',
    title: 'M.Sc. PGD in Cyber & Computer Forensics and Related Law',
    timeframe: '2025 – 2026',
    institution: 'Postgraduate Forensic & Cyber Law Studies',
    icon: Scale,
    summary:
      'Advanced specialization developing deep technical and procedural competency in digital forensics, chain of custody preservation, electronic evidence admissibility under the Indian Evidence Act / IT Act, and cyber crime investigation protocols.',
    competencies: [
      'Digital evidence acquisition & hashing verification',
      'Chain-of-custody documentation & defensible reporting',
      'Cyber crime case analysis & international legal frameworks',
      'Privacy protection & statutory compliance evaluation',
    ],
  },
  {
    type: 'Academic Foundation',
    title: 'B.Sc. in Cyber and Digital Science',
    timeframe: '2022 – 2025',
    institution: 'Undergraduate Degree',
    icon: GraduationCap,
    summary:
      'Completed rigorous undergraduate degree establishing foundational computing theory, networking architectures, operating system internals, cryptographic principles, and practical defensive/offensive security techniques.',
    competencies: [
      'Network protocols (TCP/IP, DNS, HTTP/S, SSL/TLS)',
      'Operating systems security (Linux & Windows internals)',
      'Applied cryptography & hash validation algorithms',
      'Database security & SQL query mechanics',
    ],
  },
  {
    type: 'Hands-on Security Engineering',
    title: 'ReconX / WebEnum Pro — Reconnaissance Automation Suite',
    timeframe: 'Practical Security Toolkit',
    institution: 'Independent Security Development',
    icon: Terminal,
    summary:
      'Architected and implemented a modular CLI-based Python/Bash reconnaissance toolkit for authorized target profiling, automated DNS subdomain harvesting, service enumeration, and attack-surface visibility.',
    competencies: [
      'CLI tool engineering in Python & Bash',
      'Subdomain aggregation & DNS record enumeration',
      'Automated service fingerprinting & reporting pipelines',
      'Pre-engagement attack surface mapping',
    ],
  },
  {
    type: 'Applied Vulnerability Research',
    title: 'Practical Security Labs & Controlled Assessments',
    timeframe: '30+ Practical Labs',
    institution: 'DVWA, OWASP Juice Shop, bWAPP, TryHackMe',
    icon: CheckCircle2,
    summary:
      'Executed systematic red-team assessments and vulnerability exploitation drills across OWASP Top 10 web vulnerabilities and API flaws, maintaining documentation and remediation verification matrices.',
    competencies: [
      'Manual SQL injection, XSS & CSRF exploitation',
      'Broken object level authorization (BOLA) validation',
      'JWT token fuzzing & privilege escalation testing',
      'Remediation advisory writing for engineering teams',
    ],
  },
];

const Experience = () => {
  const { domain } = useDomainTheme();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 px-4 sm:px-6 relative transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p
            className="text-xs font-mono uppercase tracking-widest font-semibold mb-2"
            style={{ color: domain.accentHex }}
          >
            Academic Foundation &amp; Applied Practice
          </p>
          <h2 id="experience-heading" className="section-title">
            Education &amp; Experience
          </h2>
          <p className="section-subtitle">
            Ground-truth academic credentials in cyber forensics &amp; digital science coupled with extensive
            hands-on lab exploitation and security tool development.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 border-l border-slate-800 space-y-10">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div
                className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125"
                style={{
                  backgroundColor: '#070B14',
                  borderColor: domain.accentHex,
                  boxShadow: `0 0 10px rgba(${domain.accentRgb}, 0.5)`,
                }}
              />

              <div className="card card-hover p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2 rounded-lg bg-black/60 border border-slate-800"
                      style={{ color: domain.accentHex }}
                    >
                      <item.icon size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold"
                      style={{
                        backgroundColor: `rgba(${domain.accentRgb}, 0.12)`,
                        borderColor: `rgba(${domain.accentRgb}, 0.35)`,
                        borderWidth: '1px',
                        color: domain.accentHex,
                      }}
                    >
                      {item.timeframe}
                    </span>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{item.institution}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.summary}</p>

                <div className="pt-3 border-t border-slate-800">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                    Core Focus &amp; Practical Competencies:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {item.competencies.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} style={{ color: domain.accentHex }} className="shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
