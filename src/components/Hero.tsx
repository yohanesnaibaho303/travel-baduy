import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="intro"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg")'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Discover Baduy Village Through the Eyes of Its People
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Authentic tours guided by the locals themselves
        </p>
        <button 
          onClick={scrollToAbout} 
          className="btn btn-primary"
        >
          Start Your Journey
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" 
        onClick={scrollToAbout}
      >
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;