import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, FlaskConical } from 'lucide-react';

const Experience = () => {
  const items = [
    {
      icon: Briefcase,
      title: 'ReconX Development',
      subtitle: 'Security Automation Project',
      description: 'Built a CLI-based reconnaissance automation tool in Python and Bash with a modular design for repeatable security workflows.',
    },
    {
      icon: FlaskConical,
      title: 'Security Labs & Practical Assessments',
      subtitle: 'Hands-on Practice (DVWA, Juice Shop, bWAPP, TryHackMe)',
      description: 'Executed controlled web, API, and network testing scenarios to identify vulnerabilities and improve reporting discipline.',
    },
    {
      icon: GraduationCap,
      title: 'Academic Foundation',
      subtitle: 'B.Sc. Cyber & Digital Science | M.Sc. PGD Cyber & Computer Forensics and Related Law',
      description: 'Developing cross-functional capability across cybersecurity operations, forensic thinking, and legal/compliance awareness.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Experience</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Practical security exposure across project development, lab-based assessments, and advanced forensics/legal studies.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card"
              >
                <item.icon className="text-cyber-blue mb-4" size={30} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-cyber-cyan text-sm mb-3">{item.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
