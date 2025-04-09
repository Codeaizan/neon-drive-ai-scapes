
import React, { useState } from 'react';
import { Eye, MapPin, Shield, Compass, Cpu, BarChart } from 'lucide-react';

const PrinciplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const principles = [
    {
      id: 0,
      title: "Perception",
      icon: <Eye className="h-6 w-6" />,
      description: "Advanced sensors like cameras, LIDAR, and radar continuously scan the environment to create a detailed representation of the surroundings.",
      detail: "Reinforcement learning algorithms process this sensory data to identify objects, assess distances, detect obstacles, and understand complex traffic patterns in real-time."
    },
    {
      id: 1,
      title: "Localization",
      icon: <MapPin className="h-6 w-6" />,
      description: "Vehicles must precisely determine their position within the environment, often using a combination of GPS, visual landmarks, and map data.",
      detail: "RL agents learn to maintain accurate localization even when GPS signals are unreliable, by recognizing environmental patterns and features."
    },
    {
      id: 2,
      title: "Safety Constraints",
      icon: <Shield className="h-6 w-6" />,
      description: "Reinforcement learning incorporates strict safety parameters that cannot be violated, ensuring passenger and pedestrian safety.",
      detail: "These constraints create boundaries within which the AI must operate, receiving strong negative rewards for any actions that might compromise safety."
    },
    {
      id: 3,
      title: "Path Planning",
      icon: <Compass className="h-6 w-6" />,
      description: "The system dynamically calculates optimal routes based on destination, traffic conditions, and environmental factors.",
      detail: "RL algorithms learn to balance efficiency (shortest path) with comfort (smooth driving) and safety (avoiding hazards) in their navigation decisions."
    },
    {
      id: 4,
      title: "Decision Making",
      icon: <Cpu className="h-6 w-6" />,
      description: "In complex scenarios, the AI makes decisions about lane changes, overtaking, yielding, and responding to unexpected obstacles.",
      detail: "Through thousands of simulated and real-world scenarios, the RL agent develops sophisticated decision-making policies that mimic and improve upon human driving expertise."
    },
    {
      id: 5,
      title: "Performance Metrics",
      icon: <BarChart className="h-6 w-6" />,
      description: "The system continuously evaluates its performance against key metrics like safety, efficiency, passenger comfort, and energy consumption.",
      detail: "These metrics form the reward functions that guide the reinforcement learning process, encouraging the AI to optimize for multiple objectives simultaneously."
    }
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Key <span className="text-gradient">Principles</span> of Autonomous Navigation
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {principles.map((principle) => (
            <button
              key={principle.id}
              onClick={() => setActiveTab(principle.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all
                ${activeTab === principle.id 
                  ? 'bg-gradient-to-r from-cyberblue to-cyberpink text-white neon-glow'
                  : 'glassmorphism hover:neon-outline'
                }
              `}
            >
              {principle.icon}
              <span>{principle.title}</span>
            </button>
          ))}
        </div>
        
        <div className="glassmorphism p-8 rounded-xl min-h-[300px] neon-outline">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-deepblue flex items-center justify-center neon-glow">
                {principles[activeTab].icon}
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-cyberblue">{principles[activeTab].title}</h3>
              <p className="text-gray-300 mb-6">{principles[activeTab].description}</p>
              <p className="text-white">{principles[activeTab].detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
