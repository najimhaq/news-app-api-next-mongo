'use client';

import { ThemeProvider } from 'next-themes';

export function HeroThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem={false}
      disableTransitionOnChange
      storageKey='theme'
    >
      {children}
    </ThemeProvider>
  );
}
