import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto card text-center"
        >
          <h2 className="section-title mb-4">Resume</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Download the resume version aligned to your role requirement. Both versions reflect authorized,
            ethical, and compliance-aware cybersecurity practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ResumeSA.pdf"
              download
              className="cyber-button inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume (Analyst-Focused)
            </a>
            <a
              href="/ResumeO.pdf"
              download
              className="cyber-button-outline inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume (Offensive-Focused)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
