import { useState, useEffect } from 'react';
import { DOMAINS } from '../data/domains';
import { DomainThemeContext } from './DomainContextInstance';

export const DomainThemeProvider = ({ children }) => {
  const [activeDomain, setActiveDomain] = useState('infosec');

  const domain = DOMAINS[activeDomain] || DOMAINS.infosec;

  useEffect(() => {
    const root = document.documentElement;

    // Set theme identifier on root
    root.setAttribute('data-theme', domain.id);

    // Dynamic CSS variables for instant 100% theme propagation
    root.style.setProperty('--theme-accent', domain.accentHex);
    root.style.setProperty('--theme-accent-hover', domain.accentHoverHex);
    root.style.setProperty('--theme-accent-rgb', domain.accentRgb);

    if (domain.id === 'offensive') {
      root.style.setProperty('--theme-card-bg', 'rgba(20, 5, 7, 0.88)');
      root.style.setProperty('--theme-card-border', 'rgba(153, 27, 27, 0.45)');
      root.style.setProperty('--theme-card-border-hover', 'rgba(239, 68, 68, 0.75)');
      root.style.setProperty('--theme-badge-bg', 'rgba(69, 10, 10, 0.6)');
      root.style.setProperty('--theme-badge-border', 'rgba(153, 27, 27, 0.8)');
      root.style.setProperty('--theme-glow', 'rgba(239, 68, 68, 0.25)');
    } else if (domain.id === 'grc') {
      root.style.setProperty('--theme-card-bg', 'rgba(7, 32, 20, 0.88)');
      root.style.setProperty('--theme-card-border', 'rgba(6, 95, 70, 0.45)');
      root.style.setProperty('--theme-card-border-hover', 'rgba(34, 197, 94, 0.75)');
      root.style.setProperty('--theme-badge-bg', 'rgba(2, 44, 25, 0.6)');
      root.style.setProperty('--theme-badge-border', 'rgba(6, 95, 70, 0.8)');
      root.style.setProperty('--theme-glow', 'rgba(34, 197, 94, 0.25)');
    } else {
      // infosec (navy blue)
      root.style.setProperty('--theme-card-bg', 'rgba(11, 23, 43, 0.88)');
      root.style.setProperty('--theme-card-border', 'rgba(30, 58, 138, 0.45)');
      root.style.setProperty('--theme-card-border-hover', 'rgba(56, 189, 248, 0.75)');
      root.style.setProperty('--theme-badge-bg', 'rgba(8, 47, 73, 0.6)');
      root.style.setProperty('--theme-badge-border', 'rgba(14, 116, 144, 0.8)');
      root.style.setProperty('--theme-glow', 'rgba(56, 189, 248, 0.25)');
    }

    // Apply dynamic body background gradient
    document.body.style.background = domain.bgGradient;
    document.body.style.backgroundColor = domain.id === 'offensive' 
      ? '#0A0203' 
      : domain.id === 'grc' 
      ? '#03150C' 
      : '#060E1D';
  }, [activeDomain, domain]);

  return (
    <DomainThemeContext.Provider value={{ activeDomain, setActiveDomain, domain, DOMAINS }}>
      {children}
    </DomainThemeContext.Provider>
  );
};

