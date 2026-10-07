import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { currentColorHex } = useTheme();

  return (
    <a href="#home" className={`flex items-center gap-1 group text-left ${className}`} aria-label="Abdi Adan Home">
      <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold tracking-wider text-neutral-800 dark:text-neutral-100">
        abdiadan<span style={{ color: currentColorHex }}>....</span>
      </span>
    </a>
  );
};
