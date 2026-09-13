import { useEffect, useRef, useState } from 'react';
import { FiFileText, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/portfolio';
import useResumeAvailability from '../hooks/useResumeAvailability';

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const languageRef = useRef<HTMLDivElement>(null);
  const hasResume = useResumeAvailability();
  const links = ['work', 'experience', 'evidence', 'cv', 'contact'] as const;
  const language = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); setLanguagesOpen(false); }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) setLanguagesOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => { document.removeEventListener('keydown', closeOnEscape); document.removeEventListener('pointerdown', closeOutside); };
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateProgress); };
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const changeLanguage = (next: string) => { i18n.changeLanguage(next); setLanguagesOpen(false); setMenuOpen(false); };
  return (
    <header className="site-header">
      <div className="site-nav">
        <a className="wordmark" href="#home" aria-label={t('nav.home')}><span>{profile.firstName}</span><b>{profile.surname}</b></a>
        <nav id="site-menu" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label={t('nav.primary')}>
          {links.map((link) => <a key={link} className={activeSection === link ? 'active' : ''} href={`#${link}`} onClick={() => setMenuOpen(false)}>{t(`nav.${link}`)}</a>)}
          {hasResume && <a className="nav-resume" href={profile.resumeUrl} download={profile.resumeFileName} onClick={() => setMenuOpen(false)}><FiFileText aria-hidden="true" /> {t('nav.resume')}</a>}
        </nav>
        <div className="nav-actions">
          <div className="language-picker" ref={languageRef}>
            <button type="button" onClick={() => setLanguagesOpen((open) => !open)} aria-expanded={languagesOpen} aria-haspopup="menu" aria-controls="language-menu"><FiGlobe aria-hidden="true" /> {language.toUpperCase()}</button>
            {languagesOpen && <div id="language-menu" role="menu">{['en', 'fr', 'ar'].map((item) => <button type="button" role="menuitem" className={language === item ? 'selected' : ''} onClick={() => changeLanguage(item)} key={item}>{t(`languages.${item}`)}</button>)}</div>}
          </div>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="site-menu" aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}>{menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}</button>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
    </header>
  );
};

export default Navbar;
