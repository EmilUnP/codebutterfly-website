"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type Language, getLanguageFromPathname } from '../static-i18n';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  isLanguageChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage = 'en' }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  // Detect language from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const detectedLanguage = getLanguageFromPathname(window.location.pathname);
      setCurrentLanguage(detectedLanguage);
    }
  }, []);

  const setLanguage = (language: Language) => {
    if (language === currentLanguage) return;
    
    setIsLanguageChanging(true);
    setCurrentLanguage(language);
    
    // Reset the flag after a short delay
    setTimeout(() => setIsLanguageChanging(false), 100);
  };

  const value = {
    currentLanguage,
    setLanguage,
    isLanguageChanging,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
