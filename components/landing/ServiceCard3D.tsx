import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCard3DProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export default function ServiceCard3D({ icon: Icon, title, description, features, gradient }: ServiceCard3DProps) {
  return (
    <div className="group relative perspective-3d">
      {/* Enhanced 3D Card Container */}
      <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2 group-hover:scale-105 group-hover:-translate-y-2">
        {/* Main Card */}
        <div className={`relative p-8 rounded-3xl ${gradient} shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden`}>
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] opacity-40" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
          
          {/* Enhanced Icon Container */}
          <div className="relative mb-6">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              {/* Icon Background Glow */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl animate-pulse-glow" />
              
              {/* Icon Container */}
              <div className="relative w-full h-full bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-blue/60 rounded-full animate-pulse-fast" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-pink/60 rounded-full animate-pulse-fast" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Enhanced Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyber-blue transition-colors duration-500">
            {title}
          </h3>

          {/* Enhanced Description */}
          <p className="text-white/80 text-center mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
            {description}
          </p>

          {/* Enhanced Features List */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${index * 100}ms` }}>
                {/* Enhanced Check Icon */}
                <div className="w-5 h-5 bg-cyber-blue/20 rounded-full border border-cyber-blue/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse-fast" />
                </div>
                
                {/* Feature Text */}
                <span className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-500">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Enhanced Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
        </div>

        {/* Enhanced 3D Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent rounded-3xl transform translate-y-2 scale-95 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Enhanced Border Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyber-blue/20 via-cyber-pink/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyber-blue/40 to-cyber-pink/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-cyber-purple/40 to-cyber-green/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}
