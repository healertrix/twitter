'use client'

import { useState, useEffect } from 'react';

export default function useDarkModeToggle(): [string, () => void] {
  const [currentTheme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme();
  }, [currentTheme]);

  function getInitialTheme() {
    let userTheme = null;
    let systemTheme = true;
    if (typeof window !== 'undefined' && window.localStorage) {
      userTheme = localStorage.getItem('theme');
      systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return userTheme || (systemTheme ? 'dark' : 'light');
  }

  function applyTheme() {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  const toggleTheme: () => void = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return [currentTheme, toggleTheme];
}

