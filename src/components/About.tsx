import { FiCode, FiCpu, FiCloudLightning, FiAward } from 'react-icons/fi';
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

          <div className="certifications-section">
            <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
              Licenses & <span className="accent">Certifications</span>
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
