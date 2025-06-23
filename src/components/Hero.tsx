
import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phrases = [
    "Front-End Developer",
    "MERN & Java Enthusiast",
    "CSE Student",
    "Software Developer"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  useEffect(() => {
    // Animate the hero section
    setIsVisible(true);
    
    // Rotate through phrases
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent text-primary text-sm font-medium">
              Hello, I'm
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Puvitha <span className="text-primary">G</span>
            </h1>
            
            <div className="h-8">
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground typing-text">
                {phrases[currentPhrase]}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Passionate about crafting beautiful, performant, and responsive web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#about" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FileText size={18} className="mr-2" />
                View Resume
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground border border-primary rounded-lg hover:bg-accent/60 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* Social links */}
            <div className="pt-4 flex items-center gap-4">
              <p className="text-sm text-muted-foreground">Find me on:</p>
              <div className="h-px flex-grow bg-border"></div>
              <div className="flex gap-3">
                <a 
                                    href="mailto:puvithaganapathi@gmail.com"
                                    className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                                    aria-label="Email"
                                  >
                                    <Mail size={20} />
                                  </a>
                <a 
                    href="https://linkedin.com/in/puvitha-g-0802ab27a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22.225 0h-20.45A1.775 1.775 0 0 0 0 1.775v20.45C0 23.2.8 24 1.775 24h20.45A1.775 1.775 0 0 0 24 22.225v-20.45A1.775 1.775 0 0 0 22.225 0ZM7.147 20.444H3.551v-9.647h3.596v9.647ZM5.349 9.038a2.077 2.077 0 1 1 0-4.154 2.077 2.077 0 0 1 0 4.154Zm15.096 11.406h-3.592v-5.569c0-1.313-.023-3-1.829-3-1.832 0-2.112 1.429-2.112 2.905v5.664h-3.593v-9.647h3.448v1.583h.05c.473-.896 1.628-1.841 3.347-1.841 3.581 0 4.24 2.358 4.24 5.425v4.48Z" clipRule="evenodd"/>
                    </svg>
                  </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className={`hidden lg:flex justify-center items-center ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <img
                src="/lovable-uploads/d30574ac-4135-423d-906d-047f31eb630c.png" 
                alt="Puvitha G" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating circles */}
              <div className="absolute top-5 right-0 w-8 h-8 bg-primary rounded-full animate-bounce-light delay-100"></div>
              <div className="absolute bottom-10 left-0 w-6 h-6 bg-secondary rounded-full animate-bounce-light delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
