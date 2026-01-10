import { useTranslation } from 'react-i18next';
import { SummaryPart } from '../../types';

interface PartsListProps {
  haveParts: SummaryPart[];
  missingParts: SummaryPart[];
}

export function PartsList({ haveParts, missingParts }: PartsListProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-2.5 mt-2.5 max-[700px]:grid-cols-1">
      <div className="rounded-xl py-2 px-2.5 pb-1.5 bg-[rgba(15,23,42,0.9)] border border-slate-700/90 flex flex-col gap-1">
        <div className="flex justify-between items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-(--text-muted) whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-(--badge-have) shrink-0"></span>
            {t('partsList.haveTitle')}
          </span>
        </div>
        <div className="text-xs text-(--text-muted)">
          {haveParts.length === 1
            ? `1 ${t('partsList.item')}`
            : `${haveParts.length} ${t('partsList.items')}`}
        </div>
        <div className="text-sm text-(--text-main) max-h-42.5 overflow-y-auto overflow-x-hidden pr-0.5 scrollbar-custom">
          {haveParts.length === 0 ? (
            <div className="text-[0.78rem] text-(--text-muted) italic">
              {t('partsList.noPartsSelected')}
            </div>
          ) : (
            haveParts
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((part, index) => (
                <div
                  key={`have-${part.name}-${index}`}
                  className="flex items-center gap-1.5 py-0.5"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-400/70 shrink-0"></div>
                  <div>
                    {part.needed > 1
                      ? `${part.name} (${part.have}/${part.needed})`
                      : part.name}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>

      <div className="rounded-xl py-2 px-2.5 pb-1.5 bg-[rgba(15,23,42,0.9)] border border-slate-700/90 flex flex-col gap-1">
        <div className="flex justify-between items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-(--text-muted) whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-(--badge-missing) shrink-0"></span>
            {t('partsList.missingTitle')}
          </span>
        </div>
        <div className="text-xs text-(--text-muted)">
          {missingParts.length === 1
            ? `1 ${t('partsList.item')}`
            : `${missingParts.length} ${t('partsList.items')}`}
        </div>
        <div className="text-sm text-(--text-main) max-h-42.5 overflow-y-auto overflow-x-hidden pr-0.5 scrollbar-custom">
          {missingParts.length === 0 ? (
            <div className="text-[0.78rem] text-(--text-muted) italic">
              {t('partsList.noPartsMissing')}
            </div>
          ) : (
            missingParts
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((part, index) => (
                <div
                  key={`missing-${part.name}-${index}`}
                  className="flex items-center gap-1.5 py-0.5"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-400/70 shrink-0"></div>
                  <div>
                    {part.needed > 1
                      ? `${part.name} (0/${part.needed})`
                      : part.name}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
