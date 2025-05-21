import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'intro', label: t('nav.intro') },
    { id: 'about', label: t('nav.about') },
    { id: 'trip-details', label: t('nav.tripDetails') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Compass className="h-8 w-8 text-amber-600 mr-2" />
          <span className={`font-bold text-xl ${isScrolled ? 'text-amber-700' : 'text-white'}`}>
            Travel to Baduy
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${
                isScrolled ? 'text-stone-700' : 'text-white'
              } hover:text-amber-500 font-medium transition-colors`}
            >
              {item.label}
            </button>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageToggle />
          <button 
            onClick={toggleMenu} 
            className={`${isScrolled ? 'text-stone-800' : 'text-white'} focus:outline-none`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded text-stone-700 hover:bg-amber-100 hover:text-amber-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;