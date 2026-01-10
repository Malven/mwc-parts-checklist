import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterType } from '../../types';
import { PART_CATEGORIES } from '../../data/parts';
import { FilterButtons } from './FilterButtons';
import { SearchInput } from './SearchInput';
import { Category } from './Category';

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
    <section className="bg-[linear-gradient(135deg,#020617,#020617)] rounded-[18px] border border-[rgba(148,163,184,0.15)] shadow-[0_24px_60px_rgba(15,23,42,0.8),0_0_0_1px_rgba(15,23,42,0.9)] p-[18px_18px_16px] backdrop-blur-md">
      <div className="flex justify-between items-center gap-2.5 mb-3">
        <div>
          <h2 className="text-[0.95rem] tracking-[0.16em] uppercase text-(--text-muted)">{t('partsInventory.title')}</h2>
          <div className="text-[0.8rem] text-(--text-muted)">
            {t('partsInventory.subtitle')}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
          <button
            id="reset-all"
            className="rounded-full border border-red-400/60 bg-[rgba(15,23,42,0.8)] text-red-200 text-xs uppercase tracking-[0.16em] py-[7px] px-2.5 cursor-pointer transition-all duration-150 h-fit leading-[1.2] hover:bg-red-900/50 hover:border-red-400/90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2"
            type="button"
            title={t('partsInventory.resetTooltip')}
            onClick={onResetClick}
          >
            {t('partsInventory.reset')}
          </button>
        </div>
      </div>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <div className="flex flex-col gap-3 max-h-[70vh] overflow-auto pr-1 scrollbar-custom" aria-label={t('partsInventory.ariaLabel')}>
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
    </section>
  );
}
