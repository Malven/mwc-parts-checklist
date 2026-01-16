import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
] as const;

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-ghost btn-small"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('languageSwitcher.ariaLabel')}
        aria-expanded={isOpen}
      >
        <span style={{ fontSize: '18px' }}>{currentLanguage.flag}</span>
        <span className="text-uppercase" style={{ letterSpacing: '0.05em' }}>
          {currentLanguage.code}
        </span>
        <span style={{ fontSize: '11px' }}>▾</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {languages.map(lang => (
            <div
              key={lang.code}
              className={`dropdown-item ${i18n.language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span style={{ fontSize: '18px' }}>{lang.flag}</span>
              <span style={{ flex: 1 }}>{lang.name}</span>
              {i18n.language === lang.code && (
                <span style={{ color: 'var(--color-primary)' }}>✓</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
