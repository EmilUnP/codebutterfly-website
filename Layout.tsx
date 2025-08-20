"use client";

import React from 'react';
import { motion } from "framer-motion";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";

export default function Layout({ children, currentPageName }: { children: React.ReactNode; currentPageName: string }) {
  // Check if we're on the landing page to apply different styles
  const isLandingPage = currentPageName === "Landing";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker relative">

      {/* Navigation */}
      <Navbar currentPageName={currentPageName} />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}