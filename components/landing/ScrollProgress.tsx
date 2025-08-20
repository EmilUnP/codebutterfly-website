import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-cyber-gradient origin-left z-50">
      {/* Progress Bar */}
      <div 
        className="w-full h-full bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple shadow-lg shadow-cyber-blue/50 transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      {/* Animated Particles */}
      <div className="absolute top-0 right-0 w-2 h-full bg-white rounded-full shadow-lg shadow-white/50 animate-scan-line" />
      
      {/* Progress Text */}
      <div className="absolute top-2 right-4 text-xs text-cyber-blue font-bold orbitron tracking-wider animate-pulse">
        {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
}
