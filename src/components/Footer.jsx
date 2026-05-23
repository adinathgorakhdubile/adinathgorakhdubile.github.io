import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/adinathgorakhdubile', label: 'GitHub' },
    { icon: Mail, href: 'mailto:adinathgorakhdubile@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Publications', href: '#publications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold glow-text mb-4">Adinath Dubile</h3>
            <p className="text-gray-400 mb-4">
              Multi-disciplinary cybersecurity portfolio spanning analyst work, penetration testing, DFIR, and legal-aware security practice.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyber-blue mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyber-cyan mb-4">Resume Downloads</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/ResumeSA.pdf"
                  download
                  className="text-gray-400 hover:text-cyber-green transition-colors duration-300"
                >
                  Resume (Analyst-Focused)
                </a>
              </li>
              <li>
                <a
                  href="/ResumeO.pdf"
                  download
                  className="text-gray-400 hover:text-cyber-green transition-colors duration-300"
                >
                  Resume (Offensive-Focused)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adinathgorakhdubile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-green transition-colors duration-300"
                >
                  GitHub Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Adinath Dubile. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
