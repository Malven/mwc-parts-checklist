import { type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { createPartId } from '../../data/parts';
import { Part } from '../../types';

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

  const getRowClass = () => {
    if (isMissing) return 'part-row part-row-missing';
    if (isHave) return 'part-row part-row-have';
    if (isPartial) return 'part-row part-row-partial';
    return 'part-row part-row-default';
  };

  return (
    <div
      className={`${getRowClass()} ${partQty === 1 ? 'part-row-clickable' : ''}`}
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
      <div className="flex gap-sm flex-wrap" style={{ flex: 1, minWidth: 0 }}>
        <span
          className="text-primary"
          style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {part.name}
        </span>
        {part.buyLocation !== 'No' && (
          <span
            className={`tag ${
              part.buyLocation.toLowerCase() === 'fleetari'
                ? 'tag-fleetari'
                : 'tag-junkyard'
            }`}
            data-location={part.buyLocation.toLowerCase()}
          >
            {part.buyLocation}
          </span>
        )}
        {part.fasteners && part.fasteners !== '–' && (
          <span className="tag tag-fastener">{part.fasteners}</span>
        )}
      </div>

      <div className="flex gap-sm" style={{ flexShrink: 0 }}>
        {partQty > 1 ? (
          <div className="part-counter">
            <button
              className="btn btn-icon part-counter-button"
              aria-label={t('partRow.decrementAriaLabel', {
                partName: part.name,
              })}
              disabled={effectiveQty <= 0}
              onClick={e => {
                e.stopPropagation();
                handleQuantityChange(effectiveQty - 1);
              }}
            >
              −
            </button>
            <span className="part-counter-value">
              {effectiveQty}/{partQty}
            </span>
            <button
              className="btn btn-icon part-counter-button"
              aria-label={t('partRow.incrementAriaLabel', {
                partName: part.name,
              })}
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
          <label
            className="switch"
            onClick={e => e.stopPropagation()}
            onMouseDown={e => e.stopPropagation()}
          >
            <input
              type="checkbox"
              checked={effectiveQty > 0}
              onChange={e => {
                handleQuantityChange(e.target.checked ? 1 : 0);
              }}
              aria-label={t('partRow.markAriaLabel', { partName: part.name })}
            />
            <span className="switch-slider" />
          </label>
        )}
      </div>
    </div>
  );
}
