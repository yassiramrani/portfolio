import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

interface HeroProps {
  id: string;
}

const Hero = ({ id }: HeroProps) => {
  return (
    <section id={id} className="hero section">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </h2>
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Yassir Amraani
            <br />
            <span className="gradient-text">Software Engineer</span>
          </h1>
          <p className="hero-description animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I'm a 4th-year engineering student passionate about building scalable,
            user-centric web applications and exploring innovative solutions in
            cloud and AI technologies.
          </p>
          <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight className="btn-icon" />
            </a>
            <div className="hero-socials">
              <a href="https://github.com/yassiramrani" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yaamrani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:amraniyassir04@gmail.com" aria-label="Email">
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <img src="/me.jpeg" alt="Yassir Amraani" className="hero-image" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
    </section>
  );
};

export default Hero;
