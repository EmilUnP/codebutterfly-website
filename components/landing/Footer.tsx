import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  Sparkles,
  Heart
} from "lucide-react";
import Link from "next/link";

import { type Language, useTranslations } from '@/lib/static-i18n';

interface FooterProps {
  language?: Language;
}

export default function Footer({ language = 'en' }: FooterProps) {
  const t = useTranslations(language);

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-3" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-10" />
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-10" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand */}
          <div className="md:col-span-2">
            <div className="mb-8 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative group">
                  <div className="w-16 h-16 bg-cyber-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 100 100"
                      className="animate-pulse-slow"
                    >
                      <path d="M50 30 Q30 10 20 25 Q25 40 50 35" fill="white" fillOpacity="0.9" />
                      <path d="M50 30 Q70 10 80 25 Q75 40 50 35" fill="white" fillOpacity="0.7" />
                      <path d="M50 35 Q30 45 25 60 Q35 70 50 65" fill="white" fillOpacity="0.8" />
                      <path d="M50 35 Q70 45 75 60 Q65 70 50 65" fill="white" fillOpacity="0.6" />
                      <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-cyber-gradient rounded-2xl -z-10 animate-pulse-slow blur-xl opacity-50" />
                </div>
                <div>
                  <h3 className="playfair text-3xl font-bold gradient-text mb-2">
                    {t.brand.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-cyber-pink" />
                    <span className="text-cyber-blue font-mono text-sm tracking-wider">{t.brand.tagline}</span>
                  </div>
                </div>
              </div>
                                <p className="text-gray-300 leading-relaxed max-w-md text-lg">
                    {t.footer.description}
                  </p>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
                              <h4 className="font-bold text-white mb-6 text-lg">{t.footer.quickLinks}</h4>
                  <div className="space-y-3">
                    {[
                      { name: t.navbar.home, link: language === 'en' ? "/" : `/${language}` },
                      { name: t.navbar.portfolio, link: language === 'en' ? "/en/projects" : `/${language}/projects` },
                      { name: t.navbar.about, link: language === 'en' ? "/#about" : `/${language}#about` },
                      { name: t.navbar.services, link: language === 'en' ? "/#services" : `/${language}#services` },
                      { name: t.navbar.contact, link: language === 'en' ? "/#contact" : `/${language}#contact` }
                    ].map((item, index) => (
                <div key={item.name} className="group">
                  <Link
                    href={item.link}
                    className="block text-gray-300 hover:text-cyber-blue transition-all duration-300 group-hover:translate-x-2"
                  >
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div>
                              <h4 className="font-bold text-white mb-6 text-lg">{t.footer.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyber-blue/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-cyber-blue" />
                </div>
                <div>
                                    <div className="text-cyber-blue font-mono text-xs tracking-wider mb-1">EMAIL</div>
                  <div className="text-gray-300 text-sm">{t.contact.contactInfo.email.details}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyber-pink/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-cyber-pink" />
                </div>
                <div>
                                    <div className="text-cyber-pink font-mono text-xs tracking-wider mb-1">PHONE</div>
                  <div className="text-gray-300 text-sm">{t.contact.contactInfo.phone.details}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyber-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-cyber-purple" />
                </div>
                <div>
                  <div className="text-cyber-purple font-mono text-xs tracking-wider mb-1">LOCATION</div>
                  <div className="text-gray-300 text-sm">{t.contact.contactInfo.location.details}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links & Copyright */}
        <div className="border-t border-cyber-blue/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 holographic-3d rounded-full flex items-center justify-center text-cyber-blue hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
                         <div className="text-center md:text-right">
                                                   <p className="text-gray-400 text-sm mb-2">
                    {t.footer.copyright}
                  </p>
                  <p className="text-gray-500 text-xs flex items-center justify-center md:justify-end">
                    {t.footer.crafted}
                  </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}