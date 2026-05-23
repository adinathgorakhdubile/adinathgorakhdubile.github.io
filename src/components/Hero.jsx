import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-cyan p-1">
              <div className="w-full h-full rounded-full bg-dark-navy flex items-center justify-center text-5xl md:text-6xl font-bold glow-text">
                AD
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Adinath Dubile
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-cyber-blue mb-4"
          >
            Cybersecurity Analyst | Information Security | Penetration Testing | DFIR
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-3 max-w-3xl mx-auto"
          >
            Multi-disciplinary cybersecurity professional with hands-on experience in web/API/network security
            testing, vulnerability assessment, reconnaissance automation, and incident-focused forensic studies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base md:text-lg text-cyber-cyan mb-8 max-w-3xl mx-auto"
          >
            Focused on ethical practice, authorized testing, privacy protection, and responsible disclosure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="cyber-button inline-flex items-center gap-2 group"
            >
              View Case Studies
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resume"
              className="cyber-button-outline inline-flex items-center gap-2"
            >
              <Download size={20} />
              Resume Options
            </a>
            <a
              href="#contact"
              className="cyber-button-outline inline-flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <div className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-cyber-blue rounded-full relative">
                <div className="w-1.5 h-3 bg-cyber-blue rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
