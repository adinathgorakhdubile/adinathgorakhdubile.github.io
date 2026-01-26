import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Lock, Search, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'VulnX',
      description: 'AI-integrated, modular vulnerability scanner designed to automate security assessments with intelligent threat detection capabilities.',
      technologies: ['Python', 'AI/ML', 'Security APIs', 'Automation'],
      highlights: [
        'Automated vulnerability detection',
        'Modular architecture for extensibility',
        'AI-powered threat analysis',
        'Comprehensive security scanning',
      ],
      icon: Shield,
      color: 'text-cyber-blue',
      github: 'https://github.com/adinathgorakhdubile',
    },
    {
      title: 'SecureAPI Tester',
      description: 'Comprehensive API security testing framework for identifying authentication bypass, authorization flaws, and injection vulnerabilities.',
      technologies: ['Python', 'REST APIs', 'OAuth', 'JWT'],
      highlights: [
        'Automated API endpoint discovery',
        'Authentication testing suite',
        'Rate limiting analysis',
        'OWASP API Top 10 checks',
      ],
      icon: Lock,
      color: 'text-cyber-cyan',
      github: '#',
    },
    {
      title: 'WebEnum Pro',
      description: 'Advanced web enumeration tool combining multiple reconnaissance techniques for comprehensive information gathering and attack surface mapping.',
      technologies: ['Python', 'Bash', 'DNS', 'OSINT'],
      highlights: [
        'Multi-threaded subdomain enumeration',
        'Technology stack fingerprinting',
        'Automated port scanning',
        'Report generation',
      ],
      icon: Search,
      color: 'text-cyber-green',
      github: '#',
    },
    {
      title: 'ExploitLab',
      description: 'Custom exploit development framework with proof-of-concept exploits for various vulnerabilities and security research.',
      technologies: ['Python', 'C', 'Assembly', 'Shellcode'],
      highlights: [
        'Custom payload generation',
        'Buffer overflow exploits',
        'Remote code execution demos',
        'Educational security research',
      ],
      icon: Terminal,
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
          <h2 className="section-title text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Showcasing security tools and research projects in penetration testing and vulnerability assessment
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
                  <h4 className="text-sm font-semibold text-cyber-cyan">Key Features:</h4>
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
