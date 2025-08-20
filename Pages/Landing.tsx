"use client";

import React from 'react';
import HeroSection3D from '@/components/landing/HeroSection3D';
import ServicesSection from '@/components/landing/ServicesSection';
import AboutSection from '@/components/landing/AboutSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import ContactSection from '@/components/landing/ContactSection';
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white relative overflow-hidden">
      {/* Minimalist 3D Butterfly Animation */}
      <ButterflyAnimation />
      
      {/* Main Content with Enhanced Layout */}
      <main className="relative z-10">
        {/* Hero Section - Full Height */}
        <section className="min-h-screen flex items-center justify-center">
          <HeroSection3D />
        </section>
        
        {/* Services Section - Enhanced Spacing */}
        <section id="services" className="py-16">
          <ServicesSection />
        </section>
        
        {/* About Section - Enhanced Spacing */}
        <section id="about" className="py-16 bg-cyber-dark/30">
          <AboutSection />
        </section>
        
        {/* Portfolio Section - Enhanced Spacing */}
        <section id="portfolio" className="py-16">
          <PortfolioSection />
        </section>
        
        {/* Contact Section - Enhanced Spacing */}
        <section id="contact" className="py-16 bg-cyber-dark/30">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}