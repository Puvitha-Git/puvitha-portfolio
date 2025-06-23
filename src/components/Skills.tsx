
import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'UI/UX Design', level: 75 },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'MongoDB', level: 65 },
  ];
  
  const toolsSkills: Skill[] = [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Figma', level: 70 },
    { name: 'Jupyter Notebook', level: 75 },
    { name: 'Firebase', level: 65 },
  ];

  return (
    <section id="skills" className="py-24">
      <div id="skills-section" className="container-section">
        <div className="space-y-2 text-center mb-12">
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto">What I bring to the table</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className={`bg-card rounded-xl p-6 shadow-sm border border-border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border">Frontend Development</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className={`bg-card rounded-xl p-6 shadow-sm border border-border transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border">Backend Development</h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${300 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools and Technologies */}
          <div className={`bg-card rounded-xl p-6 shadow-sm border border-border transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border">Tools & Technologies</h3>
            <div className="space-y-5">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary/70 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${600 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
