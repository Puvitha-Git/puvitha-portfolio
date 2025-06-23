
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-accent rounded-full mb-6 hover:-translate-y-1 transition-transform"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} className="text-primary" />
          </button>
          
          <div className="mb-4">
            <a href="#home" className="text-xl sm:text-2xl font-bold text-foreground">
              <span className="text-primary">P</span>uvitha <span className="text-primary">G</span>
            </a>
          </div>
          
          <div className="flex space-x-8 mb-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Puvitha G. All rights reserved.</p>
            <p className="mt-1">Front-End Developer | UI/UX Enthusiast | CSE Student</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
