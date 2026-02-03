import { motion } from 'framer-motion';
import { Shield, Code, Network, Bug, Terminal, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Shield, name: 'Web Application Penetration Testing', color: 'text-cyber-blue' },
    { icon: Network, name: 'API Security Assessment', color: 'text-cyber-cyan' },
    { icon: Network, name: 'Network Penetration Testing', color: 'text-cyber-blue' },
    { icon: Bug, name: 'Vulnerability Assessment & Management', color: 'text-cyber-green' },
    { icon: Terminal, name: 'Red Team Enumeration', color: 'text-cyber-cyan' },
    { icon: Code, name: 'Python Automation & Scripting', color: 'text-cyber-blue' },
    { icon: Zap, name: 'Security Tool Development', color: 'text-cyber-green' },
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
                As a dedicated Penetration Tester and VAPT Engineer, I specialize in identifying and 
                exploiting security vulnerabilities to help organizations strengthen their security posture. 
                With extensive experience in offensive security, I conduct comprehensive security assessments 
                across web applications, APIs, and network infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                My approach combines manual testing techniques with automated tools to provide thorough 
                security evaluations. I stay current with the latest attack vectors and security trends 
                to deliver cutting-edge penetration testing services.
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
                I bring a comprehensive skill set to every engagement:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Deep understanding of OWASP Top 10 vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Proficient in security frameworks and methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Experience with various penetration testing tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-blue mr-2">▸</span>
                  <span>Custom exploit and tool development capabilities</span>
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
