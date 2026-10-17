import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDomainTheme } from '../context/useDomainTheme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeDomain, setActiveDomain, domain, DOMAINS } = useDomainTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#role-switcher' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-[#070B14]/80 backdrop-blur-sm border-b border-slate-800/40 py-3.5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 max-w-7xl" aria-label="Main Navigation">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          {/* Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
            aria-label="Adinath Gorakh Dubile - Cybersecurity Researcher"
          >
            <div
              className="w-8 h-8 rounded-lg p-[1.5px] transition-all duration-300 shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${domain.accentHex}, #FFFFFF)`,
              }}
            >
              <div className="w-full h-full rounded-[6.5px] bg-[#070B14] flex items-center justify-center font-mono font-bold text-xs text-white">
                AD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-none group-hover:text-slate-200 transition-colors">
                Adinath Dubile
              </span>
              <span className="text-[11px] text-slate-400 font-mono hidden md:inline-flex items-center gap-1 mt-0.5">
                <ShieldCheck size={11} style={{ color: domain.accentHex }} />
                Cybersecurity Researcher
              </span>
            </div>
          </a>

          {/* Center: Segmented Track Switcher Pill */}
          <div className="hidden md:flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
            {Object.values(DOMAINS).map((d) => {
              const isActive = activeDomain === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDomain(d.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-lg shadow-sm"
                      style={{
                        backgroundColor: d.id === 'offensive' ? '#DC2626' : d.id === 'grc' ? '#16A34A' : '#0284C7',
                      }}
                    />
                  )}
                  <span className="relative z-10">{d.navPill || d.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Desktop Navigation Links + Single Primary Action */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="ml-2 pl-2 border-l border-slate-800">
              <a
                href={domain.resume.path}
                download={domain.resume.filename}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-200 shadow-md text-white hover:brightness-110 active:scale-95"
                style={{
                  backgroundColor: domain.id === 'offensive' ? '#DC2626' : domain.id === 'grc' ? '#16A34A' : '#0284C7',
                }}
                title={`Download ${domain.resume.title}`}
              >
                <Download size={13} />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Mobile Right Controls: Compact Track Button + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={domain.resume.path}
              download={domain.resume.filename}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1 text-white shadow-sm"
              style={{
                backgroundColor: domain.id === 'offensive' ? '#DC2626' : domain.id === 'grc' ? '#16A34A' : '#0284C7',
              }}
            >
              <Download size={12} />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-slate-800"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3 pt-3 border-t border-slate-800 bg-[#070B14]/98 rounded-xl p-4 shadow-2xl space-y-4"
            >
              {/* Mobile Domain Track Selector */}
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Select Focus Domain:
                </p>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
                  {Object.values(DOMAINS).map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        setActiveDomain(d.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold text-center truncate transition-colors ${
                        activeDomain === d.id
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      style={{
                        backgroundColor: activeDomain === d.id 
                          ? (d.id === 'offensive' ? '#DC2626' : d.id === 'grc' ? '#16A34A' : '#0284C7')
                          : 'transparent',
                      }}
                    >
                      {d.navPill || d.shortName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Nav Links */}
              <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile CV Action */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={domain.resume.path}
                  download={domain.resume.filename}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-2 text-white shadow-md"
                  style={{
                    backgroundColor: domain.id === 'offensive' ? '#DC2626' : domain.id === 'grc' ? '#16A34A' : '#0284C7',
                  }}
                >
                  <Download size={14} />
                  <span>Download {domain.resume.tag} (PDF)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
