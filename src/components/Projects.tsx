import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Projects.css';

interface ProjectsProps {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'VoiceLegacy',
      description: t('projects.items.voicelegacy.description'),
      tags: ['React', 'FastAPI', 'Python', 'AI/ML'],
      github: 'https://github.com/yassiramrani/VoiceLegacy',
      demo: ''
    },
    {
      title: 'DiaBLife',
      description: t('projects.items.diablife.description'),
      tags: ['React', 'Dashboard', 'Machine Learning', 'Jupyter Notebook'],
      github: 'https://github.com/yassiramrani/DIABLIFE',
      demo: ''
    },
    {
      title: 'mhealth',
      description: t('projects.items.mhealth.description'),
      tags: ['Java', 'HealthTech', 'Backend'],
      github: 'https://github.com/yassiramrani/mhealth',
      demo: ''
    },
    {
      title: 'PetyPlant',
      description: t('projects.items.petyplant.description'),
      tags: ['GreenTech', 'AI', 'IoT', 'Hackathon'],
      github: 'https://github.com/yassiramrani',
      demo: ''
    },
    {
      title: 'HapPlant',
      description: t('projects.items.happlant.description'),
      tags: ['IoT', 'AI Chatbot', 'Innovation'],
      github: 'https://github.com/yassiramrani',
      demo: ''
    },
    {
      title: 'Guidini',
      description: t('projects.items.guidini.description'),
      tags: ['React', 'Innovation', 'Hackathon'],
      github: 'https://github.com/yassiramrani',
      demo: ''
    },
    {
      title: 'Wijha',
      description: t('projects.items.wijha.description'),
      tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript'],
      github: 'https://github.com/yassiramrani',
      demo: ''
    },
    {
      title: 'infra_guard_part1',
      description: t('projects.items.infra_guard_part1.description'),
      tags: ['HTML', 'CSS', 'Security'],
      github: 'https://github.com/yassiramrani/infra_guard_part1',
      demo: ''
    },
    {
      title: 'taskmanager-web',
      description: t('projects.items.taskmanager.description'),
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
            {t('projects.title')} <span className="accent">{t('projects.subtitle')}</span>
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
