import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { type Language, useTranslations } from '@/lib/static-i18n';
import SocialMediaCard from '@/components/ui/SocialMediaCard';

interface FooterProps {
  language?: Language;
}

export default function Footer({ language = 'en' }: FooterProps) {
  const t = useTranslations(language);

  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-3" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-10 left-20 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-10" />
      <div className="absolute bottom-10 right-20 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-10" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Enhanced Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 animate-fade-in-up">
              <div className="flex items-center justify-start mb-4">
                <div className="relative group">
                  <Image
                    src="/main logo.png"
                    alt="CodeButterfly Logo"
                    width={128}
                    height={128}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain animate-pulse-slow transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    priority
                  />
                   
                   {/* Subtle Background Glow */}
                   <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-cyber-blue/10 rounded-full -z-10 animate-pulse-slow blur-xl opacity-30" />
                </div>
              </div>
                                <p className="text-gray-300 leading-relaxed max-w-md text-base">
                    {t.footer.description}
                  </p>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
                              <h4 className="font-bold text-white mb-4 text-base">{t.footer.quickLinks}</h4>
                  <div className="space-y-2">
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
                              <h4 className="font-bold text-white mb-4 text-base">{t.footer.contactInfo}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyber-blue/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-cyber-blue" />
                </div>
                <div>
                  <div className="text-cyber-blue font-mono text-xs tracking-wider mb-1">{t.footer.labels.email}</div>
                  <div className="text-gray-300 text-sm">{t.contact.contactInfo.email.details}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyber-pink/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-cyber-pink" />
                </div>
                <div>
                  <div className="text-cyber-pink font-mono text-xs tracking-wider mb-1">{t.footer.labels.phone}</div>
                  <div className="text-gray-300 text-sm">{t.contact.contactInfo.phone.details}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyber-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-cyber-purple" />
                </div>
                <div>
                  <div className="text-cyber-purple font-mono text-xs tracking-wider mb-1">{t.footer.labels.location}</div>
                  <div className="text-gray-300 text-sm">{t.contact.contactInfo.location.details}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links & Copyright */}
        <div className="border-t border-cyber-blue/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Card */}
            <div className="flex justify-center md:justify-start">
              <SocialMediaCard language={language} />
            </div>
                         <div className="text-center md:text-right">
                                                   <p className="text-gray-400 text-sm mb-2">
                    {t.footer.copyright}
                  </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}