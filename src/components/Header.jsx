import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDomainTheme } from '../context/useDomainTheme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeDomain, setActiveDomain, domain, DOMAINS } = useDomainTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services & Tracks', href: '#role-switcher' },
    { name: 'Skills', href: '#skills' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

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
      label: 'Email (adinathdubile@zohomail.in)' 
    },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${domain.navBg} backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3`
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 max-w-7xl" aria-label="Main Navigation">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Adinath Gorakh Dubile - Home"
          >
            <div
              className="w-9 h-9 rounded-lg p-[1.5px] transition-all duration-300 shadow-md"
              style={{
                background: `linear-gradient(135deg, ${domain.accentHex}, #FFFFFF)`,
              }}
            >
              <div className="w-full h-full rounded-[7px] bg-[#070B14] flex items-center justify-center font-mono font-bold text-xs text-white">
                AD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-tight">
                Adinath Gorakh Dubile
              </span>
              <span className="text-[11px] text-slate-300 font-mono hidden sm:inline-flex items-center gap-1">
                <ShieldCheck size={12} style={{ color: domain.accentHex }} />
                Cybersecurity Researcher • Maharashtra, IN
              </span>
            </div>
          </a>

          {/* Domain Theme Switcher Pills in Navbar */}
          <div className="hidden md:flex items-center p-1 rounded-xl bg-black/60 border border-slate-800/90 text-xs">
            {Object.values(DOMAINS).map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDomain(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeDomain === d.id
                    ? `${d.buttonClass} font-bold`
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {d.shortName}
              </button>
            ))}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Single Dynamic Download Button & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1 border-r border-slate-800 pr-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>

            {/* Single Dynamic Download Button matching the active domain */}
            <a
              href={domain.resume.path}
              download={domain.resume.filename}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-200 ${domain.buttonClass}`}
              title={`Download ${domain.resume.title}`}
            >
              <Download size={14} />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={domain.resume.path}
              download={domain.resume.filename}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1 ${domain.buttonClass}`}
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-3 pt-3 border-t border-slate-800 ${domain.cardBg} rounded-xl p-4 shadow-2xl space-y-3`}
          >
            {/* Domain Switcher in Mobile Menu */}
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Select Domain &amp; Theme:
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {Object.values(DOMAINS).map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setActiveDomain(d.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-semibold text-center truncate ${
                      activeDomain === d.id
                        ? `${d.buttonClass} font-bold`
                        : 'bg-black/50 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {d.shortName}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-xs font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
              <a
                href={domain.resume.path}
                download={domain.resume.filename}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 ${domain.buttonClass}`}
              >
                <Download size={13} />
                <span>{domain.resume.tag}</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
