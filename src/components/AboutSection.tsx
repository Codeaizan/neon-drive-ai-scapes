
import React from 'react';
import { Brain, Lightbulb, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Understanding <span className="text-gradient">Reinforcement Learning</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="glassmorphism p-6 rounded-xl hover:neon-glow transition-all transform hover:-translate-y-2">
            <div className="bg-deepblue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 neon-glow">
              <Brain className="text-cyberblue h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Learning Process</h3>
            <p className="text-gray-300">
              Reinforcement learning enables AI agents to learn optimal behaviors through trial and error, receiving rewards for desired actions and penalties for mistakes.
            </p>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl hover:neon-glow transition-all transform hover:-translate-y-2" style={{ transitionDelay: '0.1s' }}>
            <div className="bg-deepblue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 neon-glow">
              <Lightbulb className="text-cyberblue h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Reward Systems</h3>
            <p className="text-gray-300">
              The AI is guided by carefully designed reward functions that quantify success, encouraging behaviors that lead to optimal navigation outcomes.
            </p>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl hover:neon-glow transition-all transform hover:-translate-y-2" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-deepblue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 neon-glow">
              <Zap className="text-cyberblue h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Adaptation</h3>
            <p className="text-gray-300">
              Through continuous interaction with environments, autonomous vehicles develop policies that adapt to new scenarios and generalize across different conditions.
            </p>
          </div>
        </div>
        
        <div className="mt-20 glassmorphism p-8 rounded-xl neon-outline">
          <h3 className="text-2xl font-bold mb-6 text-center">The Reinforcement Learning Loop</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:w-1/4 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-deepblue flex items-center justify-center mx-auto neon-glow">
                <span className="text-xl font-bold text-cyberblue">1</span>
              </div>
              <p className="mt-4 text-white">Agent observes environment state</p>
            </div>
            
            <div className="hidden md:block">
              <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807611 37.9792 0.807611 37.3934 1.3934C36.8076 1.97919 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM0 13.5H48V10.5H0V13.5Z" fill="#00F0FF"/>
              </svg>
            </div>
            
            <div className="text-center md:w-1/4 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-deepblue flex items-center justify-center mx-auto neon-glow">
                <span className="text-xl font-bold text-cyberblue">2</span>
              </div>
              <p className="mt-4 text-white">Agent selects an action</p>
            </div>
            
            <div className="hidden md:block">
              <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807611 37.9792 0.807611 37.3934 1.3934C36.8076 1.97919 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM0 13.5H48V10.5H0V13.5Z" fill="#00F0FF"/>
              </svg>
            </div>
            
            <div className="text-center md:w-1/4 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-deepblue flex items-center justify-center mx-auto neon-glow">
                <span className="text-xl font-bold text-cyberblue">3</span>
              </div>
              <p className="mt-4 text-white">Environment returns new state</p>
            </div>
            
            <div className="hidden md:block">
              <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807611 37.9792 0.807611 37.3934 1.3934C36.8076 1.97919 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM0 13.5H48V10.5H0V13.5Z" fill="#00F0FF"/>
              </svg>
            </div>
            
            <div className="text-center md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-deepblue flex items-center justify-center mx-auto neon-glow">
                <span className="text-xl font-bold text-cyberblue">4</span>
              </div>
              <p className="mt-4 text-white">Agent receives reward/penalty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
