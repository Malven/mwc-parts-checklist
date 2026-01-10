import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PART_CATEGORIES } from '../../data/parts';
import { FilterType } from '../../types';
import { Category } from './Category';
import { FilterButtons } from './FilterButtons';
import { SearchInput } from './SearchInput';

const { Text } = Typography;

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
    <Card
      style={{
        borderRadius: 18,
        borderColor: 'rgba(148,163,184,0.15)',
        boxShadow:
          '0 24px 60px rgba(15,23,42,0.8), 0 0 0 1px rgba(15,23,42,0.9)',
        backdropFilter: 'blur(12px)',
      }}
      styles={{ body: { padding: '18px 18px 16px' } }}
    >
      <Row gutter={[24, 16]}>
        <Col span={24}>
          <Row justify="space-between" align="middle" gutter={10}>
            <Col flex="auto">
              <Text
                style={{
                  fontSize: '0.95rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#94a3b8',
                  display: 'block',
                }}
              >
                {t('partsInventory.title')}
              </Text>
              <Text
                type="secondary"
                style={{
                  fontSize: '0.8rem',
                  display: 'block',
                }}
              >
                {t('partsInventory.subtitle')}
              </Text>
            </Col>
            <Col flex="none">
              <Space>
                <FilterButtons
                  activeFilter={filter}
                  onFilterChange={setFilter}
                />
                <Button
                  id="reset-all"
                  danger
                  size="small"
                  style={{
                    borderRadius: '999px',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    height: 'auto',
                    padding: '7px 10px',
                    lineHeight: '1.2',
                  }}
                  title={t('partsInventory.resetTooltip')}
                  onClick={onResetClick}
                >
                  {t('partsInventory.reset')}
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </Col>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              maxHeight: '60vh',
              overflow: 'auto',
              paddingRight: 4,
            }}
            className="scrollbar-custom"
            aria-label={t('partsInventory.ariaLabel')}
          >
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
        </Col>
      </Row>
    </Card>
  );
}
