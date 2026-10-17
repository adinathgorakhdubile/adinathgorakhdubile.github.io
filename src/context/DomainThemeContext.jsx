import { useState, useEffect } from 'react';
import { DOMAINS } from '../data/domains';
import { DomainThemeContext } from './DomainContextInstance';

export const DomainThemeProvider = ({ children }) => {
  const [activeDomain, setActiveDomain] = useState('infosec');

  const domain = DOMAINS[activeDomain] || DOMAINS.infosec;

  useEffect(() => {
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
