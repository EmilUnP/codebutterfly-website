"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/i18n-context';
import { languages } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 text-white/90 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20 group"
        aria-label="Select Language"
      >
        {/* Globe Icon */}
        <Globe className="w-4 h-4 text-cyber-blue group-hover:text-cyber-pink transition-colors duration-300" />
        
        {/* Current Language */}
        <div className="flex items-center gap-2">
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="font-medium text-sm hidden sm:block">{currentLanguage.nativeName}</span>
          <span className="font-medium text-sm sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        </div>
        
        {/* Dropdown Arrow */}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-cyber-darker/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden z-50 animate-fade-in-up">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-300 hover:bg-white/10 ${
                language === lang.code 
                  ? 'bg-cyber-blue/20 text-cyber-blue border-r-2 border-cyber-blue' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {/* Flag */}
              <span className="text-lg">{lang.flag}</span>
              
              {/* Language Info */}
              <div className="flex flex-col">
                <span className="font-medium text-sm">{lang.nativeName}</span>
                <span className="text-xs text-white/60">{lang.name}</span>
              </div>
              
              {/* Active Indicator */}
              {language === lang.code && (
                <div className="ml-auto w-2 h-2 bg-cyber-blue rounded-full animate-pulse-fast" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
