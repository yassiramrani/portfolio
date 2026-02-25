import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.roadmap'), href: '#roadmap' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <img src="/me.jpeg" alt="Yassir" className="navbar-profile-pic" />
            <span>Yassir<span className="accent">.dev</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="lang-switcher">
            <button 
              className="lang-btn" 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Change Language"
            >
              <FiGlobe size={20} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            {isLangMenuOpen && (
              <div className="lang-menu">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('fr')}>Français</button>
                <button onClick={() => changeLanguage('ar')}>العربية</button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="mobile-lang-options">
          <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
          <button className={i18n.language === 'fr' ? 'active' : ''} onClick={() => changeLanguage('fr')}>FR</button>
          <button className={i18n.language === 'ar' ? 'active' : ''} onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
