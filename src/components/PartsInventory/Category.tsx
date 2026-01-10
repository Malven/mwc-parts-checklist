import type { CollapseProps } from 'antd';
import { Collapse, Space, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPartId } from '../../data/parts';
import { Category as CategoryType, Part } from '../../types';
import { PartRow } from './PartRow';

const { Text } = Typography;

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

  const collapseItems: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Space>
          <Text
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            {category.name}
          </Text>
          <Text
            style={{
              fontSize: '0.72rem',
              color: '#38bdf8',
              fontWeight: 500,
            }}
          >
            {partCount} {t('category.parts')}
          </Text>
        </Space>
      ),
      children: (
        <Space
          orientation="vertical"
          size="small"
          style={{ width: '100%', marginTop: 6 }}
        >
          {parts}
        </Space>
      ),
      styles: {
        body: {
          padding: '10px 10px 6px',
        },
      },
    },
  ];

  return (
    <Collapse
      activeKey={isCollapsed ? [] : ['1']}
      onChange={() => setIsCollapsed(!isCollapsed)}
      items={collapseItems}
      style={{
        borderRadius: 14,
        borderColor: 'rgba(148, 163, 184, 0.8)',
        background:
          'radial-gradient(circle at top left, rgba(15,23,42,0.9), #020617)',
        marginBottom: 0,
      }}
      ghost
    />
  );
}
