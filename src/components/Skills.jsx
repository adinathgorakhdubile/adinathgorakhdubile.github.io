import { motion } from 'framer-motion';
import { Shield, Search, Radar, Lock, FlaskConical, ClipboardCheck, Scale } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Security Operations (SOC)',
      color: 'text-cyber-blue',
      skills: ['Security event review', 'Alert triage support', 'Log analysis fundamentals', 'MITRE ATT&CK mapping'],
    },
    {
      icon: Search,
      title: 'Incident Response',
      color: 'text-cyber-cyan',
      skills: ['Incident triage workflows', 'Initial containment support', 'Evidence handling awareness', 'Post-incident reporting'],
    },
    {
      icon: Radar,
      title: 'Threat Intelligence',
      color: 'text-cyber-green',
      skills: ['OSINT-based reconnaissance', 'Threat pattern tracking', 'Attack surface profiling', 'IOC context interpretation'],
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      color: 'text-cyber-blue',
      skills: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'Nmap', 'Nessus', 'Metasploit'],
    },
    {
      icon: FlaskConical,
      title: 'DFIR / Forensics',
      color: 'text-cyber-cyan',
      skills: ['Digital evidence fundamentals', 'Forensic documentation', 'Chain-of-custody awareness', 'Cyber crime case context'],
    },
    {
      icon: ClipboardCheck,
      title: 'Governance, Risk, and Compliance',
      color: 'text-cyber-green',
      skills: ['ISO 27001 basics', 'NIST framework familiarity', 'GDPR awareness', 'Risk-oriented security communication'],
    },
    {
      icon: Scale,
      title: 'Cyber Law',
      color: 'text-cyber-blue',
      skills: ['Cyber & computer forensics law studies', 'Legal-admissibility awareness', 'Privacy-aware security practice', 'Responsible disclosure mindset'],
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
          <h2 className="section-title text-center mb-4">Skills & Technologies</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Role-based capabilities aligned for analyst, infosec, pentest, DFIR, and cyber-law pathways.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={category.color} size={32} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
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

          {/* Applied Practice Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 card max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-cyber-green mb-4 text-center">Applied Practice</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-blue mb-2">30+</div>
                <p className="text-gray-400">Practical Security Labs</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-cyan mb-2">Web</div>
                <p className="text-gray-400">DVWA, Juice Shop, bWAPP</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-green mb-2">API</div>
                <p className="text-gray-400">BOLA, IDOR, rate-limit assessments</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-blue mb-2">IR</div>
                <p className="text-gray-400">Investigation and reporting workflow drills</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
