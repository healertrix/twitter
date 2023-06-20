'use client'
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkmodeToggle() {
  const [currentTheme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme();
  }, [currentTheme]);

    function getInitialTheme() {
        let userTheme = null;
        let systemTheme = null;
        if (typeof window !== 'undefined' && window.localStorage) {
            userTheme = localStorage.getItem('theme');
             systemTheme = window.matchMedia(
              '(prefers-color-scheme: dark)'
            ).matches;
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

  function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      {currentTheme === 'dark' ? (
        <Sun width='30px' height='30px' onClick={toggleTheme} />
      ) : (
        <Moon width='30px' height='30px' onClick={toggleTheme} />
      )}
    </>
  );
}
