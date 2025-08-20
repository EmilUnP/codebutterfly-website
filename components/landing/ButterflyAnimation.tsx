import React from 'react';

export default function ButterflyAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Enhanced 3D Butterfly - Main */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 opacity-40 animate-float-3d">
        <div className="relative w-full h-full perspective-3d">
          {/* Left Wing */}
          <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-cyber-blue/60 to-cyber-pink/60 rounded-full transform -rotate-45 animate-wing-left shadow-lg shadow-cyber-blue/30" />
          
          {/* Right Wing */}
          <div className="absolute right-0 top-0 w-6 h-6 bg-gradient-to-br from-cyber-pink/60 to-cyber-purple/60 rounded-full transform rotate-45 animate-wing-right shadow-lg shadow-cyber-pink/30" />
          
          {/* Body */}
          <div className="absolute left-1/2 top-1/2 w-1.5 h-4 bg-cyber-blue/70 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyber-blue/50" />
          
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 w-12 h-12 bg-gradient-radial from-cyber-blue/20 to-transparent rounded-full blur-md animate-pulse-glow" />
          
          {/* 3D Depth Layer */}
          <div className="absolute inset-0 w-12 h-12 bg-gradient-radial from-cyber-blue/10 to-transparent rounded-full transform translate-z-5 blur-sm" />
        </div>
      </div>

      {/* Second Enhanced Butterfly */}
      <div className="absolute top-3/4 right-1/3 w-10 h-10 opacity-35 animate-float-3d-delayed">
        <div className="relative w-full h-full perspective-3d">
          {/* Left Wing */}
          <div className="absolute left-0 top-0 w-5 h-5 bg-gradient-to-br from-cyber-green/60 to-cyber-amber/60 rounded-full transform -rotate-30 animate-wing-left-slow shadow-lg shadow-cyber-green/30" />
          
          {/* Right Wing */}
          <div className="absolute right-0 top-0 w-5 h-5 bg-gradient-to-br from-cyber-amber/60 to-cyber-blue/60 rounded-full transform rotate-30 animate-wing-right-slow shadow-lg shadow-cyber-amber/30" />
          
          {/* Body */}
          <div className="absolute left-1/2 top-1/2 w-1 h-3 bg-cyber-green/70 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyber-green/50" />
          
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 w-10 h-10 bg-gradient-radial from-cyber-green/20 to-transparent rounded-full blur-md animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          {/* 3D Depth Layer */}
          <div className="absolute inset-0 w-10 h-10 bg-gradient-radial from-cyber-green/10 to-transparent rounded-full transform translate-z-3 blur-sm" />
        </div>
      </div>

      {/* Third Enhanced Butterfly */}
      <div className="absolute top-1/2 left-3/4 w-8 h-8 opacity-30 animate-float-3d-slow">
        <div className="relative w-full h-full perspective-3d">
          {/* Left Wing */}
          <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-cyber-purple/60 to-cyber-pink/60 rounded-full transform -rotate-20 animate-wing-left-very-slow shadow-lg shadow-cyber-purple/30" />
          
          {/* Right Wing */}
          <div className="absolute right-0 top-0 w-4 h-4 bg-gradient-to-br from-cyber-pink/60 to-cyber-blue/60 rounded-full transform rotate-20 animate-wing-right-very-slow shadow-lg shadow-cyber-pink/30" />
          
          {/* Body */}
          <div className="absolute left-1/2 top-1/2 w-1 h-2.5 bg-cyber-purple/70 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyber-purple/50" />
          
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 w-8 h-8 bg-gradient-radial from-cyber-purple/20 to-transparent rounded-full blur-md animate-pulse-glow" style={{ animationDelay: '2s' }} />
          
          {/* 3D Depth Layer */}
          <div className="absolute inset-0 w-8 h-8 bg-gradient-radial from-cyber-purple/10 to-transparent rounded-full transform translate-z-2 blur-sm" />
        </div>
      </div>

      {/* Fourth Butterfly - New Addition */}
      <div className="absolute top-1/6 right-1/6 w-9 h-9 opacity-25 animate-float-3d-fast">
        <div className="relative w-full h-full perspective-3d">
          {/* Left Wing */}
          <div className="absolute left-0 top-0 w-4.5 h-4.5 bg-gradient-to-br from-cyber-amber/60 to-cyber-orange/60 rounded-full transform -rotate-35 animate-wing-left-fast shadow-lg shadow-cyber-amber/30" />
          
          {/* Right Wing */}
          <div className="absolute right-0 top-0 w-4.5 h-4.5 bg-gradient-to-br from-cyber-orange/60 to-cyber-red/60 rounded-full transform rotate-35 animate-wing-right-fast shadow-lg shadow-cyber-orange/30" />
          
          {/* Body */}
          <div className="absolute left-1/2 top-1/2 w-1 h-3 bg-cyber-amber/70 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyber-amber/50" />
          
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 w-9 h-9 bg-gradient-radial from-cyber-amber/20 to-transparent rounded-full blur-md animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          
          {/* 3D Depth Layer */}
          <div className="absolute inset-0 w-9 h-9 bg-gradient-radial from-cyber-amber/10 to-transparent rounded-full transform translate-z-4 blur-sm" />
        </div>
      </div>

      {/* Fifth Butterfly - Floating Particles */}
      <div className="absolute top-2/3 left-1/6 w-6 h-6 opacity-20 animate-float-3d-vertical">
        <div className="relative w-full h-full perspective-3d">
          {/* Particle Cluster */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-cyber-blue/80 rounded-full animate-pulse-fast" />
            <div className="w-1 h-1 bg-cyber-pink/80 rounded-full animate-pulse-fast" style={{ animationDelay: '0.3s' }} />
            <div className="w-1 h-1 bg-cyber-purple/80 rounded-full animate-pulse-fast" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 w-6 h-6 bg-gradient-radial from-cyber-blue/15 to-transparent rounded-full blur-sm animate-pulse-slow" />
        </div>
      </div>
    </div>
  );
}