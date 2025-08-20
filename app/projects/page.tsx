
"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, ArrowLeft, Filter, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPageUrl } from "@/utils";
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management.",
    fullDescription: "A complete e-commerce solution built for a fashion retailer, featuring advanced product filtering, wishlist functionality, secure payment processing, and comprehensive admin dashboard. The platform handles over 10,000 products with real-time inventory management.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "cyber-blue",
    duration: "4 months",
    client: "Fashion Forward Co.",
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"]
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand refresh for a sustainable fashion startup.",
    fullDescription: "Comprehensive brand identity redesign for an eco-friendly fashion startup. The project included logo design, brand guidelines, packaging design, and marketing materials that reflect the company's commitment to sustainability.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
    technologies: ["Illustrator", "Figma", "After Effects"],
    color: "cyber-pink",
    duration: "2 months",
    client: "EcoStyle Boutique",
    results: ["40% increase in brand recognition", "25% boost in customer loyalty", "Featured in design magazines"]
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Instagram campaign that increased engagement by 300% in 3 months.",
    fullDescription: "Strategic social media campaign for a fitness brand focusing on community building and user-generated content. Included content strategy, influencer partnerships, and paid advertising campaigns across multiple platforms.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
    technologies: ["Adobe Suite", "Analytics", "Content Strategy"],
    color: "cyber-purple",
    duration: "6 months",
    client: "FitLife Gym",
    results: ["300% engagement increase", "150% follower growth", "500% ROI on ad spend"]
  },
  {
    id: 4,
    title: "Mobile App UI/UX",
    description: "Intuitive fitness app design focused on user motivation and progress tracking.",
    fullDescription: "Complete UX/UI design for a fitness tracking mobile application. Conducted user research, created wireframes, prototypes, and final designs. The app focuses on gamification and social features to keep users motivated.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    technologies: ["Figma", "Principle", "React Native"],
    color: "cyber-green",
    duration: "3 months",
    client: "HealthTrack Inc.",
    results: ["4.8/5 app store rating", "90% user retention rate", "Featured app of the day"]
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Complete SEO overhaul resulting in 250% increase in organic traffic.",
    fullDescription: "Comprehensive SEO audit and optimization for a B2B software company. Included technical SEO improvements, content optimization, link building strategy, and ongoing performance monitoring.",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Google Analytics", "SEMrush", "Technical SEO"],
    color: "cyber-amber",
    duration: "8 months",
    client: "TechSolutions Pro",
    results: ["250% organic traffic increase", "First page rankings for 50+ keywords", "Lead generation up 180%"]
  },
  {
    id: 6,
    title: "Corporate Website",
    description: "Professional website for a consulting firm with integrated CRM system.",
    fullDescription: "Modern corporate website with custom CRM integration for a management consulting firm. Features include client portal, document management, appointment scheduling, and automated email workflows.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind", "CMS"],
    color: "cyber-blue",
    duration: "5 months",
    client: "Strategic Advisors Group",
    results: ["60% faster page load times", "45% increase in lead conversion", "Streamlined client onboarding"]
  },
  {
    id: 7,
    title: "Restaurant App Design",
    description: "Food delivery app with intuitive ordering and real-time tracking.",
    fullDescription: "Complete mobile app design for a local restaurant chain's food delivery service. Features include menu browsing, customization options, real-time order tracking, and loyalty program integration.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    technologies: ["Sketch", "InVision", "React Native"],
    color: "cyber-red",
    duration: "3 months",
    client: "Bistro Chain",
    results: ["40% increase in mobile orders", "25% improvement in order accuracy", "5-star user ratings"]
  },
  {
    id: 8,
    title: "Marketing Campaign",
    description: "Multi-channel digital marketing campaign for product launch.",
    fullDescription: "Comprehensive digital marketing campaign for a tech startup's product launch. Included social media advertising, Google Ads, email marketing, content creation, and influencer partnerships.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp"],
    color: "cyber-orange",
    duration: "4 months",
    client: "InnovateTech",
    results: ["500% increase in brand awareness", "200% boost in sign-ups", "150% ROI achieved"]
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Branding", "Social Media", "SEO"];

export default function Projects() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleProjectClick = (projectId: number) => {
    router.push(createPageUrl(`ProjectDetail?id=${projectId}`));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Minimalist 3D Butterfly Animation */}
      <ButterflyAnimation />

      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyber-blue/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        {/* Enhanced Navigation */}
        <div className="max-w-7xl mx-auto mb-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-cyber-blue transition-colors duration-300">
              Home
            </Link>
            <span>/</span>
            <span className="text-cyber-blue">Portfolio</span>
          </nav>
          
          {/* Enhanced Back to Home Button */}
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-cyber-blue/20 text-cyber-blue hover:bg-cyber-blue/30 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-cyber-blue/30 backdrop-blur-xl group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>

        {/* Enhanced Header */}
        <div className="text-center mb-20 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of innovative projects that showcase our expertise, creativity, and commitment to delivering exceptional results.
          </p>
        </div>

        {/* Enhanced Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 ${
                activeCategory === category
                  ? 'bg-cyber-gradient text-white shadow-2xl shadow-cyber-blue/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(item.id)}
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
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
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
                  
                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-white/50 group-hover:text-white/70 transition-colors duration-500">
                    <span>{item.client}</span>
                    <span>{item.duration}</span>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${item.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                </div>

                {/* Enhanced 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent transform translate-y-2 scale-95 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
