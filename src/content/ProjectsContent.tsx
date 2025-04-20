import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
}

const ProjectsContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      url: "https://github.com/username/ecommerce",
      image: "https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team assignments, and progress tracking.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      url: "https://github.com/username/taskmanager",
      image: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application showing forecasts, historical data, and weather maps for locations worldwide.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      url: "https://github.com/username/weather",
      image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="font-mono text-sm">
      <div className="text-orange-400">&lt;!-- projects.html - My Recent Work --&gt;</div>
      
      <div className="mt-4">
        <span className="text-blue-400">&lt;div</span>{' '}
        <span className="text-green-400">class</span>
        <span className="text-white">=</span>
        <span className="text-orange-300">"projects-container"</span>
        <span className="text-blue-400">&gt;</span>
      </div>

      <div className="mt-2 space-y-6 ml-4">
        {projects.map(project => (
          <div key={project.id} className="group">
            <div 
              className="bg-[#2D2D2D] p-3 rounded transition-all duration-200 hover:bg-[#3E3E3E] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="text-blue-400">&lt;article</div>
              <div className="ml-4 text-white">
                <span className="text-green-400">id</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"{`project-${project.id}`}"</span>
              </div>
              <div className="ml-4 text-white">
                <span className="text-green-400">class</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"project-card"</span>
              </div>
              <div className="text-blue-400">&gt;</div>
              
              <div className="ml-8">
                <div className="text-blue-400">&lt;h3&gt;</div>
                <div className="ml-4 text-white">{project.title}</div>
                <div className="text-blue-400">&lt;/h3&gt;</div>
                
                <div className="text-blue-400">&lt;p&gt;</div>
                <div className="ml-4 text-white">{project.description.substring(0, 60)}...</div>
                <div className="text-blue-400">&lt;/p&gt;</div>
                
                <div className="text-blue-400">&lt;div</div>
                <div className="ml-4 text-white">
                  <span className="text-green-400">class</span>
                  <span className="text-white">=</span>
                  <span className="text-orange-300">"tech-stack"</span>
                </div>
                <div className="text-blue-400">&gt;</div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-[#1E1E1E] text-xs rounded text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-blue-400">&lt;/div&gt;</div>
              </div>
              
              <div className="text-blue-400">&lt;/article&gt;</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-2">
        <span className="text-blue-400">&lt;/div&gt;</span>
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1E1E1E] max-w-2xl w-full rounded-md overflow-hidden border border-[#333333]">
            <div className="p-4 border-b border-[#333333] flex justify-between items-center">
              <h3 className="text-white font-semibold">
                <span className="text-green-400">./</span>{selectedProject.title}
              </h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-[#252526] text-xs rounded text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#007ACC] text-white rounded hover:bg-blue-600 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;