
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.about-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-accent/30">
      <div className="container-section">
        <div className="space-y-2 text-center mb-12">
          <h2 className="section-title mx-auto">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Timeline */}
          <div className="about-hidden transition-opacity duration-500 space-y-8">
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
              <p className="text-sm text-muted-foreground mb-1">2020 - Present</p>
              <p className="text-foreground">B.E. in Computer Science and Engineering</p>
              <p className="font-medium text-primary">Tagore Engineering College, Chennai</p>
              <p className="mt-2"><span className="font-medium">CGPA:</span> 9.27</p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-semibold text-foreground">Higher Secondary School</h3>
              <p className="text-sm text-muted-foreground mb-1">2018 - 2020</p>
              <p className="text-foreground">Science Stream</p>
              <p className="font-medium text-primary">Corley Higher Secondary School</p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-semibold text-foreground">Secondary School</h3>
              <p className="text-sm text-muted-foreground mb-1">2017 - 2018</p>
              <p className="text-foreground">General Studies</p>
              <p className="font-medium text-primary">Corley Higher Secondary School</p>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="about-hidden transition-opacity duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">Hello!</h3>
            <div className="space-y-4 text-foreground">
              <p>
                I'm a pre-final year Computer Science student from Chennai with a passion for creating elegant, 
                user-friendly web applications that provide exceptional digital experiences.
              </p>
              
              <p>
                My journey in tech began when I discovered the perfect blend of creativity and logic that web 
                development offers. Since then, I've been dedicated to mastering frontend technologies like 
                React, building responsive interfaces, and creating intuitive user experiences.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest UI/UX design trends, participating in hackathons, 
                or working on side projects that push my creative and technical boundaries.
              </p>
              
              <p>
                I'm constantly looking for opportunities to grow and collaborate on projects that make a meaningful impact. 
                Let's connect and build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
