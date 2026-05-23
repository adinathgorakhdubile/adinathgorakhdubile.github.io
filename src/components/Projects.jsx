import { motion } from 'framer-motion';
import { Github, Shield, Lock, Search, ClipboardCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'VulnX',
      description: 'Modular security scanner concept focused on improving vulnerability discovery workflows and structured risk reporting.',
      technologies: ['Python', 'Automation', 'Security APIs'],
      tags: ['SOC', 'Vulnerability Management', 'GRC'],
      highlights: [
        'Built for repeatable and consistent assessment workflows',
        'Supports modular expansion for different environment types',
        'Designed to improve analyst-friendly findings output',
        'Maps findings to practical remediation actions',
      ],
      icon: Shield,
      color: 'text-cyber-blue',
      github: 'https://github.com/adinathgorakhdubile',
    },
    {
      title: 'SecureAPI Tester',
      description: 'API security testing workflow used in practice labs to evaluate authentication, authorization, and abuse-prevention controls.',
      technologies: ['Python', 'REST APIs', 'OAuth', 'JWT'],
      tags: ['Pentest', 'API Security', 'IR'],
      highlights: [
        'Covers OWASP API risk categories including BOLA and IDOR',
        'Tests token handling and access-control enforcement',
        'Includes rate-limiting and abuse-path validation',
        'Produces reports suitable for development and security teams',
      ],
      icon: Lock,
      color: 'text-cyber-cyan',
      github: '#',
    },
    {
      title: 'WebEnum Pro',
      description: 'Reconnaissance automation toolkit for authorized target profiling and attack-surface visibility.',
      technologies: ['Python', 'Bash', 'DNS', 'OSINT'],
      tags: ['Threat Intelligence', 'Pentest', 'SOC'],
      highlights: [
        'Automates initial enumeration to reduce manual effort',
        'Supports domain and service discovery workflows',
        'Generates structured outputs for analyst review',
        'Used only in legal and approved testing environments',
      ],
      icon: Search,
      color: 'text-cyber-green',
      github: '#',
    },
    {
      title: 'Forensic & Compliance Study Notes',
      description: 'Case-driven documentation from cyber forensics and related law coursework, connecting technical findings to compliance and legal context.',
      technologies: ['DFIR', 'Documentation', 'ISO 27001', 'NIST', 'GDPR'],
      tags: ['DFIR', 'Cyber Law', 'GRC'],
      highlights: [
        'Evidence-oriented note-taking and reporting structure',
        'Focus on defensible documentation and privacy awareness',
        'Connects technical incidents with policy/legal considerations',
        'Improves communication between technical and governance roles',
      ],
      icon: ClipboardCheck,
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
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Portfolio work mapped to analyst, pentest, DFIR, and governance-oriented security roles.
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
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-4">
                  <project.icon className={`${project.color}`} size={48} />
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

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="track-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
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

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyber-cyan">Case Study Highlights:</h4>
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-4">
              All testing and validation activities are conducted in authorized labs or approved environments
              with an ethical and responsible disclosure approach.
            </p>
            <p className="text-gray-400 mb-4">Interested in more projects?</p>
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
