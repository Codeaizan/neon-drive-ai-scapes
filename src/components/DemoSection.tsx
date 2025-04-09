
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings, RefreshCw } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [currentReward, setCurrentReward] = useState(0);
  const [algorithmType, setAlgorithmType] = useState('dqn');
  const [complexity, setComplexity] = useState('medium');
  const [learningProgress, setLearningProgress] = useState({
    collisions: [12, 8, 5, 2, 1, 0, 0, 0, 1, 0],
    rewards: [120, 240, 350, 520, 680, 750, 820, 840, 780, 890],
    timeToComplete: [120, 100, 85, 72, 63, 58, 55, 52, 54, 50]
  });
  
  // Simulated learning progress
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCurrentEpisode(prev => prev + 1);
        setCurrentReward(prev => {
          const fluctuation = Math.random() * 50 - 10;
          return Math.max(0, prev + fluctuation);
        });
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, [isRunning]);
  
  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentEpisode(0);
    setCurrentReward(0);
  };
  
  const toggleSimulation = () => {
    setIsRunning(!isRunning);
  };
  
  const changeAlgorithm = (algo: string) => {
    resetSimulation();
    setAlgorithmType(algo);
  };
  
  const changeComplexity = (level: string) => {
    resetSimulation();
    setComplexity(level);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Interactive</span> Reinforcement Learning Demo
        </h2>
        
        <div className="glassmorphism p-6 md:p-8 rounded-xl neon-outline mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="bg-nearblack rounded-lg h-80 md:h-96 relative cyberpunk-grid overflow-hidden">
                {/* Simulated vehicle path */}
                <div 
                  className="absolute h-4 w-4 bg-cyberpink rounded-full z-10 transition-all duration-500"
                  style={{ 
                    left: `${Math.sin(currentEpisode / 3) * 40 + 50}%`, 
                    top: `${Math.cos(currentEpisode / 2) * 30 + 50}%`,
                    boxShadow: '0 0 10px #FF3366, 0 0 20px rgba(255, 51, 102, 0.5)'
                  }}
                ></div>
                
                {/* Obstacles */}
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute h-8 w-8 bg-deepblue rounded-md border border-cyberblue"
                    style={{ 
                      left: `${(i + 1) * 15}%`, 
                      top: `${(i * 20) % 100}%`,
                      opacity: 0.7
                    }}
                  ></div>
                ))}
                
                {/* Goal */}
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2 h-12 w-12 border-2 border-cyberblue rounded-full flex items-center justify-center animate-pulse">
                  <div className="h-6 w-6 bg-cyberblue rounded-full"></div>
                </div>
                
                {/* Path trace */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
                  <path 
                    d={`M ${50} ${80} ${Array.from({ length: currentEpisode }, (_, i) => {
                      const x = Math.sin(i / 3) * 40 + 50;
                      const y = Math.cos(i / 2) * 30 + 50;
                      return `L ${x} ${y}`;
                    }).join(' ')}`}
                    stroke="#FF3366"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <button 
                    onClick={toggleSimulation} 
                    className="p-2 bg-deepblue rounded-full text-white hover:bg-cyberpink transition-colors"
                  >
                    {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                  
                  <button 
                    onClick={resetSimulation} 
                    className="p-2 bg-deepblue rounded-full text-white hover:bg-cyberpink transition-colors"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Episode</p>
                    <p className="text-lg font-bold text-white">{currentEpisode}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400">Current Reward</p>
                    <p className="text-lg font-bold text-cyberblue">+{currentReward.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="glassmorphism p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="h-5 w-5 text-cyberblue" />
                  <h3 className="text-lg font-bold">Configuration</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Algorithm</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => changeAlgorithm('dqn')} 
                      className={`px-3 py-1 rounded text-sm ${algorithmType === 'dqn' ? 'bg-cyberblue text-white' : 'bg-deepblue text-gray-300'}`}
                    >
                      DQN
                    </button>
                    <button 
                      onClick={() => changeAlgorithm('ppo')} 
                      className={`px-3 py-1 rounded text-sm ${algorithmType === 'ppo' ? 'bg-cyberblue text-white' : 'bg-deepblue text-gray-300'}`}
                    >
                      PPO
                    </button>
                    <button 
                      onClick={() => changeAlgorithm('a2c')} 
                      className={`px-3 py-1 rounded text-sm ${algorithmType === 'a2c' ? 'bg-cyberblue text-white' : 'bg-deepblue text-gray-300'}`}
                    >
                      A2C
                    </button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-2">Environment Complexity</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => changeComplexity('easy')} 
                      className={`px-3 py-1 rounded text-sm ${complexity === 'easy' ? 'bg-cyberblue text-white' : 'bg-deepblue text-gray-300'}`}
                    >
                      Easy
                    </button>
                    <button 
                      onClick={() => changeComplexity('medium')} 
                      className={`px-3 py-1 rounded text-sm ${complexity === 'medium' ? 'bg-cyberblue text-white' : 'bg-deepblue text-gray-300'}`}
                    >
                      Medium
                    </button>
                    <button 
                      onClick={() => changeComplexity('hard')} 
                      className={`px-3 py-1 rounded text-sm ${complexity === 'hard' ? 'bg-cyberblue text-white' : 'bg-deepblue text-gray-300'}`}
                    >
                      Hard
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <RefreshCw className="h-5 w-5 text-cyberpink" />
                  <h3 className="text-lg font-bold">Learning Progress</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Collisions</span>
                      <span className="text-white">{learningProgress.collisions[learningProgress.collisions.length - 1]}</span>
                    </div>
                    <div className="h-2 bg-deepblue rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyberpink to-cyberblue transition-all" 
                        style={{ width: `${(1 - learningProgress.collisions[learningProgress.collisions.length - 1] / 15) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Rewards</span>
                      <span className="text-white">{learningProgress.rewards[learningProgress.rewards.length - 1]}</span>
                    </div>
                    <div className="h-2 bg-deepblue rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyberpink to-cyberblue transition-all" 
                        style={{ width: `${(learningProgress.rewards[learningProgress.rewards.length - 1] / 1000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Completion Time</span>
                      <span className="text-white">{learningProgress.timeToComplete[learningProgress.timeToComplete.length - 1]}s</span>
                    </div>
                    <div className="h-2 bg-deepblue rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyberpink to-cyberblue transition-all" 
                        style={{ width: `${(1 - learningProgress.timeToComplete[learningProgress.timeToComplete.length - 1] / 130) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
