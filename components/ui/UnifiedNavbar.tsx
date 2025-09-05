"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations, getLanguageFromPathname } from "@/lib/static-i18n";
import Image from 'next/image';

interface UnifiedNavbarProps {
  variant?: 'landing' | 'page' | 'auto';
  className?: string;
}

export default function UnifiedNavbar({ variant = 'auto', className = '' }: UnifiedNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Automatically detect language from pathname
  let currentLanguage = getLanguageFromPathname(pathname);
  
  // Fallback language detection if the function fails
  if (!currentLanguage || currentLanguage === 'en') {
    if (pathname.startsWith('/ru')) {
      currentLanguage = 'ru';
    } else if (pathname.startsWith('/az')) {
      currentLanguage = 'az';
    } else {
      currentLanguage = 'en';
    }
  }
  
  const t = useTranslations(currentLanguage);
  
  // Automatically detect if we're on a landing page
  const isLandingPage = variant === 'landing' || 
    (variant === 'auto' && (pathname === "/" || pathname === "/en" || pathname === "/en/" || pathname === "/ru" || pathname === "/ru/" || pathname === "/az" || pathname === "/az/"));
  
  // Create language-aware navigation items
  const navItems = [
    { 
      name: t.navbar.home, 
      href: currentLanguage === 'en' ? "/" : `/${currentLanguage}`, 
      isSection: false 
    },
    { 
      name: t.navbar.portfolio, 
      href: currentLanguage === 'en' ? "/en/projects" : `/${currentLanguage}/projects`, 
      isSection: false 
    },
    { 
      name: t.navbar.services, 
      href: currentLanguage === 'en' ? "/#services" : `/${currentLanguage}#services`, 
      isSection: true 
    },
    { 
      name: t.navbar.about, 
      href: currentLanguage === 'en' ? "/#about" : `/${currentLanguage}#about`, 
      isSection: true 
    },
    { 
      name: t.navbar.contact, 
      href: currentLanguage === 'en' ? "/#contact" : `/${currentLanguage}#contact`, 
      isSection: true 
    }
  ];
  


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle navigation item clicks
  const handleNavItemClick = async (item: any) => {
    if (item.isSection) {
      // For section links (About, Services, Contact)
      const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/en/" || pathname === "/ru" || pathname === "/ru/" || pathname === "/az" || pathname === "/az/";
      
      if (isHomePage) {
        // If we're on the home page, scroll to the section
        const sectionId = item.href.includes("#") ? item.href.split("#")[1] : item.href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      } else {
        // If we're on another page, navigate to home page with section hash
        const homePath = currentLanguage === 'en' ? "/" : `/${currentLanguage}`;
        const sectionHash = item.href.includes("#") ? item.href.split("#")[1] : item.href.replace("/#", "");
        const targetUrl = `${homePath}#${sectionHash}`;
        
        setIsNavigating(true);
        try {
          // Use window.location.href for hash navigation to ensure proper scrolling
          window.location.href = targetUrl;
        } finally {
          setIsNavigating(false);
        }
      }
    } else {
      // For page links (Home, Portfolio), use normal navigation
      setIsNavigating(true);
      try {
        await router.push(item.href);
      } finally {
        setIsNavigating(false);
      }
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  // Function to handle smooth scrolling to sections (for direct hash navigation)
  useEffect(() => {
    const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/en/" || pathname === "/ru" || pathname === "/ru/" || pathname === "/az" || pathname === "/az/";
    if (isHomePage && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        
        // Wait for the page to fully render, then scroll to section
        const timer = setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          } else {
            // Try alternative selectors
            const alternativeElement = document.querySelector(`[data-section="${sectionId}"]`) || 
                                     document.querySelector(`.${sectionId}-section`) ||
                                     document.querySelector(`#${sectionId}-section`);
            if (alternativeElement) {
              alternativeElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }
          }
        }, 800);
        
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Determine navbar styling based on variant and current page
  const getNavbarStyle = () => {
    // Use consistent styling for all variants to avoid style differences
    if (variant === 'landing' && isLandingPage) {
      return `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-cyber-darker/95 backdrop-blur-xl shadow-2xl border-b border-cyber-blue/30' 
          : '!bg-transparent'
      }`;
    }
    
    // Default styling for all other cases (page, auto, or non-landing)
    return 'bg-cyber-dark/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50';
  };
  

  
  return (
    <nav 
      className={`${getNavbarStyle()} ${className}`}
      style={{
        backgroundColor: variant === 'landing' && isLandingPage && !isScrolled ? 'transparent' : undefined
      }}
    >
      
      {/* Global Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-blue">
          <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse-slow" />
        </div>
      )}
      
      {/* Enhanced Background Glow - only for landing pages */}
      {isLandingPage && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-0 transition-opacity duration-700 hover:opacity-100" />
      )}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center h-16 md:h-20 py-2 md:py-4">
          {/* Clean Logo without Button Effects */}
          <div className="flex items-center space-x-4 animate-fade-in-up">
            <Link href={currentLanguage === 'en' ? "/" : `/${currentLanguage}`}>
              <div className="relative group">
                <Image
                  src="/main logo.png"
                  alt="CodeButterfly Logo"
                  width={144}
                  height={144}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain animate-pulse-slow transform group-hover:scale-110 group-hover:rotate-3 group-hover:-translate-y-1 transition-all duration-500"
                  priority
                />
                
                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-cyber-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation with Clean Effects - Moved to Right */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className="relative group cursor-pointer"
                  onClick={() => handleNavItemClick(item)}
                >
                  <div className="relative">
                                         <span className={`font-medium text-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 text-white/90 hover:text-cyber-blue ${isNavigating ? 'opacity-50 cursor-wait' : ''}`}>
                      {item.name}
                    </span>
                    
                                         {/* Hover Underline Effect */}
                     <div className="absolute -bottom-2 left-0 h-0.5 bg-cyber-blue transition-all duration-300 w-0 group-hover:w-full" />
                    

                    
                    {/* Loading Indicator */}
                    {isNavigating && (
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-fast" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Language Switcher - Desktop - Positioned after Navigation */}
          <div className="hidden md:flex ml-8">
            <LanguageSwitcher />
          </div>

          {/* Enhanced Mobile Menu Button - aligned to the right on mobile */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group w-12 h-12 bg-cyber-blue/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-cyber-blue/30 hover:bg-cyber-blue/30 transition-all duration-300 hover:scale-110"
            >
              <div className="text-cyber-blue group-hover:text-white transition-colors duration-300">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
              
              {/* Clean Glow Effect */}
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation with Clean Design */}
        {isOpen && (
          <div className="md:hidden bg-cyber-darker/95 backdrop-blur-xl rounded-3xl mt-6 p-8 shadow-2xl border border-cyber-blue/30 animate-fade-in-up overflow-hidden">
            {/* Clean Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5" />
            
            <div className="relative z-10 space-y-6">
              {navItems.map((item, index) => {
                return (
                  <div
                    key={item.name}
                    className="block group cursor-pointer"
                    onClick={() => handleNavItemClick(item)}
                  >
                                         <div className="relative p-4 rounded-2xl transition-all duration-300 hover:translate-x-3 hover:bg-cyber-blue/10">
                                             <span className={`font-medium text-lg group-hover:scale-105 transition-all duration-300 text-white/90 hover:text-cyber-blue ${isNavigating ? 'opacity-50' : ''}`}>
                        {item.name}
                      </span>
                      
                                             {/* Clean Hover Effect */}
                       <div className="absolute left-0 top-1/2 h-0.5 bg-cyber-blue transition-all duration-300 transform -translate-y-1/2 w-0 group-hover:w-full" />
                      

                      
                      {/* Loading Indicator */}
                      {isNavigating && (
                        <div className="absolute right-8 top-1/2 w-2 h-2 bg-cyber-pink rounded-full transform -translate-y-1/2 animate-pulse-fast" />
                      )}
                    </div>
                  </div>
                );
              })}
              
              {/* Language Switcher - Mobile */}
              <div className="pt-4 border-t border-white/10">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
