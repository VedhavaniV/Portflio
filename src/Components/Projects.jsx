import { Globe, ShoppingCart, MessageCircle, ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';

const projects = [
  { 
    name: "Portfolio Website", 
    description: "A personal portfolio built with React.",
    icon: Globe,
    category: "Web Development",
    tech: ["React", "CSS3", "JavaScript"]
  },
  { 
    name: "E-commerce App", 
    description: "An online shopping platform.",
    icon: ShoppingCart,
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB"]
  },
  { 
    name: "Chat Application", 
    description: "A real-time messaging app using Socket.io.",
    icon: MessageCircle,
    category: "Real-time App",
    tech: ["Socket.io", "Express", "React"]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        {/* Animated background elements */}
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
        
        {/* Main content */}
        <div className="projects-content">
          {/* Header section */}
          <div className="projects-header">
            <div className="header-icon-wrapper">
              <div className="header-icon">
                <Globe className="main-icon" />
              </div>
            </div>
            
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-subtitle">Showcasing my development journey</p>
            <div className="title-underline"></div>
          </div>

          {/* Projects grid */}
          <div className="projects-grid">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className={`project-card project-card-${index + 1}`}>
                  <div className="project-card-inner">
                    {/* Project icon and category */}
                    <div className="project-header">
                      <div className={`project-icon-wrapper project-icon-${index + 1}`}>
                        <IconComponent className="project-icon" />
                      </div>
                      <span className={`project-category project-category-${index + 1}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Project content */}
                    <div className="project-content">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {/* Tech stack */}
                      <div className="tech-stack">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className={`tech-tag tech-tag-${index + 1}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project actions */}
                    <div className="project-actions">
                      <button className={`action-button action-button-${index + 1}`}>
                        <ExternalLink className="action-icon" />
                        <span>View Project</span>
                      </button>
                      <button className={`action-button-secondary action-button-secondary-${index + 1}`}>
                        <Github className="action-icon" />
                      </button>
                    </div>

                    {/* Hover overlay */}
                    <div className="project-overlay"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats section */}
          <div className="projects-stats">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Completion</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </div>
    </div>
  );
};

export default Projects;