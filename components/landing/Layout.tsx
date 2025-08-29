"use client";

import React from 'react';
import UnifiedNavbar from "@/components/ui/UnifiedNavbar";
import Footer from "./Footer";
import { type Language } from '@/lib/static-i18n';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  currentPageName: string;
  language?: Language;
}

export default function Layout({ children, currentPageName, language = 'en' }: LayoutProps) {
  // Check if we're on the landing page to apply different styles
  const isLandingPage = currentPageName === "Landing";
  
  return (
    <LanguageProvider initialLanguage={language}>
      <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker relative">

        {/* Navigation */}
        <UnifiedNavbar variant="landing" />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer language={language} />
      </div>
    </LanguageProvider>
  );
}
