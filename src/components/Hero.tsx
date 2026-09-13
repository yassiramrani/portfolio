import { FiArrowDownRight, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/portfolio';

const Hero = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="hero section-shell" aria-labelledby="hero-title">
      <div className="layout-grid hero-grid">
        <div className="hero-copy">
          <p className="availability">{t('hero.availability')}</p>
          <h1 id="hero-title">{profile.name}<span>{t('hero.role')}</span></h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">{t('hero.workCta')} <FiArrowDownRight aria-hidden="true" /></a>
            <a className="button button-secondary" href="#cv"><FiFileText aria-hidden="true" /> {t('hero.cvCta')}</a>
          </div>
          <div className="contact-strip" aria-label={t('hero.socialLabel')}>
            <a href={`mailto:${profile.email}`} aria-label={t('hero.emailLabel')}><FiMail aria-hidden="true" /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label={t('hero.githubLabel')}><FiGithub aria-hidden="true" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={t('hero.linkedinLabel')}><FiLinkedin aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="portrait-plate"><img src="/me.jpeg" alt={t('hero.portraitAlt')} /><figcaption>{t('hero.portraitCaption')}</figcaption></figure>
      </div>
    </section>
  );
};

export default Hero;
