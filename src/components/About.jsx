import { motion } from 'framer-motion';
import { Shield, Scale, Search, Network, Bug, Code, Zap } from 'lucide-react';

const About = () => {
  const strengths = [
    { icon: Shield, name: 'Web, API, and Network Security Assessments', color: 'text-cyber-blue' },
    { icon: Search, name: 'Reconnaissance Automation (ReconX)', color: 'text-cyber-cyan' },
    { icon: Bug, name: 'Vulnerability Validation in Lab Environments', color: 'text-cyber-green' },
    { icon: Network, name: 'OSINT and Enumeration Workflows', color: 'text-cyber-blue' },
    { icon: Code, name: 'Python and Bash for Security Automation', color: 'text-cyber-cyan' },
    { icon: Scale, name: 'Cyber & Computer Forensics with Related Law', color: 'text-cyber-green' },
    { icon: Zap, name: 'Alignment with ISO 27001, NIST, and GDPR Concepts', color: 'text-cyber-blue' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title text-center mb-12">About</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-cyber-blue mb-4">Professional Profile</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a cybersecurity practitioner building across analyst, assessment, and investigative tracks.
                My work includes penetration testing in structured lab environments, API and web vulnerability
                analysis, and practical tool-driven security workflows.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I am currently pursuing M.Sc. PGD in Cyber & Computer Forensics and Related Law, which supports
                a balanced perspective across technical security, evidence handling, and legal awareness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-cyber-cyan mb-4">Operating Principles</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Authorized testing only, with clear scope and approvals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Responsible disclosure and professional communication.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Privacy-aware handling of sensitive information and evidence.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Conservative reporting aligned to verifiable findings.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-cyber-green">Core Strengths</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="card flex items-center gap-4 hover:scale-105"
                >
                  <strength.icon className={`${strength.color} flex-shrink-0`} size={28} />
                  <span className="text-sm font-medium text-gray-200">{strength.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
