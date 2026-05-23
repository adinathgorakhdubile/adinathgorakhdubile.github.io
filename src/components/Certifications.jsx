import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'Cisco Certified Ethical Hacking Explorer (Cisco Networking Academy)',
    'TryHackMe Learning Path Achievements',
  ];

  const training = [
    'Web security testing labs (DVWA, Juice Shop, bWAPP)',
    'API vulnerability practice including BOLA and IDOR scenarios',
    'Network security and red-team oriented practical rooms (TryHackMe)',
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Certifications & Training</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Verified certifications and practical learning tracks supporting analyst, testing, and investigative roles.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <Award size={22} />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((item) => (
                  <li key={item} className="text-gray-300 flex items-start">
                    <span className="text-cyber-green mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4 flex items-center gap-2">
                <BookOpen size={22} />
                Practical Training
              </h3>
              <ul className="space-y-3">
                {training.map((item) => (
                  <li key={item} className="text-gray-300 flex items-start">
                    <span className="text-cyber-green mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
