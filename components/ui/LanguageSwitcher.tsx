"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { languages, languageNames, type Language, getLanguageFromPathname, createLanguagePath } from '@/lib/static-i18n';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const lang = getLanguageFromPathname(pathname);
    setCurrentLanguage(lang);
  }, [pathname]);

  const handleLanguageChange = (language: Language) => {
    if (language === currentLanguage) return;
    
    const newPath = createLanguagePath(pathname, language);
    router.push(newPath);
    setCurrentLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{languageNames[currentLanguage]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-cyber-dark/95 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className={`w-full px-4 py-3 text-left hover:bg-white/5 transition-colors duration-200 ${
                  currentLanguage === language 
                    ? 'text-cyber-blue bg-cyber-blue/10' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={`/flags/${language}.svg`}
                      alt={languageNames[language]}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to text if flag image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs font-bold text-white">${language.toUpperCase()}</span>`;
                        }
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium">{languageNames[language]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
