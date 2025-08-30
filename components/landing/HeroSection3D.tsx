import React from 'react';
import { Sparkles, Zap, Rocket } from "lucide-react";
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
        <div className="w-[800px] h-[800px] border border-cyber-blue/8 rounded-full floating-3d perspective-3d" />
        <div className="w-[600px] h-[600px] border border-cyber-pink/8 rounded-full floating-3d absolute top-20 left-20 perspective-3d" style={{ animationDelay: '1s' }} />
        <div className="w-[400px] h-[400px] border border-cyber-purple/8 rounded-full floating-3d absolute top-40 left-40 perspective-3d" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Enhanced Energy Field */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/3 via-transparent to-cyber-pink/3" />
      
      {/* Main Content with Enhanced 3D Layout */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        {/* Enhanced Main Title with Advanced 3D Effects */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 leading-tight perspective-3d">
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
            textClassName="text-gray-300 font-normal leading-relaxed text-lg md:text-xl max-w-4xl mx-auto"
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
        

        
                 {/* Enhanced Stats Grid with Advanced 3D Effects */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
           {/* First Card - Digital Transformations (Blue) */}
           <div className="group">
             <div className="holographic-3d rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 hover:rotate-2 transition-all duration-700 transform-gpu perspective-3d">
               {/* Enhanced Icon Container */}
               <div className="relative mb-6">
                 <div className="w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-blue/50 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                   <Zap className="w-10 h-10 text-white" />
                 </div>
                 
                 {/* Enhanced 3D Glow Effect */}
                 <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-blue/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
               </div>
               
               {/* Enhanced Stats */}
               <div className="text-6xl font-black text-cyber-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                 150+
               </div>
               
               <div className="text-gray-300 text-center leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                 {t.hero.stats.transformations}
               </div>
               
               {/* Enhanced 3D Progress Bar */}
               <div className="mt-8">
                 <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                   <div 
                     className="h-3 bg-gradient-to-r from-cyber-blue to-cyber-blue/50 rounded-full transition-all duration-1000 ease-out"
                     style={{ 
                       width: '0%',
                       animationDelay: '0s',
                       animation: 'progress-fill 1s ease-out forwards'
                     }}
                   />
                 </div>
               </div>
               
               {/* Floating Elements */}
               <div className="absolute -top-2 -right-2 w-4 h-4 opacity-40">
                 <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-blue to-cyber-blue/50 floating-3d" style={{ animationDelay: '0s' }} />
               </div>
             </div>
           </div>

           {/* Second Card - Happy Partners (Pink) */}
           <div className="group">
             <div className="holographic-3d rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 hover:rotate-2 transition-all duration-700 transform-gpu perspective-3d">
               {/* Enhanced Icon Container */}
               <div className="relative mb-6">
                 <div className="w-20 h-20 bg-gradient-to-br from-cyber-pink to-cyber-pink/50 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                   <Rocket className="w-10 h-10 text-white" />
                 </div>
                 
                 {/* Enhanced 3D Glow Effect */}
                 <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-cyber-pink to-cyber-pink/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
               </div>
               
               {/* Enhanced Stats */}
               <div className="text-6xl font-black text-cyber-pink mb-4 group-hover:scale-110 transition-transform duration-300">
                 75+
               </div>
               
               <div className="text-gray-300 text-center leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                 {t.hero.stats.partners}
               </div>
               
               {/* Enhanced 3D Progress Bar */}
               <div className="mt-8">
                 <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                   <div 
                     className="h-3 bg-gradient-to-r from-cyber-pink to-cyber-pink/50 rounded-full transition-all duration-1000 ease-out"
                     style={{ 
                       width: '0%',
                       animationDelay: '0.3s',
                       animation: 'progress-fill 1s ease-out forwards'
                     }}
                   />
                 </div>
               </div>
               
               {/* Floating Elements */}
               <div className="absolute -top-2 -right-2 w-4 h-4 opacity-40">
                 <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-pink to-cyber-pink/50 floating-3d" style={{ animationDelay: '0.3s' }} />
               </div>
             </div>
           </div>

           {/* Third Card - Years of Excellence (Purple) */}
           <div className="group">
             <div className="holographic-3d rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 hover:rotate-2 transition-all duration-700 transform-gpu perspective-3d">
               {/* Enhanced Icon Container */}
               <div className="relative mb-6">
                 <div className="w-20 h-20 bg-gradient-to-br from-cyber-purple to-cyber-purple/50 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                   <Sparkles className="w-10 h-10 text-white" />
                 </div>
                 
                 {/* Enhanced 3D Glow Effect */}
                 <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-cyber-purple to-cyber-purple/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
               </div>
               
               {/* Enhanced Stats */}
               <div className="text-6xl font-black text-cyber-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                 8
               </div>
               
               <div className="text-gray-300 text-center leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                 {t.hero.stats.years}
               </div>
               
               {/* Enhanced 3D Progress Bar */}
               <div className="mt-8">
                 <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                   <div 
                     className="h-3 bg-gradient-to-r from-cyber-purple to-cyber-purple/50 rounded-full transition-all duration-1000 ease-out"
                     style={{ 
                       width: '0%',
                       animationDelay: '0.6s',
                       animation: 'progress-fill 1s ease-out forwards'
                     }}
                   />
                 </div>
               </div>
               
               {/* Floating Elements */}
               <div className="absolute -top-2 -right-2 w-4 h-4 opacity-40">
                 <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-purple to-cyber-purple/50 floating-3d" style={{ animationDelay: '0.6s' }} />
               </div>
             </div>
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
