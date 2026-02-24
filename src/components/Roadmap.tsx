import { FiBookOpen, FiBriefcase, FiAward, FiStar } from 'react-icons/fi';
import './Roadmap.css';

interface RoadmapProps {
  id: string;
}

const Roadmap = ({ id }: RoadmapProps) => {
  const roadmapItems = [
    {
      year: 'Present',
      title: '4th Year Engineering Student',
      company: 'Engineering College',
      description: 'Currently pursuing software engineering degree with a focus on full-stack development, ML/AI integrations, and cloud architectures. Actively building projects like DiaBLife and VoiceLegacy.',
      icon: <FiBookOpen size={24} />
    },
    {
      year: '2025 (Expected)',
      title: 'Software Engineering Intern',
      company: 'Tech Industry',
      description: 'Looking to apply my skills in scalable systems, React/Vite frontends, and backend engineering (Python/Java) in a professional tech environment.',
      icon: <FiBriefcase size={24} />
    },
    {
      year: '2026',
      title: 'Graduation & Full-Time Role',
      company: 'Future Career',
      description: 'Graduating as a Software Engineer ready to build impactful, scalable, and highly available web applications worldwide.',
      icon: <FiAward size={24} />
    },
    {
      year: 'Long-term Goal',
      title: 'Senior Software/Cloud Architect',
      company: 'Career Aspiration',
      description: 'Leading technical teams and designing large-scale distributed systems and advanced AI solutions.',
      icon: <FiStar size={24} />
    }
  ];

  return (
    <section id={id} className="roadmap section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Career <span className="accent">Roadmap</span>
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
