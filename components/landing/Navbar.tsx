"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { type Language, useTranslations } from "@/lib/static-i18n";

interface NavbarProps {
  currentPageName: string;
  language?: Language;
}

export default function Navbar({ currentPageName, language = 'en' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations(language);

  const navItems = [
    { name: t.navbar.home, href: "/", isSection: false },
    { name: t.navbar.portfolio, href: "/projects", isSection: false },
    { name: t.navbar.services, href: "/#services", isSection: true },
    { name: t.navbar.about, href: "/#about", isSection: true },
    { name: t.navbar.contact, href: "/#contact", isSection: true }
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
    console.log("Navigation clicked:", item.name, "isSection:", item.isSection, "current path:", pathname); // Debug log
    
    if (item.isSection) {
      // For section links (About, Services, Contact)
      if (pathname === "/") {
        // If we're on the home page, scroll to the section
        const sectionId = item.href.replace("/#", "");
        console.log("Scrolling to section on home page:", sectionId); // Debug log
        const element = document.getElementById(sectionId);
        if (element) {
          console.log("Found section element, scrolling"); // Debug log
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        } else {
          console.log("Section element not found on home page:", sectionId); // Debug log
        }
      } else {
        // If we're on another page, navigate to home page with section hash
        console.log("Navigating from other page to section:", item.href); // Debug log
        setIsNavigating(true);
        try {
          // Use window.location.href for hash navigation to ensure proper scrolling
          window.location.href = item.href;
        } finally {
          setIsNavigating(false);
        }
      }
    } else {
      // For page links (Home, Portfolio), use normal navigation
      console.log("Navigating to page:", item.href); // Debug log
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

  // Function to find a section element by various methods
  const findSectionElement = (sectionId: string) => {
    // Try direct ID match first
    let element = document.getElementById(sectionId);
    if (element) return element;
    
    // Try alternative selectors
    element = document.querySelector(`[data-section="${sectionId}"]`) || 
              document.querySelector(`.${sectionId}-section`) ||
              document.querySelector(`#${sectionId}-section`) ||
              document.querySelector(`[class*="${sectionId}"]`);
    
    if (element) return element;
    
    // Try to find by section content (last resort)
    const sections = document.querySelectorAll('section');
    const sectionsArray = Array.from(sections);
    for (const section of sectionsArray) {
      const sectionText = section.textContent?.toLowerCase() || '';
      if (sectionText.includes(sectionId.toLowerCase())) {
        return section;
      }
    }
    
    return null;
  };

  // Function to handle smooth scrolling to sections (for direct hash navigation)
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        console.log("Attempting to scroll to section:", sectionId); // Debug log
        
        // Wait for the page to fully render, then scroll to section
        const timer = setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            console.log("Found section element, scrolling to it"); // Debug log
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          } else {
            console.log("Section element not found:", sectionId); // Debug log
            // Try alternative selectors
            const alternativeElement = document.querySelector(`[data-section="${sectionId}"]`) || 
                                     document.querySelector(`.${sectionId}-section`) ||
                                     document.querySelector(`#${sectionId}-section`);
            if (alternativeElement) {
              console.log("Found alternative section element, scrolling to it"); // Debug log
              alternativeElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }
          }
        }, 800); // Increased delay to ensure page is fully loaded
        
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled || currentPageName !== "Landing" 
          ? 'bg-cyber-darker/95 backdrop-blur-xl shadow-2xl border-b border-cyber-blue/30' 
          : 'bg-transparent'
      }`}
    >
      {/* Global Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-blue">
          <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse-slow" />
        </div>
      )}
      
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-0 transition-opacity duration-700 hover:opacity-100" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Logo with Clean 3D Effects */}
          <div className="flex items-center space-x-4 animate-fade-in-up">
            <Link href="/">
              <div className="relative group">
                <div className="w-14 h-14 bg-cyber-gradient rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-500 perspective-3d">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 100 100"
                    className="animate-pulse-slow"
                  >
                    <path d="M50 30 Q30 10 20 25 Q25 40 50 35" fill="white" fillOpacity="0.9" />
                    <path d="M50 30 Q70 10 80 25 Q75 40 50 35" fill="white" fillOpacity="0.7" />
                    <path d="M50 35 Q30 45 25 60 Q35 70 50 65" fill="white" fillOpacity="0.8" />
                    <path d="M50 35 Q70 45 75 60 Q65 70 50 65" fill="white" fillOpacity="0.6" />
                    <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  
                  {/* Enhanced 3D Glow Effect */}
                  <div className="absolute inset-0 w-14 h-14 bg-cyber-gradient rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
              </div>
            </Link>
            
            <div className="hidden sm:block">
              <Link href="/">
                <div className="relative group">
                  <h1 className="playfair text-3xl font-black gradient-text cursor-pointer transform group-hover:scale-105 group-hover:translate-x-2 transition-all duration-500">
                    {t.brand.name}
                  </h1>
                  
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 gradient-text blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced Desktop Navigation with Clean Effects */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => {
              const isActive = (item.isSection && pathname === "/") || 
                              (!item.isSection && pathname === item.href);
              
              return (
                <div
                  key={item.name}
                  className="relative group cursor-pointer"
                  onClick={() => handleNavItemClick(item)}
                >
                  <div className="relative">
                    <span className={`font-medium text-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${
                      isActive 
                        ? 'text-cyber-blue' 
                        : 'text-white/90 hover:text-cyber-blue'
                    } ${isNavigating ? 'opacity-50 cursor-wait' : ''}`}>
                      {item.name}
                    </span>
                    
                    {/* Active/Underline Effect */}
                    <div className={`absolute -bottom-2 left-0 h-0.5 bg-cyber-blue transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                    
                    {/* Active Indicator Dot */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-blue rounded-full animate-pulse-fast" />
                    )}
                    
                    {/* Loading Indicator */}
                    {isNavigating && (
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-fast" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

                          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
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
                const isActive = (item.isSection && pathname === "/") || 
                                (!item.isSection && pathname === item.href);
                
                return (
                  <div
                    key={item.name}
                    className="block group cursor-pointer"
                    onClick={() => handleNavItemClick(item)}
                  >
                    <div className={`relative p-4 rounded-2xl transition-all duration-300 hover:translate-x-3 ${
                      isActive ? 'bg-cyber-blue/20' : 'hover:bg-cyber-blue/10'
                    }`}>
                      <span className={`font-medium text-lg group-hover:scale-105 transition-all duration-300 ${
                        isActive ? 'text-cyber-blue' : 'text-white/90 hover:text-cyber-blue'
                      } ${isNavigating ? 'opacity-50' : ''}`}>
                        {item.name}
                      </span>
                      
                      {/* Clean Hover Effect */}
                      <div className={`absolute left-0 top-1/2 h-0.5 bg-cyber-blue transition-all duration-300 transform -translate-y-1/2 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute right-4 top-1/2 w-2 h-2 bg-cyber-blue rounded-full transform -translate-y-1/2 animate-pulse-fast" />
                      )}
                      
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