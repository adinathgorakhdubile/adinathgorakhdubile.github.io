import { motion } from 'framer-motion';
import { Mic, FileText } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Publications & Talks</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Knowledge-sharing focus areas and communication interests for professional forums.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <FileText size={22} />
                Writing Focus
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start"><span className="text-cyber-green mr-2">•</span>Web and API security lessons from lab-based testing</li>
                <li className="flex items-start"><span className="text-cyber-green mr-2">•</span>Reconnaissance automation and practical analyst workflows</li>
                <li className="flex items-start"><span className="text-cyber-green mr-2">•</span>Forensics and legal-aware cybersecurity perspectives</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4 flex items-center gap-2">
                <Mic size={22} />
                Talk Topics
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start"><span className="text-cyber-green mr-2">•</span>Ethical testing boundaries and responsible disclosure</li>
                <li className="flex items-start"><span className="text-cyber-green mr-2">•</span>Entry-to-mid pathway across SOC, Pentest, and DFIR skills</li>
                <li className="flex items-start"><span className="text-cyber-green mr-2">•</span>Combining technical security with cyber law awareness</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
