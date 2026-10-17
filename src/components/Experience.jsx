import { motion } from 'framer-motion';
import { Terminal, Shield, GraduationCap, Scale, Calendar, CheckCircle2 } from 'lucide-react';

const TIMELINE = [
  {
    type: 'Academic & Legal Training',
    title: 'M.Sc. PGD in Cyber & Computer Forensics and Related Law',
    timeframe: '2025 – 2026',
    institution: 'Postgraduate Forensic & Cyber Law Studies',
    icon: Scale,
    color: 'text-cyber-indigo',
    borderColor: 'border-cyber-indigo/30',
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
    color: 'text-cyber-blue',
    borderColor: 'border-cyber-blue/30',
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
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
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
    icon: Shield,
    color: 'text-cyber-cyan',
    borderColor: 'border-cyber-cyan/30',
    summary:
      'Conducted exhaustive manual and automated vulnerability assessments in authorized laboratory environments. Validated injection vulnerabilities, authentication bypasses, broken access control, and API abuse scenarios.',
    competencies: [
      'OWASP Top 10 web exploitation and patch verification',
      'API security testing (BOLA, IDOR, token validation)',
      'Burp Suite & OWASP ZAP request inspection/tampering',
      'Actionable remediation guidance formulation',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-blue font-semibold mb-2">
            Timeline of Competency
          </p>
          <h2 id="experience-heading" className="section-title">
            Education, Research &amp; Experience
          </h2>
          <p className="section-subtitle">
            Chronological progression bridging formal cyber forensics education, undergraduate digital science,
            practical security tool building, and intensive hands-on lab assessments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {TIMELINE.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className={`card card-hover border ${item.borderColor} bg-slate-900/60 p-6`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan sm:text-right shrink-0">
                  <Calendar size={13} />
                  <span>{item.timeframe}</span>
                </div>
              </div>

              <p className="text-xs font-mono text-slate-400 mb-2">{item.institution}</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.summary}</p>

              <div className="pt-3 border-t border-slate-800/80">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Key Focus &amp; Practical Outcomes:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {item.competencies.map((comp) => (
                    <div key={comp} className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-cyber-green shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
