"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with seamless checkout and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    category: 'Web Development',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    color: 'cyber-blue'
  },
  {
    title: 'Brand Identity Design',
    description: 'Complete brand refresh for a sustainable fashion startup.',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop',
    category: 'Branding',
    tech: ['Illustrator', 'Figma', 'After Effects'],
    link: '#',
    github: '#',
    color: 'cyber-pink'
  },
  {
    title: 'Social Media Campaign',
    description: 'Instagram campaign that increased engagement by 300% in 3 months.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop',
    category: 'Social Media',
    tech: ['Adobe Suite', 'Analytics', 'Content Strategy'],
    link: '#',
    github: '#',
    color: 'cyber-purple'
  },
  {
    title: 'Mobile App UI/UX',
    description: 'Intuitive fitness app design focused on user motivation and progress tracking.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'UI/UX Design',
    tech: ['Figma', 'Principle', 'React Native'],
    link: '#',
    github: '#',
    color: 'cyber-green'
  },
  {
    title: 'SEO Optimization',
    description: 'Complete SEO overhaul resulting in 250% increase in organic traffic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'SEO',
    tech: ['Google Analytics', 'SEMrush', 'Technical SEO'],
    link: '#',
    github: '#',
    color: 'cyber-amber'
  },
  {
    title: 'Corporate Website',
    description: 'Professional website for a consulting firm with integrated CRM system.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    category: 'Web Development',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'CMS'],
    link: '#',
    github: '#',
    color: 'cyber-blue'
  }
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Branding', 'Social Media', 'SEO'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
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
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-purple to-white bg-clip-text text-transparent">
            Portfolio Preview
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            A preview of our latest projects. These are the same projects you'll find in our complete portfolio - click "View Full Portfolio" to see all details and more projects.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 ${
                activeCategory === category
                  ? 'bg-cyber-blue text-white shadow-lg shadow-cyber-blue/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)] opacity-40" />
                
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${project.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-${project.color} bg-${project.color}/10 border border-${project.color}/20 mb-3`}>
                    {project.category}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-500">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/60 border border-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View More Button */}
                  <div className="flex justify-center">
                    <Link href="/projects">
                      <button className={`px-4 py-2 bg-${project.color}/20 text-${project.color} hover:bg-${project.color}/30 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-${project.color}/30 backdrop-blur-sm`}>
                        View More
                      </button>
                    </Link>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                </div>

                {/* Enhanced 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent transform translate-y-2 scale-95 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link href="/projects">
            <button className="inline-flex items-center px-8 py-4 bg-cyber-gradient text-white font-bold rounded-2xl shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-500 transform-gpu">
              <span>View Full Portfolio</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}