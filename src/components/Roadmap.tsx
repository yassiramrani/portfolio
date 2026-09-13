import { useTranslation } from 'react-i18next';
import { experienceItems } from '../data/portfolio';

const Roadmap = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="section-shell experience-section" aria-labelledby="experience-title">
      <div className="layout-grid">
        <header className="section-intro"><h2 id="experience-title">{t('experience.title')}</h2><p>{t('experience.intro')}</p></header>
        <ol className="experience-ledger">
          {experienceItems.map((item, index) => (
            <li key={item.id}>
              <div className="ledger-meta">
                <span className="record-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <time>{item.period}</time>
              </div>
              <div><p className="record-kind">{t(`experience.kinds.${item.kind}`)}</p><h3>{t(`experience.items.${item.id}.title`)}</h3><p className="record-organization">{t(`experience.items.${item.id}.organization`)}</p><p>{t(`experience.items.${item.id}.description`)}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Roadmap;
