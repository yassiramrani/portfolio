import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Contact.css';

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="contact section">
      <div className="container">
        <div className="section-header center">
          <h2 className="section-title">
            {t('contact.title')} <span className="accent">{t('contact.subtitle')}</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <p className="contact-desc">
            {t('contact.description')}
          </p>

          <a href="mailto:amraniyassir04@gmail.com" className="btn btn-primary contact-btn">
            {t('contact.button')}
          </a>

          <div className="contact-info">
            <div className="info-item">
              <FiMail className="info-icon" />
              <span>amraniyassir04@gmail.com</span>
            </div>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <span>Available Worldwide (Remote)</span>
            </div>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/yassiramrani" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yaamrani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
