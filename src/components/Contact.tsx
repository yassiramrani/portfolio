import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import './Contact.css';

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <section id={id} className="contact section">
      <div className="container">
        <div className="section-header center">
          <h2 className="section-title">
            Get In <span className="accent">Touch</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <p className="contact-desc">
            I'm currently looking for new opportunities and collaborations. Whether you 
            have a question, a project idea, or just want to say hi, I'll try my best 
            to get back to you!
          </p>

          <a href="mailto:contact@example.com" className="btn btn-primary contact-btn">
            Say Hello
          </a>

          <div className="contact-info">
            <div className="info-item">
              <FiMail className="info-icon" />
              <span>contact@example.com</span>
            </div>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <span>Available Worldwide (Remote)</span>
            </div>
          </div>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer-bottom">
        <p>
          Designed & Built by <span className="accent">Yassir Amraani</span> &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
