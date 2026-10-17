import { useContext } from 'react';
import { DomainThemeContext } from './DomainContextInstance';

export const useDomainTheme = () => {
  const context = useContext(DomainThemeContext);
  if (!context) {
    throw new Error('useDomainTheme must be used within a DomainThemeProvider');
  }
  return context;
};
