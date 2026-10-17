import { Github, Linkedin, Mail, ShieldCheck, Heart } from 'lucide-react';
import { RESUME_TRACKS } from '../data/resumes';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/adinathgorakhdubile', 
      label: 'GitHub Profile (adinathgorakhdubile)' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/adinath-dubile', 
      label: 'LinkedIn Profile (adinath-dubile)' 
    },
    { 
      icon: Mail, 
      href: 'mailto:adinathdubile@zohomail.in', 
      label: 'Direct Email (adinathdubile@zohomail.in)' 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Role Tracks', href: '#role-switcher' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Projects & Case Studies', href: '#projects' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Experience & Education', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Resume Hub', href: '#resume' },
    { name: 'Contact & Hire', href: '#contact' },
  ];

  return (
    <footer className="bg-obsidian border-t border-slate-800/90 py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-green p-[1px]">
                <div className="w-full h-full rounded-lg bg-obsidian flex items-center justify-center font-mono font-bold text-xs text-cyber-blue">
                  AD
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Adinath Gorakh Dubile
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Cybersecurity Researcher based in Maharashtra, India. Specializing in Web &amp; API Penetration Testing (VAPT),
              Governance, Risk &amp; Compliance (ISO 27001, NIST CSF, GDPR), Information Security, and Digital Forensics.
            </p>

            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyber-blue hover:border-cyber-blue/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="pt-1">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-cyber-green" />
                Ethical Practice • 100% Authorized Validation Only
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-blue">
              Site Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-1.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Resume Connector Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-green">
              Resume Artifacts
            </h4>
            <ul className="space-y-2 text-xs">
              {RESUME_TRACKS.map((track) => (
                <li key={track.id}>
                  <a
                    href={track.path}
                    download={track.filename}
                    className="text-slate-400 hover:text-cyber-cyan transition-colors flex items-center justify-between group"
                    title={`Download ${track.title}`}
                  >
                    <span className="truncate">{track.title}</span>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyber-cyan">PDF ↓</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="text-[11px] font-mono text-slate-400">
                Connected to folder: <code className="text-cyber-cyan">public/resumes/</code>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Geo Meta */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Adinath Gorakh Dubile. All rights reserved. • Maharashtra, India
          </p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            Built with React &amp; Tailwind CSS • Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
