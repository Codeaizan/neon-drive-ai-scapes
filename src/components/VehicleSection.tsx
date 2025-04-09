
import React, { useState } from 'react';
import { Car, Radio, Cpu, GitBranch, Lock, Filter } from 'lucide-react';

const VehicleSection: React.FC = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  
  const components = [
    {
      id: 'sensors',
      label: 'Sensor Suite',
      icon: <Radio className="h-6 w-6" />,
      position: { top: '20%', left: '20%' },
      description: 'LIDAR, cameras, radar, and ultrasonic sensors collect environmental data with redundancy for safety-critical systems.'
    },
    {
      id: 'processor',
      label: 'AI Processor',
      icon: <Cpu className="h-6 w-6" />,
      position: { top: '30%', right: '20%' },
      description: 'High-performance computing platform that runs the reinforcement learning models and processes sensor data in real-time.'
    },
    {
      id: 'algorithms',
      label: 'RL Algorithms',
      icon: <GitBranch className="h-6 w-6" />,
      position: { bottom: '30%', left: '25%' },
      description: 'Deep Q-Networks (DQN), Proximal Policy Optimization (PPO), and other advanced algorithms that learn optimal driving policies.'
    },
    {
      id: 'security',
      label: 'Security Systems',
      icon: <Lock className="h-6 w-6" />,
      position: { bottom: '20%', right: '25%' },
      description: 'Robust cybersecurity measures that protect against hacking, tampering, and ensure the integrity of navigation systems.'
    },
    {
      id: 'filters',
      label: 'Filtering Systems',
      icon: <Filter className="h-6 w-6" />,
      position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      description: 'Kalman filters and sensor fusion algorithms that integrate data from multiple sources for accurate environmental mapping.'
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Autonomous Vehicle</span> Components
        </h2>
        
        <div className="relative w-full aspect-video min-h-[500px] glassmorphism rounded-xl cyberpunk-grid neon-outline mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <Car className="text-cyberblue h-32 w-32 opacity-50" />
          </div>
          
          {components.map((component) => (
            <div
              key={component.id}
              className="absolute z-10"
              style={{ ...component.position }}
              onMouseEnter={() => setHoveredComponent(component.id)}
              onMouseLeave={() => setHoveredComponent(null)}
            >
              <div className={`
                flex items-center justify-center w-16 h-16 rounded-full 
                ${hoveredComponent === component.id ? 'bg-cyberpink' : 'bg-deepblue'} 
                transition-all duration-300 neon-glow cursor-pointer
              `}>
                {component.icon}
              </div>
              
              <div className={`
                absolute p-4 rounded-lg glassmorphism w-64 
                transition-all duration-300
                ${hoveredComponent === component.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                ${component.position.top ? 'top-full mt-2' : 'bottom-full mb-2'}
                ${component.position.left ? 'left-0' : ''}
                ${component.position.right ? 'right-0' : ''}
                ${component.position.left === '50%' ? 'left-1/2 transform -translate-x-1/2' : ''}
              `}>
                <h3 className="text-lg font-bold mb-2 text-cyberblue">{component.label}</h3>
                <p className="text-sm text-gray-300">{component.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view for component list */}
        <div className="md:hidden space-y-4">
          {components.map((component) => (
            <div key={component.id} className="glassmorphism p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-deepblue p-2 rounded-full neon-glow">
                  {component.icon}
                </div>
                <h3 className="text-lg font-bold text-cyberblue">{component.label}</h3>
              </div>
              <p className="text-sm text-gray-300">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
