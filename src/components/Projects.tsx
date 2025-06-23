
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  longDescription: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Pneumonia Detection',
      description: 'AI/ML project for detecting pneumonia from chest X-rays using deep learning',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
      github: '#',
      longDescription: 'A convolutional neural network (CNN) model trained on a dataset of chest X-ray images to detect pneumonia with high accuracy. The model was deployed as a web application using Flask, allowing medical professionals to upload X-ray images and receive instant predictions to aid in diagnosis.'
    },
    {
      id: 2,
      title: 'React To-Do List',
      description: 'Feature-rich task management application with drag & drop functionality',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
      github: 'https://github.com/Puvitha-Git/Todo-App',
      longDescription: 'A modern, responsive to-do list application built with React and TypeScript featuring drag and drop task reordering, task categories, priority levels, due dates, and persistent storage. The application includes dark mode support and fully responsive design for all devices.'
    },
    {
      id: 3,
      title: 'Tic-Tac-Toe Game',
      description: 'Interactive game with minimax algorithm for unbeatable AI opponent',
      image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1000',
      technologies: ['JavaScript', 'HTML', 'CSS', 'AI Algorithm'],
      github: 'https://github.com/Puvitha-Git/exercise2',
      live: 'https://puvitha-git.github.io/exercise2/',
      longDescription: 'An engaging tic-tac-toe game featuring both multiplayer and single-player modes. The single-player mode implements the minimax algorithm to create an unbeatable AI opponent. The game includes animations, sound effects, and keeps track of the score across multiple rounds.'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Real-time weather forecasting application with beautiful visualizations',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000',
      technologies: ['React.js', 'Weather API', 'CSS'],
      github: 'https://github.com/Puvitha-Git/weather-app-react',
      live: '#',
      longDescription: 'A weather forecast application that provides real-time weather information for any location. Features include current conditions, 7-day forecast, hourly predictions, and interactive weather maps. The app uses geolocation to automatically detect the user\'s location and displays beautiful visualizations of weather data.'
    },
    {
      id: 5,
      title: 'Landing Pages Design',
      description: 'Collection of responsive landing page templates for various industries',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      live:'https://flowershop-puvitha.web.app/',
      longDescription: 'A collection of professionally designed, fully responsive landing page templates for various industries including e-commerce, SaaS, restaurants, and portfolios. Each template features smooth animations, optimized performance, and cross-browser compatibility with easy customization options.'
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 bg-accent/30">
      <div className="container-section">
        <div className="space-y-2 text-center mb-12">
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github size={16} className="text-white" />
                          </a>
                        )}
                        {project.live && (
                          <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={16} className="text-white" />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="text-xs text-white hover:text-primary bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-background/40 transition-colors"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-accent rounded-full text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div 
              className="relative bg-card w-full max-w-3xl rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                onClick={closeProjectModal}
              >
                <X size={16} className="text-foreground" />
              </button>
              
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedProject.longDescription}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1 bg-accent rounded-full text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/60 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                )}
                
                {selectedProject.live && (
                  <a 
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
