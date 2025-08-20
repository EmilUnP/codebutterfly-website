"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap } from "lucide-react";

interface NavbarProps {
  currentPageName: string;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" }
];

export default function Navbar({ currentPageName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled || currentPageName !== "Landing" 
          ? 'bg-cyber-darker/95 backdrop-blur-xl shadow-2xl border-b border-cyber-blue/30' 
          : 'bg-transparent'
      }`}
    >
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
                    CodeButterfly.art
                  </h1>
                  
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 gradient-text blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced Desktop Navigation with Clean Effects */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <div className="relative">
                  <span className="text-white/90 hover:text-cyber-blue font-medium text-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    {item.name}
                  </span>
                  
                  {/* Clean Underline Effect */}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
            ))}
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
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block group"
                >
                  <div className="relative p-4 rounded-2xl hover:bg-cyber-blue/10 transition-all duration-300 hover:translate-x-3">
                    <span className="text-white/90 hover:text-cyber-blue font-medium text-lg group-hover:scale-105 transition-all duration-300">
                      {item.name}
                    </span>
                    
                    {/* Clean Hover Effect */}
                    <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full transform -translate-y-1/2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}