'use client'
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState } from "react";
export default function DarkmodeToggle() {
    
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = userTheme || (systemTheme ? 'dark' : 'light');
  const [currentTheme, setTheme] = useState(theme);

    if (currentTheme == 'dark') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
    else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
    
    function toggleTheme() {
        if (currentTheme == 'dark') {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }
    
    return (
        <>
            {currentTheme == 'dark'?<Sun width="30px" height="30px" onClick={toggleTheme}></Sun>:
                <Moon width="30px" height="30px" onClick={toggleTheme}></Moon>}
            
        </>
    );
    }