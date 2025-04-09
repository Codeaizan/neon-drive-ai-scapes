
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-4xl text-center animate-float">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Reinforcement Learning</span> <br />
          for Autonomous Navigation
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore how AI learns to navigate through complex environments using reinforcement learning algorithms.
        </p>
        
        <button 
          onClick={onExplore}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyberblue to-cyberpink text-white font-bold text-lg transition-all hover:shadow-lg hover:scale-105 animate-pulse-glow"
        >
          Begin Exploration
        </button>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-cyberblue h-10 w-10" />
      </div>
      
      {/* Floating stats */}
      <div className="absolute top-1/4 left-10 md:left-20 glassmorphism p-4 rounded-lg rotate-3 animate-float hidden md:block">
        <p className="text-cyberblue font-mono">Training Progress: 87%</p>
        <div className="w-full bg-deepblue rounded-full h-2 mt-2">
          <div className="bg-cyberblue h-2 rounded-full" style={{ width: '87%' }}></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-10 md:right-20 glassmorphism p-4 rounded-lg -rotate-2 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
        <p className="text-cyberpink font-mono">Reward: +956.32</p>
        <p className="text-sm text-gray-400">Episodes: 1,245</p>
      </div>
    </section>
  );
};

export default HeroSection;
