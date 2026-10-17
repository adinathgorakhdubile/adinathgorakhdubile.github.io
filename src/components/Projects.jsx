import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  ShieldAlert, 
  Lock, 
  Terminal, 
  FileCheck2, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight,
  Code2
} from 'lucide-react';

const PROJECTS = [
  {
    id: 'vulnx',
    title: 'VulnX',
    subtitle: 'Modular Security Scanner & Vulnerability Management Engine',
    category: 'offensive',
    icon: ShieldAlert,
    color: 'text-cyber-blue',
    borderColor: 'border-cyber-blue/30',
    tags: ['Vulnerability Management', 'Python', 'Security APIs', 'GRC Alignment'],
    problemStatement:
      'Manual vulnerability identification across fragmented endpoints creates inconsistent reporting, delayed risk prioritization, and poor traceability between discovered flaws and remediation actions.',
    methodology:
      'Engineered a modular Python scanner that queries security APIs and system ports to automate vulnerability identification, categorizes findings by CVSS severity, and produces structured risk reports mapped to actionable developer fixes.',
    highlights: [
      'Modular architecture enabling plug-and-play checks across differing target environments',
      'Automates repeatable baseline discovery workflows, reducing manual assessment overhead',
      'Structures risk reports with severity grading, technical proof, and remediation advice',
      'Maps discovered weaknesses directly to ISO 27001 vulnerability management controls',
    ],
    technologies: ['Python 3', 'REST APIs', 'Vulnerability Scoring', 'JSON/Markdown Export'],
    github: 'https://github.com/adinathgorakhdubile',
    actionLabel: 'Explore Repository',
  },
  {
    id: 'secure-api',
    title: 'SecureAPI Tester',
    subtitle: 'API Security Testing Workflow (BOLA, IDOR, OAuth & JWT)',
    category: 'offensive',
    icon: Lock,
    color: 'text-cyber-cyan',
    borderColor: 'border-cyber-cyan/30',
    tags: ['API Security (VAPT)', 'OWASP API Top 10', 'OAuth / JWT', 'Python'],
    problemStatement:
      'Modern microservice APIs frequently expose authorization flaws such as Broken Object Level Authorization (BOLA) and insecure JWT validation that standard web network scanners fail to detect.',
    methodology:
      'Constructed a specialized testing workflow to evaluate REST endpoints against OWASP API Security Top 10 vulnerabilities. Implemented token fuzzing, privilege escalation checks across user roles, and rate-limiting stress testing in controlled labs.',
    highlights: [
      'Validates BOLA, IDOR, and broken function level authorization across simulated API routes',
      'Tests JWT signature verification, expired token handling, and algorithm confusion flaws',
      'Evaluates API rate-limiting and burst thresholds to prevent automated credential abuse',
      'Generates remediation briefs ready for direct consumption by backend engineering teams',
    ],
    technologies: ['Python', 'Requests/Session Handling', 'JWT & OAuth 2.0', 'Postman / Burp Suite'],
    github: 'https://github.com/adinathgorakhdubile',
    actionLabel: 'View GitHub Profile',
  },
  {
    id: 'webenum-reconx',
    title: 'WebEnum Pro / ReconX',
    subtitle: 'Automated Reconnaissance & Attack-Surface Profiling CLI',
    category: 'tooling',
    icon: Terminal,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    tags: ['Recon Automation', 'Python / Bash', 'DNS & OSINT', 'Attack Surface'],
    problemStatement:
      'Information gathering and attack-surface mapping during authorized engagements is labor-intensive when running multiple disparate command-line enumeration tools sequentially.',
    methodology:
      'Developed a CLI-based automation suite in Python and Bash that coordinates subdomain enumeration, DNS record interrogation, active service fingerprinting, and directory discovery into a cohesive, structured pipeline.',
    highlights: [
      'Orchestrates multi-tool reconnaissance into a unified terminal workflow',
      'Aggregates active domains, IP blocks, open ports, and technologies into clean markdown outputs',
      'Reduces reconnaissance setup time significantly during pre-engagement scoping',
      'Operates strictly within authorized target boundaries and explicit legal scope',
    ],
    technologies: ['Python', 'Bash Scripting', 'DNS Enumeration', 'OSINT Tools', 'Linux CLI'],
    github: 'https://github.com/adinathgorakhdubile',
    actionLabel: 'View GitHub Repository',
  },
  {
    id: 'forensic-compliance',
    title: 'Forensic & Compliance Study Notes',
    subtitle: 'Evidence Handling, Chain of Custody & Security Framework Mapping',
    category: 'grc',
    icon: FileCheck2,
    color: 'text-cyber-indigo',
    borderColor: 'border-cyber-indigo/30',
    tags: ['DFIR', 'ISO 27001', 'NIST CSF', 'GDPR', 'Cyber Law'],
    problemStatement:
      'Technical security analysts frequently fail to understand the legal admissibility of digital evidence and how technical incidents directly impact regulatory compliance audits and corporate liability.',
    methodology:
      'Developed rigorous, case-driven documentation connecting postgraduate digital forensics and cyber law coursework with international security standards (ISO 27001 ISMS, NIST CSF, and GDPR Article 32/33 requirements).',
    highlights: [
      'Standardized chain-of-custody tracking templates ensuring legal defensibility of forensic proof',
      'Cross-mapped common technical vulnerabilities to specific ISO/IEC 27001 Annex A controls',
      'Synthesized breach notification timelines and data protection compliance under GDPR',
      'Created bridge documentation facilitating clear communication between SecOps and legal teams',
    ],
    technologies: ['ISO 27001', 'NIST CSF', 'GDPR Guidelines', 'Chain of Custody Protocols', 'Cyber Law'],
    github: 'https://github.com/adinathgorakhdubile',
    actionLabel: 'Review Research on GitHub',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects (4)' },
  { id: 'offensive', label: 'Penetration Testing (VAPT)' },
  { id: 'tooling', label: 'Recon & CLI Tooling' },
  { id: 'grc', label: 'GRC & DFIR Research' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 px-4 sm:px-6 relative bg-obsidian-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-blue font-semibold mb-2">
            Verified Security Toolkits &amp; Research
          </p>
          <h2 id="projects-heading" className="section-title">
            Case Studies &amp; Toolkits
          </h2>
          <p className="section-subtitle">
            Ground-truth security implementations across automated scanning, API abuse validation, reconnaissance pipelines,
            and regulatory compliance frameworks.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? 'bg-cyber-blue text-slate-950 font-bold shadow-md shadow-cyber-blue/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Case Study Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`card card-hover border ${project.borderColor} bg-slate-900/60 p-6 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* Header: Icon, Title & GitHub Link */}
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${project.color}`}>
                        <project.icon size={26} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-cyber-blue hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="track-tag text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Problem & Methodology Block */}
                  <div className="space-y-3 text-xs leading-relaxed pt-1">
                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-1">
                      <span className="font-mono text-cyber-blue font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                        <AlertTriangle size={12} className="text-amber-400" />
                        Security Problem Statement:
                      </span>
                      <p className="text-slate-300">{project.problemStatement}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-1">
                      <span className="font-mono text-cyber-green font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                        <Code2 size={12} className="text-cyber-green" />
                        Engineering Methodology:
                      </span>
                      <p className="text-slate-300">{project.methodology}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      Key Highlights &amp; Findings:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-cyber-green shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tech Stack & Action Link */}
                <div className="pt-5 mt-5 border-t border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-cyber-blue hover:text-white inline-flex items-center gap-1 group shrink-0"
                  >
                    <span>{project.actionLabel}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Ethical Standards Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono max-w-2xl mx-auto">
          All projects, testing workflows, and tools are built and evaluated exclusively in authorized environments
          (DVWA, OWASP Juice Shop, bWAPP, TryHackMe) under ethical hacking principles and responsible disclosure guidelines.
        </div>
      </div>
    </section>
  );
};

export default Projects;
