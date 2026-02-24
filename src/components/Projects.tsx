import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

interface ProjectsProps {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {
  const projects = [
    {
      title: 'VoiceLegacy',
      description: 'A comprehensive voice cloning application allowing users to synthesize speech using AI. Built backend with FastAPI and deployed to Hugging Face Spaces, with a React frontend hosted on Vercel.',
      tags: ['React', 'FastAPI', 'Python', 'AI/ML'],
      github: 'https://github.com/yassiramrani/VoiceLegacy',
      demo: ''
    },
    {
      title: 'DiaBLife',
      description: 'An innovative healthcare dashboard designed for a hackathon. Integrated complex machine learning models into a user-friendly React interface with a robust reporting system.',
      tags: ['React', 'Dashboard', 'Machine Learning', 'Jupyter Notebook'],
      github: 'https://github.com/yassiramrani/DIABLIFE',
      demo: ''
    },
    {
      title: 'mhealth',
      description: 'A mobile health (mHealth) backend and tracking application focused on recording and reporting user health metrics.',
      tags: ['Java', 'HealthTech', 'Backend'],
      github: 'https://github.com/yassiramrani/mhealth',
      demo: ''
    },
    {
      title: 'infra_guard_part1',
      description: 'An infrastructure and security monitoring web interface prototype for system oversight.',
      tags: ['HTML', 'CSS', 'Security'],
      github: 'https://github.com/yassiramrani/infra_guard_part1',
      demo: ''
    },
    {
      title: 'taskmanager-web',
      description: 'A comprehensive task manager web application designed to help users organize their daily schedules and activities efficiently.',
      tags: ['HTML', 'Web Development'],
      github: 'https://github.com/yassiramrani/taskmanager-web',
      demo: ''
    }
  ];

  return (
    <section id={id} className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repo">
                    <FiGithub size={20} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
