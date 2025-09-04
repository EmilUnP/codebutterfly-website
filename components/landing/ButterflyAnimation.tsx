import React from 'react';
import Image from 'next/image';

export default function ButterflyAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Butterfly - Main (icon) */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 opacity-70 animate-float-3d">
        <div className="relative w-full h-full">
          <Image src="/icon_butterfly.png" alt="Butterfly" width={48} height={48} className="w-12 h-12 object-contain drop-shadow-lg" />
        </div>
      </div>

      {/* Butterfly - Secondary (icon) */}
      <div className="absolute top-3/4 right-1/3 w-10 h-10 opacity-60 animate-float-3d-delayed">
        <div className="relative w-full h-full">
          <Image src="/icon_butterfly.png" alt="Butterfly" width={40} height={40} className="w-10 h-10 object-contain drop-shadow" />
        </div>
      </div>

      {/* Butterfly - Tertiary (icon) */}
      <div className="absolute top-1/2 left-3/4 w-8 h-8 opacity-60 animate-float-3d-slow">
        <div className="relative w-full h-full">
          <Image src="/icon_butterfly.png" alt="Butterfly" width={32} height={32} className="w-8 h-8 object-contain" />
        </div>
      </div>

      {/* Butterfly - Fourth (icon) */}
      <div className="absolute top-1/6 right-1/6 w-9 h-9 opacity-50 animate-float-3d-fast">
        <div className="relative w-full h-full">
          <Image src="/icon_butterfly.png" alt="Butterfly" width={36} height={36} className="w-9 h-9 object-contain" />
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

      {/* Coding Icon 1 with subtle 3D tilt and glow */}
      <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-70 animate-float-3d-slow">
        <div className="relative w-full h-full transform-gpu" style={{ transform: 'rotateX(12deg) rotateY(-10deg)' }}>
          <Image src="/icon_coding.png" alt="Coding Icon" width={48} height={48} className="w-12 h-12 object-contain drop-shadow-xl" />
          <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/20 to-transparent blur-md" />
        </div>
      </div>

    </div>
  );
}