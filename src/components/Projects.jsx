import { motion } from 'framer-motion';
import { Github, Shield, Lock, Search, Microscope } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ReconX (CLI Recon Automation Tool)',
      description: 'Python/Bash-based modular reconnaissance tool designed to streamline initial information gathering and target enumeration in approved security assessment workflows.',
      technologies: ['Python', 'Bash', 'OSINT', 'Automation'],
      tags: ['Threat Intel', 'Pentest', 'SOC'],
      highlights: [
        'Automates repeatable reconnaissance steps for consistent assessments',
        'Supports modular integration for scalable scanning workflows',
        'Structured output suitable for analyst review and documentation',
      ],
      icon: Shield,
      color: 'text-cyber-blue',
      github: 'https://github.com/adinathgorakhdubile',
    },
    {
      title: 'Web Security Lab Assessments',
      description: 'Hands-on testing in DVWA, Juice Shop, and bWAPP to practice secure vulnerability identification, validation, and reporting in controlled environments.',
      technologies: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'DVWA', 'Juice Shop', 'bWAPP'],
      tags: ['Pentest', 'IR', 'SOC'],
      highlights: [
        'Validated SQLi, XSS, CSRF, IDOR, and logic flaws in legal lab setups',
        'Mapped findings to OWASP-style risk communication',
        'Focused on remediation-oriented reporting language',
      ],
      icon: Lock,
      color: 'text-cyber-cyan',
      github: '#',
    },
    {
      title: 'API Security Case Practice',
      description: 'Practical API testing exercises for identifying BOLA, IDOR, and rate-limit weaknesses with emphasis on authentication and authorization controls.',
      technologies: ['REST APIs', 'OWASP API Security', 'JWT/OAuth Concepts', 'Python'],
      tags: ['Pentest', 'SOC', 'GRC/Law'],
      highlights: [
        'Performed endpoint-level checks for access control flaws',
        'Documented findings with control-focused recommendations',
        'Aligned observations with secure design and governance expectations',
      ],
      icon: Search,
      color: 'text-cyber-green',
      github: '#',
    },
    {
      title: 'Forensics & Related Law Academic Track',
      description: 'Ongoing postgraduate studies in Cyber & Computer Forensics and Related Law to strengthen incident investigation, evidence handling, and legal-aware security practice.',
      technologies: ['DFIR Concepts', 'Evidence Handling', 'Cyber Law', 'Compliance'],
      tags: ['DFIR', 'IR', 'GRC/Law'],
      highlights: [
        'Bridges technical and legal considerations for security work',
        'Supports disciplined, defensible incident documentation',
        'Reinforces privacy and responsible disclosure standards',
      ],
      icon: Microscope,
      color: 'text-cyber-blue',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Projects & Case Studies</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Professional security work samples mapped to analyst, pentest, DFIR, and governance/legal-aligned tracks.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card group hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <project.icon className={`${project.color}`} size={44} />
                  <div className="flex gap-3">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-blue transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/40 rounded-full text-xs font-semibold text-cyber-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-900/50 border border-gray-700 rounded-full text-xs font-medium text-cyber-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyber-cyan">Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-gray-400 flex items-start">
                        <span className="text-cyber-green mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              All testing activities shown here are performed in authorized environments with ethical and legal boundaries.
            </p>
            <a
              href="https://github.com/adinathgorakhdubile"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center gap-2"
            >
              <Github size={20} />
              View All on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
