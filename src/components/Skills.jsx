import { motion } from 'framer-motion';
import { Shield, Code, Server, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      color: 'text-cyber-blue',
      skills: ['Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nmap', 'Wireshark', 'SQLMap', 'Nikto', 'Gobuster'],
    },
    {
      icon: Code,
      title: 'Programming',
      color: 'text-cyber-cyan',
      skills: ['Python', 'Bash', 'JavaScript', 'PowerShell', 'Go'],
    },
    {
      icon: Server,
      title: 'Security Labs',
      color: 'text-cyber-green',
      skills: ['DVWA', 'Juice Shop', 'bWAPP', 'TryHackMe', 'HackTheBox', 'OWASP WebGoat'],
    },
    {
      icon: Wrench,
      title: 'Security Tools',
      color: 'text-cyber-blue',
      skills: ['Nessus', 'OpenVAS', 'John the Ripper', 'Hashcat', 'Hydra', 'Aircrack-ng'],
    },
    {
      icon: BookOpen,
      title: 'Frameworks & Methodologies',
      color: 'text-cyber-cyan',
      skills: ['OWASP Top 10', 'MITRE ATT&CK', 'PTES', 'OSSTMM', 'NIST CSF'],
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
            Comprehensive toolkit and expertise in offensive security and penetration testing
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

          {/* Additional Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 card max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-cyber-green mb-4 text-center">Experience & Labs</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-blue mb-2">100+</div>
                <p className="text-gray-400">Completed Lab Challenges</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-cyan mb-2">DVWA</div>
                <p className="text-gray-400">Damn Vulnerable Web App</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-green mb-2">OWASP</div>
                <p className="text-gray-400">Juice Shop & bWAPP</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-cyber-blue mb-2">THM</div>
                <p className="text-gray-400">TryHackMe Rooms</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
