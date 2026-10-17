import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#role-switcher' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resumes', href: '#resume' },
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
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/50 py-3'
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
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-blue via-cyber-cyan to-cyber-green p-[1px] shadow-sm shadow-cyber-blue/20">
              <div className="w-full h-full rounded-lg bg-obsidian flex items-center justify-center font-mono font-bold text-sm text-cyber-blue group-hover:text-white transition-colors">
                AD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-cyber-blue transition-colors leading-tight">
                Adinath Gorakh Dubile
              </span>
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-flex items-center gap-1">
                <ShieldCheck size={12} className="text-cyber-green" />
                Cybersecurity Researcher • Maharashtra, IN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-cyber-blue hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-cyber-blue hover:bg-slate-800/80 rounded-md transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="cyber-button text-xs py-2 px-3.5"
            >
              Contact / Hire
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="cyber-button text-xs py-1.5 px-3 sm:hidden"
            >
              Contact
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-cyber-blue hover:bg-slate-800/60 rounded-md transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 pt-3 border-t border-slate-800 bg-obsidian/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm text-slate-200 hover:text-cyber-blue hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-300 hover:text-cyber-blue hover:bg-slate-800 rounded-md transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
                <a
                  href="/resumes/Adinath_Dubile_Resume.pdf"
                  download="Adinath_Dubile_Resume.pdf"
                  className="cyber-button-outline text-xs py-1.5 px-3"
                >
                  Get Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
