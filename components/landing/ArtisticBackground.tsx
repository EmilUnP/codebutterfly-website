import React from 'react';

export default function ArtisticBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 cyber-grid-3d opacity-20" />
      
      {/* Morphing Background */}
      <div className="absolute inset-0 morphing-background opacity-30" />
      
      {/* Particle Field */}
      <div className="absolute inset-0 particle-field opacity-40" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32">
        <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-blue/30 to-cyber-pink/30 floating-3d" />
      </div>
      
      <div className="absolute top-40 right-32 w-24 h-24">
        <div className="w-full h-full geometric-shape-alt bg-gradient-to-br from-cyber-purple/30 to-cyber-green/30 floating-3d" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute bottom-32 left-32 w-28 h-28">
        <div className="w-full h-full geometric-shape-triangle bg-gradient-to-br from-cyber-amber/30 to-cyber-blue/30 floating-3d" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="absolute bottom-20 right-20 w-20 h-20">
        <div className="w-full h-full geometric-shape bg-gradient-to-br from-cyber-pink/30 to-cyber-purple/30 floating-3d" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Artistic Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40">
        <div className="w-full h-full rounded-full artistic-gradient opacity-20 blur-xl floating-3d" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32">
        <div className="w-full h-full rounded-full artistic-gradient opacity-20 blur-xl floating-3d" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Energy Waves */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="w-full h-full energy-wave bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div className="w-full h-full energy-wave bg-gradient-to-r from-transparent via-cyber-pink to-transparent" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* 3D Perspective Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyber-purple/50 to-transparent transform perspective-3d" />
      </div>
      
      <div className="absolute top-0 left-1/2 w-px h-full">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyber-green/50 to-transparent transform perspective-3d" />
      </div>
      
      {/* Holographic Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 border border-cyber-blue/20 rounded-full floating-3d" style={{ animationDelay: '0.5s' }} />
        <div className="w-80 h-80 border border-cyber-pink/20 rounded-full floating-3d absolute top-8 left-8" style={{ animationDelay: '1.5s' }} />
        <div className="w-64 h-64 border border-cyber-purple/20 rounded-full floating-3d absolute top-16 left-16" style={{ animationDelay: '2.5s' }} />
      </div>
      
      {/* Scanning Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent transform translate-y-96 animate-pulse" />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-pink to-transparent transform translate-y-64 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-purple to-transparent transform translate-y-32 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}
