
import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About RL' },
    { id: 'principles', label: 'Key Principles' },
    { id: 'vehicle', label: 'Autonomous Nav' },
    { id: 'demo', label: 'Interactive Demo' },
    { id: 'contact', label: 'Contact' }
  ];
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-10 right-10 z-50 hidden md:flex flex-col items-end space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              flex items-center justify-end px-4 py-2 rounded-lg transition-all duration-300 
              ${currentSection === item.id
                ? 'bg-gradient-to-r from-deepblue to-cyberblue text-white neon-glow w-40'
                : 'bg-nearblack glassmorphism hover:bg-deepblue hover:neon-outline w-32'
              }
            `}
          >
            <span className="mr-2">{item.label}</span>
            {currentSection === item.id && <ChevronRight className="h-4 w-4" />}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <button 
        onClick={toggleMenu} 
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-deepblue text-white md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-nearblack/95 z-40 flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col space-y-5 w-full px-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`
                  flex items-center justify-between px-5 py-3 rounded-lg transition-all duration-300
                  ${currentSection === item.id
                    ? 'bg-gradient-to-r from-deepblue to-cyberblue text-white'
                    : 'bg-nearblack border border-deepblue/50'
                  }
                `}
              >
                <span>{item.label}</span>
                {currentSection === item.id && <ChevronRight className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
