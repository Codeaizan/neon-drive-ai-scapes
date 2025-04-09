
import React, { useState, useRef, useEffect } from 'react';
import ThreeScene from '@/components/ThreeScene';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import VehicleSection from '@/components/VehicleSection';
import DemoSection from '@/components/DemoSection';
import ContactSection from '@/components/ContactSection';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const { toast } = useToast();
  
  // Refs for each section for scrolling
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    principles: useRef<HTMLDivElement>(null),
    vehicle: useRef<HTMLDivElement>(null),
    demo: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  };

  // Handle navigation clicks
  const navigateToSection = (section: string) => {
    const sectionRef = sectionRefs[section as keyof typeof sectionRefs];
    
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(section);
      
      if (section === 'demo') {
        toast({
          title: "Interactive Demo Loaded",
          description: "Try changing parameters and running the simulation to see how the AI learns",
          duration: 5000,
        });
      }
    }
  };
  
  // Initialize intersection observer to update active section on scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract the section id from the entry target's id
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
        }
      });
    }, options);

    // Observe all section refs
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up observer
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background Scene */}
      <ThreeScene />
      
      {/* Navigation */}
      <Navigation onNavigate={navigateToSection} currentSection={currentSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div id="hero" ref={sectionRefs.hero}>
          <HeroSection onExplore={() => navigateToSection('about')} />
        </div>
        
        {/* About RL Section */}
        <div id="about" ref={sectionRefs.about}>
          <AboutSection />
        </div>
        
        {/* Key Principles Section */}
        <div id="principles" ref={sectionRefs.principles}>
          <PrinciplesSection />
        </div>
        
        {/* Vehicle Components Section */}
        <div id="vehicle" ref={sectionRefs.vehicle}>
          <VehicleSection />
        </div>
        
        {/* Interactive Demo Section */}
        <div id="demo" ref={sectionRefs.demo}>
          <DemoSection />
        </div>
        
        {/* Contact Section */}
        <div id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-6 bg-nearblack border-t border-deepblue">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Reinforcement Learning for Autonomous Navigation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
