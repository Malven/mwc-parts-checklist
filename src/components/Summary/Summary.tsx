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
    <aside className="bg-[linear-gradient(135deg,#020617,#020617)] rounded-[18px] border border-[rgba(148,163,184,0.15)] shadow-[0_24px_60px_rgba(15,23,42,0.8),0_0_0_1px_rgba(15,23,42,0.9)] p-[18px_18px_16px] backdrop-blur-md">
      <div className="flex justify-between items-center gap-2.5 mb-3">
        <div>
          <h2 className="text-[0.95rem] tracking-[0.16em] uppercase text-(--text-muted)">
            {t('summary.title')}
          </h2>
          <div className="text-[0.8rem] text-(--text-muted)">
            {t('summary.subtitle')}
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-2" aria-live="polite">
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
    </aside>
  );
}
