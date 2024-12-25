import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const filteredProjects = portfolioData.projects.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">My Projects</h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-lg ${
                filter === category
                  ? 'bg-techblue/80 text-white'
                  : 'bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              style={{
                transform: `perspective(1000px) rotateX(${
                  (mousePosition.y - window.innerHeight / 2) * 0.01
                }deg) rotateY(${
                  (mousePosition.x - window.innerWidth / 2) * 0.01
                }deg)`,
              }}
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate/80 dark:text-slate/60 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-white/20 dark:bg-white/10 rounded backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate hover:text-techblue transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate hover:text-techblue transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;