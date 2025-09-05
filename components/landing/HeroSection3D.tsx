import React from 'react';
import { Zap, Rocket } from "lucide-react";
import Link from 'next/link';
import { type Language, useTranslations } from '@/lib/static-i18n';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface HeroSection3DProps {
  language?: Language;
}

export default function HeroSection3D({ language = 'en' }: HeroSection3DProps) {
  const t = useTranslations(language);
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced 3D Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute top-32 left-20 w-40 h-40 opacity-15">
        <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-blue/15 to-cyber-pink/15 floating-3d perspective-3d" />
      </div>
      
      <div className="absolute bottom-40 right-32 w-32 h-32 opacity-15">
        <div className="w-full h-full geometric-shape-alt bg-gradient-to-br from-cyber-purple/15 to-cyber-green/15 floating-3d perspective-3d" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* New 3D Holographic Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="hero-ring w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] border border-cyber-blue/8 rounded-full floating-3d perspective-3d" />
        <div className="hero-ring w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] border border-cyber-pink/8 rounded-full floating-3d absolute top-20 left-20 perspective-3d" style={{ animationDelay: '1s' }} />
        <div className="hero-ring w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border border-cyber-purple/8 rounded-full floating-3d absolute top-40 left-40 perspective-3d" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Enhanced Energy Field */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/3 via-transparent to-cyber-pink/3" />
      
      {/* Main Content with Enhanced 3D Layout */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        {/* Enhanced Main Title with Advanced 3D Effects */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-10 md:mb-16 leading-tight perspective-3d">
          <div className="rotate-3d hover:rotate-3d mb-6 transform-gpu">
            <span className="gradient-text inline-block scan-line relative">
              {t.hero.title}
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 gradient-text blur-2xl opacity-0 hover:opacity-30 transition-opacity duration-500" />
            </span>
          </div>
          <div className="rotate-3d hover:rotate-3d transform-gpu" style={{ animationDelay: '0.5s' }}>
            <div className="evolution-container relative inline-block">
              {/* Enhanced EVOLUTION Text with Letter-by-Letter Animation */}
              <span className="text-white inline-block font-mono tracking-widest relative evolution-text">
                {t.hero.evolution.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="evolution-letter inline-block transform-gpu"
                    style={{
                      animationDelay: `${0.8 + index * 0.1}s`
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              
              {/* Enhanced 3D Glow Effects */}
              <div className="absolute inset-0 text-white blur-2xl opacity-0 hover:opacity-30 transition-opacity duration-700 evolution-glow" />
              <div className="absolute inset-0 text-cyber-blue blur-xl opacity-0 hover:opacity-20 transition-opacity duration-500 evolution-glow-blue" />
              <div className="absolute inset-0 text-cyber-pink blur-xl opacity-0 hover:opacity-20 transition-opacity duration-500 evolution-glow-pink" />
              
              {/* Floating Particle Effects */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyber-blue rounded-full opacity-60 animate-pulse-slow evolution-particle-1" />
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-cyber-pink rounded-full opacity-60 animate-pulse-slow evolution-particle-2" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-3 left-1/2 w-2.5 h-2.5 bg-cyber-purple rounded-full opacity-60 animate-pulse-slow evolution-particle-3" style={{ animationDelay: '1s' }} />
              
              {/* Morphing Geometric Shapes */}
              <div className="absolute -top-6 -right-6 w-4 h-4 evolution-shape-1">
                <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-blue/30 to-cyber-pink/30 floating-3d perspective-3d" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-5 h-5 evolution-shape-2">
                <div className="w-full h-full geometric-shape-alt bg-gradient-to-br from-cyber-purple/30 to-cyber-green/30 floating-3d perspective-3d" style={{ animationDelay: '0.8s' }} />
              </div>
              
              {/* Energy Field Around Text */}
              <div className="absolute inset-0 -m-8 bg-gradient-radial from-cyber-blue/5 via-transparent to-cyber-pink/5 rounded-full evolution-energy-field" />
              
              {/* Scan Line Effect */}
              <div className="absolute inset-0 evolution-scan-line">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </h1>
        
        {/* Enhanced Subtitle with ScrollReveal Effect */}
        <div className="relative mb-20">
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.1}
            baseRotation={2}
            blurStrength={3}
            staggerDelay={0.08}
            threshold={0.3}
            duration={1.2}
            springConfig={{
              damping: 20,
              stiffness: 80,
              mass: 0.8
            }}
            size="lg"
            align="center"
            variant="default"
            containerClassName="max-w-5xl mx-auto"
            textClassName="text-gray-300 font-thin leading-relaxed text-lg md:text-xl max-w-4xl mx-auto"
          >
            {t.hero.subtitle}
          </ScrollReveal>
          
          {/* Floating Tech Icons */}
          <div className="absolute -top-8 -left-8 w-6 h-6 text-cyber-blue animate-pulse-slow">
            <Zap className="w-full h-full" />
          </div>
          <div className="absolute -top-6 -right-6 w-5 h-5 text-cyber-pink animate-pulse-slow" style={{ animationDelay: '1s' }}>
            <Rocket className="w-full h-full" />
          </div>
        </div>
        

      </div>
      
      {/* Enhanced Energy Waves with 3D Effects */}
      <div className="absolute top-0 left-0 w-full h-2">
        <div className="w-full h-full energy-wave bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-2">
        <div className="w-full h-full energy-wave bg-gradient-to-r from-transparent via-cyber-pink to-transparent" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
}
