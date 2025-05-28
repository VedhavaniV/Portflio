import "../styles/skills.css";
import { Code, Database, Globe, GitBranch, Layers, Wrench } from 'lucide-react';

const skills = [
  { 
    name: "JavaScript", 
    proficiency: 90,
    icon: Code,
    category: "Language",
    experience: "3+ years"
  },
  { 
    name: "React.js", 
    proficiency: 85,
    icon: Layers,
    category: "Frontend",
    experience: "2+ years"
  },
  { 
    name: "Node.js", 
    proficiency: 80,
    icon: Globe,
    category: "Backend",
    experience: "2+ years"
  },
  { 
    name: "CSS", 
    proficiency: 88,
    icon: Wrench,
    category: "Styling",
    experience: "3+ years"
  },
  { 
    name: "MongoDB", 
    proficiency: 75,
    icon: Database,
    category: "Database",
    experience: "1+ years"
  },
  { 
    name: "Git", 
    proficiency: 82,
    icon: GitBranch,
    category: "Version Control",
    experience: "2+ years"
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        {/* Animated background elements */}
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
        <div className="bg-element bg-element-4"></div>
        
        {/* Main content */}
        <div className="skills-content">
          {/* Header section */}
          <div className="skills-header">
            <div className="header-icon-wrapper">
              <div className="header-icon">
                <Code className="main-icon" />
              </div>
              <div className="header-icon-ring"></div>
            </div>
            
            <h2 className="skills-title">Technical Skills</h2>
            <p className="skills-subtitle">My expertise & proficiency levels</p>
            <div className="title-underline"></div>
          </div>

          {/* Skills grid */}
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className={`skill-card skill-card-${index + 1}`}>
                  <div className="skill-card-inner">
                    {/* Skill header */}
                    <div className="skill-header">
                      <div className={`skill-icon-wrapper skill-icon-${index + 1}`}>
                        <IconComponent className="skill-icon" />
                      </div>
                      <div className="skill-info">
                        <h3 className="skill-name">{skill.name}</h3>
                        <span className={`skill-category skill-category-${index + 1}`}>
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Proficiency section */}
                    <div className="proficiency-section">
                      <div className="proficiency-header">
                        <span className="proficiency-label">Proficiency</span>
                        <span className="proficiency-percentage">{skill.proficiency}%</span>
                      </div>
                      
                      <div className="proficiency-bar">
                        <div 
                          className={`proficiency-fill proficiency-fill-${index + 1}`}
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="experience-section">
                      <span className="experience-label">Experience</span>
                      <span className={`experience-value experience-value-${index + 1}`}>
                        {skill.experience}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className={`skill-overlay skill-overlay-${index + 1}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills summary */}
          <div className="skills-summary">
            <div className="summary-stats">
              <div className="summary-stat">
                <div className="stat-icon">
                  <Code className="stat-icon-inner" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
              
              <div className="summary-stat">
                <div className="stat-icon">
                  <Globe className="stat-icon-inner" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              
              <div className="summary-stat">
                <div className="stat-icon">
                  <Layers className="stat-icon-inner" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Avg. Proficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
        <div className="floating-element floating-element-4"></div>
      </div>
    </div>
  );
};

export default Skills;