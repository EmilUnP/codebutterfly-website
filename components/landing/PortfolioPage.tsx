"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles, ArrowLeft, Filter, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';
import UnifiedNavbar from '@/components/ui/UnifiedNavbar';
import Footer from '@/components/landing/Footer';
import { useTranslations, type Language } from '@/lib/static-i18n';

interface PortfolioPageProps {
  language: Language;
  portfolioData: any[];
}

export default function PortfolioPage({ language, portfolioData }: PortfolioPageProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const t = useTranslations(currentLanguage);

  useEffect(() => {
    setPortfolioItems(portfolioData);
    setCurrentLanguage(language);
  }, [portfolioData, language]);

  // Function to create proper language-aware navigation links
  const createProjectLink = (projectId: number) => {
    if (currentLanguage === 'en') {
      return `/en/projects/${projectId}`;
    }
    return `/${currentLanguage}/projects/${projectId}`;
  };

  const [activeCategory, setActiveCategory] = useState(t.portfolio.categories.all);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Show 6 projects per page (2 rows of 3)

  const categories = [
    t.portfolio.categories.all,
    t.portfolio.categories.webDev,
    t.portfolio.categories.uiux,
    t.portfolio.categories.branding,
    t.portfolio.categories.social,
    t.portfolio.categories.seo
  ];

  const filteredItems = activeCategory === t.portfolio.categories.all
    ? portfolioItems
    : portfolioItems.filter(item => {
        // Map translated category back to original category for filtering
        const categoryMap: { [key: string]: string } = {
          [t.portfolio.categories.webDev]: "Web Development",
          [t.portfolio.categories.uiux]: "UI/UX Design",
          [t.portfolio.categories.branding]: "Branding",
          [t.portfolio.categories.social]: "Social Media",
          [t.portfolio.categories.seo]: "SEO"
        };
        return item.category === categoryMap[activeCategory] || item.category === activeCategory;
      });

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredItems.slice(startIndex, endIndex);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Update active category when language changes
  useEffect(() => {
    setActiveCategory(t.portfolio.categories.all);
  }, [t.portfolio.categories.all]);

  // Function to handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {/* Enhanced Header */}
        <div className="text-center mb-20 max-w-7xl mx-auto">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 via-transparent to-cyber-pink/20 blur-3xl opacity-30" />
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent relative z-10">
              {t.portfolio.title}
            </h1>
            
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed relative z-10">
              {t.portfolio.subtitle}
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyber-blue rounded-full animate-pulse-slow" />
            <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Enhanced Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 relative overflow-hidden group ${
                activeCategory === category
                  ? 'bg-cyber-gradient text-white shadow-2xl shadow-cyber-blue/30 border border-cyber-blue/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl hover:border-white/20'
              }`}
            >
              {/* Active State Background Glow */}
              {activeCategory === category && (
                <div className="absolute inset-0 bg-cyber-gradient rounded-2xl blur-xl opacity-50 animate-pulse-slow" />
              )}
              
              {/* Button Content */}
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                {category}
              </span>
              
              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyber-blue transition-all duration-300 transform -translate-x-1/2 ${
                activeCategory === category ? 'w-full' : 'group-hover:w-full'
              }`} />
              
              {/* Floating Particles for Active State */}
              {activeCategory === category && (
                <>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-fast" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-blue rounded-full animate-pulse-fast" style={{ animationDelay: '0.5s' }} />
                </>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {currentProjects.map((item, index) => (
            <Link
              key={item.id}
              href={createProjectLink(item.id)}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu h-full">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)] opacity-40" />
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${item.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold bg-${item.color}/20 text-${item.color} border border-${item.color}/30 backdrop-blur-sm`}>
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-500">
                    {item.description}
                  </p>
                  
                   {/* Enhanced Tech Stack */}
                   <div className="flex flex-wrap gap-2 mb-4">
                     {item.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                       <span
                         key={techIndex}
                         className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/60 border border-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-500"
                       >
                         {tech}
                       </span>
                     ))}
                     {item.technologies.length > 3 && (
                       <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/60 border border-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-500">
                         +{item.technologies.length - 3} more
                       </span>
                     )}
                   </div>

                  {/* Enhanced Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${item.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                </div>

                {/* Enhanced 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent transform translate-y-2 scale-95 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 mt-16">
            {/* Page Info */}
            <div className="text-center">
              <p className="text-white/70 text-lg">
                Showing {startIndex + 1} of {filteredItems.length} projects
              </p>
            </div>
            
            {/* Pagination Navigation */}
            <div className="flex items-center gap-3">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl"
              >
                Previous
              </button>
              
              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-2xl font-bold transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 relative overflow-hidden group ${
                      currentPage === page
                        ? 'bg-cyber-gradient text-white shadow-2xl shadow-cyber-blue/30 border border-cyber-blue/50'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl'
                    }`}
                  >
                    {/* Active State Background Glow */}
                    {currentPage === page && (
                      <div className="absolute inset-0 bg-cyber-gradient rounded-2xl blur-xl opacity-50 animate-pulse-slow" />
                    )}
                    
                    {/* Button Content */}
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                      {page}
                    </span>
                    
                    {/* Floating Particles for Active State */}
                    {currentPage === page && (
                      <>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-fast" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-blue rounded-full animate-pulse-fast" style={{ animationDelay: '0.5s' }} />
                      </>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl"
              >
                Next
              </button>
            </div>
            
            {/* Jump to Page Input - Show only when there are many pages */}
            {totalPages > 5 && (
              <div className="flex items-center gap-3 mt-4">
                <span className="text-white/70 text-sm">Jump to page:</span>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= totalPages) {
                      handlePageChange(page);
                    }
                  }}
                  className="w-20 px-3 py-2 rounded-xl bg-white/5 text-white border border-white/10 backdrop-blur-xl text-center focus:outline-none focus:border-cyber-blue/50 focus:bg-white/10 transition-all duration-300"
                />
                <span className="text-white/50 text-sm">of {totalPages}</span>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer language={currentLanguage} />
    </div>
  );
}
