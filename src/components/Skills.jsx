import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Search, Lock, Microscope, ClipboardCheck, Scale } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Activity,
      title: 'Security Operations (SOC)',
      color: 'text-cyber-blue',
      skills: ['Vulnerability Assessment', 'Security Monitoring Fundamentals', 'Risk-Based Prioritization', 'Findings Documentation'],
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      color: 'text-cyber-cyan',
      skills: ['Initial Triage Support', 'Evidence-Aware Handling', 'Containment-Oriented Thinking', 'Incident Notes & Reporting'],
    },
    {
      icon: Search,
      title: 'Threat Intelligence',
      color: 'text-cyber-green',
      skills: ['OSINT', 'Reconnaissance Workflows', 'Attack Surface Mapping', 'Threat Context Collection'],
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      color: 'text-cyber-blue',
      skills: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'ffuf', 'gobuster', 'nuclei', 'Nmap', 'Metasploit', 'Hydra', 'Wireshark'],
    },
    {
      icon: Microscope,
      title: 'DFIR / Forensics',
      color: 'text-cyber-cyan',
      skills: ['Cyber & Computer Forensics (Academic Track)', 'Evidence Preservation Principles', 'Investigation-Oriented Analysis', 'Documentation Discipline'],
    },
    {
      icon: ClipboardCheck,
      title: 'Governance, Risk & Compliance',
      color: 'text-cyber-green',
      skills: ['ISO 27001 Concepts', 'NIST Concepts', 'GDPR Awareness', 'Security Control Alignment'],
    },
    {
      icon: Scale,
      title: 'Cyber Law',
      color: 'text-cyber-blue',
      skills: ['Related Cyber Law Studies', 'Legal-Aware Security Practice', 'Ethical Boundaries in Testing', 'Compliance-Conscious Reporting'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Skills</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Role-aligned competencies across analyst, incident-focused, testing, forensics, governance, and legal-aware cybersecurity functions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={category.color} size={30} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIndex * 0.06) + (skillIndex * 0.03), duration: 0.3 }}
                      viewport={{ once: true }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
