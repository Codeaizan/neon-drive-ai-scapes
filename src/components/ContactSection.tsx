
import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Ready to <span className="text-gradient">Explore</span> Further?
        </h2>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Connect with us to learn more about reinforcement learning applications in autonomous navigation and how this technology is shaping the future of transportation.
        </p>
        
        <div className="glassmorphism p-8 rounded-xl neon-outline mb-16">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-deepblue rounded-lg border border-cyberblue/30 focus:border-cyberblue focus:ring-1 focus:ring-cyberblue outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 bg-deepblue rounded-lg border border-cyberblue/30 focus:border-cyberblue focus:ring-1 focus:ring-cyberblue outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full p-3 bg-deepblue rounded-lg border border-cyberblue/30 focus:border-cyberblue focus:ring-1 focus:ring-cyberblue outline-none transition-all"
                placeholder="Tell us what you're interested in learning about..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-cyberblue to-cyberpink text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all neon-glow"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="flex justify-center gap-8">
          <a href="#" className="text-gray-400 hover:text-cyberblue transition-colors">
            <Mail className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyberblue transition-colors">
            <Github className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyberblue transition-colors">
            <Twitter className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyberblue transition-colors">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
