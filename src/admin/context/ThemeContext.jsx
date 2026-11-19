import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sai_admin_theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('sai_admin_theme', theme);
    document.documentElement.setAttribute('data-admin-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  // Semantic color tokens for consistent light & dark themes
  const colors = {
    // Backgrounds
    pageBg: isDark ? '#0F172A' : '#F8F9FA',
    cardBg: isDark ? '#1E293B' : '#FFFFFF',
    headerBg: isDark ? '#1E293B' : '#FFFFFF',
    sidebarBg: isDark ? '#1E293B' : '#FFFFFF',
    subtleBg: isDark ? '#334155' : '#FAF8F9',
    accentBg: isDark ? 'rgba(173, 35, 72, 0.2)' : '#FFF9F5',
    inputBg: isDark ? '#0F172A' : '#FFFFFF',
    modalOverlay: 'rgba(15, 23, 42, 0.75)',

    // Borders
    border: isDark ? '#334155' : 'rgba(173, 35, 72, 0.12)',
    borderSubtle: isDark ? '#1E293B' : '#E5E7EB',
    borderFocus: '#AD2348',

    // Text
    textPrimary: isDark ? '#F8FAFC' : '#1B2430',
    textSecondary: isDark ? '#94A3B8' : '#59616B',
    textMuted: isDark ? '#64748B' : '#9CA3AF',
    textInverse: '#FFFFFF',

    // Brand
    brandPrimary: '#AD2348',
    brandSecondary: isDark ? '#E11D48' : '#781530',
    brandLight: isDark ? 'rgba(173, 35, 72, 0.25)' : 'rgba(173, 35, 72, 0.08)',

    // Status colors
    success: '#2E7D32',
    successBg: isDark ? 'rgba(46, 125, 50, 0.2)' : '#E8F5E9',
    warning: '#B78103',
    warningBg: isDark ? 'rgba(183, 129, 3, 0.2)' : '#FFF8E1',
    danger: '#DC2626',
    dangerBg: isDark ? 'rgba(220, 38, 38, 0.2)' : '#FEE2E2',
    info: '#0284C7',
    infoBg: isDark ? 'rgba(2, 132, 199, 0.2)' : '#E0F2FE',
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
