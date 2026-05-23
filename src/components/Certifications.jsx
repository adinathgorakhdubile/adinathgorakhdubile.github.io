import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'Cisco Certified Ethical Hacking Explorer (Cisco Networking Academy)',
    'TryHackMe Learning Path Achievements',
  ];

  const training = [
    'Web and API security practice: DVWA, Juice Shop, bWAPP',
    'Network security and red-team learning rooms (TryHackMe)',
    'Compliance and governance awareness: ISO 27001, NIST, GDPR',
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Certifications & Training</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Formal certifications and ongoing training that support analyst, pentest, and DFIR-oriented roles.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="card">
              <h3 className="text-xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <Award size={22} />
                Certifications
              </h3>
              <ul className="space-y-3 text-gray-300">
                {certifications.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyber-green mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4 flex items-center gap-2">
                <GraduationCap size={22} />
                Training Focus
              </h3>
              <ul className="space-y-3 text-gray-300">
                {training.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyber-green mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
