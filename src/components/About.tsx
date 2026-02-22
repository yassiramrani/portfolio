import { FiCode, FiCpu, FiCloudLightning } from 'react-icons/fi';
import './About.css';

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <FiCode size={32} />,
      description: 'Building responsive, accessible, and highly interactive user interfaces using React, Vue, and modern CSS architectures.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Backend Engineering',
      icon: <FiCpu size={32} />,
      description: 'Designing robust APIs and microservices with deep focus on performance, security, and scalable database schemas.',
      tags: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <FiCloudLightning size={32} />,
      description: 'Deploying and orchestrating resilient cloud infrastructures and implementing CI/CD pipelines.',
      tags: ['AWS', 'Docker', 'Supabase', 'Vercel']
    }
  ];

  return (
    <section id={id} className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              Hello! I'm Yassir, a 4th-year engineering student with a relentless
              drive for understanding how things work beneath the surface.
            </p>
            <p>
              My journey into software engineering began with a fascination for 
              problem-solving and logic. Fast-forward to today, I've had the
              privilege of building software for hackathons, contributing to
              open-source projects, and developing solutions ranging from
              voice cloning APIs to specialized dashboards.
            </p>
            <p>
              I thrive in environments where I can leverage my academic foundation
              in engineering to tackle real-world software architecture challenges.
              Whether it's optimizing a backend service or crafting a pixel-perfect
              UI, I approach every task with a commitment to excellence.
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
        </div>
      </div>
    </section>
  );
};

export default About;
