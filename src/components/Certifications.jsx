import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const CREDENTIALS = [
  {
    title: 'Cisco Certified Ethical Hacking Explorer',
    issuer: 'Cisco Networking Academy',
    badgeType: 'Official Industry Certification',
    description:
      'Demonstrates validated core competencies in ethical hacking fundamentals, vulnerability assessment principles, defense evasion awareness, and network security probing.',
    skills: ['Network Reconnaissance', 'Exploitation Concepts', 'Defensive Countermeasures', 'Ethical Hacking Methodologies'],
  },
  {
    title: 'TryHackMe Learning Path Achievements',
    issuer: 'TryHackMe Practical Cybersecurity Platform',
    badgeType: 'Hands-on Red-Team & Defensive Rooms',
    description:
      'Hands-on completion of specialized security rooms encompassing web application vulnerability exploitation, privilege escalation, Linux/Windows security internals, and network attack simulation.',
    skills: ['Web Attack Vectors', 'Privilege Escalation', 'Network Traffic Analysis', 'Security Tool Operations'],
  },
  {
    title: '30+ Practical Security Labs Validated',
    issuer: 'Authorized Controlled Environments (DVWA, OWASP Juice Shop, bWAPP)',
    badgeType: 'Applied Lab Validation',
    description:
      'Rigorous practical exploitation and remediation validation covering SQL Injection, Cross-Site Scripting (XSS), CSRF, IDOR, Broken Object Level Authorization (BOLA), and JWT tampering.',
    skills: ['OWASP Top 10 Exploitation', 'API Abuse Testing', 'Remediation Verification', 'Technical Root-Cause Analysis'],
  },
  {
    title: 'GRC & Security Framework Implementation Studies',
    issuer: 'Academic & Practical Compliance Alignment',
    badgeType: 'Governance & Regulatory Alignment',
    description:
      'Practical evaluation of security controls mapped to ISO/IEC 27001 ISMS, NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover), and GDPR privacy mandates.',
    skills: ['ISO 27001 Annex A Controls', 'NIST CSF Core', 'GDPR Principles', 'Risk Register Formulation'],
  },
];

const Certifications = () => {
  const { domain } = useDomainTheme();

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-20 px-4 sm:px-6 relative border-t border-b border-slate-800/80 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p
            className="text-xs font-mono uppercase tracking-widest font-semibold mb-2"
            style={{ color: domain.accentHex }}
          >
            Verified Credentials &amp; Training
          </p>
          <h2 id="certifications-heading" className="section-title">
            Certifications &amp; Practical Training
          </h2>
          <p className="section-subtitle">
            Formal certifications, learning paths, and applied security lab achievements proving hands-on
            competency across offensive testing and compliance frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CREDENTIALS.map((cred, index) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="card card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold"
                    style={{
                      backgroundColor: `rgba(${domain.accentRgb}, 0.12)`,
                      borderColor: `rgba(${domain.accentRgb}, 0.35)`,
                      borderWidth: '1px',
                      color: domain.accentHex,
                    }}
                  >
                    {cred.badgeType}
                  </span>
                  <ShieldCheck size={20} style={{ color: domain.accentHex }} className="shrink-0 mt-0.5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{cred.title}</h3>
                <p className="text-xs font-mono text-slate-400 mb-3">{cred.issuer}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{cred.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Competencies Demonstrated:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cred.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {s}
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

export default Certifications;
