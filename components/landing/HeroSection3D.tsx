import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown, Sparkles, Zap, Rocket, ExternalLink } from "lucide-react";
import Link from 'next/link';
import { type Language, useTranslations } from '@/lib/static-i18n';

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
                  <span className="text-white inline-block font-mono tracking-widest relative">
                    EVOLUTION
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 text-white blur-2xl opacity-0 hover:opacity-20 transition-opacity duration-500" />
                  </span>
                </div>
        </h1>
        
        {/* Enhanced Subtitle with 3D Effects */}
        <div className="relative mb-20">
                                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                    {t.hero.subtitle}
                  </p>
          
          {/* Floating Tech Icons */}
          <div className="absolute -top-8 -left-8 w-6 h-6 text-cyber-blue animate-pulse-slow">
            <Zap className="w-full h-full" />
          </div>
          <div className="absolute -top-6 -right-6 w-5 h-5 text-cyber-pink animate-pulse-slow" style={{ animationDelay: '1s' }}>
            <Rocket className="w-full h-full" />
          </div>
        </div>
        
        {/* Enhanced CTA Buttons with Advanced 3D Effects */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
          <Button className="relative group overflow-hidden bg-cyber-gradient hover:shadow-cyber-blue/50 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform-gpu">
            {/* Enhanced 3D Background */}
            <div className="absolute inset-0 bg-cyber-gradient opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center">
                                    <span className="mr-3">{t.hero.primaryCTA}</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" />
            </div>
            
            {/* Enhanced 3D Glow Effect */}
            <div className="absolute inset-0 bg-cyber-gradient rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Floating Particles */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyber-pink rounded-full opacity-60 animate-pulse-slow" />
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyber-blue rounded-full opacity-60 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </Button>
          
        </div>
        
        {/* Enhanced Stats Grid with Advanced 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
          {[
            { number: "150+", label: t.hero.stats.transformations, color: "cyber-blue", icon: Zap },
            { number: "75+", label: t.hero.stats.partners, color: "cyber-pink", icon: Rocket },
            { number: "8", label: t.hero.stats.years, color: "cyber-purple", icon: Sparkles }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="holographic-3d rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 hover:rotate-2 transition-all duration-700 transform-gpu perspective-3d">
                {/* Enhanced Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${stat.color} to-${stat.color}/50 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Enhanced 3D Glow Effect */}
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br from-${stat.color} to-${stat.color}/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                </div>
                
                {/* Enhanced Stats */}
                <div className={`text-6xl font-black text-${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                
                <div className="text-gray-300 text-center leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Enhanced 3D Progress Bar */}
                <div className="mt-8">
                  <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 bg-gradient-to-r from-${stat.color} to-${stat.color}/50 rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: '0%',
                        animationDelay: `${index * 0.3}s`,
                        animation: 'progress-fill 1s ease-out forwards'
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 opacity-40">
                  <div className={`w-full h-full geometric-shape bg-gradient-to-br from-${stat.color} to-${stat.color}/50 floating-3d`} style={{ animationDelay: `${index * 0.3}s` }} />
                </div>
              </div>
            </div>
          ))}
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
