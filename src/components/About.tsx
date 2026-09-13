import { useTranslation } from 'react-i18next';
import { certificationIds, strengthIds } from '../data/portfolio';

const About = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  const strengths = [...strengthIds];
  const certifications = [...certificationIds];
  return <section id={id} className="section-shell evidence-section" aria-labelledby="evidence-title"><div className="layout-grid"><header className="section-intro"><h2 id="evidence-title">{t('evidence.title')}</h2><p>{t('evidence.intro')}</p></header><div className="evidence-columns"><section aria-labelledby="strengths-title"><h3 id="strengths-title">{t('evidence.strengthsTitle')}</h3><ul className="strength-list">{strengths.map((item) => <li key={item}><strong>{t(`evidence.strengths.${item}.title`)}</strong><span>{t(`evidence.strengths.${item}.description`)}</span></li>)}</ul></section><section aria-labelledby="certifications-title"><h3 id="certifications-title">{t('evidence.certificationsTitle')}</h3><ul className="certification-list">{certifications.map((item) => <li key={item}><strong>{t(`evidence.certifications.${item}.title`)}</strong><span>{t(`evidence.certifications.${item}.issuer`)}</span></li>)}</ul></section></div></div></section>;
};

export default About;
