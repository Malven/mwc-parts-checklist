import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { createPartId, PART_CATEGORIES } from '../../data/parts';
import { SummaryPart } from '../../types';
import { Metrics } from './Metrics';
import { PartsList } from './PartsList';

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
    <div className="card">
      <div className="flex flex-col gap-xl" style={{ width: '100%' }}>
        <div className="summary-header">
          <h2 className="heading-2" style={{ margin: 0, marginBottom: 6 }}>
            {t('summary.title')}
          </h2>
          <p
            className="text-secondary"
            style={{ display: 'block', fontSize: '0.875rem' }}
          >
            {t('summary.subtitle')}
          </p>
        </div>

        <section
          className="flex flex-col"
          style={{ gap: 20 }}
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
      </div>
    </div>
  );
}
