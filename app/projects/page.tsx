
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, ArrowLeft, Filter } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPageUrl } from "@/utils";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management.",
    fullDescription: "A complete e-commerce solution built for a fashion retailer, featuring advanced product filtering, wishlist functionality, secure payment processing, and comprehensive admin dashboard. The platform handles over 10,000 products with real-time inventory management.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-pink-500 to-rose-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-amber-500 to-orange-500",
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
    color: "from-indigo-500 to-purple-500",
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
    color: "from-red-500 to-pink-500",
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
    color: "from-yellow-500 to-orange-500",
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
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8 material-card"
          >
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">All Projects</span>
          </motion.div>

          <h1 className="playfair text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800">Our Complete</span>
            <br />
            <span className="gradient-text">Project Portfolio</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of projects showcasing our expertise across web development, design, and digital marketing.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 material-card ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'glass-morphism text-gray-700 hover:text-pink-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(item.id)}
              >
                <Card className="material-card glass-morphism overflow-hidden h-full hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredItem === item.id ? 1 : 0 }}
                        className="text-white text-center"
                      >
                        <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">View Details</p>
                      </motion.div>
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${item.color} text-white border-0`}>
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="playfair text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-white/50 border-gray-200 text-gray-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {item.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-white/50 border-gray-200 text-gray-600">
                          +{item.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.client}</span>
                      <span>{item.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Card className="material-card glass-morphism p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="playfair text-3xl font-bold text-gray-800 mb-6">
                Project Success Metrics
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: "100+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "250%", label: "Average ROI Increase" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="playfair text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
