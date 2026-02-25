import { FiAward, FiStar, FiBriefcase, FiShield } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Roadmap.css';

interface RoadmapProps {
  id: string;
}

const Roadmap = ({ id }: RoadmapProps) => {
  const { t } = useTranslation();

  const roadmapItems = [
    {
      year: 'Jul 2025 - Aug 2025',
      title: t('roadmap.items.yazaki.title'),
      company: t('roadmap.items.yazaki.company'),
      description: t('roadmap.items.yazaki.description'),
      icon: <FiBriefcase size={24} />
    },
    {
      year: 'Jul 2024 - Aug 2024',
      title: t('roadmap.items.lear.title'),
      company: t('roadmap.items.lear.company'),
      description: t('roadmap.items.lear.description'),
      icon: <FiBriefcase size={24} />
    },
    {
      year: '2026',
      title: t('roadmap.items.merge.title'),
      company: t('roadmap.items.merge.company'),
      description: t('roadmap.items.merge.description'),
      icon: <FiAward size={24} />
    },
    {
      year: 'Recent',
      title: t('roadmap.items.guidini.title'),
      company: t('roadmap.items.guidini.company'),
      description: t('roadmap.items.guidini.description'),
      icon: <FiAward size={24} />
    },
    {
      year: 'Dec 2024',
      title: t('roadmap.items.petyplant.title'),
      company: t('roadmap.items.petyplant.company'),
      description: t('roadmap.items.petyplant.description'),
      icon: <FiAward size={24} />
    },
    {
      year: 'Jul 2024',
      title: t('roadmap.items.happlant.title'),
      company: t('roadmap.items.happlant.company'),
      description: t('roadmap.items.happlant.description'),
      icon: <FiAward size={24} />
    },
    {
      year: '2024',
      title: t('roadmap.items.cyber.title'),
      company: t('roadmap.items.cyber.company'),
      description: t('roadmap.items.cyber.description'),
      icon: <FiShield size={24} />
    },
    {
      year: '2026 - Present',
      title: t('roadmap.items.president.title'),
      company: t('roadmap.items.president.company'),
      description: t('roadmap.items.president.description'),
      icon: <FiStar size={24} />
    }
  ];

  return (
    <section id={id} className="roadmap section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t('roadmap.title')} <span className="accent">{t('roadmap.subtitle')}</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="roadmap-timeline">
          {roadmapItems.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
