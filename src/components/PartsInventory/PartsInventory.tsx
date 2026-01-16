import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PART_CATEGORIES } from '../../data/parts';
import { FilterType } from '../../types';
import { Category } from './Category';
import { FilterButtons } from './FilterButtons';
import { SearchInput } from './SearchInput';

interface PartsInventoryProps {
  partStates: Record<string, number>;
  onQuantityChange: (partId: string, quantity: number) => void;
  onResetClick: () => void;
}

export function PartsInventory({
  partStates,
  onQuantityChange,
  onResetClick,
}: PartsInventoryProps) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="card">
      <div className="flex flex-col gap-xl" style={{ width: '100%' }}>
        <div className="flex justify-between items-start gap-md flex-wrap">
          <div className="summary-header">
            <h2 className="heading-2" style={{ margin: 0, marginBottom: 6 }}>
              {t('partsInventory.title')}
            </h2>
            <p
              className="text-secondary"
              style={{ display: 'block', fontSize: '0.875rem' }}
            >
              {t('partsInventory.subtitle')}
            </p>
          </div>
          <div className="flex gap-md items-center">
            <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
            <button
              id="reset-all"
              className="btn btn-danger btn-small text-uppercase-sm"
              title={t('partsInventory.resetTooltip')}
              onClick={onResetClick}
            >
              {t('partsInventory.reset')}
            </button>
          </div>
        </div>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <div
          className="flex flex-col scrollbar-custom"
          style={{
            gap: 12,
            maxHeight: '100vh',
            overflow: 'auto',
            paddingRight: 4,
          }}
          aria-label={t('partsInventory.ariaLabel')}
        >
          <div className="accordion">
            {PART_CATEGORIES.map(category => (
              <Category
                key={category.name}
                category={category}
                partStates={partStates}
                onQuantityChange={onQuantityChange}
                filter={filter}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
