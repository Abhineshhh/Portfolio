'use client';

import { createContext, useContext } from 'react';
import type { Theme } from '@/types/theme';
import { themes } from '@/types/theme';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.cyberpunk,
});

export function ThemeProvider({ 
  children, 
  theme 
}: { 
  children: React.ReactNode; 
  theme: Theme;
}) {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
