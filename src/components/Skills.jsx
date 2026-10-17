import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Search, 
  Radar, 
  Lock, 
  FlaskConical, 
  ClipboardCheck, 
  Scale, 
  CheckCircle2, 
  Cpu, 
} from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const SKILL_DOMAINS = [
  {
    id: 'soc',
    category: 'defensive',
    title: 'Security Operations (SOC)',
    icon: Shield,
    summary: 'Foundational capabilities in real-time alert triage, security telemetry analysis, and event log correlation.',
    skills: [
      { name: 'Security Event Review', level: 'Practical' },
      { name: 'Alert Triage Workflows', level: 'Core' },
      { name: 'Log Analysis Fundamentals', level: 'Core' },
      { name: 'MITRE ATT&CK Mapping', level: 'Practical' },
      { name: 'Threat Surface Monitoring', level: 'Practical' },
    ],
  },
  {
    id: 'ir',
    category: 'defensive',
    title: 'Incident Response (IR)',
    icon: Search,
    summary: 'Structured containment, incident scoping, root-cause investigation drills, and executive post-mortem reporting.',
    skills: [
      { name: 'Incident Triage Procedures', level: 'Core' },
      { name: 'Initial Containment Protocols', level: 'Practical' },
      { name: 'Evidence Handling Awareness', level: 'Advanced' },
      { name: 'Post-Incident Reporting', level: 'Core' },
      { name: 'IOC Documentation', level: 'Practical' },
    ],
  },
  {
    id: 'threat-intel',
    category: 'offensive',
    title: 'Threat Intelligence & OSINT',
    icon: Radar,
    summary: 'Passive & active reconnaissance, adversary infrastructure discovery, and attack surface profiling.',
    skills: [
      { name: 'OSINT Reconnaissance', level: 'Advanced' },
      { name: 'Threat Pattern Tracking', level: 'Practical' },
      { name: 'Attack Surface Profiling', level: 'Advanced' },
      { name: 'IOC Context Interpretation', level: 'Core' },
      { name: 'DNS & Subdomain Mapping', level: 'Advanced' },
    ],
  },
  {
    id: 'pentest',
    category: 'offensive',
    title: 'Penetration Testing (VAPT)',
    icon: Lock,
    summary: 'Authorized vulnerability discovery, exploitation mechanics, token verification, and remediation advisory.',
    skills: [
      { name: 'Burp Suite Professional / Community', level: 'Advanced' },
      { name: 'OWASP ZAP', level: 'Advanced' },
      { name: 'SQLMap', level: 'Practical' },
      { name: 'Nmap & Network Enumeration', level: 'Advanced' },
      { name: 'API Security Testing (BOLA/IDOR)', level: 'Advanced' },
      { name: 'Metasploit Basics', level: 'Practical' },
    ],
  },
  {
    id: 'dfir',
    category: 'grc-law',
    title: 'Digital Forensics (DFIR)',
    icon: FlaskConical,
    summary: 'Academic and hands-on grounding in forensic acquisition, disk/memory artifacts, and verifiable custody records.',
    skills: [
      { name: 'Digital Evidence Fundamentals', level: 'Advanced' },
      { name: 'Forensic Case Documentation', level: 'Advanced' },
      { name: 'Chain of Custody Maintenance', level: 'Advanced' },
      { name: 'Artifact Extraction Concepts', level: 'Practical' },
      { name: 'Cyber Crime Investigation Workflow', level: 'Practical' },
    ],
  },
  {
    id: 'grc',
    category: 'grc-law',
    title: 'Governance, Risk & Compliance',
    icon: ClipboardCheck,
    summary: 'Evaluating organizational security maturity, building risk registers, and aligning policies with global standards.',
    skills: [
      { name: 'ISO/IEC 27001 Controls Alignment', level: 'Practical' },
      { name: 'NIST CSF Framework Core', level: 'Practical' },
      { name: 'GDPR Privacy Principles', level: 'Core' },
      { name: 'Risk Assessment & Remediation', level: 'Core' },
      { name: 'Security Policy Documentation', level: 'Practical' },
    ],
  },
  {
    id: 'law',
    category: 'grc-law',
    title: 'Cyber Law & Legal Compliance',
    icon: Scale,
    summary: 'Legal admissibility of digital proof, IT Act provisions, privacy laws, and responsible disclosure protocols.',
    skills: [
      { name: 'Cyber & Computer Forensics Law', level: 'Postgraduate' },
      { name: 'Legal Admissibility Standards', level: 'Postgraduate' },
      { name: 'Privacy Compliance Awareness', level: 'Core' },
      { name: 'Responsible Disclosure Frameworks', level: 'Advanced' },
    ],
  },
];

const FILTERS = [
  { id: 'all', label: 'All 7 Disciplines' },
  { id: 'offensive', label: 'Offensive & VAPT' },
  { id: 'defensive', label: 'Defensive (SOC & IR)' },
  { id: 'grc-law', label: 'GRC, DFIR & Cyber Law' },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { domain } = useDomainTheme();

  const filteredDomains = activeFilter === 'all'
    ? SKILL_DOMAINS
    : SKILL_DOMAINS.filter((d) => d.category === activeFilter);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4 sm:px-6 relative transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p
            className="text-xs font-mono uppercase tracking-widest font-semibold mb-2"
            style={{ color: domain.accentHex }}
          >
            Multi-Disciplinary Technical Matrix
          </p>
          <h2 id="skills-heading" className="section-title">
            Skills, Tools &amp; Frameworks
          </h2>
          <p className="section-subtitle">
            Structured competency across 7 cybersecurity disciplines, combining hands-on technical tool proficiency with
            compliance and legal validation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => {
            const isSelected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: isSelected ? domain.accentHex : 'rgba(15, 23, 42, 0.8)',
                  color: isSelected ? '#070B14' : '#CBD5E1',
                  border: `1px solid ${isSelected ? domain.accentHex : 'rgba(51, 65, 85, 0.8)'}`,
                  boxShadow: isSelected ? `0 4px 14px 0 rgba(${domain.accentRgb}, 0.35)` : 'none',
                  fontWeight: isSelected ? '700' : '600',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* 7 Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredDomains.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="card card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="p-2 rounded-lg bg-black/60 border border-slate-800"
                        style={{ color: domain.accentHex }}
                      >
                        <item.icon size={20} />
                      </div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-1.5">
                    {item.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-1.5 px-2.5 rounded bg-black/50 border border-slate-800 text-xs hover:border-slate-700 transition-colors"
                      >
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Applied Practice & Lab Telemetry Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Cpu size={20} style={{ color: domain.accentHex }} />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Applied Practice &amp; Lab Validation Telemetry
              </h3>
            </div>
            <span className="text-xs font-mono flex items-center gap-1.5" style={{ color: domain.accentHex }}>
              <CheckCircle2 size={13} />
              100% Authorized Environments Only
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
              <div className="text-2xl font-extrabold mb-1" style={{ color: domain.accentHex }}>30+</div>
              <p className="text-xs font-semibold text-slate-200">Security Labs Completed</p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">DVWA, Juice Shop, bWAPP</p>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
              <div className="text-2xl font-extrabold mb-1 text-white">TryHackMe</div>
              <p className="text-xs font-semibold text-slate-200">Learning Path Achiever</p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">Offensive &amp; Network Rooms</p>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
              <div className="text-2xl font-extrabold mb-1" style={{ color: domain.accentHex }}>API &amp; Web</div>
              <p className="text-xs font-semibold text-slate-200">Auth &amp; Abuse Validation</p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">BOLA, IDOR, Token Security</p>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
              <div className="text-2xl font-extrabold mb-1 text-white">Automation</div>
              <p className="text-xs font-semibold text-slate-200">Python &amp; Bash Tooling</p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">ReconX &amp; VulnX Scanners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
