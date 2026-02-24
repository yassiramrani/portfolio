import { FiAward, FiStar, FiBriefcase, FiShield } from 'react-icons/fi';
import './Roadmap.css';

interface RoadmapProps {
  id: string;
}

const Roadmap = ({ id }: RoadmapProps) => {
  const roadmapItems = [
    {
      year: 'Jul 2025 - Aug 2025',
      title: 'Software Engineer Intern',
      company: 'Yazaki Morocco (Hybrid)',
      description: 'Summer internship focused on Software Infrastructure and Software Design in Tangier.',
      icon: <FiBriefcase size={24} />
    },
    {
      year: 'Jul 2024 - Aug 2024',
      title: 'Software Engineer Intern',
      company: 'Lear Corporation (On-site)',
      description: 'Summer internship focused on Preventive Maintenance and System Repair.',
      icon: <FiBriefcase size={24} />
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
      year: 'Dec 2024',
      title: '1st Place Winner - Hackathon Vert',
      company: 'EMSI Tanger & Es.Maroc.Org',
      description: 'Led "Team Thinkera" to victory with "PetyPlant", an intelligent automatic watering system and AI-driven plant community platform.',
      icon: <FiAward size={24} />
    },
    {
      year: 'Jul 2024',
      title: '2nd Place Winner - Innovation Competition',
      company: 'EMSI Tanger',
      description: 'Awarded for "HapPlant", a plant surveillance and automated irrigation system integrating an AI chatbot for personalized advice.',
      icon: <FiAward size={24} />
    },
    {
      year: '2024',
      title: 'Cybersecurity Workshop Animator',
      company: 'InnovXtech Club',
      description: 'Organized and co-animated workshops on Reverse Engineering, Pentesting, and Cryptography at EMSI and Lycée Technique Moulay Youssef.',
      icon: <FiShield size={24} />
    },
    {
      year: '2026 - Present',
      title: 'President / Engineering Student',
      company: 'InnovXtech Club (EMSI Tanger)',
      description: 'Studying Software Engineering while serving as President of InnovXtech Club since 2026. Delivered "Wijha" (intelligent travel organization platform using Laravel/Tailwind) as an academic project.',
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
