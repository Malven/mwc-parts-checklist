import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Category as CategoryType, Part } from '../../types';
import { PartRow } from './PartRow';
import { createPartId } from '../../data/parts';

interface CategoryProps {
  category: CategoryType;
  partStates: Record<string, number>;
  onQuantityChange: (partId: string, quantity: number) => void;
  filter: 'all' | 'have' | 'missing';
  searchQuery: string;
}

function partMatchesFilter(
  _part: Part,
  _partId: string,
  currentQty: number,
  filter: 'all' | 'have' | 'missing'
): boolean {
  if (filter === 'all') return true;
  const isHave = currentQty > 0;
  if (filter === 'have') return isHave;
  return !isHave;
}

function partMatchesSearch(partName: string, searchQuery: string): boolean {
  if (!searchQuery) return true;
  return partName.toLowerCase().includes(searchQuery.toLowerCase());
}

export function Category({
  category,
  partStates,
  onQuantityChange,
  filter,
  searchQuery,
}: CategoryProps) {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const partCount = category.parts.length;

  return (
    <section className="rounded-[14px] border border-slate-700/80 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.9),#020617)] p-[10px_10px_6px]">
      <button
        type="button"
        className="flex justify-between items-center gap-2 cursor-pointer py-2 px-2.5 rounded-lg bg-[rgba(15,23,42,0.4)] border border-slate-400/10 transition-all duration-200 hover:bg-[rgba(15,23,42,0.6)] hover:border-slate-400/20"
        aria-expanded={!isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center gap-2">
          <div className="text-[0.78rem] tracking-[0.18em] uppercase text-(--text-main) font-medium">{category.name}</div>
          <div className="text-[0.72rem] text-(--accent) font-medium">{partCount} {t('category.parts')}</div>
        </div>
        <div className={`w-[18px] h-[18px] rounded-full border border-slate-400/60 flex items-center justify-center text-[0.7rem] text-(--text-muted) shrink-0 transition-transform duration-150 ${isCollapsed ? '-rotate-90' : ''}`}>▾</div>
      </button>

      {!isCollapsed && (
        <div className="mt-1.5 flex flex-col gap-1">
          {category.parts.map(part => {
            const partId = createPartId(category.name, part);
            const currentQty = partStates[partId] || 0;
            const matchesFilter = partMatchesFilter(
              part,
              partId,
              currentQty,
              filter
            );
            const matchesSearch = partMatchesSearch(part.name, searchQuery);
            const isVisible = matchesFilter && matchesSearch;

            return (
              <PartRow
                key={partId}
                part={part}
                categoryName={category.name}
                currentQuantity={currentQty}
                onQuantityChange={onQuantityChange}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
