"use client";

import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useT } from '@/lib/i18n-context';

// We'll define contactInfo inside the component to access translations

export default function ContactSection() {
  const t = useT();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: t.contact.info.email,
      color: 'cyber-blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: t.contact.info.phone,
      color: 'cyber-green'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: t.contact.info.address,
      color: 'cyber-purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      color: 'cyber-amber'
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-amber/5 via-transparent to-cyber-blue/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-28 left-28 w-2 h-2 bg-cyber-amber/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-28 right-28 w-1.5 h-1.5 bg-cyber-blue/30 rounded-full animate-float opacity-20" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-amber to-white bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="group">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)] opacity-40 rounded-3xl" />
              
              {/* Form Header */}
              <div className="relative mb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  {/* Icon Background Glow */}
                  <div className="absolute inset-0 bg-cyber-blue/20 rounded-2xl blur-xl animate-pulse-glow" />
                  
                  {/* Icon Container */}
                  <div className="relative w-full h-full bg-cyber-blue/10 rounded-2xl border border-cyber-blue/30 flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-blue/60 rounded-full animate-pulse-fast" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-pink/60 rounded-full animate-pulse-fast" style={{ animationDelay: '0.5s' }} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                <p className="text-white/70 text-sm">We'll get back to you within 24 hours</p>
              </div>

              {/* Enhanced Form Fields */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      placeholder={t.contact.form.name.placeholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyber-blue/50 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                    />
                  </div>
                  <div className="group">
                    <input
                        type="email"
                      placeholder={t.contact.form.email.placeholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyber-blue/50 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                    />
                  </div>
                  </div>
                  
                <div className="group">
                  <input
                    type="text"
                    placeholder={t.contact.form.subject.placeholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyber-blue/50 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                  />
                </div>
                
                <div className="group">
                  <textarea
                    rows={5}
                    placeholder={t.contact.form.message.placeholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyber-blue/50 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm resize-none"
                  />
                </div>
                
                {/* Enhanced Submit Button */}
                <button
                      type="submit"
                  className="w-full px-8 py-4 bg-cyber-gradient text-white font-bold rounded-2xl shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 transform-gpu flex items-center justify-center gap-3 group"
                >
                  <span>{t.contact.form.submit}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                </form>

              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
            </div>
            </div>

          {/* Enhanced Contact Information */}
            <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 transform-gpu">
                  {/* Enhanced Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)] opacity-40 rounded-3xl" />
                  
                  <div className="relative flex items-center space-x-4">
                    {/* Enhanced Icon */}
                    <div className="relative">
                      <div className="w-12 h-12 relative">
                        {/* Icon Background Glow */}
                        <div className={`absolute inset-0 bg-${info.color}/20 rounded-xl blur-lg animate-pulse-glow`} />
                        
                        {/* Icon Container */}
                        <div className={`relative w-full h-full bg-${info.color}/10 rounded-xl border border-${info.color}/30 flex items-center justify-center backdrop-blur-sm`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Floating Particles */}
                        <div className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-${info.color}/60 rounded-full animate-pulse-fast`} />
                      </div>
                  </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold text-${info.color} mb-1 group-hover:scale-105 transition-transform duration-500`}>
                        {info.title}
                    </h4>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-500">
                        {info.details}
                    </p>
                  </div>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${info.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                </div>
              </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}