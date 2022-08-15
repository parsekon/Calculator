import { useState, useEffect } from 'react';

export const useDarkTheme = () => {
  const [lclStrg, setLclStrg] = useState(null);
  const [theme, setColorTheme] = useState(lclStrg?.theme || 'dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [colorTheme, theme]);

  useEffect(() => {
    setLclStrg(localStorage);
  }, [])

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMedia.matches) {
        return 'dark'
      }
    }

    return 'dark' // light theme as the default;
  }

  getInitialTheme();

  return [colorTheme, setColorTheme];
}
