"use client";

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { type Language, useTranslations } from '@/lib/static-i18n';

interface PortfolioSectionProps {
  language?: Language;
}

export default function PortfolioSection({ language = 'en' }: PortfolioSectionProps) {
  const t = useTranslations(language);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with seamless checkout and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'cyber-blue'
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    description: 'Complete brand refresh for a sustainable fashion startup.',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop',
    category: 'Branding',
    technologies: ['Illustrator', 'Figma', 'After Effects'],
    color: 'cyber-pink'
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    description: 'Instagram campaign that increased engagement by 300% in 3 months.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop',
    category: 'Social Media',
    technologies: ['Adobe Suite', 'Analytics', 'Content Strategy'],
    color: 'cyber-purple'
  },
  {
    id: 4,
    title: 'Mobile App UI/UX',
    description: 'Intuitive fitness app design focused on user motivation and progress tracking.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'UI/UX Design',
    technologies: ['Figma', 'Principle', 'React Native'],
    color: 'cyber-green'
  },
  {
    id: 5,
    title: 'SEO Optimization',
    description: 'Complete SEO overhaul resulting in 250% increase in organic traffic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'SEO',
    technologies: ['Google Analytics', 'SEMrush', 'Technical SEO'],
    color: 'cyber-amber'
  },
  {
    id: 6,
    title: 'Corporate Website',
    description: 'Professional website for a consulting firm with integrated CRM system.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'CMS'],
    color: 'cyber-blue'
  }
];

  const categories = [
    t.portfolio.categories.all,
    t.portfolio.categories.webDev,
    t.portfolio.categories.uiux,
    t.portfolio.categories.branding,
    t.portfolio.categories.social,
    t.portfolio.categories.seo
  ];

  const filteredProjects = activeCategory === t.portfolio.categories.all
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-24 left-24 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 via-transparent to-cyber-pink/20 blur-3xl opacity-30" />
            
                                                             <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-purple to-white bg-clip-text text-transparent relative z-10">
                     {t.portfolio.title}
                   </h2>

                   <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed relative z-10">
                     {t.portfolio.subtitle}
                   </p>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyber-purple rounded-full animate-pulse-slow" />
            <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Enhanced Filter Buttons */}
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
          {filteredProjects.map((item, index) => (
            <Link
              key={item.id}
              href={`/projects/${item.id}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
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
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
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

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link href="/projects">
            <button className="inline-flex items-center px-8 py-4 bg-cyber-gradient text-white font-bold rounded-2xl shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-500 transform-gpu">
                                    <span>{t.portfolio.viewFull}</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}