import { FiArrowUp, FiArrowUpRight, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/portfolio';

const Contact = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="section-shell contact-section" aria-labelledby="contact-title">
      <div className="layout-grid contact-layout">
        <div>
          <h2 id="contact-title">{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>
        </div>
        <div className="contact-links">
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<FiArrowUpRight aria-hidden="true" /></a>
          <div>
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href="#cv"><FiFileText aria-hidden="true" /> {t('contact.cv')}</a>
            <a href={`mailto:${profile.email}`}><FiMail aria-hidden="true" /> {t('contact.email')}</a>
          </div>
        </div>
      </div>
      <footer>
        <span>{t('footer', { year: new Date().getFullYear() })}</span>
        <a className="back-to-top" href="#home">{t('nav.backToTop')} <FiArrowUp aria-hidden="true" /></a>
      </footer>
    </section>
  );
};

export default Contact;
