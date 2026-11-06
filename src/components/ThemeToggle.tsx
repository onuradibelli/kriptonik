'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('kriptonik-theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'dark'; // default to dark
      setTheme(initial);
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(initial);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('kriptonik-theme', nextTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-lg border border-[var(--border)] bg-[var(--card)] opacity-50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Temayı Değiştir (Aydınlık / Karanlık Mod)"
      title={theme === 'dark' ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç'}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--card-muted)] hover:text-[var(--foreground)] hover:border-[#2962FF] transition-all"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-[#F2C14E] transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-[#2563EB] transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
