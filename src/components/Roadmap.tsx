import { FiBookOpen, FiAward, FiStar } from 'react-icons/fi';
import './Roadmap.css';

interface RoadmapProps {
  id: string;
}

const Roadmap = ({ id }: RoadmapProps) => {
  const roadmapItems = [
    {
      year: '2026',
      title: 'President & Founder',
      company: 'InnovXtech Club (EMSI Tanger)',
      description: 'Led the student innovation club, organizing major events like the 2024-2025 Integration Day (flashback day with DJ and team-building) uniting students through technology.',
      icon: <FiStar size={24} />
    },
    {
      year: '2026',
      title: 'Honorary Participation Award',
      company: 'The Merge Hackathon 2026',
      description: 'Selected among top 20 projects globally for "VoiceLegacy", an AI-powered voice preservation platform built with FastAPI, React, and ElevenLabs API.',
      icon: <FiAward size={24} />
    },
    {
      year: 'Recent',
      title: '2nd Prize Winner',
      company: 'Hackathon "IA & Villes Résilientes 2030" (LSInnovXTech)',
      description: 'Won 2nd place with "Guidini", a digital companion offering authentic tourism experiences and local employment opportunities for World Cup 2030.',
      icon: <FiAward size={24} />
    },
    {
      year: 'Present',
      title: '4th Year Engineering Student',
      company: 'EMSI Tanger',
      description: 'Ambassador Career Center EMSI Tanger. Delivered "Wijha" (intelligent travel organization platform using Laravel/Tailwind) as team project.',
      icon: <FiBookOpen size={24} />
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
