import { Github, Linkedin, Mail, ShieldCheck, Heart } from 'lucide-react';
import { useDomainTheme } from '../context/useDomainTheme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { domain, DOMAINS, setActiveDomain } = useDomainTheme();

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
    <footer className="bg-black border-t border-slate-800/90 py-12 px-4 sm:px-6 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg p-[1.5px]"
                style={{ background: `linear-gradient(135deg, ${domain.accentHex}, #FFFFFF)` }}
              >
                <div className="w-full h-full rounded-[6px] bg-[#070B14] flex items-center justify-center font-mono font-bold text-xs text-white">
                  AD
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Adinath Gorakh Dubile
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Cybersecurity Researcher based in Maharashtra, India. Specializing in Web &amp; API Penetration Testing (VAPT),
              Information Security analysis, and Governance, Risk &amp; Compliance (ISO 27001, NIST CSF, GDPR, DFIR).
            </p>

            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="pt-1">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <ShieldCheck size={13} style={{ color: domain.accentHex }} />
                Ethical Practice • 100% Authorized Security Testing Only
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: domain.accentHex }}>
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-1.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Tracks & Resumes */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: domain.accentHex }}>
              Service Tracks &amp; CVs
            </h4>
            <ul className="space-y-2 text-xs">
              {Object.values(DOMAINS).map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => setActiveDomain(d.id)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between w-full text-left group"
                  >
                    <span className="truncate">{d.shortName}</span>
                    <span className="text-[10px] font-mono opacity-60 group-hover:opacity-100">
                      {d.themeName}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-800">
              <a
                href={domain.resume.path}
                download={domain.resume.filename}
                className="text-xs font-bold hover:underline inline-flex items-center gap-1"
                style={{ color: domain.accentHex }}
              >
                <span>Download {domain.resume.tag} (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Geo Meta */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Adinath Gorakh Dubile. All rights reserved. • Maharashtra, India
          </p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            Active Theme: <span style={{ color: domain.accentHex }}>{domain.themeName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
