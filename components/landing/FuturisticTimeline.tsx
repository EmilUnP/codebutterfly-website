import React from 'react';
import { Zap, Rocket, Brain, Globe, Cpu, Target } from 'lucide-react';

// Helper function to get color classes
const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    'cyber-blue': 'from-cyber-blue to-cyber-blue/50',
    'cyber-pink': 'from-cyber-pink to-cyber-pink/50',
    'cyber-purple': 'from-cyber-purple to-cyber-purple/50',
    'cyber-green': 'from-cyber-green to-cyber-green/50',
    'cyber-amber': 'from-cyber-amber to-cyber-amber/50',
  };
  return colorMap[color] || 'from-cyber-blue to-cyber-blue/50';
};

const timelineData = [
  {
    year: '2016',
    title: 'Foundation',
    description: 'CodeButterfly was born from a vision to democratize cutting-edge technology.',
    icon: Zap,
    color: 'cyber-blue'
  },
  {
    year: '2018',
    title: 'AI Revolution',
    description: 'Launched our first AI-powered development platform, revolutionizing how we build.',
    icon: Brain,
    color: 'cyber-pink'
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Expanded to 25+ countries, serving Fortune 500 companies worldwide.',
    icon: Globe,
    color: 'cyber-purple'
  },
  {
    year: '2022',
    title: 'Quantum Leap',
    description: 'Pioneered quantum computing solutions for enterprise applications.',
    icon: Cpu,
    color: 'cyber-green'
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Leading the charge in next-generation technology and digital transformation.',
    icon: Rocket,
    color: 'cyber-amber'
  }
];

export default function FuturisticTimeline() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center cyber-border rounded-full px-8 py-4 mb-10 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
            <div className="animate-spin-slow">
              <Target className="w-5 h-5 text-cyber-blue mr-3" />
            </div>
            <span className="text-sm font-bold text-white orbitron tracking-wider">OUR JOURNEY</span>
          </div>

          <h2 className="playfair text-6xl md:text-7xl font-black mb-8 animate-fade-in-up-delay">
            <span className="text-white inline-block">Timeline of</span>
            <br />
            <span className="gradient-text inline-block scan-line">Innovation</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-purple" />
          
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 flex items-center animate-fade-in-up-delay ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                <div className="holographic rounded-3xl p-8 backdrop-blur-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="animate-spin-slow">
                      <div className={`w-12 h-12 rounded-2xl p-3 mr-4 bg-gradient-to-br ${getColorClasses(item.color)}`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white orbitron tracking-wide">
                        {item.year}
                      </div>
                      <div className="text-cyber-blue font-medium orbitron tracking-wide">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 orbitron tracking-wide leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Energy Wave Effect */}
                  <div className="h-1 bg-gradient-to-r rounded-full mt-4 animate-energy-wave ${getColorClasses(item.color)}" />
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyber-gradient rounded-full border-4 border-cyber-darker z-10">
                <div className="w-full h-full bg-cyber-gradient rounded-full animate-pulse-glow" />
              </div>
            </div>
          ))}
        </div>

        {/* Future Indicator */}
        <div className="text-center mt-20 animate-fade-in-up-delay" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center cyber-border rounded-full px-8 py-4 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
            <div className="animate-spin-slow">
              <Rocket className="w-5 h-5 text-cyber-pink mr-3" />
            </div>
            <span className="text-sm font-bold text-white orbitron tracking-wider">
              THE FUTURE AWAITS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
