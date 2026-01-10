import { useTranslation } from 'react-i18next';
import { Segmented } from 'antd';
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
    <Segmented
      options={options}
      value={activeFilter}
      onChange={value => onFilterChange(value as FilterType)}
      size="small"
      style={{
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        backgroundColor: '#020617',
        borderColor: 'rgba(148,163,184,0.6)',
      }}
      aria-label={t('filters.ariaLabel')}
    />
  );
}
