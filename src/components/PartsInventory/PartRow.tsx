import { Button, Space, Switch, Tag, Typography } from 'antd';
import { type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { createPartId } from '../../data/parts';
import { Part } from '../../types';

const { Text } = Typography;

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

  const getRowStyle = () => {
    if (isMissing) {
      return {
        backgroundColor: 'rgba(248, 113, 113, 0.06)',
        borderColor: 'rgba(248, 113, 113, 0.4)',
      };
    } else if (isHave) {
      return {
        backgroundColor: 'rgba(34, 197, 94, 0.18)',
        borderColor: '#22c55e',
      };
    } else if (isPartial) {
      return {
        backgroundColor: 'rgba(251, 191, 36, 0.12)',
        borderColor: 'rgba(251, 191, 36, 0.4)',
      };
    }
    return {
      backgroundColor: 'rgba(15,23,42,0.8)',
      borderColor: 'transparent',
    };
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: '6px 8px',
        borderRadius: '8px',
        border: '1px solid',
        cursor: partQty === 1 ? 'pointer' : 'default',
        transition: 'all 0.14s',
        ...getRowStyle(),
      }}
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
      <Space size="small" wrap style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: 'rgba(148, 163, 184, 0.7)',
            flexShrink: 0,
          }}
        />
        <Text
          style={{
            fontSize: '14px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {part.name}
        </Text>
        {part.buyLocation !== 'No' && (
          <Tag
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              padding: '2px 6px',
              margin: 0,
              flexShrink: 0,
              fontWeight: 600,
              backgroundColor:
                part.buyLocation.toLowerCase() === 'fleetari'
                  ? 'rgba(59, 130, 246, 0.25)'
                  : 'rgba(168, 85, 247, 0.25)',
              borderColor:
                part.buyLocation.toLowerCase() === 'fleetari'
                  ? 'rgba(59, 130, 246, 0.6)'
                  : 'rgba(168, 85, 247, 0.6)',
              color:
                part.buyLocation.toLowerCase() === 'fleetari'
                  ? '#93c5fd'
                  : '#c4b5fd',
              borderWidth: 1,
              borderStyle: 'solid',
            }}
            data-location={part.buyLocation.toLowerCase()}
          >
            {part.buyLocation}
          </Tag>
        )}
        {part.fasteners && part.fasteners !== '–' && (
          <Tag
            style={{
              fontSize: '11px',
              padding: '2px 6px',
              margin: 0,
              backgroundColor: 'rgba(15,23,42,0.6)',
              borderColor: 'rgba(148, 163, 184, 0.3)',
              color: '#94a3b8',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {part.fasteners}
          </Tag>
        )}
      </Space>

      <Space size="small" style={{ flexShrink: 0 }}>
        {partQty > 1 ? (
          <Space.Compact
            style={{
              backgroundColor: 'rgba(15,23,42,0.6)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: 8,
              padding: 2,
            }}
          >
            <Button
              size="small"
              style={{
                width: 24,
                height: 24,
                minWidth: 24,
                minHeight: 24,
                maxWidth: 24,
                maxHeight: 24,
                padding: 0,
                fontSize: '16px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                borderColor: 'rgba(148, 163, 184, 0.5)',
                color: '#e5e7eb',
              }}
              className="part-counter-button"
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
            </Button>
            <Text
              style={{
                fontSize: '12px',
                fontWeight: 600,
                minWidth: 40,
                textAlign: 'center',
                fontFamily: 'monospace',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {effectiveQty}/{partQty}
            </Text>
            <Button
              size="small"
              style={{
                width: 24,
                height: 24,
                minWidth: 24,
                minHeight: 24,
                maxWidth: 24,
                maxHeight: 24,
                padding: 0,
                fontSize: '16px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                borderColor: 'rgba(148, 163, 184, 0.5)',
                color: '#e5e7eb',
              }}
              className="part-counter-button"
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
            </Button>
          </Space.Compact>
        ) : (
          <span
            onClick={e => e.stopPropagation()}
            onMouseDown={e => e.stopPropagation()}
          >
            <Switch
              checked={effectiveQty > 0}
              onChange={checked => {
                handleQuantityChange(checked ? 1 : 0);
              }}
              aria-label={t('partRow.markAriaLabel', { partName: part.name })}
            />
          </span>
        )}
      </Space>
    </div>
  );
}
