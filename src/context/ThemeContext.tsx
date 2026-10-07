import React, { createContext, useContext, useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';

export type ThemeColor = 'brown' | 'cadetBlue' | 'crimson' | 'emerald' | 'purple' | 'sky';

interface ThemeContextType {
  isDark: boolean;
  toggleDarkMode: () => void;
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  currentColorHex: string;
  profileImage: string;
  setProfileImage: (url: string) => void;
  resetProfileImage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profileImage, setProfileImageState] = useState<string>(() => {
    const saved = localStorage.getItem('abdi_user_profile_image');
    if (saved) return saved;
    return PORTFOLIO_DATA.personal.defaultAvatar;
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('abdi_portfolio_dark_v2');
    if (saved !== null) {
      return saved === 'true';
    }
    return false; // Default clean white matching reference website
  });

  const [themeColor, setThemeColorState] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem('abdi_portfolio_color') as ThemeColor;
    if (saved && ['brown', 'cadetBlue', 'crimson', 'emerald', 'purple', 'sky'].includes(saved)) {
      return saved;
    }
    return 'brown'; // Default terracotta/brown signature color from reference site
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('abdi_portfolio_dark', String(isDark));
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-color', themeColor);
    localStorage.setItem('abdi_portfolio_color', themeColor);
  }, [themeColor]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const setThemeColor = (color: ThemeColor) => {
    setThemeColorState(color);
  };

  const setProfileImage = (url: string) => {
    setProfileImageState(url);
    localStorage.setItem('abdi_user_profile_image', url);
  };

  const resetProfileImage = () => {
    setProfileImageState(PORTFOLIO_DATA.personal.defaultAvatar);
    localStorage.removeItem('abdi_user_profile_image');
  };

  const currentThemeObj = PORTFOLIO_DATA.themeColors.find((c) => c.id === themeColor);
  const currentColorHex = currentThemeObj ? currentThemeObj.hex : '#d1701f';

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDarkMode,
        themeColor,
        setThemeColor,
        currentColorHex,
        profileImage,
        setProfileImage,
        resetProfileImage,
      }}
    >
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
