"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import ContactSection from "../components/landing/ContactSection";
import FloatingParticles from "../components/landing/FloatingParticles";
import ButterflyAnimation from "../components/landing/ButterflyAnimation";
import AboutSection from "../components/landing/AboutSection";
import PortfolioSection from "../components/landing/PortfolioSection";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  return (
    <div className="overflow-hidden relative">
      {/* Background Elements */}
      <FloatingParticles />
      <ButterflyAnimation />
      
      {/* Main Content */}
      <div id="home">
        <HeroSection />
      </div>
      <div id="about" className="-mt-8">
        <AboutSection />
      </div>
      <div id="services" className="-mt-8">
        <ServicesSection />
      </div>
      <div id="portfolio" className="-mt-8">
        <PortfolioSection />
      </div>
      <div id="contact" className="-mt-8">
        <ContactSection />
      </div>
    </div>
  );
}