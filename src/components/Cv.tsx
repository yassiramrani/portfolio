import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import {
  certificationIds,
  cvAwardItems,
  cvEducation,
  cvLanguages,
  cvRecordItems,
  cvSoftSkills,
  cvToolbox,
  profile,
} from '../data/portfolio';
import useResumeAvailability from '../hooks/useResumeAvailability';

const Cv = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  const hasResume = useResumeAvailability();

  return (
    <section id={id} className="section-shell cv-section" aria-labelledby="cv-title">
      <div className="layout-grid">
        <header className="section-intro">
          <h2 id="cv-title">{t('cv.title')}</h2>
          <p>{t('cv.intro')}</p>
        </header>

        <div className="cv-actions">
          {hasResume ? (
            <a className="button button-primary" href={profile.resumeUrl} download={profile.resumeFileName}>
              <FiDownload aria-hidden="true" /> {t('cv.download')}
            </a>
          ) : (
            <p className="resume-pending" role="status">{t('cv.downloadPending')}</p>
          )}
        </div>

        <article className="cv-document" aria-label={t('cv.documentLabel')}>
          <header className="cv-masthead">
            <div className="cv-identity">
              <h3>{profile.name}</h3>
              <p className="cv-role">{t('cv.role')}</p>
            </div>
            <ul className="cv-contact">
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a href={profile.phoneHref}>{profile.phone}</a></li>
              <li><span>{t('cv.location')}</span></li>
              <li>
                <a href={profile.portfolio} target="_blank" rel="noreferrer">
                  {profile.portfolioHandle} <FiArrowUpRight aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedinHandle} <FiArrowUpRight aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.githubHandle} <FiArrowUpRight aria-hidden="true" />
                </a>
              </li>
            </ul>
          </header>

          <section className="cv-block" aria-labelledby="cv-profile-title">
            <h4 id="cv-profile-title">{t('cv.profileTitle')}</h4>
            <p className="cv-summary">{t('cv.summary')}</p>
          </section>

          <section className="cv-block" aria-labelledby="cv-skills-title">
            <h4 id="cv-skills-title">{t('cv.skillsTitle')}</h4>
            <dl className="cv-toolbox">
              {cvToolbox.map((group) => (
                <div key={group.id}>
                  <dt>{t(`cv.toolbox.${group.id}`)}</dt>
                  <dd>{group.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="cv-columns">
            <div className="cv-column">
              <section className="cv-block" aria-labelledby="cv-experience-title">
                <h4 id="cv-experience-title">{t('cv.experienceTitle')}</h4>
                <ol className="cv-record">
                  {cvRecordItems.map((item) => (
                    <li key={item.id}>
                      <div className="cv-record-head">
                        <h5>{t(`experience.items.${item.id}.title`)}</h5>
                        <span className="cv-record-kind">{t(`experience.kinds.${item.kind}`)}</span>
                      </div>
                      <p className="cv-record-org">{t(`experience.items.${item.id}.organization`)}</p>
                      <time>{item.period}</time>
                      <p>{t(`experience.items.${item.id}.description`)}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="cv-block" aria-labelledby="cv-education-title">
                <h4 id="cv-education-title">{t('cv.educationTitle')}</h4>
                <ul className="cv-plain-list">
                  {cvEducation.map((item) => (
                    <li key={item}>
                      <strong>{t(`cv.education.items.${item}.title`)}</strong>
                      <span>{t(`cv.education.items.${item}.organization`)}</span>
                      <em>{t(`cv.education.items.${item}.period`)}</em>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="cv-column">
              <section className="cv-block" aria-labelledby="cv-awards-title">
                <h4 id="cv-awards-title">{t('cv.awardsTitle')}</h4>
                <ul className="cv-plain-list">
                  {cvAwardItems.map((item) => (
                    <li key={item.id}>
                      <strong>{t(`experience.items.${item.id}.title`)}</strong>
                      <span>{t(`experience.items.${item.id}.organization`)}</span>
                      <em>{item.period}</em>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="cv-block" aria-labelledby="cv-certifications-title">
                <h4 id="cv-certifications-title">{t('cv.certificationsTitle')}</h4>
                <ul className="cv-plain-list">
                  {certificationIds.map((item) => (
                    <li key={item}>
                      <strong>{t(`evidence.certifications.${item}.title`)}</strong>
                      <span>{t(`evidence.certifications.${item}.issuer`)}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="cv-block" aria-labelledby="cv-languages-title">
                <h4 id="cv-languages-title">{t('cv.languagesTitle')}</h4>
                <ul className="cv-language-list">
                  {cvLanguages.map((item) => (
                    <li key={item.id}>
                      <span>{t(`cv.languages.${item.id}`)}</span>
                      <span className="cv-language-level">{t(`cv.languageLevels.${item.level}`)}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="cv-block" aria-labelledby="cv-soft-skills-title">
                <h4 id="cv-soft-skills-title">{t('cv.softSkillsTitle')}</h4>
                <ul className="cv-tag-list">
                  {cvSoftSkills.map((item) => (
                    <li key={item}>{t(`cv.softSkills.${item}`)}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <footer className="cv-footnote">
            <span>{t('cv.footnote')}</span>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default Cv;
