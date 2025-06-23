
import React, { useEffect } from 'react';
import { Award, GraduationCap, Code, Trophy, Book, BadgeCheck } from 'lucide-react';

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.achievement-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const achievements: Achievement[] = [
    {
      title: 'College Class Topper',
      organization: 'Tagore Engineering College',
      date: '2 Semester Topper',
      description: 'Achieved highest academic performance among peers for two consecutive semesters, maintaining a CGPA of 9.27/10.',
      icon: <Trophy size={24} className="text-primary" />
    },
    {
      title: 'Code Contest Winner',
      organization: 'National Symposium',
      date: '2025',
      description: 'First place in a competitive programming contest, demonstrating strong problem-solving skills and algorithm development.',
      icon: <Code size={24} className="text-primary" />
    },
    {
      title: 'Runner-up',
      organization: 'Cyber Hunt Competition',
      date: '2025',
      description: 'Secured second place in a cybersecurity challenge, showcasing technical knowledge and analytical thinking.',
      icon: <Award size={24} className="text-primary" />
    },
    {
      title: 'First Prize - Paper Presentation',
      organization: 'National Symposium',
      date: '2025',
      description: 'Recognized for outstanding research and presentation skills at a national-level technical symposium.',
      icon: <GraduationCap size={24} className="text-primary" />
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="container-section">
        <div className="space-y-2 text-center mb-12">
          <h2 className="section-title mx-auto">Achievements</h2>
          <p className="section-subtitle max-w-2xl mx-auto">Recognition and accomplishments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card transition-opacity duration-500 bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <p className="text-primary font-medium">{item.organization}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Python & Java Programming',
                issuer: 'LinkedIn Learning',
                icon: <Book size={18} />
              },
              {
                title: 'HTML, CSS, JavaScript',
                issuer: 'Infosys Certification',
                icon: <BadgeCheck size={18} />
              },
              {
                title: 'SQL (Basic)',
                issuer: 'HackerRank',
                icon: <Code size={18} />
              },
              {
                title: 'Learnathon 2024',
                issuer: 'ICT Academy (8 courses)',
                icon: <Award size={18} />
              },
              {
                title: 'Introduction to MongoDB for Students',
                issuer: 'MongoDB',
                icon: <Book size={18} />
              },
              {
                title: 'Full stack Development Bootcamp',
                issuer: 'GreeksforGeeks',
                icon: <Book size={18} />
              },
              {
                title: 'Technical Symposiums',
                issuer: 'Participation & Completion',
                icon: <GraduationCap size={18} />
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="achievement-card transition-opacity duration-500 bg-card/50 rounded-lg p-4 border border-border flex items-center gap-3"
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="p-2 rounded-full bg-accent/70">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
