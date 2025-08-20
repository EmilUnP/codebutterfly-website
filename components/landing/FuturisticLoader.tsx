import React, { useState, useEffect } from 'react';

export default function FuturisticLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-cyber-darker z-50 flex items-center justify-center">
      {/* Central Hexagon */}
      <div className="relative">
        <div className="w-32 h-32 clip-hexagon bg-cyber-gradient animate-pulse-glow" />
        <div className="absolute inset-0 w-32 h-32 clip-hexagon bg-cyber-gradient animate-spin-slow opacity-50" />
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border border-cyber-blue/20 rounded-full animate-spin-slow" />
        <div className="w-80 h-80 border border-cyber-pink/20 rounded-full animate-spin-slow-reverse absolute" style={{ animationDelay: '1s' }} />
        <div className="w-64 h-64 border border-cyber-purple/20 rounded-full animate-spin-slow absolute" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scan-line" />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-pink to-transparent animate-scan-line" style={{ animationDelay: '1s' }} />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-purple to-transparent animate-scan-line" style={{ animationDelay: '2s' }} />
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-80">
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="h-2 bg-cyber-gradient rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-4">
          <div className="text-cyber-blue font-mono text-sm tracking-wider animate-pulse">
            {progress}%
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-cyber-blue font-mono text-lg tracking-wider animate-pulse">
          INITIALIZING SYSTEMS...
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Energy Field */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5 animate-pulse-slow" />
      </div>
    </div>
  );
}
