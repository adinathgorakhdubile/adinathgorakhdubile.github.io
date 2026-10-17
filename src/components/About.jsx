import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  FileCheck2, 
  Scale, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  ArrowUpRight,
  Lock,
  SearchCode,
  ShieldCheck
} from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: SearchCode,
      title: 'Offensive Security & VAPT',
      badge: 'Vulnerability Assessment',
      color: 'border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue',
      description:
        'Hands-on identification and proof-of-concept validation of vulnerabilities across Web applications, REST APIs, and networks. Structured assessment of OWASP Top 10 weaknesses, access-control flaws (IDOR, BOLA), token mismanagement (JWT, OAuth), and automated reconnaissance pipelines.',
      skills: ['OWASP Top 10', 'API Security Testing', 'Burp Suite & ZAP', 'OAuth & JWT Audit', 'Python Automation', 'Attack Surface Mapping'],
    },
    {
      icon: FileCheck2,
      title: 'Governance, Risk & Compliance (GRC)',
      badge: 'Security Governance',
      color: 'border-cyber-green/30 bg-cyber-green/5 text-cyber-green',
      description:
        'Translating complex technical findings into executive-level risk registers and defensible compliance documentation. Strong grounding in ISO/IEC 27001 ISMS controls, NIST Cybersecurity Framework (CSF) functions, and GDPR personal data protection obligations.',
      skills: ['ISO/IEC 27001 Controls', 'NIST CSF Core', 'GDPR Privacy Principles', 'Risk Register Formulation', 'Remediation Roadmaps', 'Security Policy Auditing'],
    },
    {
      icon: Scale,
      title: 'Digital Forensics & Security Operations',
      badge: 'Evidence & Incident Triage',
      color: 'border-cyber-indigo/30 bg-cyber-indigo/5 text-cyber-indigo',
      description:
        'Educated in formal digital evidence recovery, chain-of-custody protocols, and Indian/international cyber law standards through an active postgraduate program. Familiar with SOC triage methodologies, log investigation basics, and MITRE ATT&CK framework mapping.',
      skills: ['Chain of Custody', 'Digital Evidence Rules', 'Incident Triage Workflows', 'MITRE ATT&CK', 'Cyber Law Compliance', 'Forensic Documentation'],
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 px-4 sm:px-6 relative bg-obsidian-card/40 border-t border-b border-slate-800/80"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-blue font-semibold mb-2">
            Strategic Security Practitioner
          </p>
          <h2 id="about-heading" className="section-title">
            About Adinath Gorakh Dubile
          </h2>
          <p className="section-subtitle">
            Cybersecurity researcher and practitioner based in Maharashtra, India. Combining rigorous technical
            vulnerability assessment skills with postgraduate training in digital forensics, compliance, and cyber law.
          </p>
        </div>

        {/* Dual-Audience Value Grid: Hiring Managers vs Freelance Clients */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Box 1: Full-Time Hiring Managers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card border-slate-800 bg-slate-900/50 p-6 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">For Full-Time Security Teams</h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                Full-Time / Hybrid / Remote
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Seeking to join progressive security teams in roles such as <strong>Junior Penetration Tester</strong>,{' '}
              <strong>Information Security Analyst</strong>, <strong>GRC Associate</strong>, or <strong>SOC Triage Analyst</strong>.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-cyber-green shrink-0 mt-0.5" />
                <span><strong>Fast Onboarding:</strong> 30+ practical labs across DVWA, OWASP Juice Shop, and TryHackMe.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-cyber-green shrink-0 mt-0.5" />
                <span><strong>Multi-Lens Mindset:</strong> Can evaluate an asset from offensive threat vector to regulatory compliance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-cyber-green shrink-0 mt-0.5" />
                <span><strong>Formal Cyber Background:</strong> M.Sc. PGD in Forensics &amp; Law alongside B.Sc. in Cyber &amp; Digital Science.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#resume"
                className="text-xs font-semibold text-cyber-blue hover:text-white inline-flex items-center gap-1 group"
              >
                Inspect Tailored Resumes <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Box 2: Freelance / Consulting Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card border-slate-800 bg-slate-900/50 p-6 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyber-green/10 text-cyber-green">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">For Freelance &amp; Consulting Clients</h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">
                Authorized Engagements
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Offering specialized security reviews, vulnerability scoping, and compliance gap assessments under strict,
              pre-authorized rules of engagement.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-cyber-green shrink-0 mt-0.5" />
                <span><strong>Web &amp; API Security Reviews:</strong> Identification of broken object level auth (BOLA), IDOR, and injection vectors.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-cyber-green shrink-0 mt-0.5" />
                <span><strong>ISO 27001 &amp; NIST Alignment:</strong> Control evaluation, policy checklist reviews, and risk scoring.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-cyber-green shrink-0 mt-0.5" />
                <span><strong>Clear, Actionable Deliverables:</strong> Executive summaries paired with developer-ready remediation advice.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#contact"
                className="text-xs font-semibold text-cyber-green hover:text-white inline-flex items-center gap-1 group"
              >
                Discuss Scoping &amp; Scope of Work <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Expertise Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card card-hover flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-lg border ${pillar.color}`}>
                    <pillar.icon size={22} />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white pt-1">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Key Methodologies &amp; Tools:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
