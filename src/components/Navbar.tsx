
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const { toast } = useToast();
  
  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    
    toast({
      title: newMode ? "Dark mode enabled" : "Light mode enabled",
      description: `Theme has been changed to ${newMode ? "dark" : "light"} mode.`,
      duration: 2000,
    });
  };

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set initial dark mode from user preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  // Nav links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'}`}>
      <div className="container max-w-6xl px-4 sm:px-6 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-xl sm:text-2xl font-bold text-foreground">
            <span className="text-primary">P</span>uvitha <span className="text-primary">G</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-foreground" />
            ) : (
              <Moon size={18} className="text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-foreground" />
            ) : (
              <Moon size={18} className="text-foreground" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="text-foreground" />
            ) : (
              <Menu size={20} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-background dark:bg-card shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 border-b border-border' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container max-w-6xl px-4 py-4 mx-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary py-2 transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
