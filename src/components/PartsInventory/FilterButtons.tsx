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

  const options = [
    { label: t('filters.all'), value: 'all' },
    { label: t('filters.have'), value: 'have' },
    { label: t('filters.missing'), value: 'missing' },
  ];

  return (
    <div className="segmented" role="group" aria-label={t('filters.ariaLabel')}>
      {options.map(option => (
        <button
          key={option.value}
          className={`segmented-item ${activeFilter === option.value ? 'active' : ''}`}
          onClick={() => onFilterChange(option.value as FilterType)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
