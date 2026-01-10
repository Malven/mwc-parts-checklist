import { useTranslation } from 'react-i18next';
import { FilterType } from '../../types';

interface FilterButtonsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterButtons({
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  const { t } = useTranslation();

  return (
    <div className="inline-flex p-[3px] rounded-full bg-[#020617] border border-[rgba(148,163,184,0.6)] gap-[2px]" aria-label={t('filters.ariaLabel')}>
      <button
        className={`border-none rounded-full py-1 px-[9px] text-xs uppercase tracking-[0.12em] cursor-pointer transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 ${
          activeFilter === 'all' 
            ? 'bg-(--accent-soft) text-(--accent) -translate-y-0.5' 
            : 'bg-transparent text-(--text-muted)'
        }`}
        data-filter="all"
        type="button"
        onClick={() => onFilterChange('all')}
      >
        {t('filters.all')}
      </button>
      <button
        className={`border-none rounded-full py-1 px-[9px] text-xs uppercase tracking-[0.12em] cursor-pointer transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 ${
          activeFilter === 'have' 
            ? 'bg-(--accent-soft) text-(--accent) -translate-y-0.5' 
            : 'bg-transparent text-(--text-muted)'
        }`}
        data-filter="have"
        type="button"
        onClick={() => onFilterChange('have')}
      >
        {t('filters.have')}
      </button>
      <button
        className={`border-none rounded-full py-1 px-[9px] text-xs uppercase tracking-[0.12em] cursor-pointer transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 ${
          activeFilter === 'missing' 
            ? 'bg-(--accent-soft) text-(--accent) -translate-y-0.5' 
            : 'bg-transparent text-(--text-muted)'
        }`}
        data-filter="missing"
        type="button"
        onClick={() => onFilterChange('missing')}
      >
        {t('filters.missing')}
      </button>
    </div>
  );
}
