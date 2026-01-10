import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-between items-start gap-3 flex-wrap">
        <div className="flex gap-3 items-center flex-wrap">
          <h1 className="text-[1.75rem] tracking-[0.03em] uppercase">
            {t('header.title', { gameName: 'My Winter Car' })}
          </h1>
          <span className="text-xs uppercase tracking-[0.16em] text-(--accent) py-1 px-2.5 rounded-full border border-[rgba(56,189,248,0.5)] bg-[rgba(15,23,42,0.8)]">
            {t('header.subtitle')}
          </span>
        </div>
        <LanguageSwitcher />
      </div>
      <p className="text-(--text-muted) text-sm max-w-160">
        {t('header.description')}
      </p>
    </header>
  );
}
