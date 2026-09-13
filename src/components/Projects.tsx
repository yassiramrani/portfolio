import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { archiveProjects, featuredProjects } from '../data/portfolio';

const Projects = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="section-shell work-section" aria-labelledby="work-title">
      <div className="layout-grid">
        <header className="section-intro"><h2 id="work-title">{t('work.title')}</h2><p>{t('work.intro')}</p></header>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article className={`featured-project project-${index + 1}`} key={project.id}>
              <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <div className="project-body">
                <div className="project-heading"><h3>{project.title}</h3><p>{t(`work.featured.${project.id}.summary`)}</p></div>
                {project.image && <figure className="project-media"><img src={project.image} alt={t(project.imageAltKey)} /></figure>}
                <dl className="project-proof"><div><dt>{t('work.labels.contribution')}</dt><dd>{t(`work.featured.${project.id}.contribution`)}</dd></div><div><dt>{t('work.labels.outcome')}</dt><dd>{t(`work.featured.${project.id}.outcome`)}</dd></div></dl>
                <ul className="tech-list" aria-label={t('work.techLabel', { project: project.title })}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="project-actions">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> {t('work.repository')}</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><FiArrowUpRight aria-hidden="true" /> {t('work.demo')}</a>}</div>
            </article>
          ))}
        </div>
        <div className="project-archive" aria-labelledby="archive-title">
          <h3 id="archive-title">{t('work.archiveTitle')}</h3>
          <ul>{archiveProjects.map((project) => <li key={project.id}><div><strong>{project.title}</strong><span>{t(`work.archive.${project.id}`)}</span></div><div className="archive-meta"><span>{project.stack.join(' · ')}</span>{project.repository && <a href={project.repository} target="_blank" rel="noreferrer" aria-label={t('work.repositoryFor', { project: project.title })}><FiArrowUpRight aria-hidden="true" /></a>}</div></li>)}</ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
