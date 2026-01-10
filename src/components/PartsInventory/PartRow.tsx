import { type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Part } from '../../types';
import { createPartId } from '../../data/parts';

interface PartRowProps {
  part: Part;
  categoryName: string;
  currentQuantity: number;
  onQuantityChange: (partId: string, quantity: number) => void;
  isVisible: boolean;
}

export function PartRow({
  part,
  categoryName,
  currentQuantity,
  onQuantityChange,
  isVisible,
}: PartRowProps) {
  const { t } = useTranslation();
  const partId = createPartId(categoryName, part);
  const partQty = part.qty > 0 ? part.qty : 1;
  const effectiveQty = Math.max(0, Math.min(partQty, currentQuantity));

  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(partId, newQuantity);
  };

  const handleRowClick = () => {
    if (partQty === 1) {
      const newState = effectiveQty === 0 ? 1 : 0;
      handleQuantityChange(newState);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (partQty === 1 && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleRowClick();
    }
  };

  if (!isVisible) {
    return null;
  }

  const isMissing = effectiveQty === 0;
  const isHave = effectiveQty === partQty;
  const isPartial = !isMissing && !isHave;

  return (
    <div
      className={`flex items-center justify-between gap-2 py-1.5 px-2 rounded-full border transition-all duration-140 cursor-pointer hover:translate-x-0.5 ${
        isMissing
          ? 'bg-(--missing-bg) border-(--missing-border)'
          : isHave
            ? 'bg-(--have-bg) border-(--have-border)'
            : isPartial
              ? 'bg-[rgba(251,191,36,0.12)] border-[rgba(251,191,36,0.4)]'
              : 'bg-[rgba(15,23,42,0.8)] border-transparent'
      }`}
      data-part-id={partId}
      data-part-qty={partQty}
      tabIndex={partQty === 1 ? 0 : undefined}
      role={partQty === 1 ? 'button' : undefined}
      aria-label={
        partQty === 1
          ? t('partRow.toggleAriaLabel', { partName: part.name })
          : undefined
      }
      onClick={partQty === 1 ? handleRowClick : undefined}
      onKeyDown={partQty === 1 ? handleKeyDown : undefined}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0 text-sm flex-wrap">
        <div className="w-[7px] h-[7px] rounded-full bg-slate-400/70 shrink-0"></div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden">{part.name}</div>
        {part.buyLocation !== 'No' && (
          <span
            className={`text-[0.65rem] uppercase tracking-[0.12em] py-0.5 px-1.5 rounded font-semibold shrink-0 ${
              part.buyLocation.toLowerCase() === 'fleetari'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                : 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
            }`}
            data-location={part.buyLocation.toLowerCase()}
          >
            {part.buyLocation}
          </span>
        )}
        {part.fasteners && part.fasteners !== '–' && (
          <span className="text-[0.7rem] text-(--text-muted) py-0.5 px-1.5 rounded bg-[rgba(15,23,42,0.6)] border border-slate-400/30 whitespace-nowrap shrink-0 font-mono">{part.fasteners}</span>
        )}
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {partQty > 1 ? (
          <div className="flex items-center gap-1.5 bg-[rgba(15,23,42,0.6)] border border-slate-400/30 rounded-lg p-0.5">
            <button
              type="button"
              className="w-6 h-6 rounded-md border border-slate-400/50 bg-[rgba(15,23,42,0.8)] text-(--text-main) text-base font-semibold cursor-pointer flex items-center justify-center transition-all duration-150 shrink-0 hover:bg-[rgba(56,189,248,0.2)] hover:border-(--accent) hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[rgba(15,23,42,0.8)] disabled:hover:border-slate-400/50 disabled:hover:scale-100"
              aria-label={t('partRow.decrementAriaLabel', { partName: part.name })}
              disabled={effectiveQty <= 0}
              onClick={e => {
                e.stopPropagation();
                handleQuantityChange(effectiveQty - 1);
              }}
            >
              −
            </button>
            <span className="text-xs font-semibold text-(--text-main) min-w-[40px] text-center font-mono">
              {effectiveQty}/{partQty}
            </span>
            <button
              type="button"
              className="w-6 h-6 rounded-md border border-slate-400/50 bg-[rgba(15,23,42,0.8)] text-(--text-main) text-base font-semibold cursor-pointer flex items-center justify-center transition-all duration-150 shrink-0 hover:bg-[rgba(56,189,248,0.2)] hover:border-(--accent) hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[rgba(15,23,42,0.8)] disabled:hover:border-slate-400/50 disabled:hover:scale-100"
              aria-label={t('partRow.incrementAriaLabel', { partName: part.name })}
              disabled={effectiveQty >= partQty}
              onClick={e => {
                e.stopPropagation();
                handleQuantityChange(effectiveQty + 1);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <span className="text-[0.72rem] text-(--text-muted) uppercase tracking-[0.16em]">{t('partRow.have')}</span>
            <button
              type="button"
              className={`relative w-9 h-5 rounded-full border cursor-pointer shrink-0 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 ${
                effectiveQty > 0
                  ? 'bg-[rgba(34,197,94,0.2)] border-(--have-border)'
                  : 'bg-(--card) border-slate-400/70'
              }`}
              role="switch"
              aria-checked={effectiveQty > 0}
              data-state={effectiveQty > 0 ? 'on' : 'off'}
              aria-label={t('partRow.markAriaLabel', { partName: part.name })}
              onClick={e => {
                e.stopPropagation();
                handleQuantityChange(effectiveQty === 0 ? 1 : 0);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleQuantityChange(effectiveQty === 0 ? 1 : 0);
                }
              }}
            >
              <div className={`absolute top-[1px] left-[1px] w-4 h-4 rounded-full shadow-[0_1px_2px_rgba(15,23,42,0.6)] transition-transform duration-150 ${
                effectiveQty > 0
                  ? 'translate-x-[14px] bg-green-200'
                  : 'bg-gray-200'
              }`}></div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
