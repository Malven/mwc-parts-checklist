import { useTranslation } from 'react-i18next';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const { t } = useTranslation();

  return (
    <div className="mb-3">
      <input
        type="text"
        className="w-full py-2 px-3 rounded-lg border border-slate-400/30 bg-[rgba(15,23,42,0.8)] text-(--text-main) text-sm transition-all duration-150 focus:outline-none focus:border-(--accent) focus:bg-[rgba(15,23,42,0.95)] placeholder:text-(--text-muted)"
        placeholder={t('search.placeholder')}
        aria-label={t('search.ariaLabel')}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
