import { motion } from 'framer-motion';
import { Download, FileUser } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto card text-center"
        >
          <h2 className="section-title mb-4">Resume</h2>
          <p className="text-gray-300 mb-8">
            Download the version best aligned to your role focus. Both resumes reflect ethical, authorized, and
            professional cybersecurity practice.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/ResumeSA.pdf" download className="cyber-button inline-flex items-center justify-center gap-2">
              <FileUser size={20} />
              Analyst-Focused Resume
            </a>
            <a href="/ResumeO.pdf" download className="cyber-button-outline inline-flex items-center justify-center gap-2">
              <Download size={20} />
              Offensive-Focused Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
