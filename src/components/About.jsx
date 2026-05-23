import { motion } from 'framer-motion';
import { Shield, Code, Scale, Search, Network, BookOpen, Lock } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Shield, name: 'Security Monitoring & Analysis', color: 'text-cyber-blue' },
    { icon: Search, name: 'Incident Investigation Support', color: 'text-cyber-cyan' },
    { icon: Network, name: 'Web, API, and Network Security Testing', color: 'text-cyber-blue' },
    { icon: Lock, name: 'Vulnerability Assessment & Management', color: 'text-cyber-green' },
    { icon: Code, name: 'Python/Bash Security Automation', color: 'text-cyber-cyan' },
    { icon: BookOpen, name: 'Compliance Awareness (ISO 27001, NIST, GDPR)', color: 'text-cyber-blue' },
    { icon: Scale, name: 'Cyber Forensics and Related Law Studies', color: 'text-cyber-green' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-cyber-blue mb-4">Professional Background</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a cybersecurity practitioner with hands-on work across security analysis, penetration
                testing, and forensic-focused academic training. My profile combines practical lab-based
                validation of web, API, and network weaknesses with structured security frameworks and
                compliance-aligned thinking.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I prioritize ethical practice, privacy, and responsible disclosure. All assessments and
                validation activities are performed in authorized environments to support stronger security
                posture and clear, actionable risk reduction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-cyber-cyan mb-4">Expertise Areas</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I bring cross-functional capability for multiple cybersecurity tracks:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>SOC-aligned detection awareness and incident triage foundations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Threat-informed security testing using OWASP and MITRE-aligned approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Digital forensics and related legal studies for evidence-aware security work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Risk/compliance awareness mapped to ISO 27001, NIST, and GDPR fundamentals</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Key Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-cyber-green">Key Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="card flex items-center gap-4 hover:scale-105"
                >
                  <skill.icon className={`${skill.color} flex-shrink-0`} size={28} />
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
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
