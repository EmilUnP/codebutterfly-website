import React from 'react';
import { Users, Award, Clock, Target, Zap, Shield } from 'lucide-react';

const stats = [
  { number: '150+', label: 'Projects Completed', icon: Target, color: 'cyber-blue' },
  { number: '50+', label: 'Happy Clients', icon: Users, color: 'cyber-pink' },
  { number: '5+', label: 'Years Experience', icon: Clock, color: 'cyber-purple' },
  { number: '99%', label: 'Client Satisfaction', icon: Award, color: 'cyber-green' }
];

const features = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
    color: 'cyber-amber'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every project undergoes rigorous testing and quality assurance processes.',
    color: 'cyber-green'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'We focus on delivering measurable results that drive business growth.',
    color: 'cyber-blue'
  }
];

export default function AboutSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-transparent to-cyber-blue/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-32 right-16 w-2 h-2 bg-cyber-green/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-cyber-blue/30 rounded-full animate-float opacity-20" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-green to-white bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of innovators, designers, and developers dedicated to creating exceptional digital experiences.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)] opacity-40 rounded-3xl" />
                
                {/* Enhanced Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto relative">
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-${stat.color}/20 rounded-2xl blur-xl animate-pulse-glow`} />
                    
                    {/* Icon Container */}
                    <div className={`relative w-full h-full bg-${stat.color}/10 rounded-2xl border border-${stat.color}/30 flex items-center justify-center backdrop-blur-sm`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating Particles */}
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-${stat.color}/60 rounded-full animate-pulse-fast`} />
                    <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-${stat.color}/40 rounded-full animate-pulse-fast`} style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* Enhanced Stats */}
                <div className="text-center">
                  <div className={`text-4xl font-black text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${stat.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu h-full">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)] opacity-40 rounded-3xl" />
                
                {/* Enhanced Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto relative">
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-${feature.color}/20 rounded-2xl blur-xl animate-pulse-glow`} />
                    
                    {/* Icon Container */}
                    <div className={`relative w-full h-full bg-${feature.color}/10 rounded-2xl border border-${feature.color}/30 flex items-center justify-center backdrop-blur-sm`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating Particles */}
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-${feature.color}/60 rounded-full animate-pulse-fast`} />
                    <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-${feature.color}/40 rounded-full animate-pulse-fast`} style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold text-${feature.color} mb-4 group-hover:scale-105 transition-transform duration-500`}>
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}