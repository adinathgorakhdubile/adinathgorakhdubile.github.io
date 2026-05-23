import { motion } from 'framer-motion';
import { FileText, Mic } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Publications & Talks</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Knowledge-sharing focus across practical security testing, incident learning, and legal-aware cyber practice.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="card">
              <h3 className="text-xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <FileText size={22} />
                Technical Write-ups
              </h3>
              <p className="text-gray-400">
                Preparing structured write-ups from practical labs covering web/API vulnerabilities, findings analysis,
                and remediation guidance.
              </p>
            </article>

            <article className="card">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4 flex items-center gap-2">
                <Mic size={22} />
                Talks & Knowledge Sessions
              </h3>
              <p className="text-gray-400">
                Open to participating in student and community sessions on ethical security testing, cyber forensics,
                and responsible disclosure practices.
              </p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
