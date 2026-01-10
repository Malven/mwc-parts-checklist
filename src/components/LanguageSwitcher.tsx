import { useState, useEffect, useRef } from 'react';
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

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-400/30 bg-[rgba(15,23,42,0.8)] text-(--text-main) text-sm transition-all duration-150 hover:bg-[rgba(15,23,42,0.95)] hover:border-slate-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('languageSwitcher.ariaLabel')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="uppercase tracking-[0.05em]">{currentLanguage.code}</span>
        <span className={`text-[0.7rem] transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-[linear-gradient(135deg,#020617,#020617)] border border-[rgba(148,163,184,0.15)] rounded-lg shadow-lg overflow-hidden z-50 min-w-[140px]">
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-150 ${
                i18n.language === lang.code
                  ? 'bg-[rgba(56,189,248,0.2)] text-(--accent)'
                  : 'text-(--text-main) hover:bg-[rgba(15,23,42,0.8)]'
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {i18n.language === lang.code && (
                <span className="text-(--accent)">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

