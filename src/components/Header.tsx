import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <div className="flex flex-col gap-sm w-full">
        <div className="flex justify-between items-start gap-md flex-wrap">
          <div className="flex gap-lg flex-wrap">
            <h1 className="heading-1 mt-0 mb-0">
              {t('header.title', { gameName: 'My Winter Car' })}
            </h1>
            <span className="tag tag-primary">{t('header.subtitle')}</span>
          </div>
          <LanguageSwitcher />
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
          >
            {t('header.partsInventory')}
          </Link>
          {/* <Link
            to="/build"
            className={`nav-link ${isActive('/build') ? 'nav-link-active' : ''}`}
          >
            {t('header.buildCar')}
          </Link> */}
        </nav>
        <p
          className="text-secondary"
          style={{ maxWidth: '640px', display: 'block' }}
        >
          {t('header.description')}
        </p>
      </div>
    </header>
  );
}
