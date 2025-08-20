import React from 'react';
import ServiceCard3D from './ServiceCard3D';
import { Code, Palette, Globe, Zap, Target, TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useT } from '@/lib/i18n-context';

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
    features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
    gradient: "bg-gradient-to-br from-cyber-blue/20 via-cyber-blue/10 to-cyber-dark/80"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement across all platforms.",
    features: ["User research", "Wireframing", "Prototyping", "User testing"],
    gradient: "bg-gradient-to-br from-cyber-pink/20 via-cyber-pink/10 to-cyber-dark/80"
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that increase brand visibility and drive measurable business results.",
    features: ["Social media marketing", "Content strategy", "Brand awareness", "Lead generation"],
    gradient: "bg-gradient-to-br from-cyber-green/20 via-cyber-green/10 to-cyber-dark/80"
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    description: "Search engine optimization and data-driven insights to improve online presence and performance.",
    features: ["Technical SEO", "Keyword research", "Performance tracking", "Conversion optimization"],
    gradient: "bg-gradient-to-br from-cyber-purple/20 via-cyber-purple/10 to-cyber-dark/80"
  }
];

export default function ServicesSection() {
  const t = useT();

  const services = [
    {
      icon: Code,
      title: t.services.items.webDesign.title,
      description: t.services.items.webDesign.description,
      features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
      gradient: "bg-gradient-to-br from-cyber-blue/20 via-cyber-blue/10 to-cyber-dark/80"
    },
    {
      icon: Palette,
      title: t.services.items.seo.title,
      description: t.services.items.seo.description,
      features: ["User research", "Wireframing", "Prototyping", "User testing"],
      gradient: "bg-gradient-to-br from-cyber-pink/20 via-cyber-pink/10 to-cyber-dark/80"
    },
    {
      icon: Target,
      title: t.services.items.socialMedia.title,
      description: t.services.items.socialMedia.description,
      features: ["Social media marketing", "Content strategy", "Brand awareness", "Lead generation"],
      gradient: "bg-gradient-to-br from-cyber-green/20 via-cyber-green/10 to-cyber-dark/80"
    },
    {
      icon: TrendingUp,
      title: t.services.items.digitalMarketing.title,
      description: t.services.items.digitalMarketing.description,
      features: ["Technical SEO", "Keyword research", "Performance tracking", "Conversion optimization"],
      gradient: "bg-gradient-to-br from-cyber-blue/20 via-cyber-blue/10 to-cyber-dark/80"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyber-blue/30 rounded-full animate-float opacity-20" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-cyber-purple/30 rounded-full animate-float opacity-20" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Enhanced Services Grid - 4 Cards in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="group">
              <ServiceCard3D
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                gradient={service.gradient}
              />
            </div>
          ))}
        </div>

        {/* View Our Work CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg mb-6">
            {t.services.cta.title}
          </p>
          <Link href="/projects">
            <button className="inline-flex items-center px-8 py-4 bg-cyber-gradient text-white font-bold rounded-2xl shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-500 transform-gpu">
              <span>{t.services.cta.button}</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}