import React from 'react';
import ServiceCard3D from './ServiceCard3D';
import { Code, Palette, Target, TrendingUp } from 'lucide-react';
import { type Language, useTranslations } from '@/lib/static-i18n';


interface ServicesSectionProps {
  language?: Language;
}

export default function ServicesSection({ language = 'en' }: ServicesSectionProps) {
  const t = useTranslations(language);

  const services = [
    {
      icon: Code,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      features: t.services.webDev.features,
      gradient: "bg-gradient-to-br from-cyber-blue/20 via-cyber-blue/10 to-cyber-dark/80"
    },
    {
      icon: Palette,
      title: t.services.seo.title,
      description: t.services.seo.description,
      features: t.services.seo.features,
      gradient: "bg-gradient-to-br from-cyber-pink/20 via-cyber-pink/10 to-cyber-dark/80"
    },
    {
      icon: Target,
      title: t.services.social.title,
      description: t.services.social.description,
      features: t.services.social.features,
      gradient: "bg-gradient-to-br from-cyber-green/20 via-cyber-green/10 to-cyber-dark/80"
    },
    {
      icon: TrendingUp,
      title: t.services.branding.title,
      description: t.services.branding.description,
      features: t.services.branding.features,
      gradient: "bg-gradient-to-br from-cyber-purple/20 via-cyber-purple/10 to-cyber-dark/80"
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
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Enhanced Services Grid with Subtle Glowing Effect */}
        <div className="relative">
          {/* Glow Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-30" />
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">
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
        </div>


      </div>
    </section>
  );
}