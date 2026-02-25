import { FiCode, FiCpu, FiCloudLightning, FiAward } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './About.css';

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const { t } = useTranslation();

  const skills = [
    {
      title: t('about.skills.frontend.title'),
      icon: <FiCode size={32} />,
      description: t('about.skills.frontend.description'),
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      title: t('about.skills.backend.title'),
      icon: <FiCpu size={32} />,
      description: t('about.skills.backend.description'),
      tags: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL']
    },
    {
      title: t('about.skills.cloud.title'),
      icon: <FiCloudLightning size={32} />,
      description: t('about.skills.cloud.description'),
      tags: ['AWS', 'Docker', 'Supabase', 'Vercel']
    }
  ];

  return (
    <section id={id} className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t('about.title')} <span className="accent">{t('about.subtitle')}</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              {t('about.lead')}
            </p>
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
              {t('about.certifications.title')} <span className="accent">{t('about.certifications.subtitle')}</span>
            </h3>
            <div className="cert-grid">
              {[
                {
                  title: 'Using Python to Access Web Data',
                  issuer: 'University of Michigan',
                  date: 'Issued May 2025'
                },
                {
                  title: 'Software Engineering: Software Design and Project Management',
                  issuer: 'The Hong Kong University of Science and Technology',
                  date: 'Issued May 2025'
                },
                {
                  title: 'Introduction à la programmation orientée objet (en C++)',
                  issuer: 'École Polytechnique Fédérale de Lausanne',
                  date: 'Issued Jan 2025'
                },
                {
                  title: 'Building Web Applications in PHP',
                  issuer: 'University of Michigan',
                  date: 'Issued Jan 2025' /* Assuming Jan 2025 based on surrounding certs */
                },
                {
                  title: 'Interactivity with JavaScript',
                  issuer: 'University of Michigan',
                  date: 'Issued Jan 2025' /* Assuming Jan 2025 based on surrounding certs */
                },
                {
                  title: 'ESL002: Intermediate English as a Second Language',
                  issuer: 'Saylor Academy',
                  date: 'Issued Jan 2023'
                },
                {
                  title: 'EF SET English Certificate 73/100 (C2 Proficient)',
                  issuer: 'EF SET',
                  date: 'Issued Feb 2022'
                }
              ].map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-icon">
                    <FiAward size={24} />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
