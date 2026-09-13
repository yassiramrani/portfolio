import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import About from './components/About';
import Cv from './components/Cv';
import Contact from './components/Contact';
import './index.css';

const sections = ['home', 'work', 'experience', 'evidence', 'cv', 'contact'];

function App() {
  const { i18n, t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const language = i18n.resolvedLanguage ?? i18n.language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-34% 0px -58% 0px', threshold: 0 });
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <a className="skip-link" href="#main-content">{t('nav.skip')}</a>
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero id="home" />
        <Projects id="work" />
        <Roadmap id="experience" />
        <About id="evidence" />
        <Cv id="cv" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;
