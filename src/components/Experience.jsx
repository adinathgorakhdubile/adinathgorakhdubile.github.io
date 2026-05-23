import { motion } from 'framer-motion';

const Experience = () => {
  const experienceItems = [
    {
      title: 'ReconX - Reconnaissance Automation Tool',
      timeframe: 'Hands-on project',
      summary:
        'Built a CLI-based Python/Bash workflow to automate initial recon and information gathering for faster assessment setup.',
    },
    {
      title: 'Security Labs & Practical Assessments',
      timeframe: '30+ practical labs',
      summary:
        'Validated SQLi, XSS, CSRF, IDOR, and API authorization flaws in controlled lab environments including DVWA, Juice Shop, bWAPP, and TryHackMe.',
    },
    {
      title: 'M.Sc. PGD in Cyber & Computer Forensics and Related Law',
      timeframe: '2025 - 2026',
      summary:
        'Developing capability in forensic processes, legal context, and evidence-aware cyber security operations.',
    },
    {
      title: 'B.Sc. in Cyber and Digital Science',
      timeframe: '2022 - 2025',
      summary:
        'Completed foundational cyber security and digital science education with practical security application focus.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Experience</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Practical experience combining analyst workflows, penetration testing, and forensic/legal study.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experienceItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card"
              >
                <p className="text-cyber-cyan text-sm font-semibold mb-2">{item.timeframe}</p>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
