"use client";

import React from 'react';
import HeroSection3D from '@/components/landing/HeroSection3D';
import ServicesSection from '@/components/landing/ServicesSection';
import AboutSection from '@/components/landing/AboutSection';
import PortfolioCarousel3D from '@/components/landing/PortfolioCarousel3D';
import ContactSection from '@/components/landing/ContactSection';
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';

import { type Language } from '@/lib/static-i18n';

interface LandingProps {
  language?: Language;
}

export default function Landing({ language = 'en' }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white relative overflow-hidden">
      {/* Minimalist 3D Butterfly Animation */}
      <ButterflyAnimation />
      
      {/* Main Content with Enhanced Layout */}
      <main className="relative z-10">
        {/* Hero Section - Full Height */}
        <section className="min-h-screen flex items-center justify-center">
          <HeroSection3D language={language} />
        </section>
        
        {/* Services Section - Enhanced Spacing */}
        <section id="services" className="py-16">
          <ServicesSection language={language} />
        </section>
        
        {/* About Section - Enhanced Spacing */}
        <section id="about" className="py-16 bg-cyber-dark/30">
          <AboutSection language={language} />
        </section>
        
        {/* Portfolio Section - 3D Carousel */}
        <section id="portfolio">
          <PortfolioCarousel3D language={language} />
        </section>
        
        {/* Contact Section - Enhanced Spacing */}
        <section id="contact" className="py-16 bg-cyber-dark/30">
          <ContactSection language={language} />
        </section>
      </main>
    </div>
  );
}