"use client";

import React from 'react';
import { ExternalLink, Github, Sparkles, ArrowLeft, Filter, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';
import UnifiedNavbar from '@/components/ui/UnifiedNavbar';
import Footer from '@/components/landing/Footer';
import { useTranslations, type Language } from '@/lib/static-i18n';

interface PortfolioDetailPageProps {
  language: Language;
  portfolioData: any[];
  portfolioItem: any;
}

export default function PortfolioDetailPage({ language, portfolioData, portfolioItem }: PortfolioDetailPageProps) {
  const t = useTranslations(language);

  // Function to create proper language-aware navigation links
  const createProjectLink = (projectId: number) => {
    if (language === 'en') {
      return `/en/projects/${projectId}`;
    }
    return `/${language}/projects/${projectId}`;
  };

  const createPortfolioLink = () => {
    if (language === 'en') {
      return `/en/projects`;
    }
    return `/${language}/projects`;
  };

  if (!portfolioItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t.portfolio.notFound}</h1>
          <Link href={createPortfolioLink()} className="text-cyber-blue hover:underline">
            {t.portfolio.backToPortfolio}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white relative overflow-hidden">
      {/* Navbar */}
      <UnifiedNavbar variant="page" />
      
      {/* Minimalist 3D Butterfly Animation */}
      <ButterflyAnimation />

      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-24 left-24 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link
            href={createPortfolioLink()}
            className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-pink transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t.portfolio.backToPortfolio}</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl">
                <img
                  src={portfolioItem.image}
                  alt={portfolioItem.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Enhanced Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${portfolioItem.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold bg-${portfolioItem.color}/20 text-${portfolioItem.color} border border-${portfolioItem.color}/30 backdrop-blur-sm`}>
                    {portfolioItem.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent">
                  {portfolioItem.title}
                </h1>
                <p className="text-xl text-white/70 leading-relaxed">
                  {portfolioItem.fullDescription}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <Target className="w-8 h-8 text-cyber-blue mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{portfolioItem.category}</p>
                  <p className="text-white/60 text-sm">{t.portfolio.category}</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <Users className="w-8 h-8 text-cyber-pink mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{portfolioItem.client}</p>
                  <p className="text-white/60 text-sm">{t.portfolio.client}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {portfolioItem.liveUrl && (
                  <a
                    href={portfolioItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-cyber-gradient text-white rounded-2xl font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform-gpu flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t.portfolio.viewLive}
                  </a>
                )}
                {portfolioItem.githubUrl && (
                  <a
                    href={portfolioItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-xl flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    {t.portfolio.viewCode}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technologies Used */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-cyber-blue" />
                {t.portfolio.technologies}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {portfolioItem.technologies.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <p className="text-white font-medium">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-cyber-pink" />
                {t.portfolio.features}
              </h2>
              <div className="space-y-4">
                {portfolioItem.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                  >
                    <p className="text-white/90">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t.portfolio.relatedProjects}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData
              .filter(item => item.id !== portfolioItem.id && item.category === portfolioItem.category)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={createProjectLink(item.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Enhanced Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-${item.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold bg-${item.color}/20 text-${item.color} border border-${item.color}/30 backdrop-blur-sm`}>
                          {item.category}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
