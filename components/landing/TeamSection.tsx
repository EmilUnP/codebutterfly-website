"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslations } from '@/lib/static-i18n';
import { type Language } from '@/lib/static-i18n';
import { Sparkles, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  backgroundImage: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

// Memoized team members data for performance
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    role: 'Lead Developer',
    backgroundImage: '/Founder.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/alex-rodriguez',
      instagram: 'https://instagram.com/alex_rodriguez'
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    backgroundImage: '/designer.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarah-chen',
      instagram: 'https://instagram.com/sarah_chen_design'
    }
  },
  {
    id: '3',
    name: 'David Kim',
    role: 'Project Manager',
    backgroundImage: '/manager.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/david-kim',
      instagram: 'https://instagram.com/david_kim_pm'
    }
  },
  {
    id: '4',
    name: 'Emily Johnson',
    role: 'Backend Developer',
    backgroundImage: '/developer.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/emily-johnson',
      instagram: 'https://instagram.com/emily_johnson_dev'
    }
  }
];

interface TeamSectionProps {
  language: Language;
}

// Optimized Team Member Card Component with performance improvements
const TeamMemberCard = React.memo<{ member: TeamMember; index: number }>(({ member, index }) => {
  const shouldReduceMotion = useReducedMotion();
  
  // Memoized animation variants for performance
  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, y: 100 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.3 : 0.8, 
        delay: shouldReduceMotion ? 0 : index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }), [index, shouldReduceMotion]);

  const handleSocialClick = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <motion.div
      className="group flex-none w-[60px] xs:w-[70px] sm:w-[90px] md:w-[110px] lg:w-[120px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden shadow-[1px_5px_15px_rgba(30,14,62,1)] hover:flex-[0_0_150px] xs:hover:flex-[0_0_170px] sm:hover:flex-[0_0_200px] md:hover:flex-[0_0_220px] lg:hover:flex-[0_0_250px] hover:shadow-[1px_3px_15px_rgba(118,69,216,1)] hover:-translate-y-[15px] xs:hover:-translate-y-[18px] sm:hover:-translate-y-[20px] md:hover:-translate-y-[25px] lg:hover:-translate-y-[30px] hover:z-20 will-change-transform"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={shouldReduceMotion ? {} : { 
        transition: { duration: 0.3 }
      }}
    >
      {/* Optimized background image with Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src={member.backgroundImage}
          alt={`${member.name} - ${member.role}`}
          fill
          sizes="(max-width: 640px) 60px, (max-width: 768px) 90px, (max-width: 1024px) 110px, 120px"
          className="object-cover"
          priority={index < 2} // Prioritize first 2 images
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      
      {/* Content overlay - hidden by default, slides up when card expands on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,2,46,0.68)] to-transparent flex flex-col items-center justify-end h-full p-2 xs:p-3 sm:p-4 text-white opacity-0 transform translate-y-full transition-all duration-500 ease-in-out invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
        <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 text-center leading-tight">{member.name}</h2>
        <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center mt-1 mb-2 xs:mb-3 leading-tight">{member.role}</span>
        
        {/* Social Media Icons - Optimized for mobile */}
        <div className="flex gap-1.5 xs:gap-2 sm:gap-3">
          {member.social.linkedin && (
            <motion.button
              onClick={() => handleSocialClick(member.social.linkedin!)}
              className="p-1.5 xs:p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-cyber-blue/40 hover:border-cyber-blue/60 transition-all duration-300 touch-manipulation"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit ${member.name}'s LinkedIn profile`}
            >
              <Linkedin className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
            </motion.button>
          )}
          {member.social.instagram && (
            <motion.button
              onClick={() => handleSocialClick(member.social.instagram!)}
              className="p-1.5 xs:p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-cyber-pink/40 hover:border-cyber-pink/60 transition-all duration-300 touch-manipulation"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit ${member.name}'s Instagram profile`}
            >
              <Instagram className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  const t = useTranslations(language);
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  // Optimized loading state with intersection observer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), shouldReduceMotion ? 200 : 600);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Memoized container variants for performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.1,
        delayChildren: shouldReduceMotion ? 0.1 : 0.2
      }
    }
  }), [shouldReduceMotion]);

  // Memoized loading skeleton
  const LoadingSkeleton = useMemo(() => (
    <div className="flex justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-x-auto px-2 xs:px-3 sm:px-4">
      {[...Array(4)].map((_, index) => (
        <motion.div 
          key={index} 
          className="flex-none w-[60px] xs:w-[70px] sm:w-[90px] md:w-[110px] lg:w-[120px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-800/50 rounded-lg animate-pulse"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  ), []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced Background Layers - Consistent with other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute top-32 left-20 w-40 h-40 opacity-15">
        <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-blue/15 to-cyber-pink/15 floating-3d perspective-3d" />
      </div>
      
      <div className="absolute bottom-40 right-32 w-32 h-32 opacity-15">
        <div className="w-full h-full geometric-shape-alt bg-gradient-to-br from-cyber-purple/15 to-cyber-green/15 floating-3d perspective-3d" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyber-blue/6 to-cyber-pink/6 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyber-pink/6 to-cyber-purple/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Enhanced Section Header - Consistent with other sections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent">
            {t.team.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.team.subtitle}
          </p>
        </motion.div>

        {/* Team Cards Container */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="flex justify-center gap-1 sm:gap-2 md:gap-2.5 h-[400px] sm:h-[450px] md:h-[500px] overflow-x-auto px-4">
              {[...Array(4)].map((_, index) => (
                <motion.div 
                  key={index} 
                  className="flex-none w-[80px] sm:w-[100px] md:w-[120px] h-[400px] sm:h-[450px] md:h-[500px] bg-gray-800/50 rounded-lg animate-pulse"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center gap-1 sm:gap-2 md:gap-2.5 h-[400px] sm:h-[450px] md:h-[500px] overflow-x-auto px-4"
            >
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Energy Waves - Consistent with other sections */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="w-full h-full energy-wave bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div className="w-full h-full energy-wave bg-gradient-to-r from-transparent via-cyber-pink to-transparent" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default TeamSection;
