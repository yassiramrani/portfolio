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
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'DiaBLife',
      description: 'An innovative healthcare dashboard designed for a hackathon. Integrated complex machine learning models into a user-friendly React interface with a robust reporting system.',
      tags: ['React', 'Dashboard', 'Machine Learning'],
      github: 'https://github.com',
      demo: ''
    },
    {
      title: 'Supabase Auth Flow',
      description: 'Secure authentication system implementing JWT for enhanced privacy. Handled complex encryption compatibility issues and provided seamless user registration/login experiences.',
      tags: ['React', 'Supabase', 'Authentication', 'Security'],
      github: 'https://github.com',
      demo: 'https://demo.com'
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
