"use client";

import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { type Language, useTranslations } from '@/lib/static-i18n';
import { useIsMobile } from '../hooks/use-mobile';
import { PortfolioService, type PortfolioCarouselItem } from '@/lib/portfolio-service';

interface PortfolioCarousel3DProps {
  language?: Language;
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
}

const PortfolioCarousel3D = ({
  language = 'en',
  autoRotate = true,
  rotateInterval = 5000,
  cardHeight = 500,
}: PortfolioCarousel3DProps) => {
  const t = useTranslations(language);
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  // Get portfolio items from centralized service
  const portfolioItems: PortfolioCarouselItem[] = PortfolioService.getCarouselItems(language);

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % portfolioItems.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, portfolioItems.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % portfolioItems.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20 translate-x-0";
    if (index === (active + 1) % portfolioItems.length)
      return "translate-x-[45%] scale-90 opacity-70 z-10";
    if (index === (active - 1 + portfolioItems.length) % portfolioItems.length)
      return "translate-x-[-45%] scale-90 opacity-70 z-10";
    return "scale-75 opacity-0 translate-x-0";
  };

  const getCardColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'cyber-blue': 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
      'cyber-pink': 'from-pink-500/20 to-pink-600/20 border-pink-500/30',
      'cyber-purple': 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
      'cyber-green': 'from-green-500/20 to-green-600/20 border-green-500/30',
      'cyber-amber': 'from-amber-500/20 to-amber-600/20 border-amber-500/30'
    };
    return colorMap[color] || 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-32 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 via-transparent to-cyber-pink/20 blur-3xl opacity-30" />
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-cyber-purple to-white bg-clip-text text-transparent relative z-10">
              {t.portfolio.title}
            </h2>

            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed relative z-10">
              {t.portfolio.subtitle}
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyber-purple rounded-full animate-pulse-slow" />
            <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 w-2 h-2 bg-cyber-pink rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative overflow-hidden h-[420px] sm:h-[500px] md:h-[600px] mb-8" 
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}
             onTouchStart={onTouchStart}
             onTouchMove={onTouchMove}
             onTouchEnd={onTouchEnd}
             ref={carouselRef}>
          
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-700 ease-out ${getCardAnimationClass(index)}`}
              >
                <Card className={`overflow-hidden bg-gradient-to-br ${getCardColorClass(item.color)} border backdrop-blur-xl shadow-2xl h-[${cardHeight}px] flex flex-col group hover:scale-105 transition-transform duration-500`}>
                  
                  {/* Project Image Header */}
                  <div
                    className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {item.title.toUpperCase()}
                      </h3>
                      <div className="w-12 h-1 bg-white mx-auto mb-2" />
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-blue transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium mb-3">
                      {item.category}
                    </p>
                    <p className="text-gray-400 text-sm flex-grow leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                            +{item.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Learn More Link */}
                      <Link
                        href={item.link}
                        className="text-cyber-blue flex items-center hover:underline relative group/link"
                        onClick={() => {
                          if (item.link.startsWith("/")) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10 group-hover/link:text-cyber-pink transition-colors duration-300">
                          Learn more
                        </span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover/link:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover/link:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 z-30 shadow-lg transition-all hover:scale-110 border border-white/20"
            onClick={() =>
              setActive((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
            }
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 z-30 shadow-lg transition-all hover:scale-110 border border-white/20"
            onClick={() => setActive((prev) => (prev + 1) % portfolioItems.length)}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {portfolioItems.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "bg-cyber-blue w-8 shadow-lg shadow-cyber-blue/50"
                    : "bg-white/30 hover:bg-white/50 hover:scale-125"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link href={language === 'en' ? "/en/projects" : `/${language}/projects`}>
            <button className="inline-flex items-center px-8 py-4 bg-cyber-gradient text-white font-bold rounded-2xl shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-500 transform-gpu border border-cyber-blue/50">
              <span>{t.portfolio.viewFull}</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel3D;
