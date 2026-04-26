'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeSwitchToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='h-11 w-20 animate-pulse rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700' />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type='button'
      role='switch'
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative h-11 w-20 rounded-full p-[2px] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
    >
      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 opacity-70 blur-[6px]' />

      <div className='relative flex h-full w-full items-center rounded-full border border-white/10 bg-white/80 px-1 backdrop-blur-md dark:bg-slate-900/80'>
        {/* background icons */}
        <div
          className={`absolute left-3 transition-all duration-300 ${
            isDark ? 'opacity-30 scale-90' : 'opacity-0 scale-75'
          }`}
        >
          <FaSun className='h-3.5 w-3.5 text-amber-400' />
        </div>

        <div
          className={`absolute right-3 transition-all duration-300 ${
            isDark ? 'opacity-0 scale-75' : 'opacity-30 scale-90'
          }`}
        >
          <FaMoon className='h-3.5 w-3.5 text-slate-400' />
        </div>

        {/* thumb */}
        <div
          className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-all duration-500 ${
            isDark
              ? 'translate-x-9 bg-slate-800 text-white'
              : 'translate-x-0 bg-white text-amber-500'
          }`}
        >
          {isDark ? (
            <FaMoon className='h-4 w-4' />
          ) : (
            <FaSun className='h-4 w-4' />
          )}
        </div>
      </div>
    </button>
  );
}
