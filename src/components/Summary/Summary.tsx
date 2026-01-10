import { Card, Space, Typography } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { createPartId, PART_CATEGORIES } from '../../data/parts';
import { SummaryPart } from '../../types';
import { Metrics } from './Metrics';
import { PartsList } from './PartsList';

const { Text } = Typography;

interface SummaryProps {
  partStates: Record<string, number>;
}

export function Summary({ partStates }: SummaryProps) {
  const { t } = useTranslation();
  const summaryData = useMemo(() => {
    let totalNeeded = 0;
    let totalHave = 0;
    const haveParts: SummaryPart[] = [];
    const missingParts: SummaryPart[] = [];

    PART_CATEGORIES.forEach(category => {
      category.parts.forEach(part => {
        const partQty = part.qty > 0 ? part.qty : 1;
        const partId = createPartId(category.name, part);
        const currentQty = partStates[partId] || 0;

        totalNeeded += partQty;
        totalHave += currentQty;

        if (currentQty > 0) {
          if (partQty > 1) {
            haveParts.push({
              name: part.name,
              have: currentQty,
              needed: partQty,
            });
          } else {
            haveParts.push({ name: part.name, have: 1, needed: 1 });
          }
        } else {
          missingParts.push({
            name: part.name,
            needed: partQty,
          });
        }
      });
    });

    return {
      totalNeeded,
      totalHave,
      totalMissing: totalNeeded - totalHave,
      haveParts,
      missingParts,
    };
  }, [partStates]);

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
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Text
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              display: 'block',
            }}
          >
            {t('summary.title')}
          </Text>
          <Text
            type="secondary"
            style={{
              fontSize: '0.8rem',
              display: 'block',
            }}
          >
            {t('summary.subtitle')}
          </Text>
        </div>

        <section
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          aria-live="polite"
        >
          <Metrics
            totalNeeded={summaryData.totalNeeded}
            totalHave={summaryData.totalHave}
            totalMissing={summaryData.totalMissing}
          />
          <PartsList
            haveParts={summaryData.haveParts}
            missingParts={summaryData.missingParts}
          />
        </section>
      </Space>
    </Card>
  );
}
