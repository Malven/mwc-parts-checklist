import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPartId } from '../../data/parts';
import { Category as CategoryType, Part } from '../../types';
import { PartRow } from './PartRow';

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

  const parts = category.parts.map(part => {
    const partId = createPartId(category.name, part);
    const currentQty = partStates[partId] || 0;
    const matchesFilter = partMatchesFilter(part, partId, currentQty, filter);
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
  });

  return (
    <div className={`accordion-item ${!isCollapsed ? 'active' : ''}`}>
      <button
        className="accordion-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={!isCollapsed}
        type="button"
      >
        <div className="flex gap-md items-center flex-wrap">
          <span
            className="text-uppercase"
            style={{
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
            }}
          >
            {category.name}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-primary)',
              fontWeight: 500,
            }}
          >
            {partCount} {t('category.parts')}
          </span>
        </div>
        <span className="accordion-icon" aria-hidden="true">
          ▼
        </span>
      </button>
      <div className="accordion-content">
        <div className="accordion-body">
          <div className="flex flex-col gap-sm" style={{ width: '100%' }}>
            {parts}
          </div>
        </div>
      </div>
    </div>
  );
}
